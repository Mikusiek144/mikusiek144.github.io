// Inicjalizacja AOS (Animacje)
AOS.init({
    duration: 1000,
    once: true,
});

// Niestandardowy kursor
const customCursor = document.querySelector(".custom-cursor");

// Obsługa ruchu myszy
document.addEventListener("mousemove", function (e) {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});

// Obsługa najechania na link
const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("mouseenter", function () {
        customCursor.style.backgroundImage = "url('link-cursor.cur')";
    });
    link.addEventListener("mouseleave", function () {
        customCursor.style.backgroundImage = "url('default-cursor.cur')";
    });
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
