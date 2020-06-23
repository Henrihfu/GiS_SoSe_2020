import * as Http from "http";

export namespace A08Server {
    //Konsolenausgabe
  console.log("Starting server");
    //Variable port + Zuweisung
  let port: number = Number(process.env.PORT);
    //Überprüfung des Port und Festlegung
  if (!port)
    port = 8100;
    //Erstellung Server
  let server: Http.Server = Http.createServer();
    //Ein Handler wird hinzugefügt
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
    //Server "hört" auf port
  server.listen(port);

    //Konsolenausgabe
  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
      //Konsolenausgabe
    console.log("I hear voices!");
      //Parameter für den Reponse-Header
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
      //Ausgabe der URL
    _response.write(_request.url);
    console.log(_request.url);
      //Ende Response
    _response.end();
  }
}