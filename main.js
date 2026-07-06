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

    /* --- Nieuwsbrief formulier ---
       Let op: dit toont alleen een bedankbericht in de browser.
       Om echt e-mailadressen te verzamelen moet je dit formulier
       koppelen aan een dienst zoals Mailchimp, Brevo of Formspree.
       Zie README.md voor uitleg. */
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterThanks = document.getElementById('newsletterThanks');

    if (newsletterForm && newsletterThanks) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            newsletterForm.hidden = true;
            newsletterThanks.hidden = false;
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

});
