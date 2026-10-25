/**
 * Zentrale Inhalte der Website.
 * Alle Texte, Kontaktdaten und Listen werden hier gepflegt – die Komponenten
 * lesen ausschließlich aus dieser Datei.
 *
 * Platzhalter stehen in eckigen Klammern, z. B. "[E-MAIL]". Eine vollständige
 * Liste steht in der README.md.
 */

import type { ImageMetadata } from 'astro';

import imgHero from '../assets/images/hero-kammerjaeger.jpg';
import imgInhaber from '../assets/images/ueber-uns-inhaber.jpg';
import imgNotfall from '../assets/images/notfall-einsatz.jpg';
import imgWespen from '../assets/images/leistung-wespen.jpg';
import imgRatten from '../assets/images/leistung-ratten.jpg';
import imgMaeuse from '../assets/images/leistung-maeuse.jpg';
import imgBettwanzen from '../assets/images/leistung-bettwanzen.jpg';
import imgKakerlaken from '../assets/images/leistung-kakerlaken.jpg';
import imgAmeisen from '../assets/images/leistung-ameisen.jpg';
import imgSilberfische from '../assets/images/leistung-silberfische.jpg';
import imgMotten from '../assets/images/leistung-motten.jpg';
import imgMarder from '../assets/images/leistung-marder.jpg';
import imgFliegen from '../assets/images/leistung-fliegen.jpg';
import imgSpinnen from '../assets/images/leistung-spinnen.jpg';

/* ------------------------------------------------------------------ */
/* Technische Einstellungen                                            */
/* ------------------------------------------------------------------ */

// [DOMAIN] – die Domain wird in astro.config.mjs (SITE_URL) eingetragen.

/**
 * [N8N-WEBHOOK-URL] – Ziel für das Kontaktformular (POST, JSON).
 * Leer lassen = Fallback: Das Formular öffnet das E-Mail-Programm (mailto).
 */
export const FORM_ENDPOINT = '';

/** Kundenstimmen erst einschalten, wenn echte Bewertungen vorliegen. */
export const showTestimonials = false;

/** Button „Bewertungen auf Google ansehen“ – nur sichtbar, wenn true UND ein Link gesetzt ist. */
export const showGoogleReviewsButton = false;

/** Phase 2: Städte-Landingpages (/kammerjaeger-<ort>) erzeugen. Siehe README. */
export const enableCityPages = false;

/* ------------------------------------------------------------------ */
/* Firmendaten                                                         */
/* ------------------------------------------------------------------ */

export const company = {
  name: 'deinkammerjaeger',
  logoSuffix: 'Schädlingsbekämpfung',
  owner: 'Georgios Ziogkos',
  street: 'An der Schettruh 10',
  zip: '47877',
  city: 'Willich',
  region: 'Nordrhein-Westfalen',
  country: 'DE',
  phoneDisplay: '0157 77320888',
  phoneHref: 'tel:+4915777320888',
  phoneE164: '+4915777320888',
  whatsappHref:
    'https://wa.me/4915777320888?text=Hallo%2C%20ich%20habe%20ein%20Sch%C3%A4dlingsproblem%20und%20ben%C3%B6tige%20Hilfe.',
  email: '[E-MAIL]',
  instagram: 'https://www.instagram.com/deinkammerjaeger/',
  instagramHandle: '@deinkammerjaeger',
  googleReviewsUrl: '[GOOGLE-PROFIL-LINK]',
  mapsHref:
    'https://www.google.com/maps/dir/?api=1&destination=An+der+Schettruh+10%2C+47877+Willich',
};

