let hamMenu = document.getElementById("ham-menu");
let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbar");

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
