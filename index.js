// Mobile Navigation Modal
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

// Works Modal Popup Window
// Get Works Section Button Elements
const work1 = document.getElementById('work1');
const work2 = document.getElementById('work2');
const work3 = document.getElementById('work3');
const work4 = document.getElementById('work4');

// onclick event for each button
work1.onclick = function work1() {
  const work1Modal = document.getElementById('work1Modal');
  work1Modal.style.display = 'block';
  body.style.overflow = 'hidden';
};
work2.onclick = function work2() {
  const work2Modal = document.getElementById('work2Modal');
  work2Modal.style.display = 'block';
  body.style.overflow = 'hidden';
};
work3.onclick = function work3() {
  const work3Modal = document.getElementById('work3Modal');
  work3Modal.style.display = 'block';
  body.style.overflow = 'hidden';
};
work4.onclick = function work4() {
  const work4Modal = document.getElementById('work4Modal');
  work4Modal.style.display = 'block';
  body.style.overflow = 'hidden';
};

// Works Modal Close button
const close1 = document.getElementById('Work1Close');
const close2 = document.getElementById('Work2Close');
const close3 = document.getElementById('Work3Close');
const close4 = document.getElementById('Work4Close');

// onclick event for each close button
close1.onclick = function close1() {
  const work1Modal = document.getElementById('work1Modal');
  work1Modal.style.display = 'none';
  body.style.overflow = 'visible';
};
close2.onclick = function close2() {
  const work2Modal = document.getElementById('work2Modal');
  work2Modal.style.display = 'none';
  body.style.overflow = 'visible';
};
close3.onclick = function close3() {
  const work3Modal = document.getElementById('work3Modal');
  work3Modal.style.display = 'none';
  body.style.overflow = 'visible';
};
close4.onclick = function close4() {
  const work4Modal = document.getElementById('work4Modal');
  work4Modal.style.display = 'none';
  body.style.overflow = 'visible';
};
