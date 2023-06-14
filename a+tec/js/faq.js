$('.faq-title').on('click', function() {
    var slide = $(this).next('.faq-content');
    $('.faq-content').not(slide).slideUp(250);
    slide.slideToggle(250);
})