"use strict";
// intaface fürs erte Kategorie
var Test;
(function (Test) {
    // localStorage.clear();
    // String in den sie Kategorien sehen 
    let kategorien = ["Geräte", "Gegenstände"];
    Seitegenerieren();
    // schleife zum seite generieren 
    async function Seitegenerieren() {
        await Test.communicate("save.json");
        for (let index = 0; index < Test.artikel.length; index++) {
            // Estellen von Div Elementen 
            let newDiv = document.createElement("div");
            // Div id zuweisen
            newDiv.id = "artikel" + index;
            if (Test.artikel[index].kategorie == "Geräte") {
                document.getElementById("kategorie1")?.appendChild(newDiv);
            }
            else if (Test.artikel[index].kategorie == "Gegenstände") {
                document.getElementById("kategorie2")?.appendChild(newDiv);
            }
            // Bild hinzufügen
            let newImg = document.createElement("img");
            newImg.src = Test.artikel[index].bild;
            newDiv.appendChild(newImg);
            // Name hinzugefügt 
            let newH = document.createElement("h2");
            newH.innerHTML = Test.artikel[index].name;
            newDiv.appendChild(newH);
            //beschreibung hinzugefügt 
            let newP = document.createElement("p");
            newP.innerHTML = Test.artikel[index].beschreibung;
            newDiv.appendChild(newP);
            // Preis hinzugefügt 
            let newPreis = document.createElement("p");
            newPreis.innerHTML = Test.artikel[index].preis.toFixed(2) + "€";
            newDiv.appendChild(newPreis);
            // Button hinzugefügt 
            let newB = document.createElement("input");
            newB.value = "Kaufen";
            newB.type = "submit";
            newDiv.appendChild(newB);
            // eventlistener auf den butten anwenden 
            newB.addEventListener("click", kaufen);
        }
    }
    // zaehler variable
    let anzahl = 0;
    // element für sichtbarkeit der Eingelagerten Produkte
    let newZ = document.createElement("div");
    newZ.id = "anz";
    // Funktion fur den Kaufbutten 
    function kaufen(_event) {
        produktZeahler();
        //einbelenden des Kreises 
        if (anzahl < 1) {
            document.getElementById("header")?.appendChild(newZ);
        }
        anzahl = localStorage.produktZeahler;
        newZ.innerHTML = "" + anzahl;
        //zusammenrechnen der presie 
        let stringID = _event.currentTarget.parentElement.getAttribute("id");
        let arrayID = stringID.split("artikel");
        // Summe der Preise 
        setSummme(Test.artikel[parseInt(arrayID[1])].preis);
        //summe = artikel[parseInt(test2[1])].preis;
        // console.log(summe + "€");
        gekauft(arrayID[1]);
        console.log(localStorage.setSumme);
    }
    // ersellung der navigation
    let newul = document.createElement("ul");
    document.getElementById("topmenu")?.appendChild(newul);
    for (let index = 0; index < kategorien.length + 1; index++) {
        let newli = document.createElement("li");
        let newa = document.createElement("a");
        newa.href = "#";
        newa.id = "a" + index;
        if (kategorien.length > index) {
            newa.innerHTML = kategorien[index];
        }
        else {
            newa.innerHTML = "Alles";
        }
        newul.appendChild(newli);
        newli.appendChild(newa);
        newa.addEventListener("click", springen);
    }
    // Ausund einblede Event
    function springen(_event) {
        //alle möglichkeiten für kategorien newue mussen per hand nachgereicht werden
        switch (_event.currentTarget.getAttribute("id")) {
            case "a0":
                //nur Büroanzeigen
                document.getElementById("kategorie1").style.display = "flex";
                document.getElementById("kategorie2").style.display = "none";
                document.getElementById("k1").style.display = "flex";
                document.getElementById("k2").style.display = "none";
                console.log("Geräte");
                break;
            case "a1":
                //nur Gegenständeartikel anzeigfen
                document.getElementById("kategorie1").style.display = "none";
                document.getElementById("kategorie2").style.display = "flex";
                document.getElementById("k1").style.display = "none";
                document.getElementById("k2").style.display = "flex";
                console.log("Gegenstände");
                break;
            case "a2":
                //alles anzeigen
                document.getElementById("kategorie1").style.display = "flex";
                document.getElementById("kategorie2").style.display = "flex";
                document.getElementById("k1").style.display = "flex";
                document.getElementById("k2").style.display = "flex";
                console.log("Alle");
                break;
            default:
                break;
        }
    }
    // Methode für den gesamtwert der in LocakStorage gespeichert wird
    function setSummme(_preis) {
        if (localStorage.setSumme) {
            localStorage.setSumme = Number(localStorage.setSumme) + _preis;
        }
        else {
            localStorage.setSumme = _preis;
        }
    }
    // funktion soll den zähler der produkte sie gekauft  wurden speichern 
    function produktZeahler() {
        if (localStorage.produktZeahler) {
            localStorage.produktZeahler = Number(localStorage.produktZeahler) + 1;
        }
        else {
            localStorage.produktZeahler = 1;
        }
    }
    // speichert die Id der gekauften produkte in einem String 
    function gekauft(_id) {
        console.log(localStorage.gekauft);
        // schaut ob localStore.gekauft schon existiert 
        if (localStorage.gekauft) {
            // fur den fall das der Wahrenkorb einmal komplet gelöscht wurde
            if (localStorage.gekauft != "undefined") {
                localStorage.gekauft = localStorage.gekauft + "," + _id;
            }
            else {
                localStorage.gekauft = _id;
            }
        }
        else {
            localStorage.gekauft = _id;
        }
    }
})(Test || (Test = {}));
//# sourceMappingURL=script.js.map