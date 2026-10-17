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
    id: 'portfolio-websites',
    title: 'Portfolio Websites (Editorial & 3D Interactive)',
    audience: 'For models, photographers, makeup artists, stylists, and creative professionals.',
    summary:
      'An art-directed digital stage built around your visual work, measurements or specialties, editorial tear sheets, and direct client or agency inquiry flow—available as a timeless editorial portfolio or an immersive 3D motion experience.',
    features: [
      'Custom portfolio layouts (Classic Editorial or 3D Spatial)',
      'Image, lookbook, and motion reel galleries',
      'Personal introduction and biography',
      'Services, measurements, and specialties',
      'Professional inquiry forms',
      'Testimonials when supplied by the client',
      'Responsive mobile experience',
    ],
    ctaLabel: 'Build My Portfolio',
    websiteType: 'Portfolio website',
    designStyle: 'Luxury and editorial',
    image: '/images/khadija/khadija-red-saree-runway.jpg',
    imageAlt: 'Khadija Farhat haute couture model portrait showcasing a custom Vizora portfolio website',
    previewUrlLabel: 'khadija-3d-portfolio.vercel.app',
    demoRoute: 'model-portfolio',
  },
  {
    number: '02',
    id: 'business-websites',
    title: 'Business Websites',
    audience: 'For salons, beauty studios, creative businesses, and small-business owners.',
    summary:
      'A polished, trustworthy digital storefront that communicates your services, pricing, brand atmosphere, studio location, and client booking or inquiry options.',
    features: [
      'Custom business homepage',
      'Brand identity and service presentation',
      'Services and pricing sections',
      'Contact information and location',
      'Inquiry forms',
      'Booking integration when required',
      'Responsive design and clear CTAs',
    ],
    ctaLabel: 'Build My Business Website',
    websiteType: 'Business website',
    designStyle: 'Modern and professional',
    image: '/images/beauty-salon.jpg',
    imageAlt: 'Luxury beauty salon interior with arched mirrors and marble stations',
    previewUrlLabel: 'maisonlumiere.salon',
    demoRoute: 'beauty-studio',
  },
  {
    number: '03',
    id: 'personal-brand-websites',
    title: 'Personal Brand Websites',
    audience: 'For models, influencers, creators, consultants, and independent professionals.',
    summary:
      'A cohesive online flagship that elevates your name, story, press features, creative collaborations, and partnership inquiries beyond scattered social links.',
    features: [
      'Distinctive personal branding',
      'Professional biography',
      'Featured work and achievements',
      'Collaboration inquiries',
      'Social links and contact details',
      'Press kit or downloadable materials where appropriate',
    ],
    ctaLabel: 'Build My Brand',
    websiteType: 'Personal brand website',
    designStyle: 'Bold and creative',
    image: '/images/fashion-stylist.jpg',
    imageAlt: 'Creative fashion stylist atelier with royal blue and purple garments and editorial lookbook board',
    previewUrlLabel: 'elaravarma.beauty',
    demoRoute: 'makeup-artist',
  },
];

