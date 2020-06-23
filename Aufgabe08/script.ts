namespace Aufgabe08 {
    
    let submitBut: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submitBut");
    submitBut.addEventListener("click", communicate);

    async function communicate(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://aufgabe08gis2020.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url, {method: "get"});
        let responseString: string = await response.text();
        console.log(responseString);

        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
}