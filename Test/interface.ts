interface Gegenstand {
    _id: number;
    bild: string;
    titel: string;
    beschreibung: string;
    gebuehr: number;
    status: string;
    ausleiher: string;
}
let gegenstand: Gegenstand[];


async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let response2: JSON = await response.json();
    gegenstand = JSON.parse(JSON.stringify(response2));
    
}

interface Reservierungen {
    ids: number[];
    name?: string;
}


    
