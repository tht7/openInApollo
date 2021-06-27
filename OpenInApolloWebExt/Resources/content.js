
async function loadSettings() {
    return browser.storage.sync.get({
        "beAggressive": false,
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
    if (settings.beAggressive) {
        checkDOMForBanner();
    }
    
});
let popupCounter = 0;
function checkDOMForPopUp()
{
    popupCounter++;
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
    } else if (popupCounter < 10000)
        setTimeout( checkDOMForPopUp, 300 );
}
checkDOMForPopUp();

let bannerCounter = 0;
function checkDOMForBanner()
{
    bannerCounter++;
    // check for any new element being inserted here,
    // or a particular node being modified
    const topButton = document.querySelector(".TopButton.TopNav__topButton.m-visible");
    const bannerButton = document.querySelector(".XPromoPill__openButton");
    
    if (topButton) {
        topButton.href = location.href.replace("https://", "apollo://");
    }
    if(bannerButton) {
        bannerButton.href = location.href.replace("https://", "apollo://");
    }
    if (popupCounter < 10000) {
        setTimeout( checkDOMForBanner, 1600 );
    }
}


