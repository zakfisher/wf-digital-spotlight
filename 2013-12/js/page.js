Page = new function() {
    var p = this;
    var viewCampaignBtn = '.view-campaign';
    var hideCampaignBtn = '.hide-campaign';
    var viewMoreBtn = '.view-more *';
    var scrollBtn = '[data-scroll]';
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
        $('html').attr('data-platform', browser.platform).attr('data-browser', browser.name).attr('data-version', browser.version);
    }
    function viewCampaign(e) {
        $(e.currentTarget).siblings('.campaign').show();
        if ($(e.currentTarget).siblings('.campaign').find('iframe').length > 0) {
            $(e.currentTarget).siblings('.campaign').find('iframe').attr('src', 'https://news.westfield.com/pub/sf/ResponseForm?_ri_=X0Gzc2X%3DWQpglLjHJlTQGrzaW8fG17UnmcH4YGndDPG3OuPv5zazc8aGIRVXMtX%3DWQpglLjHJlTQGgDh20vbnR3LzcHPjmoNJDzb5bDFAnzgShDJLb&_ei_=EolaGGF4SNMvxFF7KucKuWPnagcYaHkyBaTWAezHHcm1Hs5nw4zpoIw');
        }
    }
    function hideCampaign(e) {
        $(e.currentTarget).parents('.campaign').hide();
        if ($(e.currentTarget).parents('.campaign').find('iframe').length > 0) {
            $(e.currentTarget).parents('.campaign').find('iframe').attr('src', '');
        }
    }
    function toggleViewMore(e) {
        var btn = $(e.currentTarget);
        var more = btn.parents('[data-article]').find('div.more');
        var viewMore = btn.parents('div.view-more');
        if (more.is('.open')) {
            more.removeClass('open').slideUp();
            viewMore.find('span').text('view more');
        }
        else {
            more.addClass('open').slideDown();
            viewMore.find('span').text('view less');
        }
    }
    function scrollPage(e) {
        var target = $(e.currentTarget);
        var top = 0;
        switch (target.attr('data-scroll')) {
            case 'au':
                top = $('[data-article="1"]').offset().top;
                break;
            case 'uk':
                top = $('[data-article="2"]').offset().top;
                break;
            case 'us':
                top = $('[data-article="3"]').offset().top;
                break;
            case 'fb':
                top = $('[data-role="fb-pdf"]').offset().top;
                break;
        }
        $(window).tween({
            scroll:{
                start: window.pageYOffset,
                stop: top,
                time: 0,
                duration:1,
                units: 'px',
                effect: 'easeInOut'
            }
        }).play();
    }
    $(document).on('click', viewCampaignBtn, viewCampaign);
    $(document).on('click', hideCampaignBtn, hideCampaign);
    $(document).on('click', viewMoreBtn, toggleViewMore);
    $(document).on('click', scrollBtn, scrollPage);
    setBrowser();
};