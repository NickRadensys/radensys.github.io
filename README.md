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
│   └── main.js         → mobiel menu, nieuwsbrief-formulier, scroll-animaties
└── README.md            → dit bestand
```

Alles wat met **inhoud** te maken heeft, pas je aan in `index.html`.
Alles wat met **uiterlijk** te maken heeft, pas je aan in `css/style.css` —
bovenaan staan alle kleur- en lettertype-variabelen (`:root { ... }`).

## Het ontwerpconcept: "engineering blueprint"

In plaats van een generieke donkere tech-site heb ik gekozen voor een look die
aansluit bij wat Radensys echt doet: technische tekeningen maken.

- **Achtergrond**: een subtiel blauwdruk-rooster, met registratiekruisjes in de
  hoeken van de hero — zoals je die op echte technische tekeningen ziet.
- **Kleuren**: diep blauwzwart (`--bg: #0a1420`) met een warm amber-accent
  (`--accent: #ffb020`) — een knipoog naar het universele stralingsgevaar-symbool,
  en het onderscheidt de site van standaard blauw/paars-tech-sites.
- **Typografie**: 'Space Grotesk' voor koppen (technisch, geometrisch),
  'Inter' voor lopende tekst, en 'JetBrains Mono' voor labels en codes —
  net als op een specsheet.
- **Details**: de dienstenkaarten hebben een "onderdeelcode" (CPD—01, EMB—02, ...)
  in plaats van generieke iconen, en de foto's in de galerij zijn genummerd
  als "FIG. 01 / 02 / 03", zoals bijschriften in technische documentatie.
- **Beweging**: een subtiele scanlijn in de hero en zachte scroll-animaties
  op secties/kaarten. Alles respecteert `prefers-reduced-motion` — mensen die
  animaties liever uitzetten, krijgen een statische versie.

Wil je een andere sfeer (bijvoorbeeld lichter, of een andere accentkleur)? Pas
gewoon de variabelen bovenaan `css/style.css` aan — de rest van de site
volgt automatisch mee.

## Afbeeldingen

De site gebruikt nu lokale afbeeldingen uit `assets/images/`:

- `logo.png` — het echte Radensys-logo (wit/blauw), uitgesneden uit `Logo_4.pdf`
- `hero-bg.jpg` — de SBDS spreader bar-installatie op de kade, uit jullie infosheet
- `work-air.jpg`, `work-rail.jpg`, `work-road.jpg` — de AIR/RAIL/ROAD-foto's uit
  hetzelfde infosheet

Wil je een ander logo of andere foto's gebruiken? Zet het nieuwe bestand in
`assets/images/` en pas het pad aan in `index.html`.

## Contactformulier instellen (belangrijk!)

De "Let's Work Together"-sectie heeft nu een écht contactformulier (naam, e-mail,
bericht) i.p.v. enkel een mailto-knop. Het gebruikt **Formspree**, een gratis
dienst (tot 50 verzendingen/maand) die formulieren naar je e-mail doorstuurt
zonder dat je een eigen server nodig hebt.

Zo stel je het in:
1. Ga naar [formspree.io](https://formspree.io) en maak een gratis account.
2. Maak een nieuw formulier aan → je krijgt een URL zoals `https://formspree.io/f/abcd1234`.
3. Open `index.html`, zoek de regel:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   en vervang `YOUR_FORM_ID` door jouw eigen ID.

Tot je dat gedaan hebt, toont het formulier bij versturen een foutmelding en
verwijst het bezoekers naar het e-mailadres eronder — de site blijft dus altijd
bruikbaar.

## Nieuwsbrief-formulier

Het formulier ("Join Our Mailing List") toont nog enkel een bedankbericht in de
browser — er wordt nergens een e-mailadres opgeslagen. Om dat wel te doen kan je
het koppelen aan dezelfde Formspree-account (nieuw formulier aanmaken), of aan:

- **Mailchimp** of **Brevo** — echte nieuwsbrieflijst met embed-formulier

Laat het weten als je hulp wil om dat in te stellen.

## UX-verbeteringen die zijn toegevoegd

- **Werkend contactformulier** (zie hierboven) i.p.v. enkel een mailto-link.
- **Actieve navigatie**: de navigatielink van de sectie die je aan het bekijken
  bent, licht op in amber (scroll-spy).
- **Sticky mobiele contactbalk**: op telefoon blijft er onderaan altijd een
  "Email" en "Get in Contact"-knop zichtbaar, zodat bezoekers nooit ver hoeven
  te scrollen om contact op te nemen.
- **Back-to-top knop**: verschijnt rechtsonder zodra je voorbij de hero scrollt.
- **Performance**: `width`/`height` op alle afbeeldingen (voorkomt dat de pagina
  "springt" tijdens het laden), `loading="lazy"` op de galerijfoto's, en
  `decoding="async"` overal.

### Nog te overwegen
- Afbeeldingen lokaal hosten in plaats van via Squarespace's CDN (zie hierboven) —
  dat scheelt laadtijd en maakt je onafhankelijk van je Squarespace-account.
- Afbeeldingen comprimeren/naar `.webp` omzetten voor nog snellere laadtijden
  (bv. via [squoosh.app](https://squoosh.app)).
- Een `sitemap.xml` en `robots.txt` toevoegen voor betere vindbaarheid in Google.
