# Radensys website

Statische website, opgesplitst in overzichtelijke bestanden zodat je er makkelijk
verder aan kan werken op GitHub (GitHub Pages, Netlify, Vercel, ... werken hier direct mee).

## Bestandsstructuur

```
/
├── index.html          → de pagina-inhoud (HTML)
├── css/
│   └── style.css       → alle styling (kleuren, layout, responsive gedrag)
├── js/
│   └── main.js         → mobiel menu + nieuwsbrief-formulier
└── README.md            → dit bestand
```

Alles wat met **inhoud** te maken heeft, pas je aan in `index.html`.
Alles wat met **uiterlijk** te maken heeft (kleuren, afstanden, lettergrootte),
pas je aan in `css/style.css` — bovenaan staan de kleurvariabelen
(`:root { --accent: ... }`) zodat je makkelijk het hele kleurenschema kan wijzigen.

## Wat is er anders dan je oude Squarespace-site?

Ik heb de originele `paginabron.txt` (de Squarespace-export) doorgenomen en de
echte inhoud en volgorde van de secties overgenomen:

1. Hero met de titel "Radiation Engineering Systems" en de echte introtekst
2. Een fotogalerij met de 3 foto's die ook op de originele site stonden
3. Een "About Us" sectie
4. De "Let's Work Together" call-to-action
5. Het "Join Our Mailing List" formulier
6. De footer met contactgegevens

De "Our Core Expertise"-kaarten (Custom Product Design, Embedded Systems, ...)
stonden **niet** op de originele Squarespace-pagina — die had je zelf al
toegevoegd aan de GitHub-versie. Ik heb ze laten staan omdat ze goed passen bij
het bedrijf, maar verwijder de hele `<section class="services-section">` in
`index.html` gerust als je ze niet wil.

## Belangrijk: afbeeldingen

De afbeeldingen (logo, hero-achtergrond, galerij) linken nu nog rechtstreeks naar
Squarespace's CDN (`images.squarespace-cdn.com`). Dat werkt zolang je
Squarespace-account actief blijft, maar is niet toekomstbestendig als je daar
ooit weg wil. Beter:

1. Download de afbeeldingen (rechtermuisklik → "Afbeelding opslaan als") van je
   huidige site.
2. Zet ze in een nieuwe map, bv. `assets/images/`.
3. Vervang in `index.html` de lange Squarespace-URL's door bv.
   `assets/images/logo.png`.

## Nieuwsbrief-formulier

Het formulier ("Join Our Mailing List") toont nu enkel een bedankbericht in de
browser — er wordt nergens een e-mailadres opgeslagen. Om dat wel te doen kan je
het koppelen aan een gratis dienst zoals:

- **Formspree** (formspree.io) — simpelste optie, formulier-actie aanpassen
- **Mailchimp** of **Brevo** — echte nieuwsbrieflijst met embed-formulier

Laat het weten als je hulp wil om dat in te stellen.
