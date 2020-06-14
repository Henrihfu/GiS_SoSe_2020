namespace namespace07 {


    let kategorien: string[] = ["Weizenbier", "Anderebiere"];

    seitegenerieren();

    async function seitegenerieren(): Promise<void> {

        await communicate("save.json");
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

    }

    let anzahl: number = 0;


    let newZ: HTMLDivElement = document.createElement("div");
    newZ.id = "anz";

    function kaufen(_event: Event): void {
        produktZeahler();

        if (anzahl < 1) {
            document.getElementById("header")?.appendChild(newZ);
        }
        anzahl = localStorage.produktZeahler;
        newZ.innerHTML = "" + anzahl;
 
        let stringID: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("id")!;
        let arrayID: string[] = stringID.split("artikel");


        setSummme(artikel[parseInt(arrayID[1])].preis);
        console.log(localStorage.setSumme);

        gekauft(arrayID[1]);

    }


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
                //nur Gartenartikel anzeigfen
                (<HTMLDivElement>document.getElementById("kategorie1")).style.display = "none";
                (<HTMLDivElement>document.getElementById("kategorie2")).style.display = "flex";
                (<HTMLElement>document.getElementById("Bier1")).style.display = "none";
                (<HTMLElement>document.getElementById("Bier2")).style.display = "flex";
                console.log("Anderebiere");
                break;
            case "a2":
                //alles anzeigen
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
    function setSummme(_preis: number): void {
        if (localStorage.setSumme) {
            localStorage.setSumme = Number(localStorage.setSumme) + _preis;
        } else {
            localStorage.setSumme = _preis;
        }
    }
    function produktZeahler(): void {
        if (localStorage.produktZeahler) {
            localStorage.produktZeahler = Number(localStorage.produktZeahler) + 1;
        } else {
            localStorage.produktZeahler = 1;
        }

    }
    function gekauft(_id: string): void {
        console.log(localStorage.gekauft);
        if (localStorage.gekauft) {
            if (localStorage.gekauft != "undefined" ) {
                localStorage.gekauft = localStorage.gekauft + "," + _id;
            } else {
                localStorage.gekauft = _id;
            }
           
        }
        else {
            localStorage.gekauft = _id;
        }
        
    }
}  