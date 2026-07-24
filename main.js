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

            // Eventuele melding van een vorige poging wissen, zodat een oude fout
            // niet blijft staan terwijl er opnieuw verzonden wordt.
            contactFormStatus.hidden = true;
            contactFormStatus.className = 'form-status';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    contactForm.reset();
                    contactForm.hidden = true;

                    // Knop weer in de uitgangsstand zetten. Het formulier is nu
                    // verborgen, maar zo staat alles klaar mocht het opnieuw
                    // getoond worden en blijft er geen 'Sending…' hangen.
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';

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

    /* --- Uitklapbare capability-kaarten ---
       Eén paneel tegelijk open. De hoogte wordt in JS gezet (0 <-> scrollHeight)
       omdat de tekstlengte per paneel verschilt; met een vaste max-height zou de
       animatieduur per paneel anders aanvoelen. Na afloop gaat de hoogte op
       'auto', zodat het paneel meegroeit als de tekst herschikt bij resize.
       De knoppen zijn echte <button>-elementen, dus Enter en Space werken
       vanzelf en de focus-stijl uit de basis-CSS geldt ook hier. */
    const capToggles = document.querySelectorAll('[data-cap-toggle]');

    if (capToggles.length) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let openId = null;

        const panelFor = (id) => document.querySelector(`[data-cap-panel="${id}"]`);
        const cardFor = (id) => document.querySelector(`[data-cap="${id}"]`);
        const toggleFor = (id) => document.querySelector(`[data-cap-toggle="${id}"]`);

        // Duur moet gelijk lopen met de transition op .cap-panel in style.css.
        const DURATION = 250;

        // De opruiming na de animatie hangt aan een timer per paneel, niet aan
        // 'transitionend'. Dat event komt namelijk niet altijd: een onderbroken
        // animatie (snel op een andere kaart klikken) of een tab die geen frames
        // rendert laat het achterwege, en dan blijft een paneel half open staan.
        const finishLater = (panel, fn) => {
            clearTimeout(panel._capTimer);
            panel._capTimer = setTimeout(fn, DURATION + 20);
        };

        const collapse = (id) => {
            const panel = panelFor(id);
            const toggle = toggleFor(id);
            if (!panel || !toggle) return;

            toggle.setAttribute('aria-expanded', 'false');
            toggle.querySelector('.card-more-label').textContent = 'Learn more';
            cardFor(id)?.classList.remove('is-open');

            if (reduceMotion) {
                clearTimeout(panel._capTimer);
                panel.style.height = '';
                panel.hidden = true;
                return;
            }

            panel.style.height = `${panel.scrollHeight}px`;
            void panel.offsetHeight; // forceer reflow zodat de terugweg animeert
            panel.style.height = '0px';
            finishLater(panel, () => {
                panel.hidden = true;
                panel.style.height = '';
            });
        };

        const expand = (id) => {
            const panel = panelFor(id);
            const toggle = toggleFor(id);
            if (!panel || !toggle) return;

            clearTimeout(panel._capTimer);
            panel.hidden = false;
            toggle.setAttribute('aria-expanded', 'true');
            toggle.querySelector('.card-more-label').textContent = 'Close';
            cardFor(id)?.classList.add('is-open');

            if (reduceMotion) {
                panel.style.height = 'auto';
                return;
            }

            panel.style.height = '0px';
            void panel.offsetHeight;
            panel.style.height = `${panel.scrollHeight}px`;
            // Hoogte daarna loslaten, zodat het paneel meegroeit als de tekst
            // herschikt bij een resize.
            finishLater(panel, () => {
                panel.style.height = 'auto';
            });
        };

        capToggles.forEach((toggle) => {
            toggle.addEventListener('click', () => {
                const id = toggle.dataset.capToggle;

                if (openId === id) {
                    collapse(id);
                    openId = null;
                    return;
                }

                if (openId !== null) collapse(openId);
                expand(id);
                openId = id;
            });
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
