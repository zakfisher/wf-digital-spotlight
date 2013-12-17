Page = new function() {
    var p = this;
    var viewCampaignBtn = '.view-campaign';
    var hideCampaignBtn = '.hide-campaign';
    var viewMoreBtn = '.view-more *';
    var scrollBtn = '[data-scroll]';
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
};