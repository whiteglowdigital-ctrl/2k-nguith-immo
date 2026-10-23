// Contenu du site : tout ce qui manque reste [entre crochets], rien n'est inventé.

export const contact = {
  phoneDisplay: '77 461 41 61',
  phoneIntl: '+221774614161',
  whatsapp: '221774614161',
  address: 'Cité Atepa, près VDN 3, Malibu, face au terrain Las Palmas, Dakar',
  hours: '[Horaires à confirmer]',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cit%C3%A9%20Atepa%20VDN%203%20Malibu%20Dakar',
  socials: {
    tiktok: 'https://www.tiktok.com/@2knguithimmo', // [à confirmer]
    instagram: 'https://www.instagram.com/2knguithimmo/',
    facebook: '#', // [lien à ajouter]
  },
};

export const slogans = {
  main: "Votre souci d'habitat, notre raison d'être !",
  hero: 'On vous trouve le toit parfait',
};

const unsplash = (id, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&q=70&auto=format&fit=crop`;

export const heroImage = unsplash('photo-1600596542815-ffad4c1539a9', 2000);

export const nav = [
  { label: 'Acheter', href: '#biens', filter: 'vente' },
  { label: 'Louer', href: '#biens', filter: 'location' },
  { label: 'Terrains', href: '#biens', filter: 'terrain' },
  { label: 'Gérance', href: '#gerance' },
  { label: 'Construction', href: '#construction' },
  { label: 'Contact', href: '#contact' },
];

export const typeLabels = {
  vente: 'À vendre',
  location: 'À louer',
  terrain: 'Terrain',
};

export const properties = [
  {
    id: 'terrain-mounka-bambara',
    type: 'terrain',
    title: "Terrain d'angle 225 m²",
    location: 'Mounka Bambara (croisement Yenn)',
    surface: '225 m²',
    papers: 'Acte administratif double signature',
    price: 10000000,
    image: unsplash('photo-1500382017468-9049fed747ef'),
    alt: 'Terrain nu dégagé au coucher du soleil',
  },
  {
    id: 'terrain-malicounda',
    type: 'terrain',
    title: 'Terrain 220 m²',
    location: 'Malicounda',
    surface: '220 m²',
    papers: '[à préciser]',
    price: 3500000,
    image: unsplash('photo-1541888946425-d81bb19240f5'),
    alt: 'Terrain préparé pour une construction',
  },
  {
    id: 'maison-r3-comico-gadaye',
    type: 'vente',
    title: 'Maison R+3',
    location: 'Comico Gadaye',
    surface: '150 m²',
    details: 'Moins de 5 ans',
    papers: '[à préciser]',
    price: 90000000,
    image: unsplash('photo-1523217582562-09d0def993a6'),
    alt: 'Maison moderne blanche à étages',
  },
  {
    id: 'appartement-jaxaay',
    type: 'location',
    title: 'Appartement RDC, 3 chambres salon',
    location: 'Jaxaay terminus 84',
    surface: '[à préciser]',
    details: '3 chambres + salon',
    price: 170000,
    perMonth: true,
    image: unsplash('photo-1522708323590-d24dbb6b0267'),
    alt: "Salon lumineux d'un appartement",
  },
];

// Bien mis en avant en grande rangée en tête de la liste.
export const featuredPropertyId = 'maison-r3-comico-gadaye';

// Emplacements réservés aux prochains biens.
export const propertySlots = 2;

export const budgets = [
  { value: '', label: 'Tous budgets' },
  { value: '200000', label: "Jusqu'à 200 000 F" },
  { value: '500000', label: "Jusqu'à 500 000 F" },
  { value: '5000000', label: "Jusqu'à 5 M F" },
  { value: '10000000', label: "Jusqu'à 10 M F" },
  { value: '50000000', label: "Jusqu'à 50 M F" },
  { value: '100000000', label: "Jusqu'à 100 M F" },
];

export const managementImage = unsplash('photo-1560518883-ce09059eeffa', 1200);

export const constructionPhotos = [
  { src: unsplash('photo-1504307651254-35680f356dfd', 1200), alt: 'Ouvriers sur un chantier de construction' },
  { src: unsplash('photo-1508450859948-4e04fabaa4ea'), alt: 'Immeuble en cours de construction' },
  { src: unsplash('photo-1517581177682-a085bb7ffb15'), alt: "Intérieur d'une maison en rénovation" },
];

// Couvertures provisoires : à remplacer par les miniatures réelles des vidéos TikTok.
export const tips = [
  { title: 'Pourquoi un logement reste vide pendant des mois', cover: unsplash('photo-1502672260266-1c1ef2d93688', 800) },
  { title: "Les papiers à vérifier avant d'acheter un terrain", cover: unsplash('photo-1503387762-592deb58ef4e', 800) },
  { title: 'Bien choisir son quartier', cover: unsplash('photo-1605276374104-dee2a0ed3cd6', 800) },
];

export const gallery = [
  { src: unsplash('photo-1580587771525-78b9dba3b914', 1200), alt: 'Villa moderne avec piscine' },
  { src: unsplash('photo-1517502884422-41eaead166d4', 700), alt: "Bureau de l'agence" },
  { src: unsplash('photo-1626178793926-22b28830aa30', 700), alt: 'Conseiller immobilier avec une maquette de maison' },
  { src: unsplash('photo-1589939705384-5185137a7f0f', 900), alt: 'Ouvrier sur un chantier' },
  { src: unsplash('photo-1618221195710-dd6b41faaea6', 900), alt: "Salon d'une maison meublée" },
  { src: unsplash('photo-1613490493576-7fde63acd811', 900), alt: "Façade d'une maison contemporaine" },
];

export const faq = [
  { q: 'Comment visiter un bien ?', a: 'Écrivez-nous sur WhatsApp avec le nom du bien, nous organisons la visite.' },
  { q: 'Quels papiers ont vos terrains ?', a: 'Le type de papiers est indiqué sur chaque annonce. [à confirmer]' },
  { q: "Je vis à l'étranger, comment faire ?", a: 'Nous vous envoyons photos, vidéos et documents, et nous vous accompagnons à distance.' },
  { q: 'Comment fonctionne la gérance ?', a: '[à compléter]' },
  { q: 'Faites-vous aussi la construction ?', a: 'Oui, construction et rénovation. Demandez un devis sur WhatsApp.' },
];
