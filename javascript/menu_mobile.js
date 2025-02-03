// Gestion du bouton menu-burger
const burgerMenu = document.querySelector(".burger-menu");
const navBar = document.querySelector(".nav-bar");

burgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("active"); // Ajoute ou enlève la classe 'active'
});


//JavaScript pour gérer l’ouverture/fermeture de menu
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.add("active");
  menuToggle.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
  menuToggle.style.display = "block";
  closeMenu.style.display = "none";
});
