export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  displayCategory?: string[];
  technology: string;
  imageUrl: string;
  fullPageImageUrl?: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'FocusTrading',
    description: 'FocusTrading is een geavanceerd handelsplatform dat kunstmatige intelligentie gebruikt om handelssignalen te genereren en portefeuillebeheer te automatiseren. Het platform biedt real-time marktanalyse, gepersonaliseerde handelssignalen en geautomatiseerde handelsmogelijkheden. De frontend is gebouwd met moderne webtechnologieën om een naadloze gebruikerservaring te bieden op zowel desktop als mobiele apparaten.',
    category: 'Frontend Development',
    technology: 'HTML / CSS / JS / Vite',
    imageUrl: '/images/projects/webdevelopment/focus.webp',
    fullPageImageUrl: '/images/projects/webdevelopment/focusfullpage.webp',
    tags: ['Web App', 'AI', 'Trading', 'Responsive', 'UI/UX'],
    link: 'https://thunderous-gumdrop-ba1c41.netlify.app/',
  },
  {
    id: 2,
    name: 'Mavo Productions',
    description: 'Mavo Productions is een website voor een creatief productiebedrijf dat gespecialiseerd is in video, fotografie en ontwerp. De site showcased hun portfolio, diensten en team op een visueel aantrekkelijke manier. Ik was verantwoordelijk voor het ontwerp en de ontwikkeling van de volledig responsieve website, waarbij ik nauw samenwerkte met het team om hun creatieve visie om te zetten in een digitale ervaring die hun werk weerspiegelt.',
    category: 'Frontend Development',
    technology: 'HTML / CSS / JS',
    imageUrl: '/images/projects/webdevelopment/mavo.webp',
    fullPageImageUrl: '/images/projects/webdevelopment/mavofullpage.webp',
    tags: ['Portfolio', 'Creative', 'Responsive', 'Animation'],
    link: 'https://mavoproductions.com',
  },
  {
    id: 3,
    name: 'Omega Trading',
    description: 'Omega Trading is een platform voor cryptovaluta-handelaren met geavanceerde grafiekfuncties, marktanalyse en handelstools. Dit project vereiste een complexe frontend-implementatie met real-time data visualisatie, gebruikersauthenticatie en een reactief ontwerp. Het platform biedt gebruikers de mogelijkheid om verschillende markten te volgen, geautomatiseerde handelsstrategieën in te stellen en hun portefeuille te beheren vanaf elk apparaat.',
    category: 'Frontend Development',
    technology: 'HTML / CSS / JS',
    imageUrl: '/images/projects/webdevelopment/omega.webp',
    fullPageImageUrl: '/images/projects/webdevelopment/omegafullpage.webp',
    tags: ['Web App', 'Crypto', 'Dashboard', 'Charts'],
    link: 'https://celadon-marzipan-bd54a9.netlify.app/',
  },
  {
    id: 4,
    name: 'Omega Coin Poster',
    description: 'Deze poster werd ontworpen om de lancering van een nieuwe cryptocurrency te ondersteunen. Het ontwerp combineert futuristische elementen met een professionele uitstraling om vertrouwen in het nieuwe digitale token te wekken. De compositie maakt gebruik van een donker kleurenpalet met levendige accenten om de aandacht te trekken en belangrijke informatie over de munt te benadrukken. Dit project vereiste een zorgvuldige balans tussen merkstijl, informatieontwerp en visuele aantrekkingskracht.',
    category: 'Graphic Design',
    technology: 'Adobe Photoshop',
    imageUrl: '/images/projects/graphicdesign/omegacoinposter.webp',
    fullPageImageUrl: '/images/projects/graphicdesign/omegacoinposterfullpage.webp',
    tags: ['Print', 'Crypto', 'Branding', 'Marketing'],
    link: 'https://celadon-marzipan-bd54a9.netlify.app/',
  },
  {
    id: 5,
    name: 'Black Friday Ad',
    description: 'Deze advertentie voor Black Friday was ontworpen om de aandacht te trekken in een drukke advertentieperiode. Door gebruik te maken van een opvallend kleurcontrast, duidelijke typografie en een gestructureerde lay-out, communiceert het ontwerp effectief de aanbiedingen en promoties. De advertentie werd ontwikkeld voor zowel digitale als gedrukte media, met aanpassingen voor verschillende platformvereisten en doelgroepen.',
    category: 'Graphic Design',
    technology: 'Adobe Photoshop',
    imageUrl: '/images/projects/graphicdesign/blackfriday.webp',
    fullPageImageUrl: '/images/projects/graphicdesign/blackfridayfullpage.webp',
    tags: ['Advertising', 'Print', 'Digital', 'E-commerce'],
    link: 'https://celadon-marzipan-bd54a9.netlify.app/',
  },
];
