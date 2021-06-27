
async function loadSettings() {
    return browser.storage.sync.get({
        "beAgressive": false,
        "alwaysOpenInApollo": false
    });
}

function openInApollo() {
    location.href = location.href.replace("https://", "apollo://");
}

loadSettings().then(settings => {
    if (settings.alwaysOpenInApollo) {
        openInApollo();
    }
});
let counter = 0;
function checkDOMChange()
{
    counter++;
    // check for any new element being inserted here,
    // or a particular node being modified
    const element = document.querySelector(".XPromoPopup__actions");
    
    if (element) {
        let bro = document.querySelectorAll(".XPromoPopup__action")[1];
        bro.style['margin-bottom'] = '16px';
        const me = bro.cloneNode(true);
        me.querySelector('.XPromoPopup__safari').src = "https://apolloapp.io/assets/images/apollo-icon.svg";
        me.querySelector('.XPromoPopup__actionTitle').innerText = "Apollo";
        const butt = me.querySelector('.XPromoPopup__actionButton');
        butt.innerText = "Open";
        butt.onclick = openInApollo;
        element.appendChild( me );
    } else if (counter < 10000)
        setTimeout( checkDOMChange, 300 );
}
checkDOMChange();

