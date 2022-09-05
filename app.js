const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.mobile-dropdown');
const closeX = document.querySelector('.close-x');
const navigation = document.querySelector('.nav-logo');
const menulink = document.querySelectorAll('.menulink');

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
