const frases = [
  "Angel Yael Molina Díaz",
  "Desarrollador en formación",
];

let i = 0;
let j = 0;
let escribiendo = true;

const velocidad = 100;
const espera = 2000;
const h1 = document.getElementById("texto-header");

function escribirTexto() {
  if (escribiendo) {
    if (j < frases[i].length) {
      h1.textContent += frases[i].charAt(j);
      j++;
      setTimeout(escribirTexto, velocidad);
    } else {
      escribiendo = false;
      setTimeout(escribirTexto, espera);
    }
  } else {
    if (j > 0) {
      h1.textContent = frases[i].substring(0, j - 1);
      j--;
      setTimeout(escribirTexto, velocidad / 2);
    } else {
      escribiendo = true;
      i = (i + 1) % frases.length;
      setTimeout(escribirTexto, velocidad);
    }
  }
}

escribirTexto();
// Función para abrir/cerrar menú
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}

// Cerrar menú al hacer clic en un enlace (se ejecuta solo una vez)
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navLinks');
  const links = nav.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
});


function copiarCorreo() {
  const correo = document.getElementById("correo").textContent;
  const tooltip = document.getElementById("tooltip");
  navigator.clipboard.writeText(correo).then(() => {
    tooltip.classList.add("show");
    setTimeout(() => {
      tooltip.classList.remove("show");
    }, 1500);
  });
}

function toggleCard(card) {
  document.querySelectorAll('.project-card.open')
    .forEach(c => c !== card && c.classList.remove('open'));
  card.classList.toggle('open');
}


function mostrarImagen(src,event) {
  event.stopPropagation();
  const lightbox = document.getElementById("lightbox");
  const imgAmpliada = document.getElementById("img-ampliada");
  imgAmpliada.src = src;
  lightbox.style.display = "flex";
}

function cerrarImagen() {
  document.getElementById("lightbox").style.display = "none";
}