/** [ZEITEN] – Erreichbarkeit / Öffnungszeiten. Jede Zeile: Tage + Zeiten. */
export const openingHours: { days: string; time: string }[] = [
  { days: 'Montag – Freitag', time: '[ZEITEN]' },
  { days: 'Samstag', time: '[ZEITEN]' },
  { days: 'Sonn- und Feiertage', time: '[ZEITEN]' },
];

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  title: 'Kammerjäger Düsseldorf, Köln & Umgebung | deinkammerjaeger',
  description:
    'Kammerjäger für Düsseldorf, Köln, Neuss & Umgebung: schnelle, diskrete Schädlingsbekämpfung für Privat & Gewerbe aus Willich. Anruf/WhatsApp: 0157 77320888',
  ogImage: '/og-image.jpg',
};

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navigation = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Gewerbe', href: '/gewerbekunden' },
  { label: 'Kontakt', href: '#kontakt' },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  label: 'Schädlingsbekämpfung am Niederrhein & im Rheinland',
  title: 'Ihr Kammerjäger für Düsseldorf, Köln und Umgebung',
  intro:
    'Wir helfen schnell, diskret und gründlich, wenn Schädlinge Ihr Zuhause oder Ihren Betrieb befallen haben – für Privatkunden ebenso wie für Gewerbe. Unser Sitz ist in Willich, von hier aus sind wir im ganzen Rheinland für Sie unterwegs.',
  callLabel: 'Rufen Sie uns an:',
  note: 'Bei Schädlingsnotfällen oder für eine unverbindliche Beratung.',
  image: imgHero,
  imageAlt: 'Kammerjäger in Schutzkleidung bei der Inspektion eines Kellerraums',
};

/* ------------------------------------------------------------------ */
/* Vertrauensleiste                                                    */
/* ------------------------------------------------------------------ */

export const trustItems = [
  { icon: 'user-round', text: 'Inhabergeführt aus Willich' },
  { icon: 'building-2', text: 'Privat & Gewerbe' },
  { icon: 'message-circle', text: 'Erreichbar per Telefon & WhatsApp' },
  { icon: 'eye-off', text: 'Diskretes Vorgehen' },
];

/* ------------------------------------------------------------------ */
/* Leistungen                                                          */
/* ------------------------------------------------------------------ */

export type Service = {
  id: string;
  title: string;
  text: string;
  image: ImageMetadata;
  alt: string;
  /** Lexikon-Steckbrief im Overlay */
  latin?: string;
  facts?: { label: string; text: string }[];
};

