// Gestion du bouton menu-burger
const burgerMenu = document.querySelector(".burger-menu");
const navBar = document.querySelector(".nav-bar");

burgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("active"); // Ajoute ou enlève la classe 'active'
});
