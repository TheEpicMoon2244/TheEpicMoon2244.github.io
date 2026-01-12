// Hamburger menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');

hamburger.addEventListener('click', () => menu.classList.toggle('active'));
menuClose.addEventListener('click', () => menu.classList.remove('active'));

// Go back button always goes to video.html
const goBackBtn = document.getElementById('goBackBtn');
goBackBtn.addEventListener('click', () => {
    window.location.href = "video.html";
});

// Fade in elements on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

const menuLinks = document.querySelectorAll('.menu-overlay a');

menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        menuLinks.forEach(l => {
            if (!l.classList.contains('active') && l !== link) {
                l.style.transform = 'scale(0.85)';
                l.style.opacity = '0.6';
            }
        });
        if (!link.classList.contains('active')) {
            link.style.transform = 'scale(1.15)';
            link.style.opacity = '1';
        }
    });

    link.addEventListener('mouseleave', () => {
        menuLinks.forEach(l => {
            l.style.transform = 'scale(1)';
            l.style.opacity = l.classList.contains('active') ? '1' : '1';
        });
    });
});
