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
    name: 'KFD',
    author: 'Rebaz',
    stack: 'Frontend + Firebase',
    year: 2020,
    description: 'KFD is a platform to connect Donors to people where they can either request donations or donate extra food.',
    Modaldescription: 'KFD is a platform to connect Donors to people where they can either request donations or donate extra food. this project was ceated when i took application development course at the university of Malaysia. it was a group project and we had to create a platform to connect donors to people who need food.',
    featuredImage: 'images/works/1KFD.png',
    desktopImage: 'images/worksModal/1KFDDes.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Firebase', 'React', 'Redux', 'React-Router'],
    liveVersion: 'https://compassionate-bose-b7199a.netlify.app/#/',
    source: 'https://github.com/rebaz36/KFD',
  },
  {
    name: 'Jobie',
    author: 'Rebaz',
    stack: 'Frontend + Firebase',
    year: 2021,
    description: 'Jobie is a platform to connect Job Seekers to people where they can either request jobs or post jobs.',
    Modaldescription: 'Jobie is a platform to connect Job Seekers to people where they can either request jobs or post jobs. this project was created whne i was taking React Bootcamp offered by Re:Coded. it is a full stack application that uses React, Redux, React-Router, and Firebase.',
    featuredImage: 'images/works/2Jobie.png',
    desktopImage: 'images/worksModal/2JobieDes.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Firebase', 'React', 'Redux', 'React-Router'],
    liveVersion: 'https://rbc-jobie.netlify.app/',
    source: 'https://github.com/rebaz36/capstone-react-jobie',
  },
  {
    name: 'Steganography',
    author: 'Rebaz',
    stack: 'Frontend',
    year: 2022,
    description: 'Steganography is a platform to hide messages in images.',
    Modaldescription: 'Steganography is a platform to hide messages in images. this is a project that I undertook during my time at the University of Malaysia. I undertook this project to learn how to use steganography and how to hide messages in images. I used the steganography algorithm to hide messages in images.',
    featuredImage: 'images/works/3Steganography.png',
    desktopImage: 'images/worksModal/3SteganographyDes.png',
    technologies: ['html', 'css', 'javascript'],
    liveVersion: 'https://objective-mcclintock-4bd3ac.netlify.app/',
    source: 'https://github.com/rebaz36/Steganography-React-master',
  },
  {
    name: 'Conferance',
    author: 'Rebaz',
    stack: 'Frontend',
    year: 2022,
    description: 'Conferance is a platform to connect Speakers to people where they can see conferance details speakers and so on.',
    Modaldescription: 'Conferance is a platform to connect Speakers to people where they can see conferance details speakers and so on.The goal of this project is to build a simple multipage page responsive conference website which will be coming up later this year. The website will show all the necessary information concerning the conference including: the speakers, program of event, sponsors and other relevant informations.',
    featuredImage: 'images/works/4Conferance.png',
    desktopImage: 'images/worksModal/4ConferanceDes.png',
    technologies: ['html', 'css', 'javascript', 'Github'],
    liveVersion: 'https://rebaz36.github.io/M1Capstone/',
    source: 'https://github.com/rebaz36/M1Capstone',
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
<ul class="project-tools mtools">
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

// local storage
const formData = {
  name: '',
  email: '',
  description: '',
};

function fillDatas() {
  let storageData = localStorage.getItem('form-data');
  storageData = JSON.parse(storageData);
  document.getElementById('name').value = storageData.name;
  document.getElementById('email').value = storageData.email;
  document.getElementById('description').value = storageData.description;
}

function populateDatas() {
  formData.name = document.getElementById('name').value;
  formData.email = document.getElementById('email').value;
  formData.description = document.getElementById('description').value;
  localStorage.setItem('form-data', JSON.stringify(formData));
  fillDatas();
}

const inputList = [];
inputList.push(document.getElementById('name'));
inputList.push(document.getElementById('email'));
inputList.push(document.getElementById('description'));

inputList.forEach((value) => {
  value.onchange = function trig() {
    populateDatas();
  };
});

if (!localStorage.getItem('form-data')) {
  populateDatas();
} else {
  fillDatas();
}
