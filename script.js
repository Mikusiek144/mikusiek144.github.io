// Inicjalizacja AOS (Animacje)
AOS.init({
    duration: 1000,
    once: true,
});

// Blokada prawego przycisku myszy (bez komunikatu)
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Zapobiega otwarciu menu kontekstowego
});

// Przewijanie strony po kliknięciu strzałki
const scrollDown = document.getElementById("scroll-down");
scrollDown.addEventListener("click", () => {
    window.scrollTo({
        top: document.getElementById("portfolio").offsetTop,
        behavior: "smooth"
    });
});

// Płynne przewijanie do sekcji portfolio po kliknięciu w "Projekty"
document.querySelectorAll('nav ul li a[href="#portfolio"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Zapobiega domyślnej akcji linku
        const portfolioSection = document.getElementById("portfolio");
        if (portfolioSection) {
            portfolioSection.scrollIntoView({
                behavior: "smooth" // Płynne przewijanie
            });
        }
    });
});

// Ograniczenie przewijania strony
function limitScroll() {
    const footer = document.querySelector("footer");
    const maxScroll = footer.offsetTop + footer.offsetHeight - window.innerHeight;

    if (window.scrollY > maxScroll) {
        window.scrollTo({
            top: maxScroll,
            behavior: "auto"
        });
    }
}

// Nasłuchuj zdarzenia przewijania
window.addEventListener("scroll", limitScroll);
