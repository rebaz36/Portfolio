const modal = document.getElementById('mobile-nav');

const btn = document.getElementById('mobileMenu');

const span = document.getElementsByClassName('close')[0];

btn.onclick = function block() {
  modal.style.display = 'block';
};

span.onclick = function none() {
  modal.style.display = 'none';
};

window.onclick = function windownone(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};