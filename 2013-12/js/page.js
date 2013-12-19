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
    function renderPage() {
        Handlebars.renderTemplate('header', {}, '#header');
        Handlebars.renderTemplate('banner', {}, '#content', 'append');
        Handlebars.renderTemplate('in-this-issue', {}, '#content', 'append');
        Handlebars.renderTemplate('merry-makers', {}, '#content', 'append');
        Handlebars.renderTemplate('footer', {
            items: [
                {
                    href: 'https://university.westfieldlabs.com/',
                    icon: 'wire-labsu-2',
                    text: 'Labs U'
                },
                {
                    href: 'http://www.westfieldlabs.com/blog/',
                    icon: 'wire-blog',
                    text: 'Labs Blog'
                },
                {
                    href: 'https://www.yammer.com/',
                    icon: 'wire-yammer',
                    text: 'Yammer'
                },
                {
                    href: 'http://www.linkedin.com/company/westfield-labs',
                    icon: 'wire-linkedin',
                    text: 'LinkedIn'
                },
                {
                    href: 'https://twitter.com/WestfieldLabs',
                    icon: 'wire-twitter',
                    text: 'Twitter'
                }
            ],
            year: (new Date()).getFullYear()
        }, '#footer');
        $('#header, #content, #footer').show();
    }
    function viewCampaign(e) {
        var btn = $(e.currentTarget);
        var campaign = btn.parents('[data-article]').find('div.campaign');
        campaign.show();
    }
    function hideCampaign(e) {
        var btn = $(e.currentTarget);
        var campaign = btn.parents('.campaign');
        campaign.hide();
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
    //renderPage();
};