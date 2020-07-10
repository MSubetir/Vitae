document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    StatusBar.styleBlackTranslucent();

    document.addEventListener("backbutton", ev => {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
    }, false);
}