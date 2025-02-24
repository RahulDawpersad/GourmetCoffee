const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const paragraphs = document.querySelectorAll(".hidden");


// Text Scroll Animation
document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("hidden--visible");
        } else {
            paragraph.classList.remove("hidden--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}
// End ofText Scroll Animation

// Responsive Menu Functionality
menuOpenButton.addEventListener("click", () => {
    // Toggle Mobile Menu Visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});


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

