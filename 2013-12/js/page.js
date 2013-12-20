Page = new function() {
    var p = this;
    var viewCampaignBtn = '.view-campaign';
    var hideCampaignBtn = '.hide-campaign';
    var viewMoreBtn = '.view-more div';
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
    function viewCampaign(e) {
        $(e.currentTarget).siblings('.campaign').show();
        if ($(e.currentTarget).siblings('.campaign').find('iframe').length > 0) {
            var url = 'https://news.westfield.com/pub/sf/ResponseForm?_ri_=X0Gzc2X%3DWQpglLjHJlTQGrzaW8fG17UnmcH4YGndDPG3OuPv5zazc8aGIRVXMtX%3DWQpglLjHJlTQGgDh20vbnR3LzcHPjmoNJDzb5bDFAnzgShDJLb&_ei_=EolaGGF4SNMvxFF7KucKuWPnagcYaHkyBaTWAezHHcm1Hs5nw4zpoIw';
            if ($('body').width() <= 940) {
                $(e.currentTarget).siblings('.campaign').hide();
                window.open(url, '_blank');
            }
            else $(e.currentTarget).siblings('.campaign').find('iframe').attr('src', url);
        }
    }
    function hideCampaign(e) {
        $(e.currentTarget).parents('.campaign').hide();
        if ($(e.currentTarget).parents('.campaign').find('iframe').length > 0) {
            $(e.currentTarget).parents('.campaign').find('iframe').attr('src', '');
        }
    }
    function toggleViewMore(e) {
        var viewMore = $(e.currentTarget).parents('div.view-more');
        if (viewMore.find('span').text() == 'view full interview') {
            $('div.view-more div').addClass('wf-icon-wire-minus').removeClass('wf-icon-wire-add');
            $('div.view-more span').text('hide full interview');
            $('.more').slideDown();
        }
        else {
            $('div.view-more div').addClass('wf-icon-wire-add').removeClass('wf-icon-wire-minus');
            $('div.view-more span').text('view full interview');
            $('.more').slideUp();
        }
    }
    $(document).on('click', viewCampaignBtn, viewCampaign);
    $(document).on('click', hideCampaignBtn, hideCampaign);
    $(document).on('click', viewMoreBtn, toggleViewMore);
    setBrowser();
};