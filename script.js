
const loadingScreen = document.querySelector('.loading-screen');
const loadingProgress = document.querySelector('.loading-progress');


setTimeout(() => {
    loadingScreen.classList.add('hidden');
    document.body.style.overflow = 'auto';
}, 1700);


AOS.init({
    duration: 800,
    once: true,
    disable: 'mobile'
});


const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
let isNavbarVisible = true;

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        isNavbarVisible = !isNavbarVisible;
    });
}


document.addEventListener('click', (e) => {
    if (sidebar && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            if (sidebar) {
                sidebar.classList.remove('active');
            }
        }
    });
});


document.body.style.overflow = 'auto';
document.body.style.height = '100%';
document.documentElement.style.height = '100%';


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar-nav a');

function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);


const skillBars = document.querySelectorAll('.skill-level');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('style').split('width: ')[1];
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    observer.observe(bar);
});


document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});


let scrollTimeout;
window.addEventListener("scroll", () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            limitScroll();
            scrollTimeout = null;
        }, 100);
    }
});
