// ==========================================================
// RADENSYS — main.js
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

    /* --- Mobiel menu openen/sluiten --- */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Menu sluiten na het klikken op een link (handig op mobiel)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* --- Scroll reveal: secties/kaarten verschijnen zacht bij scrollen ---
       Respecteert prefers-reduced-motion (zie CSS): daar staat alles
       gewoon meteen zichtbaar, dus deze observer is dan puur decoratief. */
    const revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && revealEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealEls.forEach(el => observer.observe(el));
    } else {
        // Fallback: geen IntersectionObserver ondersteund -> gewoon tonen
        revealEls.forEach(el => el.classList.add('is-visible'));
    }

    /* --- Scroll-spy: markeert de navigatielink van de sectie die nu in beeld is --- */
    const navLinkEls = document.querySelectorAll('[data-nav-link]');
    const sections = [...navLinkEls]
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if ('IntersectionObserver' in window && sections.length) {
        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = '#' + entry.target.id;
                    navLinkEls.forEach(link => {
                        link.classList.toggle('active-link', link.getAttribute('href') === id);
                    });
                }
            });
        }, { rootMargin: '-45% 0px -45% 0px' });

        sections.forEach(section => spyObserver.observe(section));
    }

    /* --- Contactformulier: verzenden via Formspree zonder de pagina te herladen --- */
    const contactForm = document.getElementById('contactForm');
    const contactFormStatus = document.getElementById('contactFormStatus');

    if (contactForm && contactFormStatus) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending…';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    contactForm.reset();
                    contactForm.hidden = true;
                    contactFormStatus.hidden = false;
                    contactFormStatus.className = 'form-status success';
                    contactFormStatus.textContent = 'Thanks — we\'ll be in touch soon.';
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (err) {
                contactFormStatus.hidden = false;
                contactFormStatus.className = 'form-status error';
                contactFormStatus.textContent =
                    'Something went wrong. Please email us directly at info@radensys.eu.';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        });
    }

    /* --- Back-to-top knop --- */
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.hidden = false;
            backToTop.classList.toggle('visible', window.scrollY > 600);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
