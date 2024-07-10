let hamMenu = document.getElementById("ham-menu");
let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");

function toggleMenu() {
  menu.classList.toggle("menu-toggled");
  sidebar.classList.toggle("sidebar-toggled");
  console.log("menu toggled");
}
menu.classList.toggle("menu-toggled");
hamMenu.addEventListener("click", toggleMenu);
