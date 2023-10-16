// Efecto de animación de las letras

const letras = document.querySelectorAll("p");

let i = 0;

function animacion() {
  letras[i].style.opacity = 1;
  i++;
  if (i >= letras.length) {
    i = 0;
  }
}

setInterval(animacion, 100);

// Efecto de movimiento del texto

const texto = document.querySelector("p strong");

let x = 0;

function movimiento() {
  texto.style.left = x;
  x += 10;
  if (x >= window.innerWidth) {
    x = 0;
  }
}

setInterval(movimiento, 100);
