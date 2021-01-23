"use strict";
var Test;
(function (Test) {
    async function communicate(_url) {
        let response = await fetch(_url);
        let response2 = await response.json();
        Test.artikel = JSON.parse(JSON.stringify(response2));
    }
    Test.communicate = communicate;
})(Test || (Test = {}));
//# sourceMappingURL=interface.js.map