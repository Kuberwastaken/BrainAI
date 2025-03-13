// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            fadeInUpObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animations to elements
document.addEventListener('DOMContentLoaded', () => {
    // Animate feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            fadeInUpObserver.observe(card);
        }, index * 100);
    });

    // Animate sections
    document.querySelectorAll('.testimonial, .cta-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        fadeInUpObserver.observe(section);
    });

    // Enhance gradient spheres animation
    const spheres = document.querySelectorAll('.gradient-sphere, .gradient-sphere-2');
    spheres.forEach(sphere => {
        sphere.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        sphere.addEventListener('mousemove', (e) => {
            const rect = sphere.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const moveX = (x - centerX) / 20;
            const moveY = (y - centerY) / 20;
            sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        sphere.addEventListener('mouseleave', () => {
            sphere.style.transform = 'translate(0, 0)';
        });
    });

    // Smooth reveal for hero section
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero .primary-button');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300 + index * 200);
    });
});