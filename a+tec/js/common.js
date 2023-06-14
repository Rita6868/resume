$(window).on('resize', function() {
    var vw = $(window).width();
    if (vw > 960) {
        var vw = $(window).width();
        $('.header-wrap').removeClass('open');
    }
})
$('.nav-line').on('click', function() {
    if ($('.header-wrap').hasClass('open')) {
        $('.header-wrap').removeClass('open');
    } else {
        $('.header-wrap').addClass('open');
    }
})