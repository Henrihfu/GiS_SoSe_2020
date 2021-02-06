
initalizeAsta();

async function initalizeAsta(): Promise<void> {
    await communicate("http://127.0.0.1:8100/gegenstand");
    console.log(gegenstand);

    generateGegenstaende()
}

function generateGegenstaende(): void {
    let gegestandsContainer: HTMLElement = document.getElementById("gegestandsContainer");
    for(let i: number = 0; i < gegenstand.length; i++){
        let div = document.createElement("div");

        let img: HTMLImageElement = document.createElement("img");
        img.src = gegenstand[i].bild;

        let gegestandTitel: HTMLHeadingElement = document.createElement("h2");
        gegestandTitel.innerHTML = gegenstand[i].titel;

        let status: HTMLParagraphElement = document.createElement("p");
        status.innerHTML = "Status: " + gegenstand[i].status;

        let ausgeliehenVon: HTMLParagraphElement = document.createElement("p");
        ausgeliehenVon.innerHTML = "ausgeliehen von: " + gegenstand[i].ausleiher;

        let button: HTMLButtonElement = document.createElement("button");
        button.innerHTML = "Status ändern";
        button.addEventListener("click", statusAnpassen);
        if(gegenstand[i].status === "frei"){
            button.disabled = true;
        }

        div.append(img);
        div.append(gegestandTitel);
        div.append(status);
        div.append(ausgeliehenVon);
        div.append(button);

        gegestandsContainer.append(div);
    }
}

async function statusAnpassen(): Promise<void> {
    // console.log(this.parentElement.children[1].innerHTML);
    let clickedGegenstand: Gegenstand = gegenstand.find(gegenstand => gegenstand.titel === this.parentElement.children[1].innerHTML);
    let url: string = "http://127.0.0.1:8100/statusAnpassen/" + clickedGegenstand._id;
    console.log(url);
    await fetch(url);
    window.location.href = "http://127.0.0.1:5500/test/astaseite.html";
}