export const services: Service[] = [
  { id: 'wespen', title: 'Wespen', text: 'Wir entfernen oder sichern Wespennester an Haus, Dach und Garten fachgerecht.', image: imgWespen, alt: 'Wespe',
    latin: 'Vespula spp.',
    facts: [{ label: 'Erkennen', text: 'Gelb-schwarz gestreift, 1–2 cm, schmale „Wespentaille“' }, { label: 'Typische Orte', text: 'Rollladenkästen, Dachvorsprünge, Gartenhäuser, Erdlöcher' }, { label: 'Saison', text: 'Frühjahr bis Spätsommer, Höhepunkt im August' }, { label: 'Risiko', text: 'Schmerzhafte Stiche, für Allergiker gefährlich' }, { label: 'Wichtig', text: 'Nester nie selbst entfernen – Hornissen sind besonders geschützt' }], },
  { id: 'ratten', title: 'Ratten', text: 'Wir finden Zugänge und Laufwege und bekämpfen Ratten gezielt und nachhaltig.', image: imgRatten, alt: 'Braune Ratte',
    latin: 'Rattus norvegicus',
    facts: [{ label: 'Erkennen', text: '20–27 cm Körper, langer schuppiger Schwanz, graubraunes Fell' }, { label: 'Spuren', text: 'Spindelförmiger Kot (1–2 cm), Nagespuren, dunkle Laufspuren an Wänden' }, { label: 'Typische Orte', text: 'Keller, Kanalanschlüsse, Müllplätze, Komposthaufen' }, { label: 'Aktivität', text: 'Nachtaktiv, scheu und sehr lernfähig' }, { label: 'Risiko', text: 'Übertragen Krankheitserreger, Befall ist vielerorts meldepflichtig' }], },
  { id: 'maeuse', title: 'Mäuse', text: 'Wir spüren Mäuse in Wohnung, Keller oder Lager auf und schließen Schlupflöcher.', image: imgMaeuse, alt: 'Hausmaus',
    latin: 'Mus musculus',
    facts: [{ label: 'Erkennen', text: '7–10 cm, grau-braun, große Ohren, Schwanz etwa körperlang' }, { label: 'Spuren', text: 'Reiskorngroßer Kot, Nagespuren an Vorräten, Uringeruch' }, { label: 'Zugang', text: 'Passen durch Öffnungen von nur ca. 6–7 mm' }, { label: 'Saison', text: 'Vor allem Herbst und Winter, wenn es draußen kalt wird' }, { label: 'Risiko', text: 'Verunreinigte Lebensmittel, angenagte Kabel und Dämmung' }], },
  { id: 'bettwanzen', title: 'Bettwanzen', text: 'Wir untersuchen Schlafräume gründlich und behandeln den Befall diskret.', image: imgBettwanzen, alt: 'Bettwanze auf weißer Bettwäsche',
    latin: 'Cimex lectularius',
    facts: [{ label: 'Erkennen', text: '4–6 mm, flach, rotbraun, nach dem Saugen rundlich' }, { label: 'Spuren', text: 'Juckende Stiche in Reihen, kleine Blut- und Kotflecken an der Matratze' }, { label: 'Typische Orte', text: 'Matratzennähte, Bettgestell, Fußleisten, Steckdosen' }, { label: 'Einschleppung', text: 'Über Gepäck, gebrauchte Möbel und Kleidung' }, { label: 'Gut zu wissen', text: 'Kein Zeichen mangelnder Sauberkeit – Hausmittel helfen kaum' }], },
  { id: 'kakerlaken', title: 'Kakerlaken', text: 'Wir bekämpfen Schaben in Küche, Bad und Betrieb – auch in Verstecken.', image: imgKakerlaken, alt: 'Kakerlake',
    latin: 'Blattella germanica',
    facts: [{ label: 'Erkennen', text: 'Deutsche Schabe: 1–1,5 cm, hellbraun, zwei dunkle Längsstreifen' }, { label: 'Typische Orte', text: 'Warme, feuchte Ritzen hinter Herd, Kühlschrank und Spülmaschine' }, { label: 'Aktivität', text: 'Nachtaktiv – wer tagsüber welche sieht, hat meist starken Befall' }, { label: 'Vermehrung', text: 'Sehr schnell, ein Weibchen bringt Hunderte Nachkommen' }, { label: 'Risiko', text: 'Keimübertragung, in Lebensmittelbetrieben sofort handeln' }], },
  { id: 'ameisen', title: 'Ameisen', text: 'Wir verfolgen Ameisenstraßen bis zum Nest und beseitigen die Ursache.', image: imgAmeisen, alt: 'Ameisen auf Steinboden',
    latin: 'Formicidae',
    facts: [{ label: 'Erkennen', text: 'Ameisenstraßen zu Vorräten, kleine Erdhäufchen an Fugen' }, { label: 'Typische Orte', text: 'Terrassenplatten, Fundamente, Küche und Vorratsschrank' }, { label: 'Saison', text: 'Frühjahr bis Spätsommer' }, { label: 'Sonderfall', text: 'Pharaoameisen in beheizten Gebäuden sind besonders hartnäckig' }, { label: 'Gut zu wissen', text: 'Nur sichtbare Tiere zu bekämpfen reicht nicht – das Nest zählt' }], },
  { id: 'silberfische', title: 'Silberfische', text: 'Wir klären Feuchtigkeitsquellen und behandeln Bad, Keller und Fugen.', image: imgSilberfische, alt: 'Silberfisch auf einer Fliese',
    latin: 'Lepisma saccharinum',
    facts: [{ label: 'Erkennen', text: 'Ca. 1 cm, silbrig-schuppig, drei Schwanzfäden' }, { label: 'Typische Orte', text: 'Bad, Keller, Waschküche – überall, wo es feucht ist' }, { label: 'Aktivität', text: 'Nachtaktiv und lichtscheu' }, { label: 'Verwandt', text: 'Papierfischchen mögen es trockener und befallen Bücher und Archive' }, { label: 'Gut zu wissen', text: 'Harmlos, aber oft ein Hinweis auf zu hohe Luftfeuchtigkeit' }], },
  { id: 'motten', title: 'Motten', text: 'Wir schützen Kleidung, Teppiche und Vorräte vor Kleider- und Lebensmittelmotten.', image: imgMotten, alt: 'Motte auf einem Wollpullover',
    latin: 'Tineola bisselliella',
    facts: [{ label: 'Kleidermotten', text: 'Löcher in Wolle, Kaschmir, Seide und Pelz' }, { label: 'Lebensmittelmotten', text: 'Gespinste in Mehl, Müsli, Nüssen und Trockenobst' }, { label: 'Wer frisst', text: 'Die Larven richten den Schaden an, nicht die Falter' }, { label: 'Typische Orte', text: 'Dunkle, ruhige Ecken in Schrank und Vorratsregal' }, { label: 'Gut zu wissen', text: 'Befallene Ware erkennen und entsorgen ist der erste Schritt' }], },
  { id: 'marder', title: 'Marder', text: 'Wir vergrämen Marder aus Dachboden und Garage und sichern Einstiege.', image: imgMarder, alt: 'Steinmarder auf einem Dachbalken',
    latin: 'Martes foina',
    facts: [{ label: 'Erkennen', text: 'Steinmarder: 40–50 cm, buschiger Schwanz, heller Kehlfleck' }, { label: 'Spuren', text: 'Poltern nachts, zerwühlte Dämmung, Kot und strenger Geruch' }, { label: 'Typische Orte', text: 'Dachboden, Zwischendecken, Garage, Motorraum' }, { label: 'Risiko', text: 'Zerbissene Kabel und Schläuche, beschädigte Wärmedämmung' }, { label: 'Wichtig', text: 'Unterliegt dem Jagdrecht – Vergrämung statt Bekämpfung' }], },
  { id: 'fliegen', title: 'Fliegen', text: 'Wir reduzieren Fliegenplagen in Betrieb, Stall und Wohnhaus dauerhaft.', image: imgFliegen, alt: 'Stubenfliege',
    latin: 'Musca domestica',
    facts: [{ label: 'Erkennen', text: 'Stubenfliege: 6–8 mm, grau, vier dunkle Streifen am Rücken' }, { label: 'Brutstätten', text: 'Abfälle, Biomüll, Mist und organische Reste' }, { label: 'Saison', text: 'Massenauftreten vor allem im Sommer' }, { label: 'Risiko', text: 'Übertragen Keime auf Lebensmittel und Oberflächen' }, { label: 'Betriebe', text: 'In Gastronomie und Lebensmittelbetrieben ein Hygienethema' }], },
  { id: 'spinnen', title: 'Spinnen', text: 'Wir befreien Keller, Garagen und Wohnräume von starkem Spinnenbefall.', image: imgSpinnen, alt: 'Hausspinne an einer weißen Wand',
    latin: 'Araneae',
    facts: [{ label: 'Erkennen', text: 'Netze und Gespinste in Ecken, an Fenstern und Fassaden' }, { label: 'Typische Orte', text: 'Keller, Garage, Dachboden, beleuchtete Außenwände' }, { label: 'Ursache', text: 'Viele Spinnen deuten auf viele Insekten als Nahrung hin' }, { label: 'Gefahr', text: 'Heimische Arten sind für Menschen in der Regel harmlos' }, { label: 'Wann handeln', text: 'Bei Massenbefall oder starker Belastung für Bewohner' }], },
];

