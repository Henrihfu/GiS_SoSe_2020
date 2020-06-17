"use strict";
var namespace07;
(function (namespace07) {
    let nDiv = document.createElement("div");
    let np = document.createElement("p");
    nDiv.id = "warenkorbinhalt";
    document.getElementById("mainwarenkorb")?.appendChild(nDiv);
    if (localStorage.setSumme) {
        np.innerHTML = " Ihr Einkauf kostet " + localStorage.setSumme + "Euro";
        nDiv.appendChild(np);
    }
    korbGenerierern();
    async function korbGenerierern() {
        try {
            await namespace07.communicate("https://henrihfu.github.io/GiS_SoSe_2020/Aufgabe07/save.json");
            let stringWare = localStorage.gekauft;
            let arrayWare = stringWare.split(",");
            let warenDiv = document.createElement("div");
            document.getElementById("mainwarenkorb")?.appendChild(warenDiv);
            for (let index = 0; index < arrayWare.length; index++) {
                let wDiv = document.createElement("div");
                wDiv.id = "ware" + arrayWare[index];
                warenDiv.appendChild(wDiv);
                let wimg = document.createElement("img");
                wimg.src = namespace07.artikel[parseInt(arrayWare[index])].bild;
                wDiv.appendChild(wimg);
                let newH = document.createElement("h2");
                newH.innerHTML = namespace07.artikel[parseInt(arrayWare[index])].name;
                wDiv.appendChild(newH);
                let newP = document.createElement("p");
                newP.innerHTML = namespace07.artikel[parseInt(arrayWare[index])].beschreibung;
                wDiv.appendChild(newP);
                let newPreis = document.createElement("p");
                newPreis.innerHTML = namespace07.artikel[parseInt(arrayWare[index])].preis.toFixed(2) + "€";
                wDiv.appendChild(newPreis);
                let newB = document.createElement("input");
                newB.value = "Löschen";
                newB.type = "submit";
                wDiv.appendChild(newB);
                newB.addEventListener("click", loeschen);
            }
            let allB = document.createElement("input");
            allB.value = "Warenkorb leeren";
            allB.type = "submit";
            allB.setAttribute("alt", stringWare);
            nDiv.appendChild(allB);
            allB.addEventListener("click", allloeschen);
        }
        catch (error) {
            np.innerHTML = " Der Warenkorb ist leer ";
            nDiv.appendChild(np);
        }
    }
    function loeschen(_event) {
        let removeID = _event.currentTarget.parentElement.getAttribute("id");
        document.getElementById(removeID)?.remove();
        let arrayRID = removeID.split("ware");
        let stringWare = localStorage.gekauft;
        let arrayWare = stringWare.split(",");
        removeSummme(namespace07.artikel[parseInt(arrayRID[1])].preis, arrayWare);
        removeWare(arrayRID[1], arrayWare);
    }
    function removeSummme(_preis, _laenge) {
        if (_laenge.length > 1) {
            if (localStorage.setSumme) {
                localStorage.setSumme = Number(localStorage.setSumme) - _preis;
                np.innerHTML = " Der Einkaufswert beträgt " + localStorage.setSumme + "Euro";
            }
        }
        else {
            np.innerHTML = " Der Warenkorb ist leer ";
            nDiv.appendChild(np);
            localStorage.setSumme = 0;
        }
    }
    function removeWare(_ware, _arrayWare) {
        if (_arrayWare.length == 1) {
            localStorage.gekauft = undefined;
            localStorage.produktZeahler = Number(localStorage.produktZeahler) - 1;
        }
        else {
            let counter = 0;
            let newWaren = [];
            let entfernt = false;
            localStorage.produktZeahler = Number(localStorage.produktZeahler) - 1;
            console.log(_ware);
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
    function allloeschen(_event) {
        localStorage.gekauft = "undefined";
        localStorage.setSumme = 0;
        localStorage.produktZeahler = 0;
        np.innerHTML = " Der Warenkorb ist leer ";
        let arrayAll = _event.target.getAttribute("alt").split(",");
        for (let index = 0; index <= arrayAll.length; index++) {
            document.getElementById("ware" + arrayAll[index])?.remove();
        }
    }
})(namespace07 || (namespace07 = {}));
//# sourceMappingURL=scriptwarenkorb.js.map