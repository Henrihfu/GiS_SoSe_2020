"use strict";
let sendButton = document.getElementById("Sendebutton");
sendButton.addEventListener("click", sendReservierung);
async function sendReservierung() {
    let inputField = document.getElementById("name");
    let reservierung = JSON.parse(localStorage.getItem("reservierungen"));
    reservierung.name = inputField.value.trim();
    await fetch("http://127.0.0.1:8100/reservierung", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(reservierung)
    });
    window.location.href = "http://127.0.0.1:5500/Test/verleih.html";
}
//# sourceMappingURL=scriptreservierung.js.map