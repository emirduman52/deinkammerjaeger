# deinkammerjaeger – Website

One-Page-Website für den Kammerjäger-Betrieb **deinkammerjaeger** (Inhaber Georgios Ziogkos, Willich).
Gebaut mit [Astro](https://astro.build) als rein statische Seite: kein Tracking, keine externen Ressourcen, Schriften lokal.

## Schnellstart

Voraussetzung: **Node.js 22.12 oder neuer**.

```bash
npm install          # Abhängigkeiten installieren
npm run dev          # Entwicklungsserver auf http://localhost:4321
npm run build        # Produktions-Build nach dist/
npm run preview      # fertigen Build lokal ansehen
npm run placeholders # fehlende Bild-Platzhalter neu erzeugen
```

> Astro 7 verlangt Node ≥ 22.23. Das Projekt nutzt deshalb Astro 6 (läuft ab Node 22.12). Ein Upgrade auf Astro 7 ist nach einem Node-Update möglich.

## Inhalte ändern

**Alle Texte und Daten stehen in [`src/data/site.ts`](src/data/site.ts).** Für Textänderungen müssen Sie keine Komponente anfassen.

| Bereich in `site.ts` | Inhalt |
| --- | --- |
| `company` | Name, Inhaber, Adresse, Telefon, WhatsApp-Link, E-Mail, Instagram, Google-Profil, Routen-Link |
| `openingHours` | Erreichbarkeit / Öffnungszeiten |
| `seo` | Title, Meta-Description, OG-Bild |
| `hero`, `trustItems` | Startbereich und Vertrauensleiste |
| `services` | die 11 Leistungen inkl. Bild und Alt-Text (die `id` ist zugleich der Wert im Formular-Dropdown) |
| `advantages` | die 6 Vorteile |
| `about` | Über uns + Zitat |
| `emergency`, `steps`, `audiences` | Notfall-Block, Ablauf, Zielgruppen |
| `locations`, `serviceArea` | Einsatzorte (mit Koordinaten für die Karte und Slug für Phase 2) |
| `testimonials` | Kundenstimmen |
| `footer` | Footer-Text und -Links |

**Schalter in `site.ts`:**

- `FORM_ENDPOINT`: Ziel-URL für das Kontaktformular (siehe unten)
- `showTestimonials`: Kundenstimmen-Slider ein/aus (Standard: `false`)
- `showGoogleReviewsButton`: Button „Bewertungen auf Google ansehen“ (erscheint nur, wenn zusätzlich `company.googleReviewsUrl` gesetzt ist)
- `enableCityPages`: Phase 2, Städte-Landingpages (Standard: `false`)

## Kontaktformular

- Versand per `fetch` als **JSON (POST)** an `FORM_ENDPOINT`, z. B. einen n8n-Webhook.
- Payload:
  ```json
  {
    "name": "…", "phone": "…", "email": "…", "city": "…",
    "pest": "Wespen", "message": "…",
    "privacyAccepted": true, "source": "https://…/#kontakt", "sentAt": "2026-10-22T10:00:00.000Z"
  }
  ```
- Der Webhook muss mit HTTP 2xx antworten (sonst erscheint der Fehlerzustand) und **CORS** für die Domain erlauben (in n8n: Webhook-Node → Options → Allowed Origins).
- Spamschutz: verstecktes Honeypot-Feld `website`. Ist es ausgefüllt, wird nichts gesendet.
- **Fallback ohne Endpoint:** Das Formular öffnet das E-Mail-Programm mit vorausgefüllter Nachricht an `company.email`. Solange auch die E-Mail ein Platzhalter ist, zeigt das Formular einen Hinweis mit Telefon- und WhatsApp-Link.
- Klick auf eine Leistungskarte scrollt zum Formular und wählt die Schädlingsart vor.

## Bilder

Alle Bilder sind derzeit gestaltete Platzhalter. **Details, Formate, Alt-Texte und KI-Bild-Prompts stehen in [`BILDER.md`](BILDER.md).**
Austausch: Foto mit gleichem Dateinamen nach `src/assets/images/` legen und neu bauen. Astro erzeugt WebP in mehreren Größen; alle Bilder außer dem Hero werden lazy geladen.

## Deploy

Der Ordner `dist/` nach `npm run build` ist die komplette Website.

- **Netlify / Vercel / Cloudflare Pages:** Repository verbinden, Build-Befehl `npm run build`, Ausgabeordner `dist`, Node-Version 22. Saubere URLs (`/impressum`) und die 404-Seite funktionieren automatisch.
- **Klassisches Webhosting (Apache, z. B. IONOS, Strato, All-Inkl):** Inhalt von `dist/` per FTP/SFTP ins Webroot hochladen. Die mitgelieferte `.htaccess` sorgt für URLs ohne `.html` und die eigene 404-Seite. Achtung: Der FTP-Client muss versteckte Dateien (`.htaccess`) mit hochladen.
- **Vor dem Livegang:** Domain in `astro.config.mjs` (`SITE_URL`) und `public/robots.txt` eintragen, neu bauen. Danach die Sitemap (`/sitemap-index.xml`) in der Google Search Console einreichen.

## Projektstruktur

```
src/
  data/site.ts            ← alle Inhalte
  assets/images/          ← Bilder (Platzhalter, sprechende Dateinamen)
  components/             ← eine Komponente pro Section (Hero, Services, …)
  layouts/                ← BaseLayout (SEO, JSON-LD, Header/Footer), LegalLayout
  pages/                  ← index, impressum, datenschutz, 404, kammerjaeger-[ort] (Phase 2)
  scripts/main.ts         ← Header, Burger-Menü, aktiver Menüpunkt, Vorauswahl, Fade-in
  styles/global.css       ← Farben, Typografie, Buttons, Karten (CSS-Variablen)
public/                   ← favicon.svg, apple-touch-icon.png, og-image.jpg, robots.txt, .htaccess
scripts/generate-placeholders.mjs
```

## SEO & Technik

- Title und Meta-Description (155 Zeichen) in `site.ts`, eine H1, saubere H2/H3-Struktur
- JSON-LD `PestControl` mit Adresse, Telefon, `areaServed` (8 Orte), `sameAs` (Instagram), Logo. E-Mail und Öffnungszeiten werden automatisch ergänzt, sobald sie keine Platzhalter mehr sind.
- Open Graph und Twitter Cards, Canonical, `sitemap-index.xml` (ohne 404), `robots.txt`, SVG-Favicon (Käfer-Symbol)
- DSGVO: Schriften über @fontsource lokal, kein Maps-iframe (nur Routen-Link), kein Instagram-Embed, keine Tracking-Skripte, kein Cookie-Banner nötig
- Barrierefreiheit: Skip-Link, sichtbare Fokus-Zustände, Tastaturbedienung (Menü mit Escape, Slider mit Pfeiltasten, Formular), aria-Labels an Icon-Buttons, Animationen respektieren `prefers-reduced-motion`
- Gemessen (Lighthouse 12, lokal): Startseite mobil 99/100/100/100, Desktop 100/100/100/100; Impressum und Datenschutz 100 in allen Kategorien

## Phase 2: Städte-Landingpages (vorbereitet, nicht aktiv)

Die Route [`src/pages/kammerjaeger-[ort].astro`](src/pages/kammerjaeger-[ort].astro) erzeugt pro Eintrag in `locations` eine Seite unter `/kammerjaeger-<slug>`, z. B. `/kammerjaeger-duesseldorf`. Aktuell gibt `getStaticPaths()` eine leere Liste zurück, weil `enableCityPages = false` ist. Es werden also keine Seiten gebaut.

Zum Aktivieren:

1. Pro Ort **eigene, einzigartige Inhalte** ergänzen (z. B. Feld `intro`, typische Einsätze, Stadtteile) und in der Route ausgeben. Identische Texte auf mehreren Seiten schaden dem Ranking.
2. `enableCityPages = true` setzen.
3. Links auf die Stadtseiten ergänzen, z. B. die Orts-Chips im Einsatzgebiet und die Liste im Footer.
4. Neu bauen. Die Seiten landen automatisch in der Sitemap.

## Offene Platzhalter

Alle Platzhalter stehen in eckigen Klammern und sind auf der Seite gelb markiert.

| Platzhalter | Wo | Was zu tun ist |
| --- | --- | --- |
| `[E-MAIL]` | `site.ts` → `company.email` | E-Mail-Adresse eintragen (erscheint in Kontaktkarte, Footer, Impressum, Datenschutz, Formular-Fallback, JSON-LD) |
| `[ZEITEN]` | `site.ts` → `openingHours` | Erreichbarkeit / Öffnungszeiten eintragen (auch Zeilen anpassen) |
| `[DOMAIN]` | `astro.config.mjs` → `SITE_URL`, `public/robots.txt` | endgültige Domain eintragen (derzeit Annahme `https://www.deinkammerjaeger.de`) |
| `[N8N-WEBHOOK-URL]` | `site.ts` → `FORM_ENDPOINT` | Webhook-URL eintragen (leer = mailto-Fallback) |
| `[GOOGLE-PROFIL-LINK]` | `site.ts` → `company.googleReviewsUrl` | Link zum Google-Unternehmensprofil, dann `showGoogleReviewsButton = true` |
| `[LOGO-DATEI]` | `src/components/Logo.astro` | Originallogo einbinden. Derzeit ein SVG-Nachbau nach Beschreibung. |
| `[WEISSE LOGO-VERSION]` | `src/components/Logo.astro` (`variant="white"`, Footer) | weiße Logo-Variante einbinden |
| Favicon | `public/favicon.svg`, `public/apple-touch-icon.png` | aus dem Käfer-Symbol des Originallogos neu erzeugen |
| `[TEXT VOM KUNDEN FREIGEBEN]` | `site.ts` → `about` (Text + Zitat), Kommentar in `About.astro` | vom Inhaber freigeben lassen |
| `[ANGABEN VOM KUNDEN / RECHTSTEXT-GENERATOR]` | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` | vollständige Rechtstexte einsetzen, inkl. `[UMSATZSTEUER-ID / STEUERNUMMER]`, `[ANGABEN VOM KUNDEN, z. B. Sachkunde, zuständige Kammer, Aufsichtsbehörde]`, `[HOSTING-ANBIETER UND RECHTSTEXT-GENERATOR]`, `[RECHTSGRUNDLAGE, SPEICHERDAUER, EINGESETZTER DIENST]`, `[HINWEISE ZU WHATSAPP]`, `[BETROFFENENRECHTE, BESCHWERDERECHT]`, `[RECHTSTEXT-GENERATOR]` |
| `[ECHTE KUNDENSTIMME 1–3]`, `[NAME]`, `[ORT]` | `site.ts` → `testimonials` (ausgeblendet) | nur echte Bewertungen mit Einverständnis eintragen, dann `showTestimonials = true` |
| 15 Bild-Platzhalter | `src/assets/images/*`, `public/og-image.jpg` | siehe [`BILDER.md`](BILDER.md) |

**Zur Freigabe durch den Kunden** (keine Platzhalter, aber von uns formuliert): alle Texte zu Leistungen, Vorteilen, Ablauf, Zielgruppen und Notfall in `site.ts`. Insbesondere diese Aussagen bitte bestätigen:

- „kein Callcenter / keine wechselnden Techniker“ (Vorteile)
- „auch außerhalb Ihrer Öffnungszeiten“ (Zielgruppe Gastronomie)
- Abschnitt „Ihr Problem ist bei uns Chefsache“

Es wurden bewusst **keine** Zahlen, Zertifikate, Garantien, Referenzen oder Bewertungen erfunden.
