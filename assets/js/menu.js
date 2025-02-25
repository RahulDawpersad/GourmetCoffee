var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade", // Enables fade transition
    fadeEffect: {
        crossFade: true, // Smooth transition between slides
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});



// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return rect.top >= 0 && rect.bottom <= window.innerHeight;
// }

// Detect when the section and menu items come into view
document.addEventListener('scroll', function () {
    const welcomeSection = document.querySelector('.welcome-section');
    const menuContent = document.querySelector('.menu-content');


    // Check if welcome section is in the viewport
    if (isInViewport(welcomeSection)) {
        menuContent.classList.add('show-content');
    } else {
        menuContent.classList.remove('show-content');
    }
});



// Trigger the animation on page load as well
window.addEventListener('load', function () {
    const menuContent = document.querySelector('.menu-content');
    menuContent.classList.add('show-content');
});

menuContent.classList.add('show-content');