/** Zusätzliche Option im Formular-Dropdown. */
export const otherPestOption = 'Anderer Schädling / unklar';

/* ------------------------------------------------------------------ */
/* Vorteile                                                            */
/* ------------------------------------------------------------------ */

export const advantages = [
  { title: 'Schnelle Reaktion', text: 'Sie erreichen uns direkt per Telefon oder WhatsApp. Wir melden uns zügig und vereinbaren einen zeitnahen Termin.' },
  { title: 'Persönlicher Ansprechpartner', text: 'Vom ersten Anruf bis zur Nachkontrolle haben Sie einen festen Ansprechpartner – keine Hotline, kein Callcenter.' },
  { title: 'Diskretes Vorgehen', text: 'Wir kommen unauffällig und behandeln Ihr Anliegen vertraulich – gegenüber Nachbarn, Gästen und Kunden.' },
  { title: 'Individuelle Lösungen', text: 'Ob Wohnung, Restaurant oder Mehrfamilienhaus: Wir richten die Maßnahme nach Ihrem Objekt und Befall aus.' },
  { title: 'Faire, transparente Preise', text: 'Sie erfahren vorab, was wir vorhaben und womit Sie rechnen müssen. Ohne versteckte Posten.' },
  { title: 'Gründliche Nachkontrolle', text: 'Wir prüfen nach der Bekämpfung, ob der Befall wirklich beseitigt ist, und geben Tipps zur Vorbeugung.' },
];

