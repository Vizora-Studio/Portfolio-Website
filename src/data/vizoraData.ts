import {
  ServiceOffering,
  AudienceCategory,
  FeaturedDemoWork,
  LiveClientProject,
  ProcessStage,
  WhyVizoraPillar,
  FAQItem,
  ProfessionOption,
  WebsiteTypeOption,
  DesignStyleOption,
} from '../types';

export const PROFESSION_OPTIONS: ProfessionOption[] = [
  'Model or fashion creator',
  'Makeup artist or beauty professional',
  'Photographer or videographer',
  'Salon or beauty studio',
  'Fashion or creative professional',
  'Small business',
  'Other',
];

export const WEBSITE_TYPE_OPTIONS: WebsiteTypeOption[] = [
  'Portfolio website',
  '3D interactive portfolio website',
  'Business website',
  'Personal brand website',
  'Website redesign',
  'Not sure yet',
];

export const DESIGN_STYLE_OPTIONS: DesignStyleOption[] = [
  'Luxury and editorial',
  'Bold and creative',
  'Minimal and elegant',
  'Modern and professional',
  'Need design guidance',
];

export const BUDGET_RANGE_OPTIONS: string[] = [
  'Request a Quote / Need Scope Guidance',
  'Simple Editorial Portfolio Website (Like Khadija Classic)',
  'Immersive 3D & Motion Portfolio Website (Like Khadija 3D)',
  'Full Multi-Page Business or Salon Website',
  'Bespoke Flagship Experience & Custom Direction',
];

export const LIVE_CLIENT_WEBSITES: LiveClientProject[] = [
  {
    id: 'khadija-editorial',
    editionBadge: 'LIVE CLIENT WEBSITE 01 · CLASSIC EDITORIAL',
    tierLabel: 'Signature Editorial Model Portfolio',
    clientName: 'Khadija Farhat',
    projectTitle: 'Khadija Farhat — Classic Editorial Model Portfolio',
    liveUrl: 'https://khadija-portfolio-og.vercel.app/',
    displayDomain: 'khadija-portfolio-og.vercel.app',
    tagline: '“Elegance, expression and individuality in every frame.”',
    shortDescription:
      'A timeless, fast-loading editorial model portfolio crafted for Indian model Khadija Farhat. Designed for effortless browsing by casting directors, bridal studios, and fashion brands—spotlighting her story, curated gallery, and booking categories.',
    keyFeatures: [
      'High-impact editorial hero with instant “Explore Portfolio” & “Work With Me” CTAs',
      'Curated Bridal, Fashion, Beauty & Cultural Events booking showcase',
      'Clean, distraction-free mobile & desktop layout engineered for fast agency review',
    ],
    heroImage: '/images/khadija/khadija-og-website-preview.jpg',
    secondaryImage: '/images/khadija/khadija-emerald-dupatta-portrait.jpg',
    portraitImage: '/images/khadija/khadija-bridal-red-veil.jpg',
    imageAlt: 'Khadija Farhat live simple editorial model portfolio website screenshot',
    accentColor: 'blue',
    profession: 'Model or fashion creator',
    preselectWebsiteType: 'Portfolio website',
    preselectDesignStyle: 'Luxury and editorial',
  },
  {
    id: 'khadija-3d',
    editionBadge: 'LIVE CLIENT WEBSITE 02 · IMMERSIVE 3D & MOTION',
    tierLabel: '3D Spatial & Haute Couture Motion Portfolio',
    clientName: 'Khadija Farhat',
    projectTitle: 'Khadija Farhat — 3D Motion & Haute Couture Flagship',
    liveUrl: 'https://khadija-3d-portfolio.vercel.app/',
    displayDomain: 'khadija-3d-portfolio.vercel.app',
    tagline: '“An evolving visual presence shaped through 3D movement & couture expression.”',
    shortDescription:
      'An unforgettable, cinema-grade 3D portfolio website built for Khadija Farhat. Features an interactive 360° 3D Orbit & Monolith spatial carousel, full-bleed motion video reels, ambient couture audio controls, and editorial series with color-palette breakdowns.',
    keyFeatures: [
      'Interactive 360° 3D Spatial Archive (3D Orbit & Monolith drag-to-rotate experience)',
      'Full-screen Haute Couture motion reels & ambient soundtrack toggle',
      'Editorial series case studies (Crimson Majesty, Royal Velvet, Verdant Sovereign) with custom cursor states',
    ],
    heroImage: '/images/khadija/khadija-3d-website-preview.jpg',
    secondaryImage: '/images/khadija/khadija-red-saree-runway.jpg',
    portraitImage: '/images/khadija/khadija-maroon-velvet-couture.jpg',
    imageAlt: 'Khadija Farhat live 3D interactive model portfolio website screenshot',
    accentColor: 'purple',
    profession: 'Model or fashion creator',
    preselectWebsiteType: '3D interactive portfolio website',
    preselectDesignStyle: 'Luxury and editorial',
  },
];

