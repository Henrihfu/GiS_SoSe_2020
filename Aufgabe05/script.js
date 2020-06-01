"use strict";
let artikel1 = { img: "Franziskaner.jpg", name: "Franziskaner", description: "Schmeckt Lecker", preis: "2,50€" };
let artikel2 = { img: "Meckatzer.jpg", name: "Meckatzer", description: "Schmeckt Lecker", preis: "2,50€" };
let artikel3 = { img: "Paulaner.jpg", name: "Paulaner", description: "Schmeckt Lecker", preis: "2,50€" };
let artikel4 = { img: "Maisels.jpg", name: "Maisels", description: "Schmeckt Lecker", preis: "2,50€" };
let artikel5 = { img: "Schöfferhoffer.jpg", name: "Schöfferhoffer", description: "Schmeckt Lecker", preis: "2,50€" };
let artikel6 = { img: "Erdinger.jpg", name: "Erdinger", description: "Schmeckt Lecker", preis: "2,50€" };
let artikelWeizen = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];
let artikel7 = { img: "Augustiner.jpg", name: "Augustiner", description: "Schmeckt Lecker", preis: "2,50" };
let artikel8 = { img: "Tegernseer.jpg", name: "Tegernseer", description: "Schmeckt Lecker", preis: "2,50" };
let artikel9 = { img: "Meckatzerhell.jpg", name: "Meckatzer-Hell", description: "Schmeckt Lecker", preis: "2,50" };
let artikel10 = { img: "Chiemseer.jpg", name: "Chiemseer", description: "Schmeckt Lecker", preis: "2,50" };
let artikel11 = { img: "Büble.jpg", name: "Büble", description: "Schmeckt Lecker", preis: "2,50" };
let artikel12 = { img: "Michel.jpg", name: "Michel", description: "Schmeckt Lecker", preis: "2,50" };
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