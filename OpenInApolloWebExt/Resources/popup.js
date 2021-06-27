
async function loadSettings() {
    console.log("loading");
    return browser.storage.sync.get({
        "beAggressive": false,
        "alwaysOpenInApollo": false
    });
}


document.addEventListener('DOMContentLoaded', async function () {
    console.log("initing");
    // change listeners
    document.getElementById("alwaysOpenInApollo").addEventListener("change", saveSettings);
    document.getElementById("beAggressive").addEventListener("change", saveSettings);
    
    const settings = await loadSettings();
    const alwaysOpenInApollo = document.querySelector("#alwaysOpenInApollo");
    const beAggressive = document.querySelector("#beAggressive");
    alwaysOpenInApollo.checked = settings.alwaysOpenInApollo;
    beAggressive.checked = settings.beAggressive;
});


function saveSettings() {
    console.log("saving!");
    setTimeout( ()=> {
        const alwaysOpenInApollo = document.querySelector("#alwaysOpenInApollo").checked;
        const beAggressive = document.querySelector("#beAggressive").checked;
        browser.storage.sync.set({
            alwaysOpenInApollo,
            beAggressive
        });
    }, 100);
    
}

