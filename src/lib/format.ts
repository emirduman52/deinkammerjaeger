/** Prüft, ob ein Wert noch ein Platzhalter in eckigen Klammern ist. */
export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escaped Text; Platzhalter in [eckigen Klammern] werden sichtbar markiert. */
export const withPlaceholders = (text: string) =>
  escape(text).replace(/\[[^\]]+\]/g, (m) => `<mark class="placeholder">${m}</mark>`);
