setTimeout(function () {
    $('.banner-text').css("opacity","1")
},300)
setTimeout(function () {
    $('.header').css("top","0")
},500)

$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var bannerHeight = $('.banner').innerHeight();
    var headerHeight = $('.header').innerHeight();
    var aboutHeight = $('.about').innerHeight()
    if (scrollTop > bannerHeight - headerHeight) {
        $('.header').addClass('scroll-header');
        $('.logo').attr('src','./img/yuci-y-logo.png')
        $('.line').css("border-bottom","3px solid #F8B62D")
    } else {
        $('.header').removeClass('scroll-header');
        $('.logo').attr('src','./img/yuci-w-logo.png')
        $('.line').css("border-bottom","3px solid #fff")
    }
    if (scrollTop > Math.floor(bannerHeight + aboutHeight/3)) {
        $('.skills-block').addClass('active');
    }
})
$('.navbar-toggler').on('click',function() {
    if ($(this).hasClass("open")) {
        $(this).removeClass('open');
        $('.full-navbar').css('display','none');
    }else{
        $(this).addClass('open');
        $('.full-navbar').css('display','flex');
    }
})
$('.nav-item').on('click',function(){
    if ($('.navbar-toggler').hasClass("open")){
        $('.navbar-toggler').removeClass('open');
        $('.full-navbar').css('display','none');
    }
})
