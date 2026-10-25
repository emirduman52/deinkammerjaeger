/**
 * Erzeugt gestaltete Bild-Platzhalter in den Markenfarben.
 * Aufruf: npm run placeholders
 *
 * Vorhandene Dateien werden NICHT überschrieben (echte Fotos bleiben erhalten).
 * Zum Neuerzeugen einzelner Platzhalter die Datei vorher löschen,
 * oder alles erzwingen mit: node scripts/generate-placeholders.mjs --force
 */
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const outDir = resolve(root, 'src/assets/images');
const force = process.argv.includes('--force');
mkdirSync(outDir, { recursive: true });

const images = [
  { file: 'hero-kammerjaeger.jpg', w: 1800, h: 1200, icon: 'flashlight', label: 'Kammerjäger bei der Inspektion' },
  { file: 'ueber-uns-inhaber.jpg', w: 1000, h: 1250, icon: 'user-round', label: 'Porträt Georgios Ziogkos' },
  { file: 'notfall-einsatz.jpg', w: 1600, h: 1200, icon: 'car-front', label: 'Notfall-Einsatz' },
  { file: 'leistung-wespen.jpg', w: 1200, h: 900, icon: 'bug', label: 'Wespen' },
  { file: 'leistung-ratten.jpg', w: 1200, h: 900, icon: 'rat', label: 'Ratten' },
  { file: 'leistung-maeuse.jpg', w: 1200, h: 900, icon: 'rat', label: 'Mäuse' },
  { file: 'leistung-bettwanzen.jpg', w: 1200, h: 900, icon: 'bed', label: 'Bettwanzen' },
  { file: 'leistung-kakerlaken.jpg', w: 1200, h: 900, icon: 'cooking-pot', label: 'Kakerlaken' },
  { file: 'leistung-ameisen.jpg', w: 1200, h: 900, icon: 'bug', label: 'Ameisen' },
  { file: 'leistung-silberfische.jpg', w: 1200, h: 900, icon: 'droplets', label: 'Silberfische' },
  { file: 'leistung-motten.jpg', w: 1200, h: 900, icon: 'shirt', label: 'Motten' },
  { file: 'leistung-marder.jpg', w: 1200, h: 900, icon: 'squirrel', label: 'Marder' },
  { file: 'leistung-fliegen.jpg', w: 1200, h: 900, icon: 'bug-off', label: 'Fliegen' },
  { file: 'leistung-spinnen.jpg', w: 1200, h: 900, icon: 'warehouse', label: 'Spinnen' },
  { file: '../../../public/og-image.jpg', w: 1200, h: 630, icon: 'shield-check', label: 'deinkammerjaeger · Schädlingsbekämpfung', og: true },
];

function iconInner(name) {
  const svg = readFileSync(resolve(root, `node_modules/lucide-static/icons/${name}.svg`), 'utf8');
  return svg.replace(/<!--.*?-->/s, '').replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
}

function placeholderSvg({ w, h, icon, label, og }) {
  const s = Math.min(w, h);
  const iconSize = Math.round(s * (og ? 0.2 : 0.16));
  const cx = w / 2;
  const cy = h / 2 - s * 0.04;
  const r1 = s * 0.62;
  const r2 = s * 0.46;
  const fontSize = Math.round(s * (og ? 0.06 : 0.045));
  const smallSize = Math.round(s * 0.028);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2E3A47"/>
      <stop offset="0.55" stop-color="#174A72"/>
      <stop offset="1" stop-color="#0B7FCB"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <g fill="none" stroke-linecap="round">
    <path d="M ${cx - r1} ${cy} A ${r1} ${r1} 0 0 1 ${cx + r1 * 0.5} ${cy - r1 * 0.866}" stroke="#2A9BE0" stroke-opacity="0.35" stroke-width="${s * 0.035}"/>
    <path d="M ${cx + r2} ${cy} A ${r2} ${r2} 0 0 1 ${cx - r2 * 0.5} ${cy + r2 * 0.866}" stroke="#C9D3DC" stroke-opacity="0.22" stroke-width="${s * 0.03}"/>
  </g>
  <svg x="${cx - iconSize / 2}" y="${cy - iconSize / 2}" width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${iconInner(icon)}</svg>
  <text x="${cx}" y="${cy + iconSize * 0.95}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="${fontSize}" fill="#FFFFFF">${label}</text>
  <text x="${cx}" y="${cy + iconSize * 0.95 + fontSize * 1.4}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${smallSize}" fill="#FFFFFF" fill-opacity="0.65">Bild-Platzhalter – siehe BILDER.md</text>
</svg>`;
}

for (const img of images) {
  const target = resolve(outDir, img.file);
  if (existsSync(target) && !force) {
    console.log(`übersprungen (existiert): ${img.file}`);
    continue;
  }
  await sharp(Buffer.from(placeholderSvg(img))).jpeg({ quality: 82, mozjpeg: true }).toFile(target);
  console.log(`erzeugt: ${img.file}`);
}
