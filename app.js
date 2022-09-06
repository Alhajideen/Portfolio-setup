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

function display() {
  let myCard = '';
  for (let i = 0; i < projectArr.length; i++) {
    let myObj = projectArr[i];
    let techArr = projectArr[i].technologies;
    let uList = '';
    for (let j = 0; j < techArr.length; j++) {
      console.log(techArr[j]);
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
              <button type="button">See Project</button>
            </div>
          </div>
        </article>`;
  }
  cardContainer.innerHTML = myCard;
}
display();
// Loop array and display cards to dom
