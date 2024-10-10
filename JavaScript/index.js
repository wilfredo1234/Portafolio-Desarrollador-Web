// Seleccionamos el botón de menú y la navegación
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.containerNavegation__nav');

// Agregamos el evento de click al botón de menú
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    // Cambiar el ícono del botón al estado activo/inactivo
    if (nav.classList.contains('nav-active')) {
        menuToggle.innerHTML = '&times;'; // Ícono de 'X' para cerrar
    } else {
        menuToggle.innerHTML = '&#9776;'; // Ícono de hamburguesa
    }
});

// Cerrar el menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.containerNavegation__nav-enlace');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            menuToggle.innerHTML = '&#9776;'; // Restaurar ícono de hamburguesa
        }
    });
});
