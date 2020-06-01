interface ArtikelWeizen {
    img: string;
    name: string;
    description: string;
    preis: number;
}

let artikel1: ArtikelWeizen = { img: "Franziskaner.jpg", name: "Franziskaner", description: "Schmeckt Lecker", preis: "2,50€" };
let artikel2: ArtikelWeizen = { img: "Meckatzer.jpg", name: "Meckatzer", description: "Schmeckt Lecker", preis: "2,50€" };
let artikel3: ArtikelWeizen = { img: "Paulaner.jpg", name: "Paulaner", description: "Schmeckt Lecker", preis: "2,50€" };
let artikel4: ArtikelWeizen = { img: "Maisels.jpg", name: "Maisels", description: "Schmeckt Lecker", preis: "2,50€" };
let artikel5: ArtikelWeizen = { img: "Schöfferhoffer.jpg", name: "Schöfferhoffer", description: "Schmeckt Lecker", preis: "2,50€" };
let artikel6: ArtikelWeizen = { img: "Erdinger.jpg", name: "Erdinger", description: "Schmeckt Lecker", preis: "2,50€" };



let artikelWeizen: ArtikelWeizen[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];



interface ArtikelAnderebiere {
    img: string;
    name: string;
    description: string;
    preis: number;
}

let artikel7: ArtikelAnderebiere = { img: "Augustiner.jpg", name: "Augustiner", description: "Schmeckt Lecker", preis: "2,50" };
let artikel8: ArtikelAnderebiere = { img: "Tegernseer.jpg", name: "Tegernseer", description: "Schmeckt Lecker", preis: "2,50" };
let artikel9: ArtikelAnderebiere = { img: "Meckatzerhell.jpg", name: "Meckatzer-Hell", description: "Schmeckt Lecker", preis: "2,50" };
let artikel10: ArtikelAnderebiere = { img: "Chiemseer.jpg", name: "Chiemseer", description: "Schmeckt Lecker", preis: "2,50" };
let artikel11: ArtikelAnderebiere = { img: "Büble.jpg", name: "Büble", description: "Schmeckt Lecker", preis: "2,50" };
let artikel12: ArtikelAnderebiere = { img: "Michel.jpg", name: "Michel", description: "Schmeckt Lecker", preis: "2,50" };



let artikelAnderebiere: ArtikelAnderebiere[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];

for (let index: number = 0; index < artikelWeizen.length; index++) {
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