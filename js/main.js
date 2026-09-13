/* Nav: add .scrolled class after user scrolls past 60px */
const nav = document.getElementById('nav');

const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Subtle fade-in for sections as they enter the viewport */
const fadeEls = document.querySelectorAll(
    '.work-card, .about-image, .about-body, .hero-title, .hero-eyebrow, .hero-cta'
);

if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    fadeEls.forEach((el) => {
        el.classList.add('will-fade');
        io.observe(el);
    });
}
