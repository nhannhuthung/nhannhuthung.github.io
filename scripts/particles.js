const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

// The mote colour comes from the --particle token so it follows the theme.
// Reading it is a layout-flushing call, so cache it and refresh only when
// the toggle actually flips data-theme.
let particleColor = '#F4F7F5';

function readParticleColor() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue('--particle').trim();
  if (value) particleColor = value;
}
readParticleColor();

new MutationObserver(readParticleColor).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme']
});

// Resize canvas to full scrollable height
function resizeCanvas() {
  canvas.width = document.documentElement.scrollWidth;
  canvas.height = document.documentElement.scrollHeight;
}
resizeCanvas();
window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles(); // reinitialize so particles fill new area
});

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 1;
    this.speedY = (Math.random() - 0.5) * 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = particleColor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const number = 150;
  for (let i = 0; i < number; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

initParticles();
animate();