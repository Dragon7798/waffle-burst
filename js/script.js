function scrollToMenu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (id === 'footer-placeholder') {
                setYear();
            }
        })
        .catch(err => console.error('Error loading HTML:', err));
}

function setYear() {
    const yearNode = document.querySelector('[data-year]');
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }
}

function applyRevealAnimation() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach((element) => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    }

    loadHTML('header-placeholder', 'excess/header.html');
    loadHTML('footer-placeholder', 'excess/footer.html');
    applyRevealAnimation();

    const menuSlider = document.getElementById('menuSlider');
    const menuPrevBtn = document.querySelector('.menu-prev-btn');
    const menuNextBtn = document.querySelector('.menu-next-btn');

    if (menuSlider && menuPrevBtn && menuNextBtn) {
        const scrollAmount = 280;

        menuPrevBtn.addEventListener('click', () => {
            menuSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        menuNextBtn.addEventListener('click', () => {
            menuSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.classList.add('show');
    }
});
