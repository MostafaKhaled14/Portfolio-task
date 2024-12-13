let navbarNav = document.querySelector('#navbarNav');
let buttons = document.querySelector('#navbarNav').querySelectorAll('button');

function chicklink(){
    navbarNav.classList.remove('show');
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', chicklink)
}