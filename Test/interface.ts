namespace Test {

    export interface Artikel {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kartegorie: string;

    }
    export let artikel: Artikel[];


    export async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let response2: JSON = await response.json();
        artikel = JSON.parse(JSON.stringify(response2));
        
    }


    
}