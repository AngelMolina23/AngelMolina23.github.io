const frases = [
    "Angel Yael Molina Díaz",
    "Desarrollador en formación",
    "Apasionado por la tecnología"
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
 function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');

  // Cierra el menú al hacer clic en cualquier enlace
  const links = nav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

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