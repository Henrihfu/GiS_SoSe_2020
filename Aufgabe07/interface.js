"use strict";
var namespace07;
(function (namespace07) {
    async function communicate(_url) {
        let response = await fetch(_url);
        let response2 = await response.json();
        namespace07.artikel = JSON.parse(JSON.stringify(response2));
    }
    namespace07.communicate = communicate;
})(namespace07 || (namespace07 = {}));
//# sourceMappingURL=interface.js.map