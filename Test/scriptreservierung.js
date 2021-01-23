"use strict";
var Test;
(function (Test) {
    // Div für die elemente Alleslöschbutten und insgesamtKosten 
    let nDiv = document.createElement("div");
    let np = document.createElement("p");
    nDiv.id = "warenkorbinhalt";
    document.getElementById("mainwarenkorb")?.appendChild(nDiv);
    // anzeige fur den warenkorb wenn er auch produkte vorhanden sind andernfals im catch
    if (localStorage.setSumme) {
        np.innerHTML = " der Einkaufswert beträgt " + localStorage.setSumme + "Euro";
        nDiv.appendChild(np);
    }
    korbGenerierern();
    async function korbGenerierern() {
        // Error abfangen des Errors der enntseht wenn keine wahren im wahrenkorb sind 
        try {
            // warten bis json neu geladen hat 
            await Test.communicate("save.json");
            //gespeicherte waren abrufen 
            let stringWare = localStorage.gekauft;
            // den sting in ein array umwandekn 
            let arrayWare = stringWare.split(",");
            let warenDiv = document.createElement("div");
            document.getElementById("mainwarenkorb")?.appendChild(warenDiv);
            for (let index = 0; index < arrayWare.length; index++) {
                // Estellen von Div Elementen 
                let wDiv = document.createElement("div");
                // Div id zuweisen
                wDiv.id = "ware" + arrayWare[index];
                warenDiv.appendChild(wDiv);
                // Bild hinzufügen
                let wimg = document.createElement("img");
                wimg.src = Test.artikel[parseInt(arrayWare[index])].bild;
                wDiv.appendChild(wimg);
                // Name hinzugefügt 
                let newH = document.createElement("h2");
                newH.innerHTML = Test.artikel[parseInt(arrayWare[index])].name;
                wDiv.appendChild(newH);
                //beschreibung hinzugefügt 
                let newP = document.createElement("p");
                newP.innerHTML = Test.artikel[parseInt(arrayWare[index])].beschreibung;
                wDiv.appendChild(newP);
                // Preis hinzugefügt 
                let newPreis = document.createElement("p");
                newPreis.innerHTML = Test.artikel[parseInt(arrayWare[index])].preis.toFixed(2) + "€";
                wDiv.appendChild(newPreis);
                // Button hinzugefügt 
                let newB = document.createElement("input");
                newB.value = "löschen";
                newB.type = "submit";
                wDiv.appendChild(newB);
                // eventlistener auf den butten anwenden 
                newB.addEventListener("click", loeschen);
            }
            let allB = document.createElement("input");
            allB.value = "Alles löschen";
            allB.type = "submit";
            allB.setAttribute("alt", stringWare);
            nDiv.appendChild(allB);
            // eventlistener auf den butten anwenden 
            allB.addEventListener("click", allloeschen);
        }
        catch (error) {
            //Ausgabe fur einen lehren Warenkorb 
            np.innerHTML = " ihr wahrenkorb ist leer ";
            nDiv.appendChild(np);
        }
    }
    function loeschen(_event) {
        let removeID = _event.currentTarget.parentElement.getAttribute("id");
        document.getElementById(removeID)?.remove();
        let arrayRID = removeID.split("ware");
        let stringWare = localStorage.gekauft;
        // den sting in ein array umwandekn 
        let arrayWare = stringWare.split(",");
        // remove die summe 
        removeSummme(Test.artikel[parseInt(arrayRID[1])].preis, arrayWare);
        removeWare(arrayRID[1], arrayWare);
    }
    // zieht den preis der envernten produkte wieder von dem gespeicherten ab 
    function removeSummme(_preis, _laenge) {
        if (_laenge.length > 1) {
            if (localStorage.setSumme) {
                localStorage.setSumme = Number(localStorage.setSumme) - _preis;
                np.innerHTML = " der einkaufswert beträgt " + localStorage.setSumme + "Euro";
            }
            //wenn alle produkte entverntwurden
        }
        else {
            np.innerHTML = " ihr wahrenkorb ist leer ";
            nDiv.appendChild(np);
            localStorage.setSumme = 0;
        }
    }
    //  zum enfernen der Wahren aus dem Warenkorb 
    function removeWare(_ware, _arrayWare) {
        // wenn nur noch eine Ware drin ist 
        if (_arrayWare.length == 1) {
            localStorage.gekauft = undefined;
            localStorage.produktZeahler = Number(localStorage.produktZeahler) - 1;
            // aktualiesierung des Locelstorage beim enfernen einer ware
        }
        else {
            let counter = 0;
            let newWaren = [];
            let entfernt = false;
            localStorage.produktZeahler = Number(localStorage.produktZeahler) - 1;
            console.log(_ware);
            //neuer temporere array für die aktualiesierten waren
            for (let index = 0; index < _arrayWare.length; index++) {
                console.log(_arrayWare[index]);
                if (_ware != _arrayWare[index] || entfernt) {
                    newWaren.push(_arrayWare[index]);
                }
                else if (_ware == _arrayWare[index]) {
                    entfernt = true;
                }
            }
            console.log(newWaren);
            //temporere array wird in den LocalStore geladen
            for (let index = 0; index < newWaren.length; index++) {
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
    function allloeschen(_event) {
        localStorage.gekauft = "undefined";
        localStorage.setSumme = 0;
        localStorage.produktZeahler = 0;
        np.innerHTML = " ihr wahrenkorb ist leer ";
        let arrayAll = _event.target.getAttribute("alt").split(",");
        for (let index = 0; index <= arrayAll.length; index++) {
            document.getElementById("ware" + arrayAll[index])?.remove();
        }
    }
})(Test || (Test = {}));
//# sourceMappingURL=scriptreservierung.js.map