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

## Wat is er anders dan je oude Squarespace-site?

Ik heb de originele `paginabron.txt` (de Squarespace-export) doorgenomen en de
echte inhoud en volgorde van de secties overgenomen: hero met de originele
introtekst, de 3 foto's uit de galerij, "About Us", "Let's Work Together" en
het "Join Our Mailing List"-formulier.

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
