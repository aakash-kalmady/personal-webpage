let hamMenu = document.getElementById("ham-menu");
let menu = document.getElementById("menu-container");
let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbar");
let page = document.getElementById("main");
let dock = document.getElementById("dock");

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

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var ih = iOS ? screen.height : window.innerHeight;

//function to shift nav bar depending on how far one has scrolled
window.addEventListener("scroll", () => {
  if (window.scrollY > ih - 80) {
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

function scrollToPortfolio() {
  portfolio.scrollIntoView();
}

function scrollToSkills() {
  skills.scrollIntoView();
}

function scrollToGallery() {
  gallery.scrollIntoView();
}

var i = 0;
let mission = "Developer"; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeMission() {
  if (i < mission.length) {
    document.getElementById("mission").innerHTML += mission.charAt(i);
    i++;
    setTimeout(typeMission, speed);
  }
}

addEventListener("onload", typeMission());
