let swiperHeader = new Swiper(".header-swiper", {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 5000,
    }

});


let swiperGallery = new Swiper('.gallery-swiper', {
    slideLabelMessage: false,
        breakpoints: {
        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 38,
        },
        1024: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 35,
        },
        1440: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },
    pagination: {
        el: ".swiper-pagination-gallery",
        type: "fraction",
    },
    navigation: {
        nextEl: '.swiper-btn-next-gallery',
        prevEl: '.swiper-btn-prev-gallery',
    },

});


let swiperEvents = new Swiper('.swiper-events', {
    slideLabelMessage: false,
    breakpoints: {
        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerGroup: 1,
            slidesPerView: 3,
            spaceBetween: 27,
        },
        1440: {
            slidesPerGroup: 1,
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },

    navigation: {
        nextEl: '.swiper-btn-next-events',
        prevEl: '.swiper-btn-prev-events',
        disabledClass: 'swiper-button-disabled--events',
    },

    pagination: {
        el: '.swiper-pagination-events',
        type: 'bullets',
    },
});

let swiperProject = new Swiper('.swiper-project', {
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },

    navigation: {
        nextEl: '.swiper-btn-next-project',
        prevEl: '.swiper-btn-prev-project',
    },
});