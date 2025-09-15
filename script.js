document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM cargado, iniciando cuenta regresiva");

  const firstCountdownDate = new Date('2025-09-15T19:21:00Z'); // 14:21 ECT (5 min desde ahora)
  const birthdayDate = new Date('2025-09-15T19:26:00Z'); // 14:26 ECT (5 min después)
  const countdownElement = document.getElementById('countdown');
  const surpriseButton = document.getElementById('surprise-button');
  const waitMessage = document.getElementById('wait-message');
  const initialMessage = document.getElementById('initial-message');
  const starsContainer = document.getElementById('stars-container');

  function updateCountdown() {
    const now = new Date();
    let timeLeft;

    if (now < firstCountdownDate) {
      // Primera cuenta regresiva hasta 14:21 ECT
      timeLeft = firstCountdownDate - now;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      countdownElement.innerText = `Días: ${days}, Horas: ${hours}, Minutos: ${minutes}, Segundos: ${seconds}.`;
      initialMessage.innerText = "¡Estoy re feliz! 😎 Algo súper especial viene en camino, pero primero mirá esta cuenta regresiva. ¡Preparate para la magia!";
    } else if (now < birthdayDate) {
      // Segunda cuenta regresiva hasta 14:26 ECT
      timeLeft = birthdayDate - now;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      countdownElement.innerText = `Días: ${days}, Horas: ${hours}, Minutos: ${minutes}, Segundos: ${seconds} para la sorpresa final.`;
      initialMessage.innerText = "Jajajaja te la creiste. ¡Ya estamos más cerca! 😏 Toca esperar un poco para la gran sorpresa.";
    } else {
      // Cuenta regresiva terminada, botón habilitado
      countdownElement.innerText = "¡Ya es la hora!";
      surpriseButton.disabled = false;
      surpriseButton.style.cursor = 'pointer';
      initialMessage.innerText = "¡Llegó el momento! 😎 Tocá el botón para ver la sorpresa.";
      clearInterval(countdownInterval);
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  // Manejo de clics en las estrellas
  document.querySelectorAll('.star, #special-star').forEach(star => {
    star.addEventListener('click', () => {
      starsContainer.classList.add('hidden');
      initialMessage.classList.remove('hidden');
    });
  });

  surpriseButton.addEventListener('click', () => {
    if (surpriseButton.disabled) {
      waitMessage.classList.remove('hidden');
      setTimeout(() => waitMessage.classList.add('hidden'), 3000);
    }
  });
});

function revealSurprise() {
  console.log("Botón presionado: Revelando sorpresa");
  const initial = document.getElementById('initial');
  const birthdayMessage = document.getElementById('birthday-message');
  if (initial && birthdayMessage) {
    initial.classList.add('hidden');
    birthdayMessage.classList.remove('hidden');
    launchConfetti();
  } else {
    console.error("Error: No se encontraron los elementos 'initial' o 'birthday-message'");
  }
}

function launchConfetti() {
  console.log("Lanzando confeti");
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#4b0082', '#8b008b', '#000000', '#d8bfd8']
  });
}
