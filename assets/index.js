let hamMenu = document.getElementById("ham-menu");
let menu = document.getElementById("menu-container");
let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbar-container");
let page = document.getElementById("main");
let background = document.getElementById("background");
let homeMenu = document.getElementById("home");
let contentBlocker = document.getElementById("content-blocker");

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
  var height,
    parallax = window.scrollY;
  background.style.top = -parallax * 0.15 + "px";
  if (window.innerWidth < 625) {
    height = homeMenu.offsetHeight - 75;
  } else {
    height = window.innerHeight - 80;
  }
  console.log(height);
  if (window.scrollY > height) {
    navbar.className = "navbar-container-scrolled";
  } else {
    navbar.className = "navbar-container";
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

function delayLoad() {
  setTimeout(bruh, 500);
}

function bruh() {
  contentBlocker.style.background = "none";
  contentBlocker.style.color = "rgba(0,0,0,0)";
}
