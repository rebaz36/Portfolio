const modal = document.getElementById('mobile-nav');
const body = document.getElementById('body');

const btn = document.getElementById('mobileMenu');

const span = document.getElementsByClassName('close')[0];

btn.onclick = function block() {
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
};

span.onclick = function none() {
  modal.style.display = 'none';
  body.style.overflow = 'visible';
};

window.onclick = function windownone(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};