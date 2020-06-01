interface ArtikelWeizen {
    bild: string;
    name: string;
    beschreibung: string;
    preis: string;
}

let artikel1: ArtikelWeizen = { bild: "Franziskaner.jpg", name: "Franziskaner", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikel2: ArtikelWeizen = { bild: "Meckatzer.jpg", name: "Meckatzer", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikel3: ArtikelWeizen = { bild: "Paulaner.jpg", name: "Paulaner", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikel4: ArtikelWeizen = { bild: "Maisels.jpg", name: "Maisels", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikel5: ArtikelWeizen = { bild: "Schöfferhofer.jpg", name: "Schöfferhoffer", beschreibung: "Schmeckt Lecker", preis: "2,50€" };
let artikel6: ArtikelWeizen = { bild: "Erdinger.jpg", name: "Erdinger", beschreibung: "Schmeckt Lecker", preis: "2,50€" };



let artikelWeizen: ArtikelWeizen[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];



interface ArtikelAnderebiere {
    bild: string;
    name: string;
    beschreibung: string;
    preis: string;
}

let artikel7: ArtikelAnderebiere = { bild: "Augustiner.jpg", name: "Augustiner", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikel8: ArtikelAnderebiere = { bild: "Tegernseer.jpg", name: "Tegernseer", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikel9: ArtikelAnderebiere = { bild: "Meckatzerhell.jpg", name: "Meckatzer-Hell", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikel10: ArtikelAnderebiere = { bild: "Chiemseer.jpg", name: "Chiemseer", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikel11: ArtikelAnderebiere = { bild: "Büble.jpg", name: "Büble", beschreibung: "Schmeckt Lecker", preis: "2,50" };
let artikel12: ArtikelAnderebiere = { bild: "Michel.png", name: "Michel", beschreibung: "Schmeckt Lecker", preis: "2,50" };



let artikelAnderebiere: ArtikelAnderebiere[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];

for (let index: number = 0; index < artikelWeizen.length; index++) {
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