export const WHO_WE_BUILD_FOR: AudienceCategory[] = [
  {
    id: 'models-fashion',
    title: 'Models & Fashion Creators',
    subtitle: 'Digital Comp Cards · Lookbooks · Agency & Campaign Inquiries',
    description:
      'Present your runway walks, editorial tear sheets, digital comp-card measurements, and casting availability in uncompressed clarity—designed so agencies, scouts, and fashion houses see you at your best.',
    highlights: [
      'Interactive digital comp card & measurements',
      'Categorized editorial, runway & commercial galleries',
      'Direct agency & brand collaboration inquiry form',
    ],
    layoutVariant: 'editorial-comp',
    image: '/images/model-editorial.jpg',
    secondaryImage: '/images/model-campaign.jpg',
    imageAlt: 'High-fashion model in tailored black coat and royal blue silk scarf',
    profession: 'Model or fashion creator',
    websiteType: 'Portfolio website',
    designStyle: 'Luxury and editorial',
    demoRoute: 'model-portfolio',
    demoLabel: 'Explore Model Portfolio Demo',
  },
  {
    id: 'makeup-artists',
    title: 'Makeup Artists & Beauty Professionals',
    subtitle: 'Bridal Portfolios · Transformation Galleries · Service Packages',
    description:
      'Showcase skin finishes, bridal beauty stories, editorial makeup artistry, and clear service packages with an appointment inquiry experience tailored to brides and production clients.',
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
    demoLabel: 'Explore Makeup Artist Demo',
  },
  {
    id: 'photographers-videographers',
    title: 'Photographers & Videographers',
    subtitle: 'Full-Bleed Visual Stories · Categorized Series · Shoot Bookings',
    description:
      'Let your framing, lighting, and visual pacing lead the experience. We build distraction-free, high-impact photography and motion portfolios organized by commission type and creative specialty.',
    highlights: [
      'Full-width visual compositions & series stories',
      'Filtered galleries for fashion, portrait & commercial work',
      'Production brief & commission inquiry workflow',
    ],
    layoutVariant: 'cinematic-frame',
    image: '/images/photographer-editorial.jpg',
    secondaryImage: '/images/photographer-study.jpg',
    imageAlt: 'Editorial fashion photography in architectural studio with dramatic beam of light',
    profession: 'Photographer or videographer',
    websiteType: 'Portfolio website',
    designStyle: 'Minimal and elegant',
    demoRoute: 'photographer',
    demoLabel: 'Explore Photographer Demo',
  },
  {
    id: 'salons-beauty-studios',
    title: 'Salons & Beauty Studios',
    subtitle: 'Treatment Menus · Transparent Pricing · Studio Location & Booking',
    description:
      'Turn local searches and social profile clicks into salon visits. Present your interior atmosphere, hair and skincare menus, pricing tiers, hours, and booking options in a serene digital experience.',
    highlights: [
      'Structured treatment & styling service menus with pricing',
      'Studio interior showcase, hours & map directions',
      'Appointment request or booking integration',
    ],
    layoutVariant: 'salon-menu',
    image: '/images/beauty-salon.jpg',
    imageAlt: 'Upscale beauty studio interior with illuminated arched mirrors',
    profession: 'Salon or beauty studio',
    websiteType: 'Business website',
    designStyle: 'Modern and professional',
    demoRoute: 'beauty-studio',
    demoLabel: 'Explore Beauty Studio Demo',
  },
  {
    id: 'fashion-creative-professionals',
    title: 'Fashion & Creative Professionals',
    subtitle: 'Wardrobe Stylists · Art Directors · Set & Creative Consultants',
    description:
      'For wardrobe stylists, art directors, and multidisciplinary creatives whose work spans campaigns, lookbooks, and brand consulting—crafted with asymmetric editorial grids and distinctive personal identity.',
    highlights: [
      'Editorial archive organized by designer, season, or publication',
      'Creative direction credits & press kit presentation',
      'Direct representation and creative commission contact',
    ],
    layoutVariant: 'atelier-lookbook',
    image: '/images/fashion-stylist.jpg',
    imageAlt: 'Fashion stylist atelier studio with designer garments and moodboard',
    profession: 'Fashion or creative professional',
    websiteType: 'Personal brand website',
    designStyle: 'Bold and creative',
    demoRoute: 'model-portfolio',
    demoLabel: 'Preview Editorial Direction',
  },
  {
    id: 'small-businesses',
    title: 'Small Businesses',
    subtitle: 'Boutiques · Creative Studios · Independent Service Brands',
    description:
      'Give your business a credible, memorable home online. We organize your story, offerings, customer FAQs, location details, and contact pathways so prospective customers know exactly how to work with you.',
    highlights: [
      'Clear brand story, core services & offerings breakdown',
      'Mobile-first navigation for customers on the go',
      'Direct customer inquiry, consultation & location details',
    ],
    layoutVariant: 'business-vitrine',
    image: '/images/small-business.jpg',
    imageAlt: 'Modern boutique and creative small business studio space',
    profession: 'Small business',
    websiteType: 'Business website',
    designStyle: 'Modern and professional',
    demoRoute: 'beauty-studio',
    demoLabel: 'Explore Business Website Demo',
  },
];

