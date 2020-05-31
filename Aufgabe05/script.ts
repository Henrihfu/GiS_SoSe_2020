"use strict";
let franziskaner = {
    bild: "Franziskaner.jpg",
    name: "Franziskaner",
    beschreibung: "Schmeckt Lecker",
    preis: "2,50€"
};
let meckatzer = {
    bild: "Meckatzer.jpg",
    name: "Meckatzer",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let paulaner = {
    bild: "Paulaner.jpg",
    name: "Paulaner",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let maisels = {
    bild: "Maisels.jpg",
    name: "Maisels",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let schöfferhofer = {
    bild: "Schöfferhofer.jpg",
    name: "Schöfferhofer",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let oettinger = {
    bild: "Oettinger.jpg",
    name: "Oettinger",
    beschreibung: "Wenns sein muss..",
    preis: "0,11€"
};
let erdinger = {
    bild: "Erdinger.jpg",
    name: "Erdinger",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let urweisse = {
    bild: "Urweisse.jpg",
    name: "Urweisse",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let rothaus = {
    bild: "Rothaus.jpg",
    name: "Rothaus",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let alpirsbacher = {
    bild: "Alpirsbacher.jpg",
    name: "Alpirsbacher",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let andechs = {
    bild: "Andechs.jpg",
    name: "Andechs",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let alkoholfrei = {
    bild: "Alkoholfrei.jpg",
    name: "Alkoholfrei",
    beschreibung: "...",
    preis: "40,00€"
};
let augustiner = {
    bild: "Augustiner.jpg",
    name: "Augustiner",
    beschreibung: "Schmeckt lecker",
    preis: "2,50€"
};
let tegernseer = {
    bild: "Tegernseer.jpg",
    name: "Tegernseer",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let meckatzerhell = {
    bild: "Meckatzerhell.jpg",
    name: "Meckatzerhell",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let chiemseer = {
    bild: "Chiemseer.jpg",
    name: "Chiemseer",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let büble = {
    bild: "Büble.jpg",
    name: "Büble",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let michel = {
    bild: "Michel.png",
    name: "Michel",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let corona = {
    bild: "Corona.jpg",
    name: "Corona",
    beschreibung: "Grad schmeckts besonders Lecker",
    preis: "2,50€"
};
let desperados = {
    bild: "Desperados.jpg",
    name: "Desperados",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let maidle = {
    bild: "Maidle.jpg",
    name: "Maidle",
    beschreibung: "Ist nur 0,33l da bekommst gleich 6 Stück",
    preis: "5,99€"
};
let hochdorfer = {
    bild: "Hochdorfer.jpg",
    name: "Hochdorfer",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let gösser = {
    bild: "Gösser.jpg",
    name: "Gösser",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let grape = {
    bild: "Grape.jpg",
    name: "Schöfferhofer Grapefruit",
    beschreibung: "Schmeckt au lecker.",
    preis: "2,50€"
};

let weizenbiere = [franziskaner, meckatzer, paulaner, maisels, schöfferhofer, oettinger, erdinger, urweisse, rothaus, alpirsbacher, andechs, alkoholfrei];
let anderebiere = [augustiner, tegernseer, meckatzerhell, chiemseer, büble, michel, corona, desperados, maidle, hochdorfer, gösser, grape];

for (let index = 0; index < weizenbiere.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.id = "atikelW" + index;
    document.getElementById("Weizenbier")?.appendChild(newDiv);
    let newImg = document.createElement("img");
    newImg.src = weizenbiere[index].bild;
    document.getElementById("atikelW" + index)?.appendChild(newImg);
    let newW = document.createElement("h2");
    newW.innerHTML = weizenbiere[index].name;
    document.getElementById("atikelW" + index)?.appendChild(newW); 
    let newP = document.createElement("p");
    newP.innerHTML = weizenbiere[index].beschreibung;
    document.getElementById("atikelW" + index)?.appendChild(newP); 
    let newPreis = document.createElement("p");
    newPreis.innerHTML = weizenbiere[index].preis;
    document.getElementById("atikelW" + index)?.appendChild(newPreis); 
    let newB = document.createElement("input");
    newB.value = "Jetzt kaufen";
    newB.type = "submit";
    document.getElementById("atikelW" + index)?.appendChild(newB);
}
for (let index = 0; index < anderebiere.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.id = "atikelA" + index;
    document.getElementById("AndereBiere")?.appendChild(newDiv);
    let newImg = document.createElement("img");
    newImg.src = anderebiere[index].bild;
    document.getElementById("atikelA" + index)?.appendChild(newImg); 
    let newH = document.createElement("h2");
    newH.innerHTML = anderebiere[index].name;
    document.getElementById("atikelA" + index)?.appendChild(newH);
    let newP = document.createElement("p");
    newP.innerHTML = anderebiere[index].beschreibung;
    document.getElementById("atikelA" + index)?.appendChild(newP);
    let newPreis = document.createElement("p");
    newPreis.innerHTML = anderebiere[index].preis;
    document.getElementById("atikelA" + index)?.appendChild(newPreis); 
    let newB = document.createElement("input");
    newB.value = "Jetzt kaufen";
    newB.type = "submit";
    document.getElementById("atikelA" + index)?.appendChild(newB);
}