/* ------------------------------------------------------------------ */
/* Über uns – [TEXT VOM KUNDEN FREIGEBEN]                              */
/* ------------------------------------------------------------------ */

export const about = {
  label: 'Über uns',
  title: 'Ihr Kammerjäger aus Willich',
  paragraphs: [
    'deinkammerjaeger ist ein inhabergeführter Betrieb mit Sitz in Willich. Hinter dem Namen steht Georgios Ziogkos – und damit ein Ansprechpartner, der Ihren Fall von Anfang bis Ende selbst begleitet.',
    'Von Willich aus sind wir im ganzen Rheinland im Einsatz: in Düsseldorf, Köln, Neuss, Krefeld, Mönchengladbach und den Orten dazwischen. Privatkunden betreuen wir genauso sorgfältig wie Gastronomie, Hausverwaltungen und Gewerbebetriebe.',
  ],
  quote:
    'Wer mich anruft, hat meistens ein Problem, das nicht warten kann. Dann bin ich da, sage ehrlich, was zu tun ist – und komme wieder, bis es erledigt ist.',
  quoteName: 'Georgios Ziogkos',
  quoteRole: 'Inhaber',
  image: imgInhaber,
  imageAlt: 'Porträt von Georgios Ziogkos, Inhaber von deinkammerjaeger',
};

/* ------------------------------------------------------------------ */
/* Notfall                                                             */
/* ------------------------------------------------------------------ */

export const emergency = {
  title: 'Schnelle Hilfe im Schädlingsnotfall',
  text: 'Ein Wespennest am Eingang, Ratten im Keller oder Bettwanzen im Hotelzimmer – manche Probleme dulden keinen Aufschub. Rufen Sie uns an oder schreiben Sie per WhatsApp, wir melden uns schnellstmöglich und besprechen mit Ihnen die nächsten Schritte.',
  image: imgNotfall,
  imageAlt: 'Kammerjäger mit Ausrüstung auf dem Weg zu einem Einsatz',
};

/* ------------------------------------------------------------------ */
/* Ablauf                                                              */
/* ------------------------------------------------------------------ */

export const steps = [
  { icon: 'phone', title: 'Anruf oder WhatsApp', text: 'Sie schildern uns kurz das Problem – gern mit Foto per WhatsApp. Wir geben eine erste Einschätzung und vereinbaren einen Termin.' },
  { icon: 'search', title: 'Einschätzung vor Ort', text: 'Wir sehen uns den Befall an, finden Ursache und Ausmaß und erklären Ihnen das geplante Vorgehen.' },
  { icon: 'crosshair', title: 'Gezielte Bekämpfung', text: 'Wir bekämpfen die Schädlinge mit der passenden Methode – so gezielt wie möglich und so viel wie nötig.' },
  { icon: 'clipboard-check', title: 'Nachkontrolle', text: 'Wir kontrollieren den Erfolg und geben Ihnen Hinweise, wie Sie einem erneuten Befall vorbeugen.' },
];

/* ------------------------------------------------------------------ */
/* Zielgruppen                                                         */
/* ------------------------------------------------------------------ */

