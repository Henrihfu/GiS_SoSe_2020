namespace Aufgabe09 {
    
    let formData: FormData;

    let buttonActionHtml: HTMLButtonElement = <HTMLButtonElement> document.getElementById("htmlBut");
    buttonActionHtml.addEventListener("click", handleClickHtml);

    let submitBut: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonBut");
    submitBut.addEventListener("click", handleClickJson);

    async function handleClickHtml(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://aufgabe08gis2020.herokuapp.com";
        url += "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    
    async function handleClickJson(): Promise<void> {

        formData = new FormData(document.forms[0]);
        let url: string = "https://aufgabe08gis2020.herokuapp.com";
        url += "/json";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.json();        
        console.log(responseText);
        
    }
}