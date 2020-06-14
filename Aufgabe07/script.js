"use strict";
var namespace07;
(function (namespace07) {
    let kategorien = ["Weizenbier", "Anderebiere"];
    seitegenerieren();
    async function seitegenerieren() {
        await namespace07.communicate("save.json");
        for (let index = 0; index < namespace07.artikel.length; index++) {
            let newDiv = document.createElement("div");
            newDiv.id = "artikel" + index;
            if (namespace07.artikel[index].kategorie == "Weizenbier") {
                document.getElementById("kategorie1")?.appendChild(newDiv);
            }
            else if (namespace07.artikel[index].kategorie == "Anderebiere") {
                document.getElementById("kategorie2")?.appendChild(newDiv);
            }
            let newImg = document.createElement("img");
            newImg.src = namespace07.artikel[index].bild;
            newDiv.appendChild(newImg);
            let newH = document.createElement("h2");
            newH.innerHTML = namespace07.artikel[index].name;
            newDiv.appendChild(newH);
            let newP = document.createElement("p");
            newP.innerHTML = namespace07.artikel[index].beschreibung;
            newDiv.appendChild(newP);
            let newPreis = document.createElement("p");
            newPreis.innerHTML = namespace07.artikel[index].preis.toFixed(2) + "€";
            newDiv.appendChild(newPreis);
            let newB = document.createElement("input");
            newB.value = "Jetzt kaufen";
            newB.type = "submit";
            newDiv.appendChild(newB);
            newB.addEventListener("click", kaufen);
        }
    }
    let anzahl = 0;
    let newZ = document.createElement("div");
    newZ.id = "anz";
    function kaufen(_event) {
        produktZeahler();
        if (anzahl < 1) {
            document.getElementById("header")?.appendChild(newZ);
        }
        anzahl = localStorage.produktZeahler;
        newZ.innerHTML = "" + anzahl;
        let stringID = _event.currentTarget.parentElement.getAttribute("id");
        let arrayID = stringID.split("artikel");
        setSummme(namespace07.artikel[parseInt(arrayID[1])].preis);
        console.log(localStorage.setSumme);
        gekauft(arrayID[1]);
    }
    let neuul = document.createElement("ul");
    document.getElementById("auswahl")?.appendChild(neuul);
    for (let index = 0; index < kategorien.length + 1; index++) {
        let neuli = document.createElement("li");
        let neua = document.createElement("a");
        neua.href = "#";
        neua.id = "a" + index;
        if (kategorien.length > index) {
            neua.innerHTML = kategorien[index];
        }
        else {
            neua.innerHTML = "Alle Biere";
        }
        neuul.appendChild(neuli);
        neuli.appendChild(neua);
        neua.addEventListener("click", springen);
    }
    function springen(_event) {
        switch (_event.currentTarget.getAttribute("id")) {
            case "a0":
                document.getElementById("kategorie1").style.display = "flex";
                document.getElementById("kategorie2").style.display = "none";
                document.getElementById("Bier1").style.display = "flex";
                document.getElementById("Bier2").style.display = "none";
                console.log("Weizenbier");
                break;
            case "a1":
                //nur Gartenartikel anzeigfen
                document.getElementById("kategorie1").style.display = "none";
                document.getElementById("kategorie2").style.display = "flex";
                document.getElementById("Bier1").style.display = "none";
                document.getElementById("Bier2").style.display = "flex";
                console.log("Anderebiere");
                break;
            case "a2":
                //alles anzeigen
                document.getElementById("kategorie1").style.display = "flex";
                document.getElementById("kategorie2").style.display = "flex";
                document.getElementById("Bier1").style.display = "flex";
                document.getElementById("Bier2").style.display = "flex";
                console.log("Alle Biere");
                break;
            default:
                break;
        }
    }
    function setSummme(_preis) {
        if (localStorage.setSumme) {
            localStorage.setSumme = Number(localStorage.setSumme) + _preis;
        }
        else {
            localStorage.setSumme = _preis;
        }
    }
    function produktZeahler() {
        if (localStorage.produktZeahler) {
            localStorage.produktZeahler = Number(localStorage.produktZeahler) + 1;
        }
        else {
            localStorage.produktZeahler = 1;
        }
    }
    function gekauft(_id) {
        console.log(localStorage.gekauft);
        if (localStorage.gekauft) {
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
})(namespace07 || (namespace07 = {}));
//# sourceMappingURL=script.js.map