export const audiences = [
  { icon: 'house', title: 'Privathaushalte', text: 'Wohnung, Haus, Keller oder Garten – wir helfen schnell und unkompliziert.' },
  { icon: 'utensils', title: 'Gastronomie', text: 'Diskrete Einsätze, auch außerhalb Ihrer Öffnungszeiten.' },
  { icon: 'building-2', title: 'Hausverwaltungen & Objektbetreuer', text: 'Zuverlässige Abwicklung für Mehrfamilienhäuser und Wohnanlagen.' },
  { icon: 'bed-double', title: 'Hotellerie', text: 'Schnelle und vertrauliche Hilfe, damit der Betrieb weiterläuft.' },
  { icon: 'store', title: 'Lebensmittelbetriebe', text: 'Bekämpfung und Kontrolle für Bäckereien, Märkte und Lager.' },
  { icon: 'hospital', title: 'Gesundheitseinrichtungen', text: 'Sorgfältiges Vorgehen in Praxen, Pflege- und Senioreneinrichtungen.' },
];

/* ------------------------------------------------------------------ */
/* Einsatzgebiet                                                       */
/* ------------------------------------------------------------------ */

/**
 * slug = späterer Pfad /kammerjaeger-<slug> (Phase 2).
 * lat/lon = Position auf der Einsatzgebiet-Karte.
 */
export const locations = [
  { name: 'Düsseldorf', slug: 'duesseldorf', lat: 51.2277, lon: 6.7735 },
  { name: 'Köln', slug: 'koeln', lat: 50.9375, lon: 6.9603 },
  { name: 'Neuss', slug: 'neuss', lat: 51.2042, lon: 6.6879 },
  { name: 'Meerbusch', slug: 'meerbusch', lat: 51.256, lon: 6.688 },
  { name: 'Kaarst', slug: 'kaarst', lat: 51.229, lon: 6.617 },
  { name: 'Willich', slug: 'willich', lat: 51.263, lon: 6.549 },
  { name: 'Krefeld', slug: 'krefeld', lat: 51.3388, lon: 6.5853 },
  { name: 'Mönchengladbach', slug: 'moenchengladbach', lat: 51.1805, lon: 6.4428 },
];

export const serviceArea = {
  title: 'Unser Einsatzgebiet',
  text: 'Unser Sitz ist in Willich – zwischen Krefeld, Mönchengladbach und Düsseldorf. Von hier aus sind wir schnell bei Ihnen, im ganzen Rheinland und am Niederrhein.',
};

/* ------------------------------------------------------------------ */
/* Kundenstimmen – erst mit echten Bewertungen füllen!                 */
/* ------------------------------------------------------------------ */

