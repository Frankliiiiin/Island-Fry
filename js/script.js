const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

function showSlide(trial3) {
  if (trial3 >= slides.length) currentSlide = 0;
  if (trial3 < 0) currentSlide = slides.length - 1;

  slides.forEach(slide =>  { 
    slide.style.display = "none";
  });
  slides[currentSlide].style.display = "block";
}

function changeSlide(direction) {
  currentSlide += direction;
  showSlide(currentSlide);
}

setInterval(() => {
  changeSlide(1);
}, 3000);

showSlide(currentSlide);


menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

let swiper = new swiper (".slider-wrapper", {
  loop: true,
  grapCursor: true,
  spaceBetween: 25,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

