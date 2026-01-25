
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Animate contact info and WhatsApp button when in view
const contactInfo = document.querySelector('.contact-info');
const whatsappBtn = document.querySelector('.whatsapp-btn');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contactInfo.classList.add('show');
            whatsappBtn.classList.add('show');
        }
    });
}, { threshold: 0.3 });

observer.observe(contactInfo);
function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error('Error loading HTML:', err));
}

// Load header and footer
loadHTML('header-placeholder', 'excess/header.html');
loadHTML('footer-placeholder', 'excess/footer.html');

document.addEventListener("DOMContentLoaded", () => {
    const menuSlider = document.getElementById('menuSlider');
    const menuPrevBtn = document.querySelector('.menu-prev-btn');
    const menuNextBtn = document.querySelector('.menu-next-btn');

    if (menuSlider && menuPrevBtn && menuNextBtn) {

        // Scroll Left
        menuPrevBtn.addEventListener('click', () => {
            menuSlider.scrollBy({
                left: -300, // Scroll amount (card width + gap)
                behavior: 'smooth'
            });
        });

        // Scroll Right
        menuNextBtn.addEventListener('click', () => {
            menuSlider.scrollBy({
                left: 300, // Scroll amount (card width + gap)
                behavior: 'smooth'
            });
        });
    }
});