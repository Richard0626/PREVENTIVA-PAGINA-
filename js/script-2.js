// script.js
document.addEventListener("DOMContentLoaded", function () {
    const botonVolverArriba = document.getElementById("botonVolverArriba");
  
    // Muestra u oculta el botón según la posición del usuario en la página
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        botonVolverArriba.style.display = "block";
      } else {
        botonVolverArriba.style.display = "none";
      }
    });
  
    // Vuelve al inicio cuando se hace clic en el botón
    botonVolverArriba.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
      });
    });
  });

// NAV BAR
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
