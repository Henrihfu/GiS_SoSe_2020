namespace namespace07 {

    // Div für die elemente Alleslöschbutten und insgesamtKosten 
    let nDiv: HTMLDivElement = document.createElement("div");
    let np: HTMLElement = document.createElement("p");
    nDiv.id = "warenkorbinhalt";
    document.getElementById("mainwarenkorb")?.appendChild(nDiv);

    // anzeige fur den warenkorb wenn er auch produkte vorhanden sind andernfals im catch
    if (localStorage.setSumme) {
        np.innerHTML = " der Einkaufswert beträgt " + localStorage.setSumme + "Euro";
        nDiv.appendChild(np);
    }


    korbGenerierern();

    async function korbGenerierern(): Promise<void> {
        // Error abfangen des Errors der enntseht wenn keine wahren im wahrenkorb sind 
        try {

            // warten bis json neu geladen hat 
            await communicate("save.json");
            //gespeicherte waren abrufen 
            let stringWare: string = localStorage.gekauft;
            // den sting in ein array umwandekn 
            let arrayWare: string[] = stringWare.split(",");

            let warenDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("mainwarenkorb")?.appendChild(warenDiv);

            for (let index: number = 0; index < arrayWare.length; index++) {

                // Estellen von Div Elementen 
                let wDiv: HTMLDivElement = document.createElement("div");
                // Div id zuweisen
                wDiv.id = "ware" + arrayWare[index];
                warenDiv.appendChild(wDiv);


                // Bild hinzufügen
                let wimg: HTMLImageElement = document.createElement("img");
                wimg.src = artikel[parseInt(arrayWare[index])].bild;
                wDiv.appendChild(wimg);

                // Name hinzugefügt 
                let newH: HTMLElement = document.createElement("h2");
                newH.innerHTML = artikel[parseInt(arrayWare[index])].name;
                wDiv.appendChild(newH);

                //beschreibung hinzugefügt 
                let newP: HTMLElement = document.createElement("p");
                newP.innerHTML = artikel[parseInt(arrayWare[index])].beschreibung;
                wDiv.appendChild(newP);

                // Preis hinzugefügt 
                let newPreis: HTMLElement = document.createElement("p");
                newPreis.innerHTML = artikel[parseInt(arrayWare[index])].preis.toFixed(2) + "€";
                wDiv.appendChild(newPreis);


                // Button hinzugefügt 
                let newB: HTMLInputElement = document.createElement("input");
                newB.value = "löschen";
                newB.type = "submit";
                wDiv.appendChild(newB);
                // eventlistener auf den butten anwenden 
                newB.addEventListener("click", loeschen);

            }
            let allB: HTMLInputElement = document.createElement("input");
            allB.value = "Alles löschen";
            allB.type = "submit";
            allB.setAttribute("alt", stringWare);
            nDiv.appendChild(allB);
            // eventlistener auf den butten anwenden 
            allB.addEventListener("click", allloeschen);



        } catch (error) {
            //Ausgabe fur einen lehren Warenkorb 
            np.innerHTML = " ihr wahrenkorb ist leer ";
            nDiv.appendChild(np);

        }
    }

    function loeschen(_event: Event): void {

        let removeID: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("id")!;
        document.getElementById(removeID)?.remove();
        let arrayRID: string[] = removeID.split("ware");


        let stringWare: string = localStorage.gekauft;
        // den sting in ein array umwandekn 
        let arrayWare: string[] = stringWare.split(",");

        // remove die summe 
        removeSummme(artikel[parseInt(arrayRID[1])].preis, arrayWare);

        removeWare(arrayRID[1], arrayWare);
    }
    // zieht den preis der envernten produkte wieder von dem gespeicherten ab 
    function removeSummme(_preis: number, _laenge: string[]): void {
        if (_laenge.length > 1) {
            if (localStorage.setSumme) {
                localStorage.setSumme = Number(localStorage.setSumme) - _preis;
                np.innerHTML = " der einkaufswert beträgt " + localStorage.setSumme + "Euro";
            }
            //wenn alle produkte entverntwurden
        } else {
            np.innerHTML = " ihr wahrenkorb ist leer ";
            nDiv.appendChild(np);

            localStorage.setSumme = 0;
        }

    }

    
    //  zum enfernen der Wahren aus dem Warenkorb 
    function removeWare(_ware: string, _arrayWare: string[]): void {
        // wenn nur noch eine Ware drin ist 
        if (_arrayWare.length == 1) {
            localStorage.gekauft = undefined;
            localStorage.produktZeahler = Number(localStorage.produktZeahler) - 1;
            // aktualiesierung des Locelstorage beim enfernen einer ware
        } else {
            let counter: number = 0;
            let newWaren: string[] = [];
            let entfernt: boolean = false;
            localStorage.produktZeahler = Number(localStorage.produktZeahler) - 1;

            console.log(_ware);
            
            //neuer temporere array für die aktualiesierten waren
            for (let index: number = 0; index < _arrayWare.length; index++) {
                console.log(_arrayWare[index]);    
                if (_ware != _arrayWare[index] || entfernt ) {
                    newWaren.push(_arrayWare[index]);
                } else if (_ware == _arrayWare[index] ) {
                    entfernt =  true;
                }

            }
            console.log(newWaren);
            //temporere array wird in den LocalStore geladen
            for (let index: number = 0; index < newWaren.length; index++) {


                if (counter != 0) {
                    localStorage.gekauft = localStorage.gekauft + "," + newWaren[index];
                }
                else {
                    localStorage.gekauft = newWaren[index];
                }
                counter++;

            }

        } 
        console.log(localStorage.gekauft);
    }


    // Alle gspeicherten daten werden zurückgesetzt
    function allloeschen(_event: Event): void {
        localStorage.gekauft = "undefined";
        localStorage.setSumme = 0;
        localStorage.produktZeahler = 0;
        np.innerHTML = " ihr wahrenkorb ist leer ";
        let arrayAll: string[] = (<HTMLInputElement>_event.target).getAttribute("alt")!.split(",");
        for (let index: number = 0; index <= arrayAll.length; index++) {
            document.getElementById("ware" + arrayAll[index])?.remove();
        }
    }
}