let hamburger = document.querySelector('.hamburger');
let dropdown = document.querySelector('.mobile-dropdown');
let closeX = document.querySelector('.close-x');

let buttonArr = [hamburger, closeX]
buttonArr.forEach((e)=> {
    e.addEventListener('click', () => {
      hamburger.classList.toggle('hidden')
      dropdown.classList.toggle('visible')
      closeX.classList.toggle('visible')
    });

})
