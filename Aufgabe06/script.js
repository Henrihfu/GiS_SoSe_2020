"use strict";
let franziskaner = { bild: "Franziskaner.jpg", name: "Franziskaner", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let meckatzer = { bild: "Meckatzer.jpg", name: "Meckatzer", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let paulaner = { bild: "Paulaner.jpg", name: "Paulaner", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let maisels = { bild: "Maisels.jpg", name: "Maisels", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let schöfferhofer = { bild: "Schöfferhofer.jpg", name: "Schöfferhoffer", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let erdinger = { bild: "Erdinger.jpg", name: "Erdinger", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let augustiner = { bild: "Augustiner.jpg", name: "Augustiner", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let tegernseer = { bild: "Tegernseer.jpg", name: "Tegernseer", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let meckatzerhell = { bild: "Meckatzerhell.jpg", name: "Meckatzer-Hell", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let chiemseer = { bild: "Chiemseer.jpg", name: "Chiemseer", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let büble = { bild: "Büble.jpg", name: "Büble", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let michel = { bild: "Michel.png", name: "Michel", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let artikel = [franziskaner, meckatzer, paulaner, maisels, schöfferhofer, erdinger, augustiner, tegernseer, meckatzerhell, chiemseer, büble, michel];
let kategorien = ["Weizenbier", "Anderebiere"];
for (let index = 0; index < artikel.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.id = "artikel" + index;
    if (artikel[index].kategorie == "Weizenbier") {
        document.getElementById("kategorie1")?.appendChild(newDiv);
    }
    else if (artikel[index].kategorie == "Anderebiere") {
        document.getElementById("kategorie2")?.appendChild(newDiv);
    }
    let newImg = document.createElement("img");
    newImg.src = artikel[index].bild;
    newDiv.appendChild(newImg);
    let newH = document.createElement("h2");
    newH.innerHTML = artikel[index].name;
    newDiv.appendChild(newH);
    let newP = document.createElement("p");
    newP.innerHTML = artikel[index].beschreibung;
    newDiv.appendChild(newP);
    let newPreis = document.createElement("p");
    newPreis.innerHTML = artikel[index].preis.toFixed(2) + "€";
    newDiv.appendChild(newPreis);
    let newB = document.createElement("input");
    newB.value = "Jetzt kaufen";
    newB.type = "submit";
    newDiv.appendChild(newB);
    newB.addEventListener("click", kaufen);
}
let anzahl = 0;
let summe = 0;
let newZ = document.createElement("div");
newZ.id = "anz";
function kaufen(_event) {
    if (anzahl < 1) {
        document.getElementById("header")?.appendChild(newZ);
    }
    anzahl += 1;
    newZ.innerHTML = "" + anzahl;
    let test = _event.currentTarget.parentElement.getAttribute("id");
    let test2 = test.split("artikel");
    console.log(parseInt(test2[1]));
    summe += artikel[parseInt(test2[1])].preis;
    console.log(summe + "€");
}
//teilaufgabe2
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
            document.getElementById("kategorie1").style.display = "none";
            document.getElementById("kategorie2").style.display = "flex";
            document.getElementById("Bier1").style.display = "none";
            document.getElementById("Bier2").style.display = "flex";
            console.log("Anderebiere");
            break;
        case "a2":
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
//# sourceMappingURL=script.js.map