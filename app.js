const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.mobile-dropdown');
const closeX = document.querySelector('.close-x');
const navigation = document.querySelector('.nav-logo');
const menulink = document.querySelectorAll('.menulink');
const cardContainer = document.querySelector('.card-container');

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
      "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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

// Loop array and display cards to dom
let myCard = '';
for (let i = 0; i < projectArr.length; i++) {
  let myObj = projectArr[i];
  let techArr = projectArr[i].technologies;
  let uList = '';
  for (let j = 0; j < techArr.length; j++) {
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

// Loop array and display cards to dom

const showModal = () => {
  const btn = document.querySelectorAll('.work-btn');
  const modalContainer = document.createElement('section');
  modalContainer.className = 'modal-container';
  const modalMobile = document.createElement('section');
  modalMobile.className = 'modal-container-mobile';
  btn.forEach((e) => {
    e.addEventListener('click', () => {
      let index = e.getAttribute('ownIndex');
      let forLaptop = '';
      let forMobile = '';
      for (let i = 0; i < projectArr.length; i++) {
        if (i == index) {
          forLaptop = modalElem(projectArr[i]);
          forMobile = modalMob(projectArr[i]);
        }
      }
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

        });
      });
    });
  });
};
showModal();

const modalElem = (arr) => {
  return `
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
            <button>See Live <i class="fa-sharp fa-solid fa-arrow-up-left-from-circle fa-xl"></i></button>
            <button>See Source</button>
          </div>
        </div>
        <div class="technologies">
          <ul>
            <li>Codekit</li>
            <li>GitHub</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>Terminal</li>
            <li>Codepen</li>
          </ul>
        </div>
        <div class="desc">
          <p>
            ${arr.description}
          </p>
        </div>
      </div>
`;
};

const modalMob = (arr) => {
  return `
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
            <li>Codekit</li>
            <li>GitHub</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>Terminal</li>
            <li>Codepen</li>
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
          <button>
            See Live
            <i class="fa-sharp fa-solid fa-arrow-up-left-from-circle fa-xl"></i>
          </button>
          <button>See Source</button>
        </div>
      </div>
  `;
};
