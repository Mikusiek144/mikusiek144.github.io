// Płynne przewijanie do sekcji
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Klikalna strzałka
document.getElementById('scroll-down').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Inicjalizacja AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Responsywne menu nawigacyjne
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Zamknij menu po kliknięciu na link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
    });
});