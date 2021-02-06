
let sendButton: HTMLInputElement = <HTMLInputElement>document.getElementById("Sendebutton");
sendButton.addEventListener("click", sendReservierung);

async function sendReservierung (): Promise<void> {
    let inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
    let reservierung: Reservierungen = JSON.parse(<string>localStorage.getItem("reservierungen"));
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
