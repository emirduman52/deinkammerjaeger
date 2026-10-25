/**
 * Stellt interne Pfade (/impressum, /#kontakt) den Base-Pfad voran.
 * Auf der echten Domain ist BASE_URL "/" – dann bleibt alles unverändert.
 * Für die GitHub-Pages-Preview läuft die Seite unter /deinkammerjaeger/.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => (path.startsWith('/') ? `${base}${path}` : path);
