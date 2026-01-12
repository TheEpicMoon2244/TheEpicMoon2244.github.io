// -------------------- DYNAMIC FOOTER YEAR --------------------
document.getElementById('year').textContent = new Date().getFullYear();

// -------------------- FOOTER FADE IN ON SCROLL --------------------
const footer = document.getElementById('footer');
new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) footer.classList.add('visible');
}).observe(footer);

// -------------------- HAMBURGER MENU TOGGLE --------------------
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');

hamburger.addEventListener('click', () => menu.classList.toggle('active'));
menuClose.addEventListener('click', () => menu.classList.remove('active'));

// -------------------- VIDEO MODAL --------------------
const modal = document.getElementById('videoModal');
const frame = document.getElementById('videoFrame');
const closeBtn = document.getElementById('videoClose');

// Function to open video modal
function openVideo(videoURL) {
    frame.src = videoURL + '?autoplay=1';
    modal.classList.add('active');
}

// Function to close video modal
function closeVideo() {
    modal.classList.remove('active');
    frame.src = '';
}

// -------------------- DYNAMIC GALLERY VIDEO LISTENERS --------------------
function attachGalleryListeners() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        // Remove any previous listeners to avoid duplicates
        item.replaceWith(item.cloneNode(true));
    });

    const updatedGalleryItems = document.querySelectorAll('.gallery-item');
    updatedGalleryItems.forEach(item => {
        item.addEventListener('click', () => openVideo(item.dataset.video));
    });
}

// Initial attachment
attachGalleryListeners();

// Close modal events
closeBtn.addEventListener('click', closeVideo);
modal.addEventListener('click', e => {
    if (e.target === modal) closeVideo();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeVideo();
});

// -------------------- MENU HOVER INTERACTIONS --------------------
const menuItems = document.querySelectorAll('.menu-overlay a');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        menuItems.forEach(otherItem => {
            if (otherItem !== item && !otherItem.classList.contains('active')) {
                otherItem.style.transform = 'scale(0.9)'; // shrink other inactive items
            }
        });

        if (item.classList.contains('active')) {
            item.style.transform = 'translateY(-3px) scale(1.05)'; // active item raises
        } else {
            item.style.transform = 'scale(1.1)'; // hovered inactive grows
        }
    });

    item.addEventListener('mouseleave', () => {
        menuItems.forEach(otherItem => {
            otherItem.style.transform = 'none'; // reset all transforms
        });
    });
});

// ---------- REDIRECT TO 404 ----------
window.addEventListener('error', function(e) {
    // For any unhandled JS error or resource loading error, redirect to 404
    window.location.href = "404.html";
});

// Optional: Catch unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    window.location.href = "404.html";
});

// Optional: Catch missing gallery items dynamically
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    if (!gallery || gallery.children.length === 0) {
        window.location.href = "404.html";
    }
});
