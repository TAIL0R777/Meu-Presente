function goToPage2() {
  document.getElementById('page1').classList.remove('active');
  document.getElementById('page2').classList.add('active');
  playMusic();
  createHearts();
}

function createHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => heart.remove());
  }, 500);
}