export const SERVICES_DATA: ServiceOffering[] = [
  {
    number: '01',
    id: 'luxury-portfolio-websites',
    title: 'Luxury Portfolio Websites',
    audience: 'For models, makeup artists, photographers, stylists, and creative talent.',
    summary:
      'Visual storytelling, strong gallery layouts, refined editorial typography, and an effortless inquiry flow designed to present your body of work with magazine-caliber poise.',
    features: [
      'Editorial lookbook & high-resolution gallery curation',
      'Digital comp-card measurements or artist credentials',
      'Refined serif typography & bespoke visual rhythm',
      'Direct agency, casting, and client booking inquiries',
      'Fast-loading mobile-first responsive presentation',
    ],
    ctaLabel: 'Explore Portfolio Direction',
    websiteType: 'Portfolio website',
    designStyle: 'Luxury and editorial',
    image: '/images/khadija/khadija-og-website-preview.jpg',
    imageAlt: 'Khadija Farhat classic luxury editorial portfolio website designed by Vizora',
    previewUrlLabel: 'khadija-portfolio-og.vercel.app',
    demoRoute: 'model-portfolio',
  },
  {
    number: '02',
    id: 'immersive-3d-websites',
    title: 'Immersive 3D Websites',
    audience: 'For clients who want a memorable, interactive, modern digital experience.',
    summary:
      'Tasteful motion, spatial depth, smooth transitions, and artistic presentation that transform your online portfolio into an unforgettable interactive exhibition.',
    features: [
      'Interactive 360° 3D Orbit & spatial gallery experiences',
      'Cinematic motion reels & curated ambient audio controls',
      'Fluid scroll choreography & tactile cursor interactions',
      'Editorial series storytelling with dynamic depth',
      'Engineered for smooth performance across modern devices',
    ],
    ctaLabel: 'Explore 3D & Motion',
    websiteType: '3D interactive portfolio website',
    designStyle: 'Luxury and editorial',
    image: '/images/khadija/khadija-3d-website-preview.jpg',
    imageAlt: 'Khadija Farhat immersive 3D & motion portfolio website designed by Vizora',
    previewUrlLabel: 'khadija-3d-portfolio.vercel.app',
    demoRoute: 'model-portfolio',
  },
  {
    number: '03',
    id: 'business-websites',
    title: 'Business Websites',
    audience: 'For salons, beauty studios, boutiques, entrepreneurs, and growing companies.',
    summary:
      'An architectural, trustworthy digital presence focused on credibility, structured service and pricing presentation, brand clarity, and client conversion.',
    features: [
      'Structured treatment, service & transparent pricing menus',
      'Brand story, studio atmosphere & location presentation',
      'Client consultation & appointment booking pathways',
      'Clear navigation engineered for local & mobile discovery',
      'Tailored conversion architecture that turns visitors into clients',
    ],
    ctaLabel: 'Explore Business Websites',
    websiteType: 'Business website',
    designStyle: 'Modern and professional',
    image: '/images/beauty-salon.jpg',
    imageAlt: 'Luxury beauty salon and business website showcase',
    previewUrlLabel: 'maisonlumiere.studio.vizora.demo',
    demoRoute: 'beauty-studio',
  },
  {
    number: '04',
    id: 'bespoke-brand-experiences',
    title: 'Bespoke Brand Experiences',
    audience: 'For brands and individuals who want a custom digital flagship designed around their identity.',
    summary:
      'A signature online flagship art-directed from the ground up—uniting custom typography, editorial storytelling, press kits, and campaign archives into one unmistakable digital home.',
    features: [
      'Complete custom art direction & visual language system',
      'Signature campaign storytelling & press kit presentation',
      'Asymmetric editorial layouts tailored to your identity',
      'Custom collaboration, representation & commission flows',
      'Built to elevate your authority above standard templates',
    ],
    ctaLabel: 'Commission a Flagship',
    websiteType: 'Personal brand website',
    designStyle: 'Luxury and editorial',
    image: '/images/fashion-stylist.jpg',
    imageAlt: 'Bespoke brand flagship experience for creative directors and founders',
    previewUrlLabel: 'atelierelara.beauty.vizora.demo',
    demoRoute: 'makeup-artist',
  },
];

