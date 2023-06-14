var bannerswiper = new Swiper(".bannerSwiper", {
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
    },
});
// 
$('.videos-src').on('click', function() {
    var data = $(this).attr('data-src');
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data);

})