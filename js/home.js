// TOGGLE NAVIGATION BAR
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbar-menu');

hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('activate-navbar');
});