export const WHO_WE_BUILD_FOR: AudienceCategory[] = [
  {
    id: 'models-fashion',
    title: 'Models & Fashion Talent',
    subtitle: 'Digital Comp Cards · Editorial Tear Sheets · Agency Bookings',
    description:
      'Present your runway walks, editorial tear sheets, digital comp-card measurements, and casting availability in uncompressed clarity—designed so agencies, scouts, and fashion houses see you at your best.',
    highlights: [
      'Interactive digital comp card & measurements',
      'Categorized editorial, runway & bridal couture galleries',
      'Direct agency & brand collaboration inquiry flow',
    ],
    layoutVariant: 'editorial-comp',
    image: '/images/khadija/khadija-red-saree-runway.jpg',
    secondaryImage: '/images/model-editorial.jpg',
    imageAlt: 'Khadija Farhat fashion runway portrait for model portfolio websites',
    profession: 'Model or fashion creator',
    websiteType: 'Portfolio website',
    designStyle: 'Luxury and editorial',
    demoRoute: 'model-portfolio',
    demoLabel: 'Explore Model Portfolio',
  },
  {
    id: 'makeup-artists',
    title: 'Makeup Artists & Beauty Professionals',
    subtitle: 'Bridal Artistry · Editorial Skin Finishes · Service Packages',
    description:
      'Showcase luminous skin finishes, bridal beauty stories, editorial makeup artistry, and clear service packages with an appointment inquiry experience tailored to brides and production clients.',
    highlights: [
      'Bridal, red-carpet & editorial beauty galleries',
      'Transformation showcases & skin-detail presentation',
      'Curated service menus, bridal packages & date inquiries',
    ],
    layoutVariant: 'beauty-transformation',
    image: '/images/makeup-bridal.jpg',
    secondaryImage: '/images/makeup-studio.jpg',
    imageAlt: 'Bridal and editorial makeup portrait with luminous skin finish',
    profession: 'Makeup artist or beauty professional',
    websiteType: 'Portfolio website',
    designStyle: 'Luxury and editorial',
    demoRoute: 'makeup-artist',
    demoLabel: 'Explore Makeup Artist Site',
  },
  {
    id: 'photographers-videographers',
    title: 'Photographers & Visual Storytellers',
    subtitle: 'Full-Bleed Monograph Series · Lighting Notes · Commission Bookings',
    description:
      'Let your framing, lighting, and visual pacing lead the experience. We build distraction-free, gallery-grade photography and motion portfolios organized by commission series and specialty.',
    highlights: [
      'Full-width visual compositions & curated monograph series',
      'Filtered galleries for fashion, portrait & architectural work',
      'Production brief & commission inquiry workflow',
    ],
    layoutVariant: 'cinematic-frame',
    image: '/images/photographer-editorial.jpg',
    secondaryImage: '/images/photographer-study.jpg',
    imageAlt: 'Editorial fashion photography in architectural studio with warm beam of light',
    profession: 'Photographer or videographer',
    websiteType: 'Portfolio website',
    designStyle: 'Minimal and elegant',
    demoRoute: 'photographer',
    demoLabel: 'Explore Photographer Site',
  },
  {
    id: 'salons-beauty-studios',
    title: 'Salons & Beauty Studios',
    subtitle: 'Treatment Menus · Transparent Pricing · Studio Location & Booking',
    description:
      'Turn social profile visits and local searches into studio appointments. Present your architectural interior, hair and skincare menus, pricing tiers, hours, and booking options with serene elegance.',
    highlights: [
      'Structured treatment & styling service menus with pricing',
      'Studio interior showcase, hours & location directions',
      'Appointment request or booking integration',
    ],
    layoutVariant: 'salon-menu',
    image: '/images/beauty-salon.jpg',
    imageAlt: 'Upscale beauty studio interior with illuminated arched mirrors',
    profession: 'Salon or beauty studio',
    websiteType: 'Business website',
    designStyle: 'Modern and professional',
    demoRoute: 'beauty-studio',
    demoLabel: 'Explore Beauty Studio Site',
  },
  {
    id: 'entrepreneurs-personal-brands',
    title: 'Entrepreneurs & Personal Brands',
    subtitle: 'Founders · Creative Directors · Stylists · Independent Talent',
    description:
      'For founders, stylists, art directors, and independent voices building a signature reputation—crafted with editorial authority, press kit narratives, and bespoke partnership pathways.',
    highlights: [
      'Signature founder story, press features & portfolio archive',
      'Creative direction credits & downloadable press kit sections',
      'Direct representation, speaking & consulting inquiries',
    ],
    layoutVariant: 'atelier-lookbook',
    image: '/images/fashion-stylist.jpg',
    imageAlt: 'Creative director and fashion stylist atelier studio with editorial moodboard',
    profession: 'Fashion or creative professional',
    websiteType: 'Personal brand website',
    designStyle: 'Luxury and editorial',
    demoRoute: 'model-portfolio',
    demoLabel: 'Explore Editorial Flagship',
  },
  {
    id: 'small-businesses',
    title: 'Small Businesses & Growing Companies',
    subtitle: 'Boutiques · Design Studios · Independent Service Brands',
    description:
      'Give your growing company a credible, memorable digital flagship. We organize your brand story, core offerings, client FAQs, and contact pathways so customers choose you with confidence.',
    highlights: [
      'Clear brand story, core services & offerings breakdown',
      'Refined mobile-first navigation for modern customers',
      'Direct customer inquiry, consultation & location details',
    ],
    layoutVariant: 'business-vitrine',
    image: '/images/small-business.jpg',
    imageAlt: 'Modern boutique and creative small business studio space',
    profession: 'Small business',
    websiteType: 'Business website',
    designStyle: 'Modern and professional',
    demoRoute: 'beauty-studio',
    demoLabel: 'Explore Business Concept',
  },
];

