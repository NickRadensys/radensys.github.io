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

## Afbeeldingen

1. Zet ze in een nieuwe map, bv. `assets/images/`.
2. Vervang in `index.html` de lange Squarespace-URL's door bv.
   `assets/images/logo.png`.

## Nieuwsbrief-formulier

Het formulier ("Join Our Mailing List") toont nu enkel een bedankbericht in de
browser, er wordt nergens een e-mailadres opgeslagen. Om dat wel te doen kan je
het koppelen aan een gratis dienst zoals:

- **Formspree** (formspree.io) — simpelste optie, formulier-actie aanpassen
- **Mailchimp** of **Brevo** — echte nieuwsbrieflijst met embed-formulier

Laat het weten als je hulp wil om dat in te stellen.
