const menuBars = document.querySelector('.menu-bars');
const closeMenu = document.querySelector('.menu-close');
const nav = document.querySelector('.desktop-nav');
const navLinks = document.querySelectorAll('.nav-link');

const closeMobileNav = () => {
  nav.classList.remove('open');
};

console.log('navLink');

window.onload = () => {
  menuBars.addEventListener('click', () => {
    nav.classList.add('open');
  });
  closeMenu.addEventListener('click', () => {
    console.log('closed menu btn was clicked');
    closeMobileNav();
  });

  Array.from(navLinks).map((link) => link.addEventListener('click', () => {
    closeMobileNav();
  }));
};
