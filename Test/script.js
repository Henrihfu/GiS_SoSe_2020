"use strict";
localStorage.clear();
generieren();
// schleife zum seite generieren 
async function generieren() {
    await communicate("http://127.0.0.1:8100/gegenstand");
    console.log(gegenstand);
    for (let index = 0; index < gegenstand.length; index++) {
        // Estellen von Div Elementen 
        let newDiv = document.createElement("div");
        // Div id zuweisen
        newDiv.id = index.toString();
        newDiv.className = gegenstand[index].status;
        document.getElementById("kategorie1")?.appendChild(newDiv);
        // Bild hinzufügen
        let newImg = document.createElement("img");
        newImg.src = gegenstand[index].bild;
        newDiv.appendChild(newImg);
        // Titel hinzugefügt 
        let newH = document.createElement("h2");
        newH.innerHTML = gegenstand[index].titel;
        newDiv.appendChild(newH);
        //beschreibung hinzugefügt 
        let newP = document.createElement("p");
        newP.innerHTML = gegenstand[index].beschreibung;
        newDiv.appendChild(newP);
        // gebuehr hinzugefügt 
        let newPreis = document.createElement("p");
        newPreis.innerHTML = gegenstand[index].gebuehr.toFixed(2) + "€";
        newDiv.appendChild(newPreis);
        // Button hinzugefügt 
        let newB = document.createElement("input");
        newB.value = "Reservieren";
        newB.type = "submit";
        if (gegenstand[index].status === "ausgeliehen" || gegenstand[index].status === "reserviert") {
            newB.disabled = true;
        }
        newDiv.appendChild(newB);
        // eventlistener auf den button anwenden 
        newB.addEventListener("click", reservieren);
    }
}
// Funktion fur den Reservier-button
function reservieren(_event) {
    let ausgewaehlterGegenstand = gegenstand[Number.parseInt(this.parentElement?.id)];
    //1. In Localstorage packen
    let reservierungen = { ids: [] };
    if (localStorage.getItem("reservierungen")) {
        reservierungen = JSON.parse(localStorage.getItem("reservierungen"));
        reservierungen.ids.push(ausgewaehlterGegenstand._id);
    }
    else {
        reservierungen.ids.push(ausgewaehlterGegenstand._id);
    }
    localStorage.setItem("reservierungen", JSON.stringify(reservierungen));
    //2. Optisch verändern DONE
    let containerDiv = this.parentElement;
    containerDiv.className = "ausgewaehlt";
    //3. Preis zusammenrechnen DONE
    let priceP = document.getElementById("preis");
    let aktuellerPrice = Number.parseFloat(priceP.innerHTML);
    let neuerPrice = aktuellerPrice + ausgewaehlterGegenstand.gebuehr;
    priceP.innerHTML = neuerPrice.toString();
}
//# sourceMappingURL=script.js.map