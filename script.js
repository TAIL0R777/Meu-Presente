function goToPage2() {
  document.getElementById('page1').classList.remove('active');
  document.getElementById('page2').classList.add('active');
  playMusic();
  createHearts();
}

function playMusic() {
  const music = document.getElementById('music');
  music.play().catch(() => console.log("Autoplay bloqueado, clique novamente para tocar."));
}

// Criar corações animados
function createHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 500);
}
