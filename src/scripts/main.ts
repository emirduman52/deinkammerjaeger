/* Header: kompakt + Schatten beim Scrollen */
const header = document.querySelector<HTMLElement>('[data-header]');
const floating = document.querySelector<HTMLElement>('[data-floating]');
const onScroll = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* Floating-Buttons ausblenden, solange der Hero mit seinen eigenen Buttons sichtbar ist
   und wenn der Footer erreicht ist (damit nichts überdeckt wird) */
if (floating && 'IntersectionObserver' in window) {
  const hero = document.querySelector('#top');
  const foot = document.querySelector('.footer__legal');
  const visible = new Set<Element>();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
    floating.classList.toggle('is-hidden', visible.size > 0);
  }, { rootMargin: '0px 0px -40% 0px' });
  if (hero) io.observe(hero);
  if (foot) io.observe(foot);
}

/* Burger-Menü */
const burger = document.querySelector<HTMLButtonElement>('[data-burger]');
const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
const setMenu = (open: boolean) => {
  if (!burger || !menu) return;
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  menu.hidden = !open;
  floating?.classList.toggle('is-menu-open', open);
  if (open) menu.querySelector<HTMLElement>('a')?.focus();
};
burger?.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('[data-menu-close]').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && burger?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    burger.focus();
  }
});
window.matchMedia('(min-width: 1024px)').addEventListener('change', (m) => m.matches && setMenu(false));

/* Aktiver Menüpunkt */
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')).filter((a) => a.hash && a.pathname === location.pathname);
const sectionIds = [...new Set(navLinks.map((a) => a.hash.slice(1)).filter(Boolean))];
const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
if (sections.length && 'IntersectionObserver' in window) {
  const navIo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => {
        const active = a.hash === `#${entry.target.id}`;
        a.classList.toggle('is-active', active);
        if (active) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => navIo.observe(s));
}

/* Leistungskarte → Kontaktformular mit Vorauswahl */
const pestSelect = document.querySelector<HTMLSelectElement>('[data-pest-select]');
document.querySelectorAll<HTMLAnchorElement>('[data-pest]').forEach((card) => {
  card.addEventListener('click', () => {
    if (!pestSelect) return;
    pestSelect.value = card.dataset.pest ?? '';
    pestSelect.dispatchEvent(new Event('change'));
    const wrap = pestSelect.closest('.select');
    wrap?.classList.remove('is-preselected');
    void (wrap as HTMLElement | null)?.offsetWidth;
    wrap?.classList.add('is-preselected');
    // Fokus erst nach dem Scrollen, damit der Sprung sauber bleibt
    window.setTimeout(() => document.getElementById('f-name')?.focus({ preventScroll: true }), 700);
  });
});

/* Fade-in beim Scrollen */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealIo = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealEls.forEach((el) => revealIo.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