export const FEATURED_DEMOS: FeaturedDemoWork[] = [
  {
    id: 'model-portfolio',
    number: 'DEMO 01',
    route: '/demos/model-portfolio',
    projectTitle: 'Anya Laurent — Haute Couture & Editorial Model Portfolio',
    clientConceptName: 'Anya Laurent (Concept Demo)',
    industry: 'Models & Fashion Creators',
    websiteType: 'Portfolio Website',
    shortDescription:
      'A high-contrast fashion-editorial portfolio featuring oversized lookbook photography, interactive digital comp-card measurements, campaign archives, and agency/direct booking inquiry flows.',
    designHighlights: [
      'Editorial serif typography & full-bleed campaign compositions',
      'Interactive digital comp card with height, measurements & tear sheets',
      'Filterable runway, print & lookbook gallery with agency contact',
    ],
    heroImage: '/images/model-editorial.jpg',
    secondaryImage: '/images/model-campaign.jpg',
    imageAlt: 'Anya Laurent Model Portfolio Concept Demo Preview',
    browserDomain: 'anyalaurent.model.vizora.demo',
    accentTheme: 'Obsidian & Royal Cobalt Editorial',
    profession: 'Model or fashion creator',
    preselectWebsiteType: 'Portfolio website',
    preselectDesignStyle: 'Luxury and editorial',
  },
  {
    id: 'makeup-artist',
    number: 'DEMO 02',
    route: '/demos/makeup-artist',
    projectTitle: 'Atelier Elara — Bridal & Editorial Makeup Artistry Website',
    clientConceptName: 'Elara Varma MUA (Concept Demo)',
    industry: 'Makeup Artists & Bridal Beauty',
    websiteType: 'Portfolio & Booking Website',
    shortDescription:
      'A luminous beauty website designed for bridal and editorial makeup artists—complete with interactive before-and-after beauty notes, bridal package tiers, sample client notes, and appointment date inquiries.',
    designHighlights: [
      'Warm silk-and-obsidian editorial palette tailored to skin tones',
      'Interactive Before & After transformation breakdown & product notes',
      'Bridal, Editorial & Masterclass service packages with date inquiry',
    ],
    heroImage: '/images/makeup-bridal.jpg',
    secondaryImage: '/images/makeup-studio.jpg',
    imageAlt: 'Atelier Elara Makeup Artist Website Concept Demo Preview',
    browserDomain: 'atelierelara.beauty.vizora.demo',
    accentTheme: 'Luminous Ivory, Velvet Plum & Studio Black',
    profession: 'Makeup artist or beauty professional',
    preselectWebsiteType: 'Portfolio website',
    preselectDesignStyle: 'Luxury and editorial',
  },
  {
    id: 'photographer',
    number: 'DEMO 03',
    route: '/demos/photographer',
    projectTitle: 'Soren Lindqvist — Fashion & Architectural Photography Portfolio',
    clientConceptName: 'Soren Lindqvist Studio (Concept Demo)',
    industry: 'Photographers & Videographers',
    websiteType: 'Visual Portfolio Website',
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
    browserDomain: 'sorenlindqvist.photo.vizora.demo',
    accentTheme: 'Monochrome Gallery & Cobalt Chiaroscuro',
    profession: 'Photographer or videographer',
    preselectWebsiteType: 'Portfolio website',
    preselectDesignStyle: 'Minimal and elegant',
  },
  {
    id: 'beauty-studio',
    number: 'DEMO 04',
    route: '/demos/beauty-studio',
    projectTitle: 'Maison Lumière — Luxury Beauty Studio & Salon Business Website',
    clientConceptName: 'Maison Lumière Salon (Concept Demo)',
    industry: 'Salons, Beauty Studios & Small Businesses',
    websiteType: 'Business Website',
    shortDescription:
      'A polished business website for an upscale hair, skin, and beauty studio featuring categorized service and pricing menus, studio interior tour, location and hours, and interactive appointment requests.',
    designHighlights: [
      'Interactive multi-category service & transparent pricing menu',
      'Architectural studio introduction, specialist team & location card',
      'Mobile-friendly appointment request & consultation flow',
    ],
    heroImage: '/images/beauty-salon.jpg',
    secondaryImage: '/images/small-business.jpg',
    imageAlt: 'Maison Lumière Beauty Studio Business Website Concept Demo Preview',
    browserDomain: 'maisonlumiere.studio.vizora.demo',
    accentTheme: 'Architectural Travertine, Ink Black & Royal Blue',
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
      'We understand your profession, audience, goals, requirements, and visual preferences.',
    deliverableFocus: [
      'Profession & audience alignment',
      'Content & page architecture planning',
      'Visual references & mood direction',
    ],
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We develop a custom visual direction that represents your identity and business.',
    deliverableFocus: [
      'Bespoke typography & color system',
      'Editorial layout & gallery presentation',
      'Clear inquiry & booking user journeys',
    ],
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We implement the website, make it responsive, and integrate the agreed features.',
    deliverableFocus: [
      'Responsive desktop, tablet & mobile code',
      'Interactive galleries, menus & contact forms',
      'Refined motion & accessibility standards',
    ],
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We test the finished experience and prepare it for launch according to the agreed project arrangements.',
    deliverableFocus: [
      'Cross-device & browser quality checks',
      'Search & social sharing metadata setup',
      'Smooth handover & launch readiness',
    ],
  },
];