export const FEATURED_DEMOS: FeaturedDemoWork[] = [
  {
    id: 'model-portfolio',
    number: 'CONCEPT 01',
    route: '/demos/model-portfolio',
    projectTitle: 'Anya Laurent — Haute Couture & Editorial Model Portfolio',
    clientConceptName: 'Anya Laurent (Studio Concept)',
    industry: 'Models & Fashion Talent',
    websiteType: 'Portfolio Websites',
    shortDescription:
      'An editorial fashion portfolio featuring oversized lookbook photography, interactive digital comp-card measurements, campaign archives, and agency/direct booking inquiry flows.',
    designHighlights: [
      'Editorial serif typography & full-bleed campaign compositions',
      'Interactive digital comp card with height, measurements & tear sheets',
      'Filterable runway, print & lookbook gallery with agency contact',
    ],
    heroImage: '/images/model-editorial.jpg',
    secondaryImage: '/images/model-campaign.jpg',
    imageAlt: 'Anya Laurent Model Portfolio Concept Demo Preview',
    browserDomain: 'anyalaurent.model.vizora.studio',
    accentTheme: 'Editorial Monograph & Digital Comp Card',
    profession: 'Model or fashion creator',
    preselectWebsiteType: 'Portfolio website',
    preselectDesignStyle: 'Luxury and editorial',
  },
  {
    id: 'makeup-artist',
    number: 'CONCEPT 02',
    route: '/demos/makeup-artist',
    projectTitle: 'Atelier Elara — Bridal & Editorial Makeup Artistry Website',
    clientConceptName: 'Elara Varma MUA (Studio Concept)',
    industry: 'Makeup Artists & Beauty Professionals',
    websiteType: 'Portfolio Websites',
    shortDescription:
      'A luminous beauty website designed for bridal and editorial makeup artists—complete with interactive before-and-after beauty notes, bridal package tiers, and appointment date inquiries.',
    designHighlights: [
      'Warm silk-and-champagne editorial palette tailored to skin tones',
      'Interactive Before & After transformation breakdown & product notes',
      'Bridal, Editorial & Masterclass service packages with date inquiry',
    ],
    heroImage: '/images/makeup-bridal.jpg',
    secondaryImage: '/images/makeup-studio.jpg',
    imageAlt: 'Atelier Elara Makeup Artist Website Concept Demo Preview',
    browserDomain: 'atelierelara.beauty.vizora.studio',
    accentTheme: 'Bridal Beauty & Editorial Artistry',
    profession: 'Makeup artist or beauty professional',
    preselectWebsiteType: 'Portfolio website',
    preselectDesignStyle: 'Luxury and editorial',
  },
  {
    id: 'photographer',
    number: 'CONCEPT 03',
    route: '/demos/photographer',
    projectTitle: 'Soren Lindqvist — Fashion & Architectural Photography Portfolio',
    clientConceptName: 'Soren Lindqvist Studio (Studio Concept)',
    industry: 'Photographers & Visual Storytellers',
    websiteType: 'Portfolio Websites',
    shortDescription:
      'A gallery-grade photography experience built around full-width visual compositions, categorized commission series, lighting and camera metadata notes, and production booking inquiries.',
    designHighlights: [
      'Cinema-scale image presentation with category & series filtering',
      'Detailed project case notes with lighting, format & location specs',
      'Direct commission & studio day-rate inquiry workflow',
    ],
    heroImage: '/images/photographer-editorial.jpg',
    secondaryImage: '/images/photographer-study.jpg',
    imageAlt: 'Soren Lindqvist Photographer Portfolio Concept Demo Preview',
    browserDomain: 'sorenlindqvist.photo.vizora.studio',
    accentTheme: 'Visual Monograph & Commission Archive',
    profession: 'Photographer or videographer',
    preselectWebsiteType: 'Portfolio website',
    preselectDesignStyle: 'Minimal and elegant',
  },
  {
    id: 'beauty-studio',
    number: 'CONCEPT 04',
    route: '/demos/beauty-studio',
    projectTitle: 'Maison Lumière — Luxury Beauty Studio & Salon Business Website',
    clientConceptName: 'Maison Lumière Salon (Studio Concept)',
    industry: 'Salons, Beauty Studios & Small Businesses',
    websiteType: 'Business Websites',
    shortDescription:
      'A polished business website for an upscale hair, skin, and beauty studio featuring categorized service and pricing menus, studio interior tour, location and hours, and appointment requests.',
    designHighlights: [
      'Interactive multi-category service & transparent pricing menu',
      'Architectural studio introduction, specialist team & location card',
      'Mobile-friendly appointment request & consultation flow',
    ],
    heroImage: '/images/beauty-salon.jpg',
    secondaryImage: '/images/small-business.jpg',
    imageAlt: 'Maison Lumière Beauty Studio Business Website Concept Demo Preview',
    browserDomain: 'maisonlumiere.salon.vizora.studio',
    accentTheme: 'Architectural Travertine & Salon Booking',
    profession: 'Salon or beauty studio',
    preselectWebsiteType: 'Business website',
    preselectDesignStyle: 'Modern and professional',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understanding your work, audience, and ambitions.',
    deliverableFocus: [
      'Profession, audience & brand positioning alignment',
      'Site architecture, content flow & feature planning',
      'Curated visual references & editorial direction',
    ],
  },
  {
    number: '02',
    title: 'Art Direct',
    description:
      'Shaping the visual language, structure, and atmosphere.',
    deliverableFocus: [
      'Bespoke editorial typography & warm luxury color palette',
      'Magazine-grade gallery & service layout choreography',
      'Clear inquiry, booking & conversion pathways',
    ],
  },
  {
    number: '03',
    title: 'Design and Build',
    description:
      'Crafting a responsive, refined digital experience.',
    deliverableFocus: [
      'Custom desktop, tablet & mobile front-end engineering',
      'Interactive galleries, 3D/motion accents & inquiry forms',
      'Fast asset delivery & accessible interaction states',
    ],
  },
  {
    number: '04',
    title: 'Refine and Launch',
    description:
      'Polishing every detail for a confident debut.',
    deliverableFocus: [
      'Cross-device responsiveness & visual quality assurance',
      'Search metadata & social link preview optimization',
      'Confident launch preparation & smooth studio handover',
    ],
  },
];

export const WHY_VIZORA_PILLARS: WhyVizoraPillar[] = [
  {
    title: 'Designed around your identity',
    description:
      'We never force your talent into a generic template. Every layout, typographic pairing, and color tone is art-directed around your personal aesthetic, discipline, and voice.',
    accentTag: 'Principle 01 · Bespoke Identity',
  },
  {
    title: 'Built for the people you want to reach',
    description:
      'Whether you are speaking to casting directors, brides-to-be, creative producers, or local salon clients, we structure the journey so visitors immediately understand your value and how to inquire.',
    accentTag: 'Principle 02 · Audience Clarity',
  },
  {
    title: 'Crafted with attention to every detail',
    description:
      'From the breathing room around your photographs to the subtle warmth of every border, button, and transition, our studio obsesses over the quiet details that make a website feel truly luxurious.',
    accentTag: 'Principle 03 · Editorial Craft',
  },
  {
    title: 'Developed to perform across modern devices',
    description:
      'Most opportunities begin on a phone screen via Instagram or a shared link. Every Vizora website is engineered to feel fast, fluid, and unmistakably refined across mobile, tablet, and desktop.',
    accentTag: 'Principle 04 · Modern Performance',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What types of websites does Vizora build?',
    answer:
      'Vizora designs and develops custom portfolio websites, business websites, and personal brand websites. We also redesign existing websites that need a stronger visual identity, clearer structure, and a better mobile experience.',
  },
  {
    question: 'Can you create a website for my specific profession?',
    answer:
      'Yes. We specialize in websites for models, fashion creators, makeup artists, bridal beauty professionals, photographers, videographers, salons, beauty studios, fashion stylists, independent professionals, and small businesses. Every site is structured around the specific content and inquiry flow your profession requires.',
  },
  {
    question: 'Can you build a portfolio for a beginner model or makeup artist?',
    answer:
      'Absolutely. You do not need years of campaigns to have a polished online presence. We design clean, focused portfolios that highlight your current test shoots, beauty work, measurements or services, and contact details—and that can grow as your body of work expands.',
  },
  {
    question: 'Will my website work on mobile devices?',
    answer:
      'Yes. Every Vizora website is designed and tested across mobile phones, tablets, laptops, and desktop screens. We pay special attention to mobile visitors arriving from Instagram, WhatsApp, and social media links so your galleries and contact forms work smoothly on any screen.',
  },
  {
    question: 'Can you add appointment booking?',
    answer:
      'Yes. Depending on how you manage your schedule, we can build custom appointment inquiry forms or integrate your preferred third-party booking system so clients can request dates, select services, or book sessions directly.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Yes. If you already have a website that feels outdated, cluttered, or difficult to use on mobile devices, you can share your current URL in our project inquiry form and we will plan a fresh, modern redesign.',
  },
  {
    question: 'Can I share my preferred designs and references?',
    answer:
      'Of course. During the Discover stage—and right inside our Project Inquiry Form—you can share your visual preferences, reference websites, moodboards, brand colors, and examples of layouts you admire.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Because every website has different pages, galleries, and functional needs, we provide custom quotes based on your project scope. Complete the Project Inquiry Form below with your profession, website type, and goals to request a quote.',
  },
  {
    question: 'What happens after I send an inquiry?',
    answer:
      'Once you submit your project requirements, we review your profession, goals, preferred design direction, and feature needs so we can follow up with next steps and discuss the right scope and arrangement for your website.',
  },
];
