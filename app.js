const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.mobile-dropdown');
const closeX = document.querySelector('.close-x');
const navigation = document.querySelector('.nav-logo');
const menulink = document.querySelectorAll('.menulink');
const cardContainer = document.querySelector('.card-container');
const form = document.querySelector('.form-fields');
const button = document.querySelector('#submitBtn');
const message = document.querySelector('.errorMsg');

const projectArr = [
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './img/card1.png',
    technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap'],
    Source: 'https://github.com/Alhajideen/Portfolio-setup',
    liveLink: 'https://github.com/Alhajideen/Portfolio-setup',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './img/card1.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Source: 'https://github.com/Alhajideen/Portfolio-setup',
    liveLink: 'https://github.com/Alhajideen/Portfolio-setup',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './img/card1.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Source: 'https://github.com/Alhajideen/Portfolio-setup',
    liveLink: 'https://github.com/Alhajideen/Portfolio-setup',
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './img/card1.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Source: 'https://github.com/Alhajideen/Portfolio-setup',
    liveLink: 'https://github.com/Alhajideen/Portfolio-setup',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './img/card1.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Source: 'https://github.com/Alhajideen/Portfolio-setup',
    liveLink: 'https://github.com/Alhajideen/Portfolio-setup',
  },
  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './img/card1.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Source: 'https://github.com/Alhajideen/Portfolio-setup',
    liveLink: 'https://github.com/Alhajideen/Portfolio-setup',
  },
];

button.addEventListener('click', (e) => {
  const regEx = /^([a-z0-9_\-.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  const emailInput = document.querySelector('#email');
  const email = emailInput.value;
  if (email.match(regEx)) {
    message.innerHTML = '';
    form.submit();
    localStorage.removeItem('formValues');
  } else {
    e.preventDefault();
    message.innerHTML = 'Please enter correct email pattern in lowercase letters only';
  }
});

const inputs = form.elements;
const inputArr = [inputs[0], inputs[1], inputs[2]];
inputArr.forEach((e) => {
  e.addEventListener('change', () => {
    const formObj = {
      name: inputArr[0].value,
      email: inputArr[1].value,
      message: inputArr[2].value,
    };
    localStorage.setItem('formValues', JSON.stringify(formObj));
  });
});

window.addEventListener('load', () => {
  const formInfo = JSON.parse(localStorage.getItem('formValues'));
  if (formInfo) {
    inputArr[0].value = formInfo.name;
    inputArr[1].value = formInfo.email;
    inputArr[2].value = formInfo.message;
  } else {
    inputArr[0].value = '';
    inputArr[1].value = '';
    inputArr[2].value = '';
  }
});

const buttonArr = [hamburger, closeX];
buttonArr.forEach((e) => {
  e.addEventListener('click', () => {
    hamburger.classList.toggle('hidden');
    dropdown.classList.toggle('visible');
    closeX.classList.toggle('visible');
    navigation.classList.toggle('noVisibility');
  });
});

menulink.forEach((e) => {
  e.onclick = () => {
    hamburger.classList.toggle('hidden');
    dropdown.classList.toggle('visible');
    closeX.classList.toggle('visible');
    navigation.classList.toggle('noVisibility');
  };
});

let myCard = '';
let uList = '';
for (let i = 0; i < projectArr.length; i += 1) {
  uList = '';
  const myObj = projectArr[i];
  const techArr = projectArr[i].technologies;
  for (let j = 0; j < techArr.length; j += 1) {
    uList += `
                <li>${techArr[j]}</li>
              `;
  }
  myCard += `<article class="work-card">
          <figure class="work-img">
            <img src="${myObj.imae}" alt="work screenshot" />
          </figure>
          <div class="work-text">
            <header>
              <h2>${myObj.name}</h2>
            </header>
            <div class="work-tools">
            <ul>
              ${uList}
              </ul>
            </div>
            <div class="project-btn">
              <button type="button" class='work-btn' ownIndex=${i}>See Project</button>
            </div>
          </div>
        </article>`;
}
cardContainer.innerHTML = myCard;

const showModal = () => {
  const btn = document.querySelectorAll('.work-btn');
  const modalContainer = document.createElement('section');
  modalContainer.className = 'modal-container';
  const modalMobile = document.createElement('section');
  modalMobile.className = 'modal-container-mobile';
  btn.forEach((e) => {
    e.addEventListener('click', () => {
      const index = e.getAttribute('ownIndex');
      const forLaptop = modalElem(projectArr[index]);
      const forMobile = modalMob(projectArr[index]);
      const body = document.querySelector('body');
      body.append(modalContainer);
      body.append(modalMobile);
      const modalContain = document.querySelector('.modal-container');
      const mobileContain = document.querySelector('.modal-container-mobile');
      mobileContain.innerHTML = forMobile;
      modalContain.innerHTML = forLaptop;
      const closeModal = document.querySelectorAll('.close-modal');
      closeModal.forEach((e) => {
        e.addEventListener('click', () => {
          modalMobile.remove();
          modalContain.remove();
        });
      });
    });
  });
};
showModal();

const modalElem = (arr) => `
 <div class="modal-body">
        <figure class="close-img">
          <img class="close-modal" src="./img/close-x.png" alt="" />
        </figure>
        <figure class="modal-img">
          <img class="img-file" src="./img/card1.png" alt="" />
        </figure>
        <div class="modal-tittle">
          <div class="heading">
            <h2>${arr.name}</h2>
          </div>
          <div class="modal-btns">
            <a href="" target="_blank"><button>See Live <img src="./img/see-live.png" alt=""></i></button></a>
            <a href="" target="_blank"><button>See Source <img src="./img/gh.png" alt="github"></button></a>
          </div>
        </div>
        <div class="technologies">
          <ul>
          ${uList}
          </ul>
        </div>
        <div class="desc">
          <p>
            ${arr.description}
          </p>
        </div>
      </div>
`;

const modalMob = (arr) => `
  <div class="modal-body">
        <figure class="close-img">
          <img class="close-modal" src="./img/close-x.png" alt="" />
        </figure>
        <figure class="modal-img">
          <img class="img-file" src="./img/card1.png" alt="" />
        </figure>
        <div class="modal-tittle">
          <div class="heading">
            <h2>${arr.name}</h2>
          </div>
        </div>
        <div class="technologies">
          <ul>
          ${uList}
          </ul>
        </div>
        <div class="desc">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it 1960s with the releaLorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it 1960s with
            the relea
          </p>
        </div>
        <div class="modal-btns">
            <a href="" target="_blank"><button>See Live <img src="./img/see-live.png" alt=""></i></button></a>
            <a href="" target="_blank"><button>See Source <img src="./img/gh.png" alt="github"></button></a>
        </div>
      </div>
  `;
