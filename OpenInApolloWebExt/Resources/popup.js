
async function loadSettings() {
    console.log("loading");
    return browser.storage.sync.get({
        "beAgressive": false,
        "alwaysOpenInApollo": false
    });
}


document.addEventListener('DOMContentLoaded', async function () {
    console.log("initing");
    // change listeners
    document.getElementById("alwaysOpenInApollo").addEventListener("change", saveSettings);
    
    const settings = await loadSettings();
    const alwaysOpenInApollo = document.querySelector("#alwaysOpenInApollo");
//    const beAgressive = document.querySelect("#beAggressive");
    alwaysOpenInApollo.checked = settings.alwaysOpenInApollo;
});


function saveSettings() {
    console.log("saving!");
    setTimeout( ()=> {
        const alwaysOpenInApollo = document.querySelector("#alwaysOpenInApollo").checked;
        browser.storage.sync.set({
            alwaysOpenInApollo
        });
    }, 100);
    
}

