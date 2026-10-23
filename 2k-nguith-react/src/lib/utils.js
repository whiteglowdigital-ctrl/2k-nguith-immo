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

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
