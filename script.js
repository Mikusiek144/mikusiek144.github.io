// Inicjalizacja AOS (Animacje) - tylko raz
AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile' // Wyłącz na urządzeniach mobilnych dla lepszej wydajności
});

// Blokada prawego przycisku myszy (bez komunikatu)
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Zapobiega otwarciu menu kontekstowego
});

// Przewijanie strony po kliknięciu strzałki - zoptymalizowane
const scrollDown = document.getElementById("scroll-down");
if (scrollDown) {
    scrollDown.addEventListener("click", () => {
        const portfolioSection = document.getElementById("portfolio");
        if (portfolioSection) {
            portfolioSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

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

// Zoptymalizowane ograniczenie przewijania strony
let isScrolling = false;
function limitScroll() {
    if (isScrolling) return;
    
    isScrolling = true;
    requestAnimationFrame(() => {
        const footer = document.querySelector("footer");
        if (footer) {
            const maxScroll = footer.offsetTop + footer.offsetHeight - window.innerHeight;
            if (window.scrollY > maxScroll) {
                window.scrollTo({
                    top: maxScroll,
                    behavior: "auto"
                });
            }
        }
        isScrolling = false;
    });
}

// Nasłuchuj zdarzenia przewijania z throttling
let scrollTimeout;
window.addEventListener("scroll", () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            limitScroll();
            scrollTimeout = null;
        }, 100);
    }
});
