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

});
