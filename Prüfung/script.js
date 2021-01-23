"use strict";
var namespaceprüfung;
(function (namespaceprüfung) {
    seitegenerieren();
    async function seitegenerieren() {
        await namespaceprüfung.communicate("https://henrihfu.github.io/GiS_SoSe_2020/Prüfung/save.json");
        for (let index = 0; index < namespaceprüfung.artikel.length; index++) {
            //Erstellung Div Elemente
            let newDiv = document.createElement("div");
            //id zuweisen
            newDiv.id = "artikel" + index;
            //Bild erzeugen
            let newImg = document.createElement("img");
            newImg.src = namespaceprüfung.artikel[index].bild;
            newDiv.appendChild(newImg);
            //Titel erzeugen
            let newH = document.createElement("h2");
            newH.innerHTML = namespaceprüfung.artikel[index].titel;
            newDiv.appendChild(newH);
            //Beschreibung erzeugen
            let newP = document.createElement("p");
            newP.innerHTML = namespaceprüfung.artikel[index].beschreibung;
            newDiv.appendChild(newP);
            //Ausleihgebühr erzeugen
            let newGebuehr = document.createElement("p");
            newGebuehr.innerHTML = namespaceprüfung.artikel[index].ausleihgebühr.toFixed(2) + "€";
            newDiv.appendChild(newGebuehr);
            //Reservierungsbutton erzeugen
            let newB = document.createElement("input");
            newB.value = "Reservieren";
            newB.type = "submit";
            newDiv.appendChild(newB);
            // Eventlisener auf Button
            newB.addEventListener("click", kaufen);
        }
    }
})(namespaceprüfung || (namespaceprüfung = {}));
//# sourceMappingURL=script.js.map