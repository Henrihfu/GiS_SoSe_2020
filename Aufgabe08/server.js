"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    //Konsolenausgabe
    console.log("Starting server");
    //Variable port + Zuweisung
    let port = Number(process.env.PORT);
    //Überprüfung des Port und Festlegung
    if (!port)
        port = 8100;
    //Erstellung Server
    let server = Http.createServer();
    //Ein Handler wird hinzugefügt
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Server "hört" auf port
    server.listen(port);
    //Konsolenausgabe
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Konsolenausgabe
        console.log("I hear voices!");
        //Parameter für den Reponse-Header
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Ausgabe der URL
        _response.write(_request.url);
        //Ende Response
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map