export const testimonials: { text: string; name: string; place: string }[] = [
  { text: '[ECHTE KUNDENSTIMME 1]', name: '[NAME]', place: '[ORT]' },
  { text: '[ECHTE KUNDENSTIMME 2]', name: '[NAME]', place: '[ORT]' },
  { text: '[ECHTE KUNDENSTIMME 3]', name: '[NAME]', place: '[ORT]' },
];

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  description:
    'Inhabergeführte Schädlingsbekämpfung aus Willich – schnell, diskret und gründlich für Privatkunden und Gewerbe im Rheinland.',
  links: [
    { label: 'Leistungen', href: '/#leistungen' },
    { label: 'Über uns', href: '/#ueber-uns' },
    { label: 'Kontakt', href: '/#kontakt' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
};

/* ------------------------------------------------------------------ */
/* Unterseite Gewerbekunden (/gewerbekunden)                           */
/* ------------------------------------------------------------------ */

export const business = {
  seoTitle: 'Schädlingsbekämpfung für Gewerbe & Betriebe | deinkammerjaeger',
  seoDescription:
    'Schädlingsbekämpfung für Gastronomie, Lebensmittelbetriebe, Hotels und Hausverwaltungen im Rheinland: fester Ansprechpartner, Einsätze außerhalb der Öffnungszeiten, schriftliche Dokumentation.',
  label: 'Für Gewerbekunden',
  title: 'Schädlingsbekämpfung für Betriebe, die keinen Ausfall riskieren können',
  intro:
    'Ein Befall im Betrieb ist mehr als ärgerlich: Er gefährdet Hygiene, Kontrollen und den Ruf bei Ihren Gästen und Kunden. Wir handeln schnell, arbeiten diskret und dokumentieren jeden Einsatz so, dass Sie bei der nächsten Kontrolle gut dastehen.',
  highlights: ['Fester Ansprechpartner', 'Einsätze außerhalb der Öffnungszeiten', 'Schriftliche Dokumentation'],
  benefits: [
    { title: 'Ein fester Ansprechpartner', text: 'Sie sprechen direkt mit dem Inhaber – vom ersten Anruf bis zur Nachkontrolle. Kein Callcenter, keine wechselnden Techniker.' },
    { title: 'Termine nach Ihrem Betrieb', text: 'Früh morgens, abends oder am Wochenende: Wir planen Einsätze so, dass Ihr Tagesgeschäft weiterläuft.' },
    { title: 'Dokumentation für Kontrollen', text: 'Befund, Maßnahmen und eingesetzte Mittel halten wir schriftlich fest – als Nachweis für Lebensmittelkontrolle, HACCP-Konzept oder Audit.' },
    { title: 'Vorbeugen statt reagieren', text: 'Auf Wunsch kontrollieren wir regelmäßig mit Monitoring- und Köderstationen, damit ein Befall gar nicht erst entsteht.' },
    { title: 'Diskretes Auftreten', text: 'Gäste, Kunden und Mieter bekommen von unserem Einsatz so wenig wie möglich mit.' },
    { title: 'Klare Angebote', text: 'Nach der Besichtigung erhalten Sie ein nachvollziehbares Angebot – ohne versteckte Positionen.' },
  ],
  sectors: [
    { icon: 'utensils', title: 'Gastronomie', text: 'Restaurants, Imbisse, Kantinen und Großküchen.' },
    { icon: 'store', title: 'Lebensmittelbetriebe', text: 'Bäckereien, Metzgereien, Märkte und Lager.' },
    { icon: 'bed-double', title: 'Hotellerie', text: 'Hotels, Pensionen und Ferienwohnungen.' },
    { icon: 'building-2', title: 'Hausverwaltungen', text: 'Mehrfamilienhäuser, Wohnanlagen und Gewerbeobjekte.' },
    { icon: 'hospital', title: 'Gesundheit & Pflege', text: 'Praxen, Pflegeheime und Senioreneinrichtungen.' },
    { icon: 'warehouse', title: 'Lager & Logistik', text: 'Hallen, Lagerflächen und Produktionsbereiche.' },
  ],
  steps: [
    { title: 'Bestandsaufnahme', text: 'Wir sehen uns Ihren Betrieb an, finden Befall, Ursachen und Risikobereiche.' },
    { title: 'Maßnahmenplan & Angebot', text: 'Sie erhalten einen klaren Plan mit Vorgehen, Zeitrahmen und Kosten.' },
    { title: 'Bekämpfung & Monitoring', text: 'Wir bekämpfen gezielt und richten bei Bedarf eine laufende Kontrolle ein.' },
    { title: 'Bericht & Nachkontrolle', text: 'Sie bekommen die Dokumentation – und wir prüfen, ob die Maßnahmen wirken.' },
  ],
  faq: [
    { q: 'Was passiert bei einem akuten Befall im laufenden Betrieb?', a: 'Rufen Sie uns direkt an. Wir kommen so schnell wie möglich, verschaffen uns einen Überblick und stimmen das Vorgehen mit Ihnen ab – so, dass der Betrieb möglichst weiterlaufen kann.' },
    { q: 'Bekommen wir eine Dokumentation für die Lebensmittelkontrolle?', a: 'Ja. Nach jedem Einsatz erhalten Sie eine schriftliche Dokumentation mit Befund, durchgeführten Maßnahmen und eingesetzten Mitteln.' },
    { q: 'Bieten Sie regelmäßige Kontrollen an?', a: 'Ja. Wie oft kontrolliert werden sollte, hängt von Branche und Risiko ab. Wir schlagen Ihnen nach der Bestandsaufnahme ein passendes Intervall vor.' },
    { q: 'Arbeiten Sie auch für Hausverwaltungen mit mehreren Objekten?', a: 'Ja. Sie haben einen Ansprechpartner für alle Objekte, wir stimmen Termine mit Mietern ab und berichten Ihnen gesammelt.' },
  ],
};
