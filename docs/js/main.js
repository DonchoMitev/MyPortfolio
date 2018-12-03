//Work Dom three
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.wrapper');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        showMenu = false;
    }
}

