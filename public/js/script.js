// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.scrollY > fixednav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Menu
const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    menu.name === 'close' ? menu.name = 'menu' : menu.name = 'close'
    navMenu.classList.toggle('hidden')
})
