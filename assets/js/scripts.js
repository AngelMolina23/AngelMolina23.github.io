const frases = [
    "Angel Yael Molina Díaz",
    "Desarrollador en formación",
    "Apasionado por la tecnología"
  ];

  let i = 0;
  let j = 0;
  let escribiendo = true;

  const velocidad = 150;
  const espera = 2500;
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
