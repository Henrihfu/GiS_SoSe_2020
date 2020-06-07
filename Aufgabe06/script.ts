interface Artikel {
    bild: string;
    name: string;
    beschreibung: string;
    preis: number;
    kategorie: string;
}

let franziskaner: Artikel = { bild: "Franziskaner.jpg", name: "Franziskaner", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let meckatzer: Artikel = { bild: "Meckatzer.jpg", name: "Meckatzer", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let paulaner: Artikel = { bild: "Paulaner.jpg", name: "Paulaner", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let maisels: Artikel = { bild: "Maisels.jpg", name: "Maisels", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let schöfferhofer: Artikel = { bild: "Schöfferhofer.jpg", name: "Schöfferhoffer", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };
let erdinger: Artikel = { bild: "Erdinger.jpg", name: "Erdinger", beschreibung: "Schmeckt Lecker", preis: 2.50, kategorie: "Weizenbier" };



let augustiner: Artikel = { bild: "Augustiner.jpg", name: "Augustiner", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let tegernseer: Artikel = { bild: "Tegernseer.jpg", name: "Tegernseer", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let meckatzerhell: Artikel = { bild: "Meckatzerhell.jpg", name: "Meckatzer-Hell", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let chiemseer: Artikel = { bild: "Chiemseer.jpg", name: "Chiemseer", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let büble: Artikel = { bild: "Büble.jpg", name: "Büble", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };
let michel: Artikel = { bild: "Michel.png", name: "Michel", beschreibung: "Schmeckt Lecker", preis: 2.00, kategorie: "Anderebiere" };



let artikel: Artikel[] = [franziskaner, meckatzer, paulaner, maisels, schöfferhofer, erdinger, augustiner, tegernseer, meckatzerhell, chiemseer, büble, michel];

let kategorien: string[] = ["Weizenbier", "Anderebiere"];

for (let index: number = 0; index < artikel.length; index++) {

        
    let newDiv: HTMLDivElement = document.createElement("div");
    
    newDiv.id = "artikel" + index;

    if (artikel[index].kategorie == "Weizenbier") {
        document.getElementById("kategorie1")?.appendChild(newDiv);
    }
    else if (artikel[index].kategorie == "Anderebiere") {
        document.getElementById("kategorie2")?.appendChild(newDiv);
    }

    
    let newImg: HTMLImageElement = document.createElement("img");
    newImg.src = artikel[index].bild;
    newDiv.appendChild(newImg);

     
    let newH: HTMLElement = document.createElement("h2");
    newH.innerHTML = artikel[index].name;
    newDiv.appendChild(newH);

     
    let newP: HTMLElement = document.createElement("p");
    newP.innerHTML = artikel[index].beschreibung;
    newDiv.appendChild(newP);

     
    let newPreis: HTMLElement = document.createElement("p");
    newPreis.innerHTML = artikel[index].preis.toFixed(2) + "€";
    newDiv.appendChild(newPreis);

     
    let newB: HTMLInputElement = document.createElement("input");
    newB.value = "Jetzt kaufen";
    newB.type = "submit";
    newDiv.appendChild(newB); 
    newB.addEventListener("click", kaufen);

}
let anzahl: number = 0;
let summe: number = 0;


let newZ: HTMLDivElement = document.createElement("div");
newZ.id = "anz";



 
function kaufen(_event: Event): void {

     
    if (anzahl < 1) {
        document.getElementById("header")?.appendChild(newZ);
    }
    anzahl += 1;
    newZ.innerHTML = "" + anzahl;

     
    let test: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("id")!;
    let test2: string[] = test.split("artikel");
    console.log(parseInt(test2[1]));  
    summe += artikel[parseInt(test2[1])].preis;
    console.log(summe + "€");
}

//teilaufgabe2

let neuul: HTMLUListElement = document.createElement("ul");
document.getElementById("auswahl")?.appendChild(neuul);
for (let index: number = 0; index < kategorien.length + 1; index++) {
    let neuli: HTMLLIElement = document.createElement("li");
    let neua: HTMLAnchorElement = document.createElement("a");
    neua.href = "#";
    neua.id = "a" + index;

    if (kategorien.length > index) {
        neua.innerHTML = kategorien[index];
    } else {
        neua.innerHTML = "Alle Biere";
    }
    neuul.appendChild(neuli);
    neuli.appendChild(neua);
    neua.addEventListener("click", springen);
}


function springen(_event: Event): void {
    
    switch ((<HTMLAnchorElement>_event.currentTarget).getAttribute("id")) {
        case "a0":
            (<HTMLDivElement>document.getElementById("kategorie1")).style.display = "flex";
            (<HTMLDivElement>document.getElementById("kategorie2")).style.display = "none";
            (<HTMLElement>document.getElementById("Bier1")).style.display = "flex";
            (<HTMLElement>document.getElementById("Bier2")).style.display = "none";
            console.log("Weizenbier");
            break;
        case "a1":
            (<HTMLDivElement>document.getElementById("kategorie1")).style.display = "none";
            (<HTMLDivElement>document.getElementById("kategorie2")).style.display = "flex";
            (<HTMLElement>document.getElementById("Bier1")).style.display = "none";
            (<HTMLElement>document.getElementById("Bier2")).style.display = "flex";
            console.log("Anderebiere");
            break;
        case "a2":
            (<HTMLDivElement>document.getElementById("kategorie1")).style.display = "flex";
            (<HTMLDivElement>document.getElementById("kategorie2")).style.display = "flex";
            (<HTMLElement>document.getElementById("Bier1")).style.display = "flex";
            (<HTMLElement>document.getElementById("Bier2")).style.display = "flex";
            console.log("Alle Biere");
            break;
        default:
            break;
    }

}


