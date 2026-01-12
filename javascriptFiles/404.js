// ---------- MENU OPEN/CLOSE ----------
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') menu.classList.remove('active');
});

menu.addEventListener('click', e => {
    if (e.target === menu) menu.classList.remove('active');
});
