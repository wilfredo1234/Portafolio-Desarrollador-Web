const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const textoElemento = document.getElementById('texto');
const texto = "WILFREDO ALARCÓN"; // El texto que deseas mostrar
let index = 0; // Índice para seguir el texto

function escribirTexto() {
    if (index < texto.length) {
        // Añade la letra al elemento de texto
        textoElemento.textContent += texto[index];
        index++;
        // Llama a la función nuevamente después de un retraso
        setTimeout(escribirTexto, 200); // Puedes ajustar el tiempo aquí
    }
}

// Inicia el efecto al cargar la página
window.onload = escribirTexto;
