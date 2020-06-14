namespace namespace07 {

    
    let nDiv: HTMLDivElement = document.createElement("div");
    let np: HTMLElement = document.createElement("p");
    nDiv.id = "warenkorbinhalt";
    document.getElementById("mainwarenkorb")?.appendChild(nDiv);


    if (localStorage.setSumme) {
        np.innerHTML = " Ihr Einkauf kostet " + localStorage.setSumme + "Euro";
        nDiv.appendChild(np);
    }


    korbGenerierern();

    async function korbGenerierern(): Promise<void> {
       
        try {

             
            await communicate("save.json");
             
            let stringWare: string = localStorage.gekauft;
             
            let arrayWare: string[] = stringWare.split(",");

            let warenDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("mainwarenkorb")?.appendChild(warenDiv);

            for (let index: number = 0; index < arrayWare.length; index++) {

                
                let wDiv: HTMLDivElement = document.createElement("div");
                wDiv.id = "ware" + arrayWare[index];
                warenDiv.appendChild(wDiv);


                let wimg: HTMLImageElement = document.createElement("img");
                wimg.src = artikel[parseInt(arrayWare[index])].bild;
                wDiv.appendChild(wimg);

                let newH: HTMLElement = document.createElement("h2");
                newH.innerHTML = artikel[parseInt(arrayWare[index])].name;
                wDiv.appendChild(newH);

                let newP: HTMLElement = document.createElement("p");
                newP.innerHTML = artikel[parseInt(arrayWare[index])].beschreibung;
                wDiv.appendChild(newP);

                let newPreis: HTMLElement = document.createElement("p");
                newPreis.innerHTML = artikel[parseInt(arrayWare[index])].preis.toFixed(2) + "€";
                wDiv.appendChild(newPreis);

                let newB: HTMLInputElement = document.createElement("input");
                newB.value = "Löschen";
                newB.type = "submit";
                wDiv.appendChild(newB);
                newB.addEventListener("click", loeschen);

            }
            let allB: HTMLInputElement = document.createElement("input");
            allB.value = "Warenkorb leeren";
            allB.type = "submit";
            allB.setAttribute("alt", stringWare);
            nDiv.appendChild(allB);
            allB.addEventListener("click", allloeschen);



        } catch (error) {
            np.innerHTML = " ihr wahrenkorb ist leer ";
            nDiv.appendChild(np);

        }
    }

    function loeschen(_event: Event): void {

        let removeID: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("id")!;
        document.getElementById(removeID)?.remove();
        let arrayRID: string[] = removeID.split("ware");


        let stringWare: string = localStorage.gekauft;
        let arrayWare: string[] = stringWare.split(",");

        removeSummme(artikel[parseInt(arrayRID[1])].preis, arrayWare);

        removeWare(arrayRID[1], arrayWare);
    }
    function removeSummme(_preis: number, _laenge: string[]): void {
        if (_laenge.length > 1) {
            if (localStorage.setSumme) {
                localStorage.setSumme = Number(localStorage.setSumme) - _preis;
                np.innerHTML = " der einkaufswert beträgt " + localStorage.setSumme + "Euro";
            }
        } else {
            np.innerHTML = " ihr wahrenkorb ist leer ";
            nDiv.appendChild(np);

            localStorage.setSumme = 0;
        }

    }

    function removeWare(_ware: string, _arrayWare: string[]): void {
        if (_arrayWare.length == 1) {
            localStorage.gekauft = undefined;
            localStorage.produktZeahler = Number(localStorage.produktZeahler) - 1;
        } else {
            let counter: number = 0;
            let newWaren: string[] = [];
            let entfernt: boolean = false;
            localStorage.produktZeahler = Number(localStorage.produktZeahler) - 1;

            console.log(_ware);
            
            for (let index: number = 0; index < _arrayWare.length; index++) {
                console.log(_arrayWare[index]);    
                if (_ware != _arrayWare[index] || entfernt ) {
                    newWaren.push(_arrayWare[index]);
                } else if (_ware == _arrayWare[index] ) {
                    entfernt =  true;
                }

            }
            console.log(newWaren);
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


    function allloeschen(_event: Event): void {
        localStorage.gekauft = "undefined";
        localStorage.setSumme = 0;
        localStorage.produktZeahler = 0;
        np.innerHTML = " Der Warenkorb ist leer ";
        let arrayAll: string[] = (<HTMLInputElement>_event.target).getAttribute("alt")!.split(",");
        for (let index: number = 0; index <= arrayAll.length; index++) {
            document.getElementById("ware" + arrayAll[index])?.remove();
        }
    }
}