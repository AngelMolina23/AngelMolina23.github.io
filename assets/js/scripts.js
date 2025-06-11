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
   const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = navMenu.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });