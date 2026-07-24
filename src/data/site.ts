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
  url: 'https://dizzlacus.github.io/smmk',
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
  heroEyebrow: 'Digital experiences that inspire',
  heroDisplayTitle: 'DIGITAL MARKETING',
  heroHeadline: 'Digital marketing',
  heroSubhead:
    'I craft elegant, high-performing campaigns that merge strategy, aesthetics, and technology. Or something, Kate won\'t give me any content - :( ',
  heroCta: 'Explore services',
  heroCtaSecondary: 'Get in touch',
  aboutHeadline: 'Built from a',
  aboutHeadlineAccent: 'passion for travel',
  aboutParagraphs: [
    'Next time Kate complains about a client I\'ll remind her about the time she sent me two completelty different looking websites that were objectionally bad, 4 random pictures of accommodation, and 2 quite nice pictures of herself and zero context for her business. And I still made her a really nice looking website',
  ],
  aboutCta: 'Get in touch',
  contactHeadline: 'Ready to start a project?',
  contactSubhead:
    'Tell us a little about what you need and we will reply soon. Kate won\'t reply. She doesn\'t to her friend Mikey anyway.',
} as const;

export const services: Service[] = [
  {
    name: 'Platform management',
    description:
      'Day-to-day management of your social channels so accounts stay active, consistent, and on-brand.',
    icon: '/img/svg/icon-performance.svg',
  },
  {
    name: 'Social media strategy',
    description:
      'Audience, channel, and content plans aligned to bookings and business goals.',
    icon: '/img/svg/icon-innovation.svg',
  },
  {
    name: 'Content creation',
    description:
      'Posts, captions, and storytelling that speak to travellers and convert interest into enquiries.',
    icon: '/img/svg/icon-excellence.svg',
  },
  {
    name: 'Social media audit',
    description:
      'A clear review of what’s working, what’s missing, and where to improve.',
    icon: '/img/svg/icon-seo.svg',
  },
  {
    name: 'Creative asset design',
    description:
      'Visuals and templates that keep your brand sharp across every platform.',
    icon: '/img/svg/icon-uiux.svg',
  },
  {
    name: 'Paid ads',
    description:
      'Targeted campaigns that put the right offers in front of the right audience.',
    icon: '/img/svg/icon-ecommerce.svg',
  },
  {
    name: 'Engagement',
    description:
      'Community management that builds trust and keeps conversations moving.',
    icon: '/img/svg/icon-collaboration.svg',
  },
  {
    name: 'Scheduling and content planning',
    description:
      'Calendars and publishing so content goes live at the right time, consistently.',
    icon: '/img/svg/icon-precision.svg',
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
    quote:
      '"Kate is a great friend, but has truly done the bare minimum in helping me with this site - big hearts"',
    name: 'Michael Diamond',
    role: '',
    rating: 5,
  },
  {
    quote:
      '"Kate has truly been there for me through thick and thin. Its a shame she\'s given no content for this website"',
    name: 'Mikey Diamond',
    role: '',
    rating: 5,
  },
  {
    quote:
      '"I love kate with all my heart, but her lack of commitment to making a good website hurts my feelings"',
    name: 'Michaelangelo Diamond',
    role: '',
    rating: 5,
  },
];
