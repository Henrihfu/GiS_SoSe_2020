"use strict";
var namespaceprüfung;
(function (namespaceprüfung) {
    async function communicate(_url) {
        let response = await fetch(_url);
        let response2 = await response.json();
        namespaceprüfung.artikel = JSON.parse(JSON.stringify(response2));
    }
    namespaceprüfung.communicate = communicate;
})(namespaceprüfung || (namespaceprüfung = {}));
//# sourceMappingURL=interface.js.map