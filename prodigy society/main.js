const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
const gate = document.querySelector('#adminGate');
const gateForm = document.querySelector('#gateForm');
const gateError = document.querySelector('#gateError');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

function closeGate() { gate.hidden = true; gateForm.reset(); gateError.textContent = ''; }
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'a') {
    event.preventDefault(); gate.hidden = false; document.querySelector('#username').focus();
  }
  if (event.key === 'Escape' && !gate.hidden) closeGate();
});
document.querySelector('.close-gate').addEventListener('click', closeGate);
document.querySelector('.gate-backdrop').addEventListener('click', closeGate);
gateForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (document.querySelector('#username').value === 'Prodigy' && document.querySelector('#password').value === 'prodigy2083') window.location.href = 'admin.html';
  else gateError.textContent = 'Please check your username and password.';
});

const revealItems = document.querySelectorAll('.reveal-on-scroll');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
  });
}, { threshold: 0.18 });
revealItems.forEach(item => revealObserver.observe(item));

document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('pointermove', event => {
    const box = card.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - .5;
    const y = (event.clientY - box.top) / box.height - .5;
    card.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-5px)`;
  });
  card.addEventListener('pointerleave', () => { card.style.transform = ''; });
});
