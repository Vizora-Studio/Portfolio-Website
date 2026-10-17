export type ProfessionOption =
  | 'Model or fashion creator'
  | 'Makeup artist or beauty professional'
  | 'Photographer or videographer'
  | 'Salon or beauty studio'
  | 'Fashion or creative professional'
  | 'Small business'
  | 'Other';

export type WebsiteTypeOption =
  | 'Portfolio website'
  | '3D interactive portfolio website'
  | 'Business website'
  | 'Personal brand website'
  | 'Website redesign'
  | 'Not sure yet';

export type DesignStyleOption =
  | 'Luxury and editorial'
  | 'Bold and creative'
  | 'Minimal and elegant'
  | 'Modern and professional'
  | 'Need design guidance';

export type DemoRouteId =
  | 'model-portfolio'
  | 'makeup-artist'
  | 'photographer'
  | 'beauty-studio';

export interface InquiryPreselection {
  profession?: ProfessionOption;
  websiteType?: WebsiteTypeOption;
  designStyle?: DesignStyleOption;
  projectContext?: string;
}

export interface LiveClientProject {
  id: 'khadija-editorial' | 'khadija-3d';
  editionBadge: string;
  tierLabel: string;
  clientName: string;
  projectTitle: string;
  liveUrl: string;
  displayDomain: string;
  tagline: string;
  shortDescription: string;
  keyFeatures: string[];
  heroImage: string;
  secondaryImage: string;
  portraitImage: string;
  imageAlt: string;
  accentColor: 'blue' | 'purple';
  profession: ProfessionOption;
  preselectWebsiteType: WebsiteTypeOption;
  preselectDesignStyle: DesignStyleOption;
}

export interface ServiceOffering {
  number: string;
  id: string;
  title: string;
  audience: string;
  summary: string;
  features: string[];
  ctaLabel: string;
  websiteType: WebsiteTypeOption;
  designStyle: DesignStyleOption;
  image: string;
  imageAlt: string;
  previewUrlLabel: string;
  demoRoute: DemoRouteId;
}

export interface AudienceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  layoutVariant:
    | 'editorial-comp'
    | 'beauty-transformation'
    | 'cinematic-frame'
    | 'salon-menu'
    | 'atelier-lookbook'
    | 'business-vitrine';
  image: string;
  secondaryImage?: string;
  imageAlt: string;
  profession: ProfessionOption;
  websiteType: WebsiteTypeOption;
  designStyle: DesignStyleOption;
  demoRoute?: DemoRouteId;
  demoLabel?: string;
}

export interface FeaturedDemoWork {
  id: DemoRouteId;
  number: string;
  route: `/demos/${DemoRouteId}`;
  projectTitle: string;
  clientConceptName: string;
  industry: string;
  websiteType: string;
  shortDescription: string;
  designHighlights: string[];
  heroImage: string;
  secondaryImage: string;
  imageAlt: string;
  browserDomain: string;
  accentTheme: string;
  profession: ProfessionOption;
  preselectWebsiteType: WebsiteTypeOption;
  preselectDesignStyle: DesignStyleOption;
}

export interface ProcessStage {
  number: string;
  title: string;
  description: string;
  deliverableFocus: string[];
}

export interface WhyVizoraPillar {
  title: string;
  description: string;
  accentTag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProjectInquiryPayload {
  fullName: string;
  email: string;
  profession: ProfessionOption | '';
  websiteType: WebsiteTypeOption | '';
  projectGoals: string;
  designStyle: DesignStyleOption | '';
  existingWebsiteUrl: string;
  budgetRange: string;
  projectDetails: string;
}

/* Legacy compatibility types for unused files */
export type CategoryId =
  | 'all'
  | 'models'
  | 'makeup-artists'
  | 'hair-stylists'
  | 'fashion-photo'
  | 'wardrobe-stylists'
  | 'creative-directors';

export interface CreatorPortfolio {
  id: string;
  name: string;
  handle: string;
  specialty: string;
  category: CategoryId;
  location: string;
  avatar: string;
  coverImage: string;
  shortBio: string;
  fullBio: string;
  availableFor: string[];
  featuredProjectTitle: string;
  featuredProjectDescription: string;
  deliverables: string[];
  skills: string[];
  modelStats?: {
    height: string;
    bust: string;
    waist: string;
    hips: string;
    eyes: string;
    hair: string;
    shoeSize: string;
  };
  gallery: {
    title: string;
    image: string;
    caption: string;
  }[];
  awards: string[];
  dayRateGuide: string;
  hourlyRateGuide?: string;
  isVerified: boolean;
  isFeatured: boolean;
}

export interface FeaturedProject {
  id: string;
  title: string;
  creator: string;
  discipline: string;
  year: string;
  description: string;
  impactMetric: string;
  metricLabel: string;
  image: string;
  tags: string[];
}
