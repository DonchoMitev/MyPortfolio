//Work Dom three
const body = document.querySelector('.site-body')
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.site-nav-bar');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        body.classList.add('show');
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        body.classList.remove('show');
        showMenu = false;
    }
}

