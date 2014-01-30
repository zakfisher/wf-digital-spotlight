(function() {
    function setBrowser() {
        var N= navigator.appName, ua= navigator.userAgent, tem;
        var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
        M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
        var browser = $.extend({}, {
            platform : (function() {
                var OSName="Unknown";
                if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
                if (navigator.appVersion.indexOf("Mac")!=-1) OSName="Mac";
                if (navigator.appVersion.indexOf("iPhone")!=-1) OSName="iPhone";
                if (navigator.appVersion.indexOf("Android")!=-1) OSName="Android";
                return OSName;
            })(),
            name : M[0],
            version : M[1]
        });
        if (browser.name == 'MSIE' && Number(browser.version) <= 8) {
            $('body').html('Please upgrade your browser to view this page.');
        }
        $('html').attr('data-platform', browser.platform).attr('data-browser', browser.name).attr('data-version', browser.version);
    }
    function toggleViewMore(e) {
        var viewMore = $(e.currentTarget).parents('div.view-more');
        var icon = viewMore.find('[class*="wf-icon"]');
        var span = viewMore.find('span');
        var more = viewMore.siblings('.more');
        if (icon.is('.wf-icon-wire-add')) {
            icon.addClass('wf-icon-wire-minus').removeClass('wf-icon-wire-add');
            span.attr('data-text', span.text()).text('Hide');
            more.slideDown();
        }
        else {
            icon.addClass('wf-icon-wire-add').removeClass('wf-icon-wire-minus');
            span.text(span.attr('data-text'));
            more.slideUp();
        }
    }
    function viewHSVideo(e) {
        $(e.currentTarget).after('<iframe src="http://link.brightcove.com/services/player/bcpid1862649974001?bckey=AQ~~,AAABsa9sH9E~,OWyaFJcdqPw7M2kFPTFNTRnbVR6qKEgv&bctid=2293859145001"></iframe>').remove();
    }
    $(document).on('click', '.view-more div', toggleViewMore);
    $(document).on('click', '#view-hs-video', viewHSVideo);
    setBrowser();
})();