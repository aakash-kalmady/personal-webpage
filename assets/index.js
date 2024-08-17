// general HTML elements
let background = document.getElementById("background");
let homeMenu = document.getElementById("home");
let page = document.getElementById("main");
let about = document.getElementById("about");
let experience = document.getElementById("experience");
let gallery = document.getElementById("gallery");
let contact = document.getElementById("contact");

// specific HTML elements
let hamMenu = document.getElementById("ham-menu");
let menu = document.getElementById("menu-container");
let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbar-container");
let contentBlocker = document.getElementById("content-blocker");

// click to toggle hamburger menu
hamMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-container-toggled");
  hamMenu.classList.toggle("ham-menu-toggled");
});

// stick navbar to top of page once scrolled, and parallax for background
window.addEventListener("scroll", () => {
  var height,
    parallax = window.scrollY;
  background.style.top = -parallax * 0.15 + "px";
  if (window.innerWidth < 625) {
    height = homeMenu.offsetHeight - 75;
  } else {
    height = window.innerHeight - 80;
  }
  if (window.scrollY > height) {
    navbar.className = "navbar-container-scrolled";
  } else {
    navbar.className = "navbar-container";
  }
});

// scroll to section functions
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
function removeBlocker() {
  contentBlocker.style.opacity = 0;
}
