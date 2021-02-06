"use strict";
let gegenstand;
async function communicate(_url) {
    let response = await fetch(_url);
    let response2 = await response.json();
    gegenstand = JSON.parse(JSON.stringify(response2));
}
//# sourceMappingURL=interface.js.map