




const barsButton = document.getElementById("bars");
const subMenu = document.querySelector(".navig_burger");

// Evento click al botón burger
barsButton.addEventListener("click", () => {

    // Obtener opacidad REAL desde CSS
    const currentOpacity = getComputedStyle(subMenu).opacity;

    // Si está oculto
    if (currentOpacity === "0") {

        subMenu.style.opacity = "1";

        barsButton.setAttribute("aria-expanded", "true");

    } else {

        // Ocultar menú
        subMenu.style.opacity = "0";

        barsButton.setAttribute("aria-expanded", "false");
    }
});