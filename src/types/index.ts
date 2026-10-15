export type CategoryId = 
  | 'all'
  | 'models'
  | 'makeup-artists'
  | 'hair-stylists'
  | 'fashion-photo'
  | 'wardrobe-stylists'
  | 'creative-directors';

export interface ModelStats {
  height: string;
  bust?: string;
  waist?: string;
  hips?: string;
  eyes?: string;
  hair?: string;
  shoeSize?: string;
}

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
  gallery: {
    title: string;
    image: string;
    caption: string;
  }[];
  awards: string[];
  hourlyRateGuide?: string;
  dayRateGuide?: string;
  modelStats?: ModelStats;
  isVerified: boolean;
  isFeatured?: boolean;
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

export interface BookingFormState {
  clientName: string;
  clientEmail: string;
  brandOrAgency: string;
  bookingType: string;
  talentPreference: string;
  shootDate: string;
  locationType: string;
  budgetBracket: string;
  usageRights: string;
  projectBrief: string;
}
