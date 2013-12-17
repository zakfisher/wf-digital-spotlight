function detectBrowser() {
    var userAgent = window.navigator.userAgent;
    userAgent = userAgent.length === 0 ? 'Unknown' : userAgent;

    $bname = 'Unknown';
    $version = "0.0.0";
    $ub = "Unknown";

    if (userAgent.match('/(.*)MSIE(.*)/') && !userAgent.match('/(.*)Opera(.*)/')) {
        $bname = 'Internet Explorer';
        $ub = "MSIE";
    }
    if (userAgent.match('/(.*)Firefox(.*)/')) {
        $bname = 'Mozilla Firefox';
        $ub = "Firefox";
    }
    if (userAgent.match('/(.*)Chrome(.*)/')) {
        $bname = 'Google Chrome';
        $ub = "Chrome";
    }
    if (userAgent.match('/(.*)Safari(.*)/') && !userAgent.match('/(.*)Chrome(.*)/')) {
        $bname = 'Apple Safari';
        $ub = "Safari";
    }
    if (userAgent.match('/(.*)OPR(.*)/') || userAgent.match('/(.*)Opera(.*)/')) {
        $bname = 'Opera';
        $ub = "Opera";
    }
    if (userAgent.match('/(.*)Netscape(.*)/')) {
        $bname = 'Netscape';
        $ub = "Netscape";
    }
    if (userAgent.match('/(.*)Seamonkey(.*)/')) {
        $bname = 'Seamonkey';
        $ub = "Seamonkey";
    }
    if (userAgent.match('/(.*)Konqueror(.*)/')) {
        $bname = 'Konqueror';
        $ub = "Konqueror";
    }
    if (userAgent.match('/(.*)Navigator(.*)/')) {
        $bname = 'Navigator';
        $ub = "Navigator";
    }
    if (userAgent.match('/(.*)Mosaic(.*)/')) {
        $bname = 'Mosaic';
        $ub = "Mosaic";
    }
    if (userAgent.match('/(.*)Lynx(.*)/')) {
        $bname = 'Lynx';
        $ub = "Lynx";
    }
    if (userAgent.match('/(.*)Amaya(.*)/')) {
        $bname = 'Amaya';
        $ub = "Amaya";
    }
    if (userAgent.match('/(.*)Omniweb(.*)/')) {
        $bname = 'Omniweb';
        $ub = "Omniweb";
    }
    if (userAgent.match('/(.*)Avant(.*)/')) {
        $bname = 'Avant';
        $ub = "Avant";
    }
    if (userAgent.match('/(.*)Camino(.*)/')) {
        $bname = 'Camino';
        $ub = "Camino";
    }
    if (userAgent.match('/(.*)Flock(.*)/')) {
        $bname = 'Flock';
        $ub = "Flock";
    }
    if (userAgent.match('/(.*)AOL(.*)/')) {
        $bname = 'AOL';
        $ub = "AOL";
    }
    if (userAgent.match('/(.*)AIR(.*)/')) {
        $bname = 'AIR';
        $ub = "AIR";
    }
    if (userAgent.match('/(.*)Fluid(.*)/')) {
        $bname = 'Fluid';
        $ub = "Fluid";
    }

    $platform = userAgent.match('/(.*)Macintosh(.*)/') ? 'mac' : 'unknown';
    $platform = userAgent.match('/(.*)Windows(.*)/') ? 'windows' : $platform;
    $platform = userAgent.match('/(.*)Android(.*)/') ? 'android' : $platform;
    $platform = userAgent.match('/(.*)iPad(.*)/') ? 'ipad' : $platform;
    $platform = userAgent.match('/(.*)iPhone(.*)/') ? 'iphone' : $platform;

    function get_browser_version(){
        var N=navigator.appName, ua=navigator.userAgent, tem;
        var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
        M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
        return M[1];
    }

    return {
        'userAgent' : userAgent,
        'full_name' : $bname,
        'short_name' : $ub.toLowerCase(),
        'version' : get_browser_version(),
        'platform' : $platform
    };
}
browser = detectBrowser();
// Check for IE 8 and below
if (browser.short_name == 'msie' && Number(browser.version) <= 8) {
    document.write('Please upgrade your browser to view this page.');
    document.execCommand("Stop");
}
if (browser.short_name == 'unknown') {
    document.write('Please upgrade your browser to view this page.');
    document.execCommand("Stop");
}