let hamMenu = document.getElementById("ham-menu");
let menu = document.getElementById("menu-container");
let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbar");
let page = document.getElementById("main");
let background = document.getElementById("background");
let scrollWheel = document.getElementById("scroll-wheel");

//section elements
let about = document.getElementById("about");
let portfolio = document.getElementById("portfolio");
let skills = document.getElementById("skills");
let gallery = document.getElementById("gallery");

function toggleMenu() {
  menu.classList.toggle("menu-container-toggled");
  hamMenu.classList.toggle("ham-menu-toggled");
}

hamMenu.addEventListener("click", toggleMenu);

//function to shift nav bar depending on how far one has scrolled
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 80) {
    navbar.className = "navbar-container-scrolled";
  } else {
    navbar.className = "navbar-container";
  }
});

window.onload = scrollAnimation();

function scrollAnimation() {
  let i = 0;
  for (i = 0; i < 1000; i++) {
    scrollWheel.classList.toggle(".scroll-wheel-animated");
    setTimeout(2000);
  }
}

function scrollToHome() {
  window.scroll({
    top: 0,
  });
}

function scrollToAbout() {
  about.scrollIntoView();
}

function scrollToPortfolio() {
  portfolio.scrollIntoView();
}

function scrollToSkills() {
  skills.scrollIntoView();
}

function scrollToGallery() {
  gallery.scrollIntoView();
}
