let winInstance;
function setWindowInstance(nwWin = false){
    if(nwWin) winInstance = nwWin
}

function getWindowInstance(){
    return winInstance;
}

function openCanvasOnFullScreen(){
    let nwWin = getWindowInstance();
    nwWin.maximize();
    $("#drawr-container canvas").attr({width:globalThis.screen.availWidth, height:globalThis.screen.availHeight}).width(globalThis.screen.availWidth).height(globalThis.screen.availHeight);
}

function minimizeCanvas(){
    let nwWin = (winInstance != undefined || winInstance != null || winInstance != '') ? winInstance : getWindowInstance();
    nwWin.restore();   
}

/*
function test(nwWin= false, nwWinwidth, nwWinheight) {
    $("#drawr-container canvas").attr({width:nwWinwidth, height:nwWinheight}).width(nwWinwidth).height(nwWinheight);
}
*/