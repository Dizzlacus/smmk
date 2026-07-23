export interface Review {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export interface Service {
  name: string;
  description: string;
  icon?: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  href: string;
  tags: string[];
  status: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  summary: string;
  includesLabel: string;
  includes: string[];
  delivery?: string;
  popular?: boolean;
}

export interface CarePlan {
  id: string;
  name: string;
  price: string;
  summary?: string;
  includesLabel: string;
  includes: string[];
}

export const site = {
  name: 'SMMK',
  legalName: 'SMMK',
  url: 'https://example.com',
  email: 'hello@example.com',
  description:
    'A clean Astro marketing starter. Replace this copy, tokens, and assets with your brand.',
  founderName: 'Your Name',
  addressLocality: 'City',
  addressRegion: 'Region',
  addressCountry: 'GB',
  areaServed: 'United Kingdom',
  priceRange: '££',
  sameAs: [] as string[],
  ogImage: '/img/og-image.svg',
  locale: 'en_GB',
  // Set your GA measurement ID to enable analytics in BaseLayout.
  gaMeasurementId: '',
  heroHeadline: 'Your headline goes here',
  heroSubhead:
    'Replace this supporting sentence with a short pitch for your product, studio, or service.',
  heroCta: 'Get in touch',
  aboutHeadline: 'A short about headline',
  aboutParagraphs: [
    'Introduce yourself or your business in a sentence or two.',
    'Add another paragraph about how you work and who you help.',
    'Keep this section focused — one story, not a resume dump.',
  ],
  contactHeadline: 'Ready to start a project?',
  contactSubhead: 'Tell us a little about what you need and we will reply soon.',
} as const;

export const services: Service[] = [
  {
    name: 'Service one',
    description: 'Short placeholder description for your first offering.',
    icon: '/img/svg/icon-web-dev.svg',
  },
  {
    name: 'Service two',
    description: 'Short placeholder description for your second offering.',
    icon: '/img/svg/icon-responsive.svg',
  },
  {
    name: 'Service three',
    description: 'Short placeholder description for your third offering.',
  },
];

export const portfolio: PortfolioItem[] = [
  {
    title: 'Project one',
    description: 'Brief summary of a sample project. Swap this for real work and screenshots.',
    href: '#',
    tags: ['Custom Build', 'Responsive'],
    status: 'Sample',
  },
  {
    title: 'Project two',
    description: 'Another placeholder card so the portfolio layout stays visible while you restyle.',
    href: '#',
    tags: ['Design', 'Content'],
    status: 'Sample',
  },
];

export const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '£X',
    summary: 'Placeholder package for getting started.',
    includesLabel: 'Includes',
    includes: ['Item one', 'Item two', 'Item three'],
    delivery: 'TBD',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '£X',
    summary: 'Placeholder mid-tier package.',
    includesLabel: 'Includes everything in Starter, plus',
    includes: ['Item four', 'Item five', 'Item six'],
    delivery: 'TBD',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '£X+',
    summary: 'Placeholder top-tier package.',
    includesLabel: 'Includes',
    includes: ['Item seven', 'Item eight', 'Item nine'],
  },
];

export const carePlans: CarePlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: '£X/month',
    includesLabel: 'Includes',
    includes: ['Hosting', 'Updates', 'Support'],
  },
  {
    id: 'partner',
    name: 'Partner',
    price: '£X+/month',
    summary: 'Ongoing improvements and priority support.',
    includesLabel: 'Includes',
    includes: ['Monthly hours', 'Reviews', 'Priority turnaround'],
  },
];

export const reviews: Review[] = [
  {
    quote: '"Replace this with a real client quote."',
    name: 'Alex Example',
    role: 'Founder',
    rating: 5,
  },
  {
    quote: '"Another placeholder testimonial for layout and styling."',
    name: 'Jordan Sample',
    role: 'Creative Director',
    rating: 5,
  },
  {
    quote: '"Keep two or three reviews once you have them."',
    name: 'Sam Placeholder',
    role: 'Studio Owner',
    rating: 5,
  },
];
