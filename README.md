# Radensys website

Statische website, opgesplitst in overzichtelijke bestanden zodat je er makkelijk
verder aan kan werken op GitHub (GitHub Pages, Netlify, Vercel, ... werken hier direct mee).

## Bestandsstructuur

```
/
├── index.html              → home pagina
├── sbds-whitepaper.html    → technisch paper over de SBDS
├── style.css               → alle styling (kleuren, layout, responsive gedrag)
├── main.js                 → mobiel menu, formulieren, scroll-animaties
├── assets/images/          → logo en foto's
└── README.md               → dit bestand
```

Alles wat met **inhoud** te maken heeft, pas je aan in `index.html`.
Alles wat met **uiterlijk** te maken heeft, pas je aan in `css/style.css` —
bovenaan staan alle kleur- en lettertype-variabelen (`:root { ... }`).

## Het ontwerpconcept

De site gebruikt nu het echte kleurenschema van het Radensys-logo: het exacte
blauw uit het logo (`#167BD6`), zwart/inktkleurige tekst, en een wit/lichte
achtergrond. Enkel de navbar, hero en footer blijven donker navy — daar staat
het witte logo van nature op, en het geeft de pagina een duidelijk begin en
einde zonder de hele site donker te maken.

- **Logo**: fors groter (88px hoog in de navbar, was amper zichtbaar).
- **Kleuren**: `--accent: #167bd6` (het logo-blauw) is overal de enige accentkleur,
  geen amber meer.
- **Typografie**: 'Space Grotesk' voor koppen, 'Inter' voor de rest — geen
  monospace-labels meer, dat oogde te technisch/gadget-achtig voor een
  security-/detectiebedrijf.

Wil je een andere sfeer? Pas de variabelen bovenaan `style.css` aan.

## Product-sectie i.p.v. galerij

De vorige "Our Work in the Field"-galerij toonde eigenlijk foto's van
RadComm Systems' technologie, niet van Radensys zelf — die is verwijderd.
In de plaats staat nu een sectie rond jullie eigen product, de **Spreader Bar
Detection System (SBDS)**, met de foto en de cijfers uit jullie eigen infosheet
(`Folder_radensys_transport_V3.pdf`): 4.390 bevestigde incidenten, 1-op-10
transporten met een issue, 175 IMO-lidstaten.

De 4 kaarten in "Services" zijn herschreven om te verwijzen naar wat het SBDS
echt doet (isotoopidentificatie, integratie in de spreader bar, multimodale
dekking, regelgeving zoals IAEA/IMDG/SOLAS) in plaats van generieke
IoT/embedded-tekst. Kijk dit zeker na en pas aan waar nodig — ik heb dit
afgeleid uit jullie infosheet, maar ken het product niet in detail.

## Afbeeldingen

De site gebruikt lokale afbeeldingen uit `assets/images/`:

- `logo.png` — het echte Radensys-logo (wit/blauw), uitgesneden uit `Logo_4.pdf`
- `hero-bg.jpg` — de SBDS spreader bar-installatie op de kade
- `product-detail.jpg` — close-up van diezelfde installatie, gebruikt in de
  product-sectie

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

## Nieuwe pagina: het technisch paper

`sbds-whitepaper.html` is een nieuwe pagina die het volledige document
`Radensys_SBDS_Paper.docx` toont — alle tekst is exact overgenomen, enkel
opgemaakt in het stijl van de site (met een korte inhoudsopgave, en de
voetnootverwijzingen `[1]`&ndash;`[5]` als klikbare links naar de
referentielijst onderaan). De "Learn More"-knop bij de cijfers in de
product-sectie op de homepage linkt hiernaartoe.

Let op: het infosheet (`Folder_radensys_transport_V3.pdf`, gebruikt voor de
cijfers op de homepage) vermeldt **4.390** bevestigde incidenten, terwijl het
technisch paper **4.626** vermeldt (andere brondatum: IAEA ITDB t.e.m. 2025).
Ik heb dat verschil laten staan zoals het in de bronnen stond — laat het
weten als je wil dat ik dat gelijktrek.

## Overige aanpassingen

- **Logo groter**: 88px in de navbar (was 64px), en dezelfde afmeting op de
  nieuwe whitepaper-pagina.
- **Hero-achtergrond lichter**: de foto van de SBDS-installatie is minder
  verduisterd (van 0.5 naar 0.85 dekking, lichtere overlay), met een zachte
  tekstschaduw zodat de titel leesbaar blijft.

## Nieuwsbrief-formulier

Het formulier ("Join Our Mailing List") toont nog enkel een bedankbericht in de
browser — er wordt nergens een e-mailadres opgeslagen. Om dat wel te doen kan je
het koppelen aan dezelfde Formspree-account (nieuw formulier aanmaken), of aan:

- **Mailchimp** of **Brevo** — echte nieuwsbrieflijst met embed-formulier

Laat het weten als je hulp wil om dat in te stellen.

## UX-verbeteringen die zijn toegevoegd

- **Werkend contactformulier** (zie hierboven) i.p.v. enkel een mailto-link.
- **Actieve navigatie**: de navigatielink van de sectie die je aan het bekijken
  bent, licht op in het blauwe accent (scroll-spy).
- **Sticky mobiele contactbalk**: op telefoon blijft er onderaan altijd een
  "Email" en "Get in Contact"-knop zichtbaar, zodat bezoekers nooit ver hoeven
  te scrollen om contact op te nemen.
- **Back-to-top knop**: verschijnt rechtsonder zodra je voorbij de hero scrollt.
- **Performance**: `width`/`height` op alle afbeeldingen (voorkomt dat de pagina
  "springt" tijdens het laden), `loading="lazy"` op de galerijfoto's, en
  `decoding="async"` overal.

### Nog te overwegen
- Afbeeldingen comprimeren/naar `.webp` omzetten voor nog snellere laadtijden
  (bv. via [squoosh.app](https://squoosh.app)).
- Een `sitemap.xml` en `robots.txt` toevoegen voor betere vindbaarheid in Google.
