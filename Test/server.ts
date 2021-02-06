
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


let port: number = Number(process.env.Port);
let databaseUrl: string = "mongodb+srv://MeinUser:MeinUser@henri-gis.ud0j4.mongodb.net/AStA-Verleih?retryWrites=true&w=majority";
let gegenstandsCollection: Mongo.Collection;


if (!port) {
    port = 8100;
}

serverInit(port);

async function serverInit(_port: number): Promise<void> {
    let server: Http.Server = Http.createServer();
    await connectToDB(databaseUrl);

    server.addListener("request", handleRequest);

    server.addListener("listening", function (): void {
        console.log("listening on Port: " + _port);
    });

    server.listen(_port);
}

async function connectToDB(_url: string): Promise<void> {
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, { useUnifiedTopology: true });
    await mongoClient.connect();

    if (mongoClient.isConnected()) {
        console.log("DB is connected");
    }

    gegenstandsCollection = mongoClient.db("AStA-Verleih").collection("Gegenstände");
}

async function handleRequest(req: Http.IncomingMessage, res: Http.ServerResponse): Promise<void> {
    console.log(req.method);
    if (req.method === "POST") {
        handleReservierung(req, res);
    } else if (req.method === "GET") {
        if (req.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(req.url, true);
            let pathnameArray: string[] = <string[]>url.pathname?.split("/");

            if (url.pathname === "/gegenstand") {
                getItems(res);
            } else if (pathnameArray[1] === "statusAnpassen") {
                updateStatus(res, pathnameArray);
            }
        }
    }
}

async function getItems(res: Http.ServerResponse): Promise<void> {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    let itemsCursor: Mongo.Cursor<string> = await gegenstandsCollection.find();
    let itemsArray: string[] = await itemsCursor.toArray();
    res.write(JSON.stringify(itemsArray));
    res.end();
}

async function handleReservierung(req: Http.IncomingMessage, res: Http.ServerResponse): Promise<void> {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");

    let body: string = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", async () => {
        let reservierung: Reservierungen = JSON.parse(body);
        await updateDbReservierungen(reservierung);
        res.end();
    });
}

async function updateDbReservierungen(reservierung: Reservierungen): Promise<void> {
    for (let i: number = 0; i < reservierung.ids.length; i++) {
        let id: Mongo.ObjectID = new Mongo.ObjectID(reservierung.ids[i].toString());
        gegenstandsCollection.updateOne({ "_id": id }, { $set: { "status": "reserviert", "ausleiher": reservierung.name } });
    }
}

async function updateStatus(res: Http.ServerResponse, pathnameArray: string[]): Promise<void> {
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");

    let id: Mongo.ObjectId = new Mongo.ObjectId(pathnameArray[2]);

    let gegenstandsCursor: Mongo.Cursor<string> = await gegenstandsCollection.find({ _id: id });
    let gegenstandsArray: string[] = await gegenstandsCursor.toArray();
    let gegenstand: Gegenstand = JSON.parse(JSON.stringify(gegenstandsArray[0]));

    console.log(gegenstand.status);
    if (gegenstand.status === "reserviert") {
        gegenstandsCollection.updateOne({"_id": id}, {$set: {"status": "ausgeliehen"}});
    } else if (gegenstand.status === "ausgeliehen") {
        console.log("ausgliehen now");
        gegenstandsCollection.updateOne({"_id": id}, {$set: {"status": "frei", "ausleiher": ""}});
    }
    res.end();
}