
// intance via constructor and selector
//new SimpleLightbox({ elements: '.imageGallery1 a' });

function openMobileMenu() {
  menuToggle.classList.toggle('open');
  openDesktop.classList.toggle('opening');
}

var menuToggle = document.querySelector(".menu-toggle");
var openDesktop = document.querySelector(".main-nav");
menuToggle.addEventListener('click', openMobileMenu);


