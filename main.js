const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector('.slider'), {
        adaptiveHeight: true,
    //     dots: true,
    //     centerMode: true,
        arrows: false,
        // slidesToShow: 3,
        responsive: {
            768: {
                slidesToShow: 2,
    //             dots: true,
    //             arrows: false,
    //             adaptiveHeight: true
            },
            960: { 
    //             adaptiveHeight: true,
                slidesToShow: 3,
    //             disable: false, // slider disabled 960px to 1279px
    //             dots: true,
            },
    //         1280: {
    //             disable: false,
    //             slidesToShow: 3,
    //             dots: true, // dots enabled 1280px and up
    //             arrows: false,
    //             adaptiveHeight: true
    //         }
    }
  });