export const WHY_VIZORA_PILLARS: WhyVizoraPillar[] = [
  {
    title: 'Profession-Specific Website Design',
    description:
      'A model needs comp-card specs and tear sheets; a salon needs clear service menus and location details. We structure every website around how your industry actually works.',
    accentTag: 'Tailored Structure',
  },
  {
    title: 'Custom Visual Identity',
    description:
      'No cookie-cutter templates. We craft typography, spacing, and color harmony that reflect your personal style or brand atmosphere.',
    accentTag: 'Art Direction',
  },
  {
    title: 'Beautiful Portfolio Presentation',
    description:
      'Your photography, beauty work, and creative projects are framed with editorial restraint so visitors focus on the quality of your craft.',
    accentTag: 'Visual Storytelling',
  },
  {
    title: 'Clear Business & Service Information',
    description:
      'We organize your offerings, packages, pricing sections, and FAQs so prospective clients understand what you provide without confusion.',
    accentTag: 'Clarity First',
  },
  {
    title: 'Mobile-First Development',
    description:
      'Most visitors arriving from Instagram or messages view your website on a phone first. Every layout is engineered to feel effortless on mobile screens.',
    accentTag: 'Social-Ready Mobile',
  },
  {
    title: 'Contact & Booking Functionality',
    description:
      'From structured project inquiry forms to appointment booking integrations when needed, we make it simple for clients to take the next step.',
    accentTag: 'Conversion Flow',
  },
  {
    title: 'Thoughtful Interaction & Animation',
    description:
      'Subtle reveals, smooth transitions, and tactile hover states add polish and dimension without slowing down the browsing experience.',
    accentTag: 'Refined Motion',
  },
  {
    title: 'Direct Project Communication',
    description:
      'Work directly with a dedicated creative web design studio focused on translating your vision into a finished, practical website.',
    accentTag: 'Collaborative Studio',
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
