var swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 1000,
    },
    speed: 5000,
    effect: 'creative',
    creativeEffect: {
        prev: {
            scale: 1.2,
            opacity: 1,
        },
        next: {
            scale: 1.2,
            opacity: 1,
        },
    },
});

var adswiper = new Swiper(".adSwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".advertise-swiper .swiper-button-next",
        prevEl: ".advertise-swiper .swiper-button-prev",
        lockClass: ".swiper-button-lock",
    },
    pagination: {
        el: ".advertise-swiper .swiper-pagination",
        lockClass: ".swiper-pagination-lock",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        601: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }

});

// header下滑浮現

$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var bannerHeight = $('.banner').innerHeight();
    var headerHeight = $('.header-wrap').innerHeight();
    if (scrollTop > bannerHeight - headerHeight) {
        $('.header-wrap').addClass('active');
    } else {
        $('.header-wrap').removeClass('active');
    }
})

// 錨點動畫
$('.banner-bg .arr').on('click', function() {
    var href = $(this).attr("href");
    $('html,body').animate({ scrollTop: $(href).offset().top }, 700)
})