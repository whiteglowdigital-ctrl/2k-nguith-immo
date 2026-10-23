import { contact } from '../data/site.js';

// Lien WhatsApp avec message pré-rempli : aucun formulaire n'enregistre de données.
export function whatsappLink(text = 'Bonjour 2K Nguith,') {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function formatFcfa(value) {
  return value.toLocaleString('fr-FR').replace(/ | /g, ' ');
}

export function normalize(text = '') {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();
}

// Légende d'une ligne : « Maison R+3 — Comico Gadaye — 150 m² ».
// Si la surface n'est pas encore connue, on affiche le détail à la place.
export function caption(p, { withName = true } = {}) {
  const place = p.location.split(' (')[0];
  const size = p.surface && !p.surface.startsWith('[') ? p.surface.replace(' m²', 'm²') : p.details;
  return [withName && p.short, place, size].filter(Boolean).join(' — ');
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
