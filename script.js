// Función para crear un corazón
function createHeart() {
    var heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '&hearts;';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
  
    // Eliminar el corazón después de un tiempo determinado
    setTimeout(function() {
      heart.remove();
    }, 5000);
  }
  
  // Lanzar corazones cada cierto intervalo de tiempo
  setInterval(createHeart, 300);

  setTimeout(function() {
    window.location.href = "pages/pag.html"; // Cambia 'pag1.html' por la ruta de tu segunda página HTML
  }, 70000); // 90000 milisegundos = 90 segundos