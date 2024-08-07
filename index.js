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
let skills = document.getElementById("skills");
let gallery = document.getElementById("gallery");

function toggleMenu() {
  menu.classList.toggle("menu-container-toggled");
  hamMenu.classList.toggle("ham-menu-toggled");
}

hamMenu.addEventListener("click", toggleMenu);

//function to shift nav bar depending on how far one has scrolled
window.addEventListener("scroll", () => {
  var height;
  if (window.innerWidth < 600) {
    height = homeMenu.offsetHeight;
  } else {
    height = window.innerHeight;
  }
  console.log(height);
  if (window.scrollY > height - 80) {
    navbar.className = "navbar-container-scrolled";
    signature.className = "signature-container-scrolled";
    scrollSection.className = "scroll-icon-container-scrolled";
  } else {
    navbar.className = "navbar-container";
    signature.className = "signature-container";
    scrollSection.className = "scroll-icon-container";
  }

  var parallax = window.scrollY;
  background.style.top = -parallax * 0.2 + "px";
  homeMenu.style.top = -parallax * 0.6 + "px";
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

function scrollToSkills() {
  skills.scrollIntoView();
}

function scrollToGallery() {
  gallery.scrollIntoView();
}
