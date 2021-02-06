"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
let port = Number(process.env.PORT);
console.log(port);
let databaseUrl = "mongodb+srv://MeinUser:MeinUser@henri-gis.ud0j4.mongodb.net/AStA-Verleih?retryWrites=true&w=majority";
let gegenstandsCollection;
if (!port) {
    port = 8100;
}
serverInit(port);
async function serverInit(_port) {
    let server = Http.createServer();
    await connectToDB(databaseUrl);
    server.addListener("request", handleRequest);
    server.addListener("listening", function () {
        console.log("listening on Port: " + _port);
    });
    server.listen(_port);
}
async function connectToDB(_url) {
    let mongoClient = new Mongo.MongoClient(_url, { useUnifiedTopology: true });
    await mongoClient.connect();
    if (mongoClient.isConnected()) {
        console.log("DB is connected");
    }
    gegenstandsCollection = mongoClient.db("AStA-Verleih").collection("Gegenstände");
}
async function handleRequest(req, res) {
    console.log(req.method);
    if (req.method === "POST") {
        handleReservierung(req, res);
    }
    else if (req.method === "GET") {
        if (req.url) {
            let url = Url.parse(req.url, true);
            let pathnameArray = url.pathname?.split("/");
            if (url.pathname === "/gegenstand") {
                getItems(res);
            }
            else if (pathnameArray[1] === "statusAnpassen") {
                updateStatus(res, pathnameArray);
            }
        }
    }
}
async function getItems(res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    let itemsCursor = await gegenstandsCollection.find();
    let itemsArray = await itemsCursor.toArray();
    res.write(JSON.stringify(itemsArray));
    res.end();
}
async function handleReservierung(req, res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", async () => {
        let reservierung = JSON.parse(body);
        await updateDbReservierungen(reservierung);
        res.end();
    });
}
async function updateDbReservierungen(reservierung) {
    for (let i = 0; i < reservierung.ids.length; i++) {
        let id = new Mongo.ObjectID(reservierung.ids[i].toString());
        gegenstandsCollection.updateOne({ "_id": id }, { $set: { "status": "reserviert", "ausleiher": reservierung.name } });
    }
}
async function updateStatus(res, pathnameArray) {
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    let id = new Mongo.ObjectId(pathnameArray[2]);
    let gegenstandsCursor = await gegenstandsCollection.find({ _id: id });
    let gegenstandsArray = await gegenstandsCursor.toArray();
    let gegenstand = JSON.parse(JSON.stringify(gegenstandsArray[0]));
    console.log(gegenstand.status);
    if (gegenstand.status === "reserviert") {
        gegenstandsCollection.updateOne({ "_id": id }, { $set: { "status": "ausgeliehen" } });
    }
    else if (gegenstand.status === "ausgeliehen") {
        console.log("ausgliehen now");
        gegenstandsCollection.updateOne({ "_id": id }, { $set: { "status": "frei", "ausleiher": "" } });
    }
    res.end();
}
//# sourceMappingURL=server.js.map