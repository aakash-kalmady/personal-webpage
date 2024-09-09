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

// loading screen
function removeBlocker() {
  contentBlocker.style.opacity = 0;
}

// click to toggle hamburger menu
hamMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-container-toggled");
  hamMenu.classList.toggle("ham-menu-toggled");
});

// stick navbar to top of window if scrolled down
function navbarController() {
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
}

// let elements appear as they scroll
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active-reveal");
    } else {
      reveals[i].classList.remove("active-reveal");
    }
  }
}

window.addEventListener("scroll", navbarController, reveal);
window.addEventListener("scroll", reveal);
