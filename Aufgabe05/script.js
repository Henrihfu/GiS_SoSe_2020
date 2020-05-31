"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
var franziskaner = {
    bild: "Franziskaner.jpg",
    name: "Franziskaner",
    beschreibung: "Schmeckt Lecker",
    preis: "2,50€"
};
var meckatzer = {
    bild: "Meckatzer.jpg",
    name: "Meckatzer",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
var paulaner = {
    bild: "Paulaner.jpg",
    name: "Paulaner",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
var maisels = {
    bild: "Maisels.jpg",
    name: "Maisels",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
var schöfferhofer = {
    bild: "Schöfferhofer.jpg",
    name: "Schöfferhofer",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
var oettinger = {
    bild: "Oettinger.jpg",
    name: "Oettinger",
    beschreibung: "Wenns sein muss..",
    preis: "0,11€"
};
var erdinger = {
    bild: "Erdinger.jpg",
    name: "Erdinger",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
var urweisse = {
    bild: "Urweisse.jpg",
    name: "Urweisse",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
var rothaus = {
    bild: "Rothaus.jpg",
    name: "Rothaus",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
var alpirsbacher = {
    bild: "Alpirsbacher.jpg",
    name: "Alpirsbacher",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
var andechs = {
    bild: "Andechs.jpg",
    name: "Andechs",
    beschreibung: "Schmeckt au Lecker",
    preis: "2,50€"
};
var alkoholfrei = {
    bild: "Alkoholfrei.jpg",
    name: "Alkoholfrei",
    beschreibung: "...",
    preis: "40,00€"
};
var augustiner = {
    bild: "Augustiner.jpg",
    name: "Augustiner",
    beschreibung: "Schmeckt lecker",
    preis: "2,50€"
};
var tegernseer = {
    bild: "Tegernseer.jpg",
    name: "Tegernseer",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
var meckatzerhell = {
    bild: "Meckatzerhell.jpg",
    name: "Meckatzerhell",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
var chiemseer = {
    bild: "Chiemseer.jpg",
    name: "Chiemseer",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
var büble = {
    bild: "Büble.jpg",
    name: "Büble",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
var michel = {
    bild: "Michel.png",
    name: "Michel",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
var corona = {
    bild: "Corona.jpg",
    name: "Corona",
    beschreibung: "Grad schmeckts besonders Lecker",
    preis: "2,50€"
};
var desperados = {
    bild: "Desperados.jpg",
    name: "Desperados",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
var maidle = {
    bild: "Maidle.jpg",
    name: "Maidle",
    beschreibung: "Ist nur 0,33l da bekommst gleich 6 Stück",
    preis: "5,99€"
};
var hochdorfer = {
    bild: "Hochdorfer.jpg",
    name: "Hochdorfer",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
var gösser = {
    bild: "Gösser.jpg",
    name: "Gösser",
    beschreibung: "Schmeckt au lecker",
    preis: "2,50€"
};
var grape = {
    bild: "Grape.jpg",
    name: "Schöfferhofer Grapefruit",
    beschreibung: "Schmeckt au lecker.",
    preis: "2,50€"
};
var weizenbiere = [franziskaner, meckatzer, paulaner, maisels, schöfferhofer, oettinger, erdinger, urweisse, rothaus, alpirsbacher, andechs, alkoholfrei];
var anderebiere = [augustiner, tegernseer, meckatzerhell, chiemseer, büble, michel, corona, desperados, maidle, hochdorfer, gösser, grape];
for (var index = 0; index < weizenbiere.length; index++) {
    var newDiv = document.createElement("div");
    newDiv.id = "atikelW" + index;
    (_a = document.getElementById("Weizenbier")) === null || _a === void 0 ? void 0 : _a.appendChild(newDiv);
    var newImg = document.createElement("img");
    newImg.src = weizenbiere[index].bild;
    (_b = document.getElementById("atikelW" + index)) === null || _b === void 0 ? void 0 : _b.appendChild(newImg);
    var newW = document.createElement("h2");
    newW.innerHTML = weizenbiere[index].name;
    (_c = document.getElementById("atikelW" + index)) === null || _c === void 0 ? void 0 : _c.appendChild(newW);
    var newP = document.createElement("p");
    newP.innerHTML = weizenbiere[index].beschreibung;
    (_d = document.getElementById("atikelW" + index)) === null || _d === void 0 ? void 0 : _d.appendChild(newP);
    var newPreis = document.createElement("p");
    newPreis.innerHTML = weizenbiere[index].preis;
    (_e = document.getElementById("atikelW" + index)) === null || _e === void 0 ? void 0 : _e.appendChild(newPreis);
    var newB = document.createElement("input");
    newB.value = "Jetzt kaufen";
    newB.type = "submit";
    (_f = document.getElementById("atikelW" + index)) === null || _f === void 0 ? void 0 : _f.appendChild(newB);
}
for (var index = 0; index < anderebiere.length; index++) {
    var newDiv = document.createElement("div");
    newDiv.id = "atikelA" + index;
    (_g = document.getElementById("AndereBiere")) === null || _g === void 0 ? void 0 : _g.appendChild(newDiv);
    var newImg = document.createElement("img");
    newImg.src = anderebiere[index].bild;
    (_h = document.getElementById("atikelA" + index)) === null || _h === void 0 ? void 0 : _h.appendChild(newImg);
    var newH = document.createElement("h2");
    newH.innerHTML = anderebiere[index].name;
    (_j = document.getElementById("atikelA" + index)) === null || _j === void 0 ? void 0 : _j.appendChild(newH);
    var newP = document.createElement("p");
    newP.innerHTML = anderebiere[index].beschreibung;
    (_k = document.getElementById("atikelA" + index)) === null || _k === void 0 ? void 0 : _k.appendChild(newP);
    var newPreis = document.createElement("p");
    newPreis.innerHTML = anderebiere[index].preis;
    (_l = document.getElementById("atikelA" + index)) === null || _l === void 0 ? void 0 : _l.appendChild(newPreis);
    var newB = document.createElement("input");
    newB.value = "Jetzt kaufen";
    newB.type = "submit";
    (_m = document.getElementById("atikelA" + index)) === null || _m === void 0 ? void 0 : _m.appendChild(newB);
}
