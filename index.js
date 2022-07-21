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
const projectDatas = [
  {
    name: 'Tonic',
    author: 'Rebaz',
    stack: 'Back End dev ',
    year: 2022,
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    Modaldescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'images/works/1.png',
    desktopImage: 'images/worksModal/workModalDes.png',
    technologies: ['html', 'css', 'javascript', 'Github'],
    liveVersion: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  {
    name: 'Multi-Post Stories',
    author: 'Rebaz',
    stack: 'Back End dev ',
    year: 2022,
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    Modaldescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'images/works/2.png',
    desktopImage: 'images/worksModal/workModalDes.png',
    technologies: ['html', 'css', 'javascript', 'Ruby', 'Github'],
    liveVersion: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  {
    name: 'Tonic',
    author: 'Rebaz',
    stack: 'Front End dev ',
    year: 2022,
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    Modaldescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'images/works/3.png',
    desktopImage: 'images/worksModal/workModalDes.png',
    technologies: ['html', 'css', 'javascript', 'Ruby', 'Github'],
    liveVersion: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  {
    name: 'Tonic',
    author: 'Rebaz',
    stack: 'Front End dev ',
    year: 2022,
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    Modaldescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'images/works/4.png',
    desktopImage: 'images/worksModal/workModalDes.png',
    technologies: ['html', 'css', 'javascript', 'Ruby', 'Github'],
    liveVersion: 'https://scotlandadventureapp.herokuapp.com',
    source: 'https://github.com/vickymarz/scotland-adventures',
  },
];

document.querySelector('.works').innerHTML = projectDatas
  .map(
    (data) => `
    <section class="project">
<div class="project-img">
<img
src= ${data.featuredImage}
class="snapshoot"
alt="Tonic project image"
/>
</div>
<div class="project-description">
<h2 class="project-title">${data.name}</h2>
<ul class="project-author">
<li>${data.author}</li>
<li>${data.stack}</li>
<li>${data.year}</li>
</ul>
<p class="project-text"
>${data.description}</p
>
<ul class="project-tools">
${data.technologies.map((tech) => `<li>${tech}</li>`).join('')}
</ul>
<button type="button" class="btn">See Project</button>
</div>
</section>
    `,
  )
  .join('');

for (let i = 0; i <= projectDatas.length; i += 1) {
  if (i % 2 === 1) {
    document.querySelectorAll('.project')[i].classList.add('order');
  }
}

// modals user interface
document.querySelector('.modals').innerHTML = projectDatas
  .map(
    (data) => `
<div class="modal">
<div class="modal-container">
<div class="modal-title">
<h2 class="project-title">${data.name}</h2>
<div class="close">
<i class="fa fa-times fa-1x"></i>
</div>
</div>
<ul class="project-author">
<li>${data.author}</li>
<li>${data.stack}</li>
<li>${data.year}</li>
</ul>
<div class="project-img">
<img
src= ${data.desktopImage}
class="snapshoot"
alt="Tonic project image"
/>
</div>
<div class="modal-description">
<p class="project-text">${data.Modaldescription}</p>
<div class="modal-tools">
<ul class="project-tools">
${data.technologies.map((tech) => `<li>${tech}</li>`).join('')}
</ul>
<span></span>
<div class="buttons">
<a href="${data.liveVersion}" class="modal-button" target="_blank" rel="noopener noreferrer">See Live <img src="./images/worksModal/Live.png" alt="live site icon" class="modal-img"/></a>
<a href="${data.source}" class="modal-button" target="_blank" rel="noopener noreferrer">See Source <img src="./images/worksModal/Github.png" alt="github icon" class="modal-img"/></a>
</div>
</div>
</div>
</div>
</div>`,
  )
  .join('');

// event listeners for opening modal on button click
const modalButtons = Array.from(document.querySelectorAll('.btn'));
const modals = Array.from(document.querySelectorAll('.modal'));

const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]]);
modalButtonZip.forEach((pair) => {
  pair[0].addEventListener('click', () => {
    pair[1].style.display = 'block';
  });
});

// event listener for closing modal on button click
document.querySelectorAll('.close').forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach((modal) => {
      modal.style.display = 'none';
    });
  });
});

// Form Validation
const form = document.getElementById('form');

const EMAIL_INVALID = 'Sorry!, submission faild. Your email should be in lowercase e.g example@gmail.com';

function displayMessage(input, message, type) {
  document.querySelector('small').innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return displayMessage(input, message, false);
}

function showSuccess(input) {
  return displayMessage(input, '', true);
}

/* commit here */

function validateEmail(input, invalidMsg) {
  const email = input.value.trim();
  if (email !== email.toLowerCase()) {
    return showError(input, invalidMsg);
  }
  showSuccess(input);
  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);

  if (emailValid) {
    form.submit();
    localStorage.clear();
  }
});

/* commit here */