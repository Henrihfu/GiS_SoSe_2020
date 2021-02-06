"use strict";
initalizeAsta();
async function initalizeAsta() {
    await communicate("http://127.0.0.1:8100/gegenstand");
    console.log(gegenstand);
    generateGegenstaende();
}
function generateGegenstaende() {
    let gegestandsContainer = document.getElementById("gegestandsContainer");
    for (let i = 0; i < gegenstand.length; i++) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = gegenstand[i].bild;
        let gegestandTitel = document.createElement("h2");
        gegestandTitel.innerHTML = gegenstand[i].titel;
        let status = document.createElement("p");
        status.innerHTML = "Status: " + gegenstand[i].status;
        let ausgeliehenVon = document.createElement("p");
        ausgeliehenVon.innerHTML = "ausgeliehen von: " + gegenstand[i].ausleiher;
        let button = document.createElement("button");
        button.innerHTML = "Status ändern";
        button.addEventListener("click", statusAnpassen);
        if (gegenstand[i].status === "frei") {
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
async function statusAnpassen() {
    // console.log(this.parentElement.children[1].innerHTML);
    let clickedGegenstand = gegenstand.find(gegenstand => gegenstand.titel === this.parentElement.children[1].innerHTML);
    let url = "http://127.0.0.1:8100/statusAnpassen/" + clickedGegenstand._id;
    console.log(url);
    await fetch(url);
    window.location.href = "http://127.0.0.1:5500/test/astaseite.html";
}
//# sourceMappingURL=astaScript.js.map