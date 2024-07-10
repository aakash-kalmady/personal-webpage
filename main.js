let hamMenu = document.getElementById("ham-menu");
let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbar");

//section elements
let about = document.getElementById("about");
let portfolio = document.getElementById("portfolio");
let skills = document.getElementById("skills");
let gallery = document.getElementById("gallery");

function toggleMenu() {
  menu.classList.toggle("menu-toggled");
  sidebar.classList.toggle("sidebar-toggled");
  hamMenu.classList.toggle("ham-menu-toggled");
}

hamMenu.addEventListener("click", toggleMenu);

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
