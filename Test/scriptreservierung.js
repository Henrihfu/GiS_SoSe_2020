"use strict";
let sendButton = document.getElementById("Sendebutton");
sendButton.addEventListener("click", sendReservierung);
async function sendReservierung() {
    let inputField = document.getElementById("name");
    let reservierung = JSON.parse(localStorage.getItem("reservierungen"));
    reservierung.name = inputField.value.trim();
    await fetch("https://abgabegis.herokuapp.com/reservierung", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(reservierung)
    });
    window.location.href = "https://henrihfu.github.io/GiS_SoSe_2020/Test/verleih.html";
}
//# sourceMappingURL=scriptreservierung.js.map