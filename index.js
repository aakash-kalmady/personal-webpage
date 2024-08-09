let hamMenu = document.getElementById("ham-menu");
let menu = document.getElementById("menu-container");
let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbar-container");
let scrollSection = document.getElementById("scroll-icon-container");
let signature = document.getElementById("signature-container");
let page = document.getElementById("main");
let background = document.getElementById("background");
let scrollWheel = document.getElementById("scroll-wheel");
let homeMenu = document.getElementById("home");

//section elements
let about = document.getElementById("about");
let experience = document.getElementById("experience");
let gallery = document.getElementById("gallery");
let contact = document.getElementById("contact");

function toggleMenu() {
  menu.classList.toggle("menu-container-toggled");
  hamMenu.classList.toggle("ham-menu-toggled");
}

hamMenu.addEventListener("click", toggleMenu);

//function to shift nav bar depending on how far one has scrolled and parallax for background
window.addEventListener("scroll", () => {
  var height;
  background.style.top = -window.scrollY * 0.25 + "px";
  if (window.innerWidth < 625) {
    height = homeMenu.offsetHeight - 120;
  } else {
    height = window.innerHeight - 80;
  }
  console.log(height);
  if (window.scrollY > height) {
    navbar.className = "navbar-container-scrolled";
    signature.className = "signature-container-scrolled";
    scrollSection.className = "scroll-icon-container-scrolled";
  } else {
    navbar.className = "navbar-container";
    signature.className = "signature-container";
    scrollSection.className = "scroll-icon-container";
  }
});

function scrollToHome() {
  window.scroll({
    top: 0,
  });
}

function scrollToAbout() {
  about.scrollIntoView();
}

function scrollToExperience() {
  experience.scrollIntoView();
}

function scrollToGallery() {
  gallery.scrollIntoView();
}

function scrollToContact() {
  contact.scrollIntoView();
}
