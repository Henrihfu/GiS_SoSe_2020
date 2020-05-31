"use strict";
let _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
let franziskaner = {
    bild: "franziskaner.jpg",
    name: "Franziskaner",
    beschreibung: "Schmeckt Lecker",
    preis: "2,50€"
};
let meckatzer = {
    bild: "meckatzer.jpg",
    name: "Meckatzer",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let paulaner = {
    bild: "paulaner.jpg",
    name: "Paulaner",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let maisels = {
    bild: "maisels.jpg",
    name: "Maisels",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let schöfferhofer = {
    bild: "schöfferhofer.jpg",
    name: "Schöfferhofer",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let oettinger = {
    bild: "oettinger.jpg",
    name: "Oettinger",
    beschreibung: "Wenns sein muss..",
    preis: "0,11€"
};
let erdinger = {
    bild: "erdinger.jpg",
    name: "Erdinger",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let urweisse = {
    bild: "urweisse.jpg",
    name: "Urweisse",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let rothaus = {
    bild: "rothaus.jpg",
    name: "Rothaus",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let alpirsbacher = {
    bild: "alpirsbacher.jpg",
    name: "Alpirsbacher",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let andechs = {
    bild: "andechs.jpg",
    name: "Andechs",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
let alkoholfrei = {
    bild: "alkoholfrei.jpg",
    name: "Alkoholfrei",
    beschreibung: "...",
    preis: "40,00€"
};
let augustiner = {
    bild: "augustiner.jpg",
    name: "Augustiner",
    beschreibung: "Schmeckt lecker",
    preis: "2,50€"
};
let tegernseer = {
    bild: "tegernseer.jpg",
    name: "Tegernseer",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let meckatzerhell = {
    bild: "meckatzerhell.jpg",
    name: "Meckatzerhell",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let chiemseer = {
    bild: "chiemseer.jpg",
    name: "Chiemseer",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let büble = {
    bild: "büble.jpg",
    name: "Büble",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let michel = {
    bild: "michel.png",
    name: "Michel",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let corona = {
    bild: "corona.jpg",
    name: "Corona",
    beschreibung: "Grad schmeckts besonders Lecker",
    preis: "2,50€"
};
let desperados = {
    bild: "desperados.jpg",
    name: "Desperados",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let maidle = {
    bild: "maidle.jpg",
    name: "Maidle",
    beschreibung: "Ist nur 0,33l da bekommst gleich 6 Stück",
    preis: "5,99€"
};
let hochdorfer = {
    bild: "hochdorfer.jpg",
    name: "Hochdorfer",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let gösser = {
    bild: "gösser.jpg",
    name: "Gösser",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
let grape = {
    bild: "grape.jpg",
    name: "Schöfferhofer Grapefruit",
    beschreibung: "Schmeckt au lecker.",
    preis: "2,50€"
};
let weizenbiere = [franziskaner, meckatzer, paulaner, maisels, schöfferhofer, oettinger, erdinger, urweisse, rothaus, alpirsbacher, andechs, alkoholfrei];
let anderebiere = [augustiner, tegernseer, meckatzerhell, chiemseer, büble, michel, corona, desperados, maidle, hochdorfer, gösser, grape];
for (let index = 0; index < weizenbiere.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.id = "atikelW" + index;
    (_a = document.getElementById("Weizenbier")) === null || _a === void 0 ? void 0 : _a.appendChild(newDiv);
    let newImg = document.createElement("img");
    newImg.src = weizenbiere[index].bild;
    (_b = document.getElementById("atikelW" + index)) === null || _b === void 0 ? void 0 : _b.appendChild(newImg);
    let newW = document.createElement("h2");
    newW.innerHTML = weizenbiere[index].name;
    (_c = document.getElementById("atikelW" + index)) === null || _c === void 0 ? void 0 : _c.appendChild(newW);
    let newP = document.createElement("p");
    newP.innerHTML = weizenbiere[index].beschreibung;
    (_d = document.getElementById("atikelW" + index)) === null || _d === void 0 ? void 0 : _d.appendChild(newP);
    let newPreis = document.createElement("p");
    newPreis.innerHTML = weizenbiere[index].preis;
    (_e = document.getElementById("atikelW" + index)) === null || _e === void 0 ? void 0 : _e.appendChild(newPreis);
    let newB = document.createElement("input");
    newB.value = "Jetzt kaufen";
    newB.type = "submit";
    (_f = document.getElementById("atikelW" + index)) === null || _f === void 0 ? void 0 : _f.appendChild(newB);
}
for (let index = 0; index < anderebiere.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.id = "atikelA" + index;
    (_g = document.getElementById("AndereBiere")) === null || _g === void 0 ? void 0 : _g.appendChild(newDiv);
    let newImg = document.createElement("img");
    newImg.src = anderebiere[index].bild;
    (_h = document.getElementById("atikelA" + index)) === null || _h === void 0 ? void 0 : _h.appendChild(newImg);
    let newH = document.createElement("h2");
    newH.innerHTML = anderebiere[index].name;
    (_j = document.getElementById("atikelA" + index)) === null || _j === void 0 ? void 0 : _j.appendChild(newH);
    let newP = document.createElement("p");
    newP.innerHTML = anderebiere[index].beschreibung;
    (_k = document.getElementById("atikelA" + index)) === null || _k === void 0 ? void 0 : _k.appendChild(newP);
    let newPreis = document.createElement("p");
    newPreis.innerHTML = anderebiere[index].preis;
    (_l = document.getElementById("atikelA" + index)) === null || _l === void 0 ? void 0 : _l.appendChild(newPreis);
    let newB = document.createElement("input");
    newB.value = "Jetzt kaufen";
    newB.type = "submit";
    (_m = document.getElementById("atikelA" + index)) === null || _m === void 0 ? void 0 : _m.appendChild(newB);
}
