// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// GSAP Animations
// Hero section animations
gsap.timeline()
    .from('.hero-title', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' })
    .from('.hero-subtitle', { duration: 1, y: 30, opacity: 0, ease: 'power3.out' }, '-=0.7')
    .from('.hero-description', { duration: 1, y: 30, opacity: 0, ease: 'power3.out' }, '-=0.7')
    .from('.hero-buttons', { duration: 1, y: 30, opacity: 0, ease: 'power3.out' }, '-=0.7')
    .from('.floating-card', {
        duration: 1.5,
        scale: 0,
        rotation: 180,
        opacity: 0,
        ease: 'back.out(1.7)',
        stagger: 0.2
    }, '-=0.5');

// Floating cards continuous animation
gsap.to('.floating-card', {
    y: -20,
    duration: 2,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.5
});

// Section animations on scroll
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section.querySelectorAll('.section-title'), {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
});

// About section animations
gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%'
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.stat', {
    scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 80%'
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    stagger: 0.2
});

// Skills section animations
gsap.from('.skill-category', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 70%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    stagger: 0.3
});

// Animate skill bars
ScrollTrigger.create({
    trigger: '.skills',
    start: 'top 70%',
    onEnter: () => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            const width = bar.getAttribute('data-width');
            gsap.to(bar, {
                width: width + '%',
                duration: 1.5,
                ease: 'power3.out'
            });
        });
    }
});

// Projects section animations
gsap.from('.projects', {
    scrollTrigger: {
        trigger: '.projects',
        start: 'top 70%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    stagger: 0.2
});

// Contact section animations
gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%'
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: 'power3.out'
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate form submission
    const submitBtn = this.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // setTimeout(() => {
    //     alert('Thank you for your message! I\'ll get back to you soon.');
    //     this.reset();
    //     submitBtn.textContent = originalText;
    //     submitBtn.disabled = false;
    // }, 2000);
});

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if (result.success) {
        alert("✅🎉 Message sent successfully! Thank you for contacting me.");
        form.reset();
    } else {
        alert("❌⚠️ Oops! Something went wrong. Please try again.");
    }
});

// Parallax effect for hero section
gsap.to('.floating-card', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: -100,
    ease: 'none'
});

// Text reveal animation
gsap.utils.toArray('.hero-description, .about-description').forEach(text => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            start: 'top 80%'
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: 'power3.out'
    });
});

// Button hover animations
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Social links hover animation
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Loading animation
window.addEventListener('load', () => {
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Scroll progress indicator
gsap.to('.scroll-arrow', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    opacity: 0,
    y: 20,
    ease: 'none'
});
const currentYear = new Date().getFullYear();
// Set the text of the span
document.getElementById("year").textContent = '@' + currentYear + ' Ganesh. Crafted with passion and code.';
