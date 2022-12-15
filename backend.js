const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navRight = document.querySelector(".nav-right");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible")
  navRight.classList.toggle("nav-menu_visible_flex");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});