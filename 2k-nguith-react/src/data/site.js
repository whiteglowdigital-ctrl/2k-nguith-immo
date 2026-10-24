// Contenu du site : tout ce qui manque reste [entre crochets].
// Les éléments marqués « example: true » sont des EXEMPLES de maquette, signalés comme tels
// sur le site : à remplacer par de vrais biens et de vrais avis avant la mise en ligne.

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

export const heroImage = unsplash('photo-1613553507747-5f8d62ad5904', 2000);

// Images des sections d'ambiance (illustrations, à remplacer par de vraies photos de l'agence)
export const ambiance = {
  why: unsplash('photo-1599809275671-b5942cabc7a2', 1200),
  diaspora: unsplash('photo-1494526585095-c41746248156', 1800),
  contact: unsplash('photo-1416331108676-a22ccb276e35', 1800),
};

export const categories = [
  { label: 'Vente', sub: 'Maisons et appartements', href: '#biens', filter: 'vente', image: unsplash('photo-1613977257363-707ba9348227', 700) },
  { label: 'Location', sub: 'Appartements et maisons', href: '#biens', filter: 'location', image: unsplash('photo-1600566753086-00f18fb6b3ea', 700) },
  { label: 'Terrains', sub: 'Avec papiers indiqués', href: '#biens', filter: 'terrain', image: unsplash('photo-1500382017468-9049fed747ef', 700) },
  { label: 'Gérance', sub: 'Confiez-nous votre bien', href: '#gerance', image: unsplash('photo-1600047509358-9dc75507daeb', 700) },
  { label: 'Construction', sub: 'Et rénovation', href: '#construction', image: unsplash('photo-1504307651254-35680f356dfd', 700) },
];

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
    short: "Terrain d'angle",
    location: 'Mounka Bambara (croisement Yenn)',
    surface: '225 m²',
    papers: 'Acte administratif double signature',
    paperType: 'Acte administratif',
    price: 10000000,
    image: unsplash('photo-1500382017468-9049fed747ef'),
    gallery: [unsplash('photo-1500382017468-9049fed747ef', 1400), unsplash('photo-1541888946425-d81bb19240f5', 1400)],
    alt: 'Terrain nu dégagé au coucher du soleil',
    indicative: true,
    description: "Terrain d'angle bien dégagé, avec deux façades : idéal pour bâtir une maison familiale ou un petit immeuble. Le quartier se construit vite, c'est le bon moment pour investir.",
    amenities: { water: 'Raccordement possible', power: 'Raccordement possible (Senelec)', access: 'Piste carrossable' },
    nearby: ['Au croisement Yenn', 'À quelques minutes de la plage de Yenne', 'Environ 25 min de Diamniadio et de l\'autoroute à péage'],
  },
  {
    id: 'terrain-malicounda',
    type: 'terrain',
    title: 'Terrain 220 m²',
    short: 'Terrain',
    location: 'Malicounda',
    surface: '220 m²',
    papers: '[à préciser]',
    paperType: '[à préciser]',
    price: 3500000,
    image: unsplash('photo-1541888946425-d81bb19240f5'),
    alt: 'Terrain préparé pour une construction',
    indicative: true,
    description: 'Terrain plat, prêt à construire, dans une zone calme en plein essor entre Mbour et Saly. Un bon point de départ pour une maison de vacances ou une résidence principale.',
    amenities: { water: 'Raccordement possible', power: 'Raccordement possible (Senelec)', access: 'Piste' },
    nearby: ['Proche de la route nationale (N1)', 'Environ 10 min de Saly et de ses plages', 'Environ 10 min du centre de Mbour'],
  },
  {
    id: 'maison-r3-comico-gadaye',
    type: 'vente',
    title: 'Maison R+3',
    short: 'Maison R+3',
    location: 'Comico Gadaye',
    surface: '150 m²',
    details: 'Moins de 5 ans',
    bedrooms: 6,
    papers: '[à préciser]',
    paperType: '[à préciser]',
    price: 90000000,
    image: unsplash('photo-1523217582562-09d0def993a6'),
    gallery: [unsplash('photo-1523217582562-09d0def993a6', 1400), unsplash('photo-1600607687939-ce8a6c25118c', 1400), unsplash('photo-1618221195710-dd6b41faaea6', 1400), unsplash('photo-1507089947368-19c1da9775ae', 1400)],
    alt: 'Maison moderne blanche à étages',
    indicative: true,
    description: 'Maison récente sur quatre niveaux, pensée pour une grande famille ou pour louer les étages séparément. Belles finitions et terrasse sur le toit pour profiter des soirées.',
    amenities: { water: 'Raccordée (SEN\'EAU)', power: 'Raccordée (Senelec)', access: 'Route bitumée' },
    layout: { bedrooms: 6, livings: 2, baths: 4, kitchen: 'Cuisine aménagée', garage: 'Garage 1 voiture' },
    nearby: ['Quartier résidentiel calme', 'Commerces, écoles et mosquée à proximité', 'Transports en commun à quelques minutes'],
  },
  {
    id: 'appartement-jaxaay',
    type: 'location',
    title: 'Appartement RDC, 3 chambres salon',
    short: 'Appartement RDC 3 chambres',
    location: 'Jaxaay terminus 84',
    surface: '[à préciser]',
    details: '3 chambres + salon',
    bedrooms: 3,
    price: 170000,
    perMonth: true,
    image: unsplash('photo-1522708323590-d24dbb6b0267'),
    gallery: [unsplash('photo-1522708323590-d24dbb6b0267', 1400), unsplash('photo-1502672260266-1c1ef2d93688', 1400), unsplash('photo-1600566753086-00f18fb6b3ea', 1400)],
    alt: "Salon lumineux d'un appartement",
    indicative: true,
    description: 'Appartement en rez-de-chaussée, lumineux et facile à vivre : trois chambres, un grand salon et un accès direct sans escaliers. Parfait pour une famille.',
    amenities: { water: 'Raccordée (SEN\'EAU)', power: 'Raccordée (Senelec, compteur individuel)', access: 'Route bitumée' },
    layout: { bedrooms: 3, livings: 1, baths: 2, kitchen: 'Cuisine aménagée', garage: 'Stationnement devant la maison' },
    nearby: ['À deux pas du terminus des bus 84', 'Accès rapide à l\'autoroute à péage', 'Marché et boutiques du quartier à proximité'],
  },
  // --- Exemples de maquette (affichés avec le badge « Exemple ») ---
  {
    id: 'exemple-appartement-almadies',
    example: true,
    type: 'vente',
    title: 'Appartement standing 3 chambres',
    short: 'Appartement standing',
    location: 'Almadies',
    surface: '140 m²',
    bedrooms: 3,
    papers: 'Titre foncier',
    paperType: 'Titre foncier',
    price: 65000000,
    image: unsplash('photo-1545324418-cc1a3fa10c00'),
    gallery: [unsplash('photo-1545324418-cc1a3fa10c00', 1400), unsplash('photo-1600607687644-c7171b42498f', 1400), unsplash('photo-1507089947368-19c1da9775ae', 1400), unsplash('photo-1600566753086-00f18fb6b3ea', 1400)],
    description: "Appartement de standing dans une résidence sécurisée, à quelques minutes de l'océan. Grandes baies vitrées, séjour lumineux et finitions haut de gamme.",
    alt: "Façade d'un immeuble résidentiel moderne",
    amenities: { water: 'Raccordée (SEN\'EAU)', power: 'Raccordée (Senelec)', access: 'Route bitumée' },
    layout: { bedrooms: 3, livings: 1, baths: 2, kitchen: 'Équipée', garage: 'Place de parking' },
    nearby: ['À 5 min de la plage de Ngor', 'À 10 min de la VDN', 'Commerces et écoles à proximité'],
  },
  {
    id: 'exemple-villa-saly',
    example: true,
    type: 'vente',
    title: 'Villa moderne avec piscine',
    short: 'Villa moderne',
    location: 'Saly',
    surface: '300 m²',
    bedrooms: 4,
    papers: 'Titre foncier',
    paperType: 'Titre foncier',
    price: 85000000,
    image: unsplash('photo-1512917774080-9991f1c4c750'),
    gallery: [unsplash('photo-1512917774080-9991f1c4c750', 1400), unsplash('photo-1613977257363-707ba9348227', 1400), unsplash('photo-1613490493576-7fde63acd811', 1400), unsplash('photo-1618221195710-dd6b41faaea6', 1400), unsplash('photo-1600607687644-c7171b42498f', 1400)],
    description: 'Villa contemporaine avec piscine et jardin, faite pour profiter du soleil de la Petite-Côte toute l\'année. Grand séjour ouvert sur la terrasse.',
    alt: 'Villa blanche moderne avec piscine',
    amenities: { water: 'Raccordée (SEN\'EAU)', power: 'Raccordée (Senelec)', access: 'Route bitumée' },
    layout: { bedrooms: 4, livings: 2, baths: 3, kitchen: 'Équipée', garage: 'Garage 2 voitures' },
    nearby: ['À 10 min de la plage de Saly', 'À 5 min de l\'autoroute à péage', 'À 15 min du centre de Mbour'],
  },
  {
    id: 'exemple-terrain-thies',
    example: true,
    type: 'terrain',
    title: 'Terrain 300 m²',
    short: 'Terrain',
    location: 'Thiès',
    surface: '300 m²',
    papers: 'Bail',
    paperType: 'Bail',
    price: 2500000,
    image: unsplash('photo-1500382017468-9049fed747ef'),
    description: 'Terrain bien situé à Thiès, au calme, idéal pour une première construction avec un budget maîtrisé.',
    alt: 'Terrain nu au coucher du soleil',
    amenities: { water: 'Raccordement possible', power: 'Ligne Senelec à 100 m', access: 'Piste' },
    nearby: ['À 10 min du centre-ville de Thiès', 'À 5 min de l\'autoroute à péage', 'Écoles et marché du quartier à proximité'],
  },
];

export const paperTypes = ['Titre foncier', 'Bail', 'Acte administratif', '[à préciser]'];

// Bien mis en avant en grande rangée en tête de la liste.
export const featuredPropertyId = 'maison-r3-comico-gadaye';

// Nombre de biens montrés sur l'accueil ; la suite est dans la page « Tous nos biens ».
export const homeLimit = 6;

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

// Avis d'EXEMPLE pour la maquette : affichés avec la mention « Avis d'exemple ».
// À remplacer par de vrais avis clients (texte, prénom, ville) avant la mise en ligne.
export const reviews = [
  { name: 'Moussa D.', city: 'Paris', rating: 5, text: "Depuis la France, j'ai acheté mon terrain sans stress. Photos, vidéos, papiers : tout m'a été envoyé sur WhatsApp. Merci 2K Nguith !" },
  { name: 'Mariama S.', city: 'Dakar', rating: 5, text: 'Appartement trouvé en une semaine, exactement dans mon budget. Équipe sérieuse et très réactive.' },
  { name: 'Ibrahima N.', city: 'Milan', rating: 5, text: "Ils gèrent ma maison à Dakar et je reçois des nouvelles régulièrement. Je recommande à toute la diaspora." },
];
