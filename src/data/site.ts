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

export interface Certification {
  name: string;
}

export const site = {
  name: 'SMMK',
  legalName: 'SMMK',
  url: 'https://smmk.mikeydiamond.workers.dev',
  email: 'katteferguson@outlook.com',
  description:
    'A clean Astro marketing starter. Replace this copy, tokens, and assets with your brand.',
  founderName: 'Kate',
  addressLocality: 'sunny paradise',
  addressRegion: 'Region',
  addressCountry: 'GB',
  areaServed: 'United Kingdom',
  priceRange: '££',
  sameAs: [] as string[],
  ogImage: '/img/og-image.svg',
  locale: 'en_GB',
  // Set your GTM container ID to enable analytics in BaseLayout.
  gtmId: 'GTM-MZTSHHD6',
  heroEyebrow: 'Digital experiences that inspire',
  heroDisplayTitle: 'Social Media Marketing Services',
  heroHeadline: 'Social media marketing services',
  heroSubhead:
    'More bookings, less workload. Social strategies that turn followers into guests—so you can get back to running the business.',
  heroCta: 'Explore services',
  heroCtaSecondary: 'Get in touch',
  aboutHeadline: 'Hi,',
  aboutHeadlineAccent: "I'm Kate",
  aboutParagraphs: [
    'Social Media Manager with a strong background in business and marketing. Seven years of education in business management, including a specialised focus on marketing, and a clear understanding of what it takes to manage business accounts.',
    'Passion for social media began over 10 years ago on a personal level, then moved into a professional role — over a year managing social accounts for businesses, growing online presence and engaging audiences.',
    'Outside of work: travel enthusiast with a love for all things food — exploring new places or trying new food when not working.',
  ],
  aboutCta: 'Get in touch',
  certificationsKicker: 'Credentials',
  certificationsHeadline: 'Trained to grow',
  certificationsHeadlineAccent: 'your brand',
  servicesCtaBody:
    "Not sure what your business needs? Don't worry, you don't need to know the marketing jargon or which service is right for you. Just tell me about your business, where you're struggling and what you're hoping to achieve, and I'll recommend the services that will have the biggest impact. No pressure, no confusing sales pitch, just honest advice on what I think will help your business grow",
  servicesCta: 'Get in touch',
  contactHeadline: 'Ready to',
  contactHeadlineAccent: 'start a project?',
  contactSubhead:
    'Tell us a little about what you need and we will reply soon.',
} as const;

export const services: Service[] = [
  {
    name: 'Platform Management',
    description:
      "Most businesses are only using a fraction of what social media platforms can actually do. From making sure your profiles are set up properly to using the right features on each platform, I'll help you get more visibility, build trust and make every account work harder for your business. Your social media should be helping your business grow, and act as an online storefront for services/products.",
    icon: '/img/svg/icon-performance.svg',
  },
  {
    name: 'Social Media Strategy',
    description:
      "Posting whenever you remember or copying what everyone else is doing rarely gets results. A clear strategy gives your content a purpose, helping you attract the right people and turn them into customers. I'll create a plan that's tailored to your business, so every post has a reason behind it and every decision moves you closer to your goals.",
    icon: '/img/svg/icon-innovation.svg',
  },
  {
    name: 'Content Creation',
    description:
      "You don't need to know what to post or spend hours trying to come up with ideas. I'll create content that's tailored to your business, speaks to your ideal customers and gives people a reason to choose you over the competition. Because good content isn't about getting lucky with the algorithm, it's about building trust with the people most likely to buy from you.",
    icon: '/img/svg/icon-excellence.svg',
  },
  {
    name: 'Social Media Audit',
    description:
      "If your social media isn't bringing in enquiries, there's usually a reason why. I'll go through your accounts with a fresh pair of eyes and tell you exactly what's working, what's holding you back and what I'd change if it were my business. No confusing, over-explained reports just honest, practical advice you can actually use.",
    icon: '/img/svg/icon-seo.svg',
  },
  {
    name: 'Creative Asset Design',
    description:
      "First impressions matter, especially online. Whether it's social media graphics, promotional artwork or branded marketing materials, I'll create professional designs that make your business look polished, consistent and trustworthy. Because people are far more likely to buy from a business that looks the part and are easily recognised/memorable.",
    icon: '/img/svg/icon-uiux.svg',
  },
  {
    name: 'Paid Ads',
    description:
      "Paid advertising isn't about throwing money at Meta and hoping for the best. It's about getting your business in front of the right people at the right time. I'll create, manage and optimise campaigns designed to generate more enquiries, bookings or sales, while making sure your budget is working as hard as possible.",
    icon: '/img/svg/icon-ecommerce.svg',
  },
  {
    name: 'Engagement',
    description:
      "People expect businesses to reply quickly on social media. Every comment, message and enquiry is an opportunity to build trust (or lose it). I'll help manage conversations with your audience, respond professionally and make sure no potential customer slips through the cracks while you're busy running the business.",
    icon: '/img/svg/icon-collaboration.svg',
  },
  {
    name: 'Scheduling & Content Planning',
    description:
      "Consistency builds trust, but finding time to post every day isn't realistic when you're running the business itself. I'll plan and schedule your content in advance, so your social media stays active, organised and consistent without becoming another job on your to-do list.",
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

export const certifications: Certification[] = [
  { name: 'BA (Hons), Business Management Degree' },
  { name: "Google's Fundamentals of Digital Marketing" },
  { name: 'HubSpot Academy Social Media Certified' },
  { name: 'Social Media Geniuses SMM Course' },
];

export const reviews: Review[] = [
  {
    quote:
      '"Kate has been a game-changer for our business since we rebranded. She took over our online presence and not only gave us a fresh look but brought in regular leads and attention to the business. The online presence she put together has been a key tool for our salesman, helping to convert leads into customers. Beyond being our social media manager, Kate has been like a right hand to me, especially when it comes to everything online - she\'s been a lifesaver. She\'s professional, reliable, and always helpful"',
    name: 'Andrew',
    role: 'AR Resin',
    rating: 5,
  },
  {
    quote:
      '"I had the pleasure of connecting with Kate and was impressed by her professionalism and expertise. She has a great understanding both social media and administrative tasks, making her a versatile asset. Kate\'s communication is clear and timely, and she brings a lot of value to the table. Highly recommend her for anyone looking to enhance their business operations"',
    name: 'Simon',
    role: 'MJ Training Solutions',
    rating: 5,
  },
  {
    quote:
      '"Kate\'s enthusiasm is infectious, and her bubbly, positive energy shines through in everything she does. Since Kate took over our Facebook presence, the page feels more alive, engaging, and reflective of who we are as a brand. She brings fresh ideas, consistently high-quality content, I can honestly say she\'s made me like Facebook again. Highly recommend!"',
    name: 'Nicky',
    role: 'Holiday Park Owner',
    rating: 5,
  },
  {
    quote:
      '"I am a South African brand and international artist and I use Kate from Digital stylist for my social media campaigns in the UK. She is absolutely brilliant at what she does and my sales have been growing month on month. I now have one less thing to worry about. She really puts me at ease and knows her markets."',
    name: 'Natasha',
    role: 'Abstract Artist',
    rating: 5,
  },
];
