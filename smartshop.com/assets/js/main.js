$(document).ready(function () {
    $(window).bind("mousewheel", function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $(".header_scroll").removeClass("isactive_scroll");
        } else {
            $(".header_scroll").addClass("isactive_scroll");
        }
    });
    $(".go_to_top").on("click", function (event) {
        event.preventDefault();
        $(".header_scroll").removeClass("isactive_scroll");
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});

// ====== Animation =====

AOS.init({
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
});
// ======End Animation =====
//menu toggle
const toggle = document.querySelector('.btn_toggle');
const menu = document.querySelector('.wrapp_main_menu');
const close_menu_toggle = document.querySelector('.close_menu_toggle');
toggle.addEventListener('click', () => {
    menu.classList.toggle('menu_isactive');
    toggle.classList.add('closed');
});
close_menu_toggle.addEventListener('click', () => {
    menu.classList.remove('menu_isactive');
    toggle.classList.remove('closed');
});
document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.has_sub');
    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('isshow');
            // Find the first 'ul' within the parent of the clicked element
            const submenu = toggle.parentElement.querySelector('ul');
            if (submenu) {  // Ensure that the submenu exists
                if (submenu.classList.contains('expanded')) {
                    submenu.classList.remove('expanded');
                    submenu.style.maxHeight = null;

                } else {
                    submenu.classList.add('expanded');
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                }
            }
        });
    });
});


// ============== marquee ===================
function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    parentSelector.insertAdjacentHTML('beforeend', clone);
    let i = 0;
    setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.clientWidth) {
            i = 0;
        }
        i += speed;
    }, 0);
}
window.addEventListener("DOMContentLoaded", Marquee('.marquee', 0.3))

// ============== End marquee ===================


var swiper = new Swiper(".banner_slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    effect: 'fade',
    hashNavigation: {
        watchState: true,
    },
});
// ===============
var swiper = new Swiper(".get_id_slide", {
    spaceBetween: 10,
    freeMode: true,
    loop: true,
    grid: 2,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    // },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        575.98: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        780: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        991.98: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1199.98: {
            slidesPerView: 4,
            spaceBetween: 15
        }

    }
});



// =========


