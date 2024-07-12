let hamMenu = document.getElementById("ham-menu");
let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbar");
let page = document.getElementById("main");
let dock = document.getElementById("dock");

//section elements
let about = document.getElementById("about");
let portfolio = document.getElementById("portfolio");
let skills = document.getElementById("skills");
let gallery = document.getElementById("gallery");

function zoom() {
  document.body.style.zoom = "125%";
}
function toggleMenu() {
  menu.classList.toggle("menu-toggled");
  sidebar.classList.toggle("sidebar-toggled");
  hamMenu.classList.toggle("ham-menu-toggled");
}

hamMenu.addEventListener("click", toggleMenu);

//function to shift nav bar depending on how far one has scrolled
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 65) {
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
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeMission() {
  if (i < mission.length) {
    document.getElementById("mission").innerHTML += mission.charAt(i);
    i++;
    setTimeout(typeMission, speed);
  }
}

addEventListener("onload", typeMission());
