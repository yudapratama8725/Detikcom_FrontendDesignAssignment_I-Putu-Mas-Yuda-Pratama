// Navbar Section JS
document.getElementById('navbar-toggler').addEventListener('click', function () {
  var imgElement = this.querySelector('img');

  if (imgElement.src.includes('handburger-icon.png')) {
    imgElement.src = './img/handburger-icon-close.png';
    document.getElementById("navbarNav").classList.remove('d-none');
  } else {
    imgElement.src = './img/handburger-icon.png';
    document.getElementById("navbarNav").classList.add('d-none ');
  }
  this.style.outline = 'none';
});

// Swiper Section JS
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
