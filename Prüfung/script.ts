namespace namespaceprüfung {

seitegenerieren();

async function seitegenerieren(): Promise<void> {

    await communicate("https://henrihfu.github.io/GiS_SoSe_2020/Prüfung/save.json");
    for (let index: number = 0; index < artikel.length; index++) {
        //Erstellung Div Elemente
        let newDiv: HTMLDivElement = document.createElement("div");
        //id zuweisen
        newDiv.id = "artikel" + index;
        
        //Bild erzeugen
        let newImg: HTMLImageElement = document.createElement("img");
        newImg.src = artikel[index].bild;
        newDiv.appendChild(newImg);
        //Titel erzeugen
        let newH: HTMLElement = document.createElement("h2");
        newH.innerHTML = artikel[index].titel;
        newDiv.appendChild(newH);
        //Beschreibung erzeugen
        let newP: HTMLElement = document.createElement("p");
        newP.innerHTML = artikel[index].beschreibung;
        newDiv.appendChild(newP);
        //Ausleihgebühr erzeugen
        let newGebuehr: HTMLElement = document.createElement("p");
        newGebuehr.innerHTML = artikel[index].ausleihgebühr.toFixed(2) + "€";
        newDiv.appendChild(newGebuehr);
        //Reservierungsbutton erzeugen
        let newB: HTMLInputElement = document.createElement("input");
        newB.value = "Reservieren";
        newB.type = "submit";
        newDiv.appendChild(newB);
        // Eventlisener auf Button
        newB.addEventListener("click", kaufen);
    }
}


}