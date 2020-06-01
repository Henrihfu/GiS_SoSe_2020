"use strict";
let artikel1 = { bild: "Franziskaner.jpg", name: "Franziskaner", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikel2 = { bild: "Meckatzer.jpg", name: "Meckatzer", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikel3 = { bild: "Paulaner.jpg", name: "Paulaner", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikel4 = { bild: "Maisels.jpg", name: "Maisels", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikel5 = { bild: "Schöfferhoffer.jpg", name: "Schöfferhoffer", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikel6 = { bild: "Erdinger.jpg", name: "Erdinger", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikelWeizen = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];
let artikel7 = { bild: "Augustiner.jpg", name: "Augustiner", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikel8 = { bild: "Tegernseer.jpg", name: "Tegernseer", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikel9 = { bild: "Meckatzerhell.jpg", name: "Meckatzer-Hell", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikel10 = { bild: "Chiemseer.jpg", name: "Chiemseer", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikel11 = { bild: "Büble.jpg", name: "Büble", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikel12 = { bild: "Michel.jpg", name: "Michel", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikelAnderebiere = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];
for (let index = 0; index < artikelWeizen.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.id = "atikelW" + index;
    document.getElementById("Weizenbier")?.appendChild(newDiv);
    let newImg = document.createElement("img");
    newImg.src = artikelWeizen[index].bild;
    document.getElementById("atikelW" + index)?.appendChild(newImg);
    let newW = document.createElement("h2");
    newW.innerHTML = artikelWeizen[index].name;
    document.getElementById("atikelW" + index)?.appendChild(newW);
    let newP = document.createElement("p");
    newP.innerHTML = artikelWeizen[index].beschreibung;
    document.getElementById("atikelW" + index)?.appendChild(newP);
    let newPreis = document.createElement("p");
    newPreis.innerHTML = artikelWeizen[index].preis;
    document.getElementById("atikelW" + index)?.appendChild(newPreis);
    let newB = document.createElement("input");
    newB.value = "Jetzt kaufen";
    newB.type = "submit";
    document.getElementById("atikelW" + index)?.appendChild(newB);
}
for (let index = 0; index < artikelAnderebiere.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.id = "atikelA" + index;
    document.getElementById("AndereBiere")?.appendChild(newDiv);
    let newImg = document.createElement("img");
    newImg.src = artikelAnderebiere[index].bild;
    document.getElementById("atikelA" + index)?.appendChild(newImg);
    let newH = document.createElement("h2");
    newH.innerHTML = artikelAnderebiere[index].name;
    document.getElementById("atikelA" + index)?.appendChild(newH);
    let newP = document.createElement("p");
    newP.innerHTML = artikelAnderebiere[index].beschreibung;
    document.getElementById("atikelA" + index)?.appendChild(newP);
    let newPreis = document.createElement("p");
    newPreis.innerHTML = artikelAnderebiere[index].preis;
    document.getElementById("atikelA" + index)?.appendChild(newPreis);
    let newB = document.createElement("input");
    newB.value = "Jetzt kaufen";
    newB.type = "submit";
    document.getElementById("atikelA" + index)?.appendChild(newB);
}
//# sourceMappingURL=script.js.map