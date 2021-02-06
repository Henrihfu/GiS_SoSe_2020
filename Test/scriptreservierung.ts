
let sendButton: HTMLInputElement = <HTMLInputElement>document.getElementById("Sendebutton");
sendButton.addEventListener("click", sendReservierung);

async function sendReservierung (): Promise<void> {
    let inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
    let reservierung: Reservierungen = JSON.parse(<string>localStorage.getItem("reservierungen"));
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
