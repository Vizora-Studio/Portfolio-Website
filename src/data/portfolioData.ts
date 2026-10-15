import { CreatorPortfolio, FeaturedProject } from '../types';

export const CATEGORIES = [
  { id: 'all', label: 'All Talent' },
  { id: 'models', label: 'Fashion & Runway Models' },
  { id: 'makeup-artists', label: 'Makeup Artists (MUA)' },
  { id: 'hair-stylists', label: 'Hair & Wig Stylists' },
  { id: 'fashion-photo', label: 'Fashion Photographers' },
  { id: 'wardrobe-stylists', label: 'Wardrobe Stylists' },
  { id: 'creative-directors', label: 'Creative & Casting' },
] as const;

export const CREATORS: CreatorPortfolio[] = [
  {
    id: 'anya-laurent',
    name: 'Anya Laurent',
    handle: '@anyalaurent.model',
    specialty: 'Haute Couture Runway & Editorial Fashion Model',
    category: 'models',
    location: 'Paris / Milan / New York',
    avatar: '/avatars/avatar-anya.jpg',
    coverImage: '/showcase/fashion-runway.jpg',
    shortBio: 'International runway model walked for Paris & Milan Fashion Weeks. Featured on Vogue France and Harper’s Bazaar covers.',
    fullBio: 'Anya is an editorial and runway model with 6 years of international high-fashion presence. Representing elegance and architectural poise, she has led campaigns for European luxury fashion houses and walked prestigious Spring/Summer Haute Couture shows in Paris and Milan.',
    availableFor: ['Fashion Week Runway Shows', 'Haute Couture Lookbooks', 'Global Beauty & Jewelry Campaigns'],
    featuredProjectTitle: 'Maison Lumière Haute Couture PFW',
    featuredProjectDescription: 'Lead opening and closing model for the Paris Fashion Week Spring/Summer Haute Couture collection, showcased at Grand Palais.',
    deliverables: ['Runway Showcase Walk', 'Lookbook Editorial Shoot (24 Looks)', 'Global Digital & Print Campaign Licensing'],
    skills: ['Runway Catwalk', 'Editorial Posing', 'High-Fashion Modeling', 'Haute Couture Draping', 'Commercial Acting'],
    modelStats: {
      height: "5'11\" (180 cm)",
      bust: '32B (82 cm)',
      waist: '24" (61 cm)',
      hips: '35" (89 cm)',
      eyes: 'Hazel Green',
      hair: 'Dark Espresso',
      shoeSize: '39 EU / 8.5 US',
    },
    gallery: [
      {
        title: 'Runway Golden Orbit Walk',
        image: '/showcase/fashion-runway.jpg',
        caption: 'Paris Fashion Week Haute Couture finale gown presentation.',
      },
      {
        title: 'Twilight Studio Lookbook',
        image: '/showcase/editorial-photography.jpg',
        caption: 'High-contrast studio portrait emphasizing sculptural bone structure.',
      },
      {
        title: 'Couture Silk Movement',
        image: '/showcase/wardrobe-styling.jpg',
        caption: 'Editorial movement capture featured in Vogue Paris.',
      }
    ],
    awards: ['Model of the Year Nominee (Fashion Awards)', 'Vogue France Editorial Spotlight'],
    dayRateGuide: '€1,800 – €3,500 / Day (Plus usage rights)',
    isVerified: true,
    isFeatured: true
  },
  {
    id: 'meera-varma',
    name: 'Meera Varma',
    handle: '@meeravarma_mua',
    specialty: 'Haute Couture Makeup Artist & Celebrity Beauty Lead',
    category: 'makeup-artists',
    location: 'London / Mumbai / Dubai',
    avatar: '/avatars/avatar-meera.jpg',
    coverImage: '/showcase/beauty-makeup.jpg',
    shortBio: 'Celebrity makeup artist celebrated for glass-skin luminescence, high-fashion editorial eyes, and couture bridal aesthetics.',
    fullBio: 'Meera has directed makeup design for high-fashion runway shows, cosmetic brand campaigns, and red carpets from Cannes to the Met Gala. Her philosophy focuses on flawless dermal radiance paired with precision graphic linework and metallic gold embellishments.',
    availableFor: ['Campaign Key Makeup Artist', 'Runway Beauty Direction', 'Editorial & Red Carpet Glamour'],
    featuredProjectTitle: 'Auric Glow Global Beauty Campaign',
    featuredProjectDescription: 'Lead beauty direction for an international cosmetics brand campaign celebrating golden undertones and multi-dimensional skin finishes.',
    deliverables: ['Custom Concept Face Charts', 'Full-Day Shoot Beauty Direction', 'High-Res Skin Texture Retouch Guidance'],
    skills: ['Glass-Skin Foundation', 'Graphic Eyeliner', 'Editorial Color Grading', 'Haute Couture Embellishment', 'Airbrush Artistry'],
    gallery: [
      {
        title: 'Luminous Champagne Dew',
        image: '/showcase/beauty-makeup.jpg',
        caption: 'Reflective gold leaf and hyaluronic dermal glow for luxury cosmetics campaign.',
      },
      {
        title: 'High-Fashion Dramatic Wing',
        image: '/showcase/fashion-runway.jpg',
        caption: 'Sharp architectural eyeliner designed for runway stage lighting.',
      }
    ],
    awards: ['British Fashion Council MUA of the Year Shortlist', 'Vogue Beauty Awards Best Key Artist'],
    dayRateGuide: '£1,400 – £2,800 / Day',
    isVerified: true,
    isFeatured: true
  },
  {
    id: 'julian-vance',
    name: 'Julian Vance',
    handle: '@vance_coiffure',
    specialty: 'Editorial Session Hair Stylist & Sculptor',
    category: 'hair-stylists',
    location: 'Paris / London / Remote',
    avatar: '/avatars/avatar-julian.jpg',
    coverImage: '/showcase/hair-styling.jpg',
    shortBio: 'Architectural hair styling and couture session work for fashion weeks, lookbooks, and high-fashion advertising.',
    fullBio: 'Julian treats hair as an expressive sculptural medium. From slick high-gloss silhouettes to gravity-defying editorial shapes, his session work has appeared across major fashion publications worldwide.',
    availableFor: ['Runway Show Hair Direction', 'Advertising Campaigns', 'Bespoke Wig Design'],
    featuredProjectTitle: 'Sovereign Waves Runway Showcase',
    featuredProjectDescription: 'Directed hair styling for a 36-model Paris runway presentation featuring high-gloss geometric waves and metallic thread wefts.',
    deliverables: ['Backstage Team Direction (12 Assistants)', 'Custom Sculptural Hairpieces', 'On-Set Continuity Management'],
    skills: ['Session Hair Styling', 'Sculptural Coiffure', 'High-Gloss Waves', 'Custom Wig Crafting', 'Textured Hair Mastery'],
    gallery: [
      {
        title: 'Geometric Silk Waves',
        image: '/showcase/hair-styling.jpg',
        caption: 'High-gloss wave sculpture anchored with invisible combs.',
      },
      {
        title: 'Backstage Runway Cadence',
        image: '/showcase/editorial-photography.jpg',
        caption: 'Rapid session styling for runway line-up.',
      }
    ],
    awards: ['Session Stylist of the Year 2024', 'L’Oréal Professionnel Creative Trophy'],
    dayRateGuide: '€1,200 – €2,400 / Day',
    isVerified: true,
    isFeatured: true
  },
  {
    id: 'camille-renoir',
    name: 'Camille Renoir',
    handle: '@renoir_fashionphoto',
    specialty: 'High-Fashion & Lookbook Photographer',
    category: 'fashion-photo',
    location: 'Paris / Worldwide',
    avatar: '/avatars/avatar-camille.jpg',
    coverImage: '/showcase/editorial-photography.jpg',
    shortBio: 'Master of chiaroscuro lighting and cinematic fashion portraits. Documenting luxury fashion, models, and couture collections.',
    fullBio: 'With regular commissions across Paris, Milan, and Tokyo, Camille captures the emotional resonance between model, garment, and lighting. She shoots exclusively on Hasselblad medium format digital.',
    availableFor: ['Fashion Brand Campaigns', 'Model Comp Card Shoots', 'Editorial Lookbooks'],
    featuredProjectTitle: 'L’Ombre et La Forme Haute Editorial',
    featuredProjectDescription: 'A 30-look fashion editorial and lookbook campaign shot on location in Provence using natural twilight and directional studio strobes.',
    deliverables: ['Medium Format Raw Masters', 'Color Graded Editorial Spreads (40 Images)', 'Campaign Billboard Cropping'],
    skills: ['Medium Format Photography', 'Chiaroscuro Strobes', 'Fashion Lighting', 'Color Grading', 'Art Direction'],
    gallery: [
      {
        title: 'Twilight Studio Monolith',
        image: '/showcase/editorial-photography.jpg',
        caption: 'Model silhouette framed with razor-sharp tungsten key light.',
      },
      {
        title: 'Runway Backstage Perspective',
        image: '/showcase/fashion-runway.jpg',
        caption: 'Candid high-fashion model portrait captured moments before runway walk.',
      }
    ],
    awards: ['Prix de la Photographie Paris Winner', 'International Photography Awards Finalist'],
    dayRateGuide: '€2,200 – €4,000 / Day',
    isVerified: true,
    isFeatured: true
  },
  {
    id: 'tariq-al-sayed',
    name: 'Tariq Al-Sayed',
    handle: '@tariq.stylist',
    specialty: 'Wardrobe Stylist & Couture Costume Director',
    category: 'wardrobe-stylists',
    location: 'Dubai / London / Milan',
    avatar: '/avatars/avatar-tariq.jpg',
    coverImage: '/showcase/wardrobe-styling.jpg',
    shortBio: 'Curating luxury wardrobe styling, archival fashion sourcing, and red carpet looks for high-profile talent and models.',
    fullBio: 'Tariq bridges heritage Middle Eastern craftsmanship with contemporary European luxury fashion. He curates bespoke wardrobe palettes for editorial covers, music videos, and celebrity red carpets.',
    availableFor: ['Commercial Wardrobe Styling', 'Celebrity Red Carpet Sourcing', 'Brand Campaign Lookbooks'],
    featuredProjectTitle: 'Silk & Sand Luxury Resort Campaign',
    featuredProjectDescription: 'Complete wardrobe curation for a global luxury resort campaign featuring archival couture pieces from Parisian design houses.',
    deliverables: ['32 Curated Looks', 'On-Set Wardrobe Team', 'Accessories & Jewelry Vault Coordination'],
    skills: ['Haute Couture Sourcing', 'Editorial Draping', 'Wardrobe Direction', 'Color Harmony', 'Jewelry Styling'],
    gallery: [
      {
        title: 'Liquid Silk Draping',
        image: '/showcase/wardrobe-styling.jpg',
        caption: 'Hand-dyed indigo silk gown tailored for campaign hero shot.',
      },
      {
        title: 'Runway Look Assembly',
        image: '/showcase/fashion-runway.jpg',
        caption: 'Final fitting and jewelry pin-down before runway presentation.',
      }
    ],
    awards: ['Middle East Fashion Stylist of the Year', 'GQ Middle East Style Innovator'],
    dayRateGuide: '$1,500 – $3,000 / Day',
    isVerified: true,
    isFeatured: false
  },
  {
    id: 'sora-takahashi',
    name: 'Sora Takahashi',
    handle: '@sora.avantgarde',
    specialty: 'Avant-Garde Beauty & Runway Casting Director',
    category: 'creative-directors',
    location: 'Tokyo / Paris / London',
    avatar: '/avatars/avatar-sora.jpg',
    coverImage: '/showcase/casting-direction.jpg',
    shortBio: 'Directing runway model casting, conceptual beauty briefs, and avant-garde fashion campaigns across Asia and Europe.',
    fullBio: 'Sora operates at the intersection of modeling talent discovery and conceptual campaign vision. As a casting director, she has scouted faces for Tokyo and Paris Fashion Weeks, ensuring boundary-pushing inclusivity.',
    availableFor: ['Runway Model Casting', 'Campaign Creative Direction', 'Editorial Concept Development'],
    featuredProjectTitle: 'Neo-Genesis Tokyo Fashion Week Casting',
    featuredProjectDescription: 'Orchestrated full casting and beauty concept for 48 international models across three runway shows during Tokyo Fashion Week.',
    deliverables: ['Talent Scout Comp Cards', 'Runway Lineup Choreography', 'Model Booking Contracts'],
    skills: ['Model Scouting & Casting', 'Creative Direction', 'Runway Choreography', 'Fashion Week Production', 'Concept Development'],
    gallery: [
      {
        title: 'Casting Board Matrix',
        image: '/showcase/casting-direction.jpg',
        caption: 'Curated comp card matrix matching model characteristics to designer vision.',
      },
      {
        title: 'Editorial Glow Synthesis',
        image: '/showcase/beauty-makeup.jpg',
        caption: 'Collaborative beauty session aligning makeup artist and model look.',
      }
    ],
    awards: ['Tokyo Creative Talent Director Award', 'FWA Fashion Casting of the Year'],
    dayRateGuide: '$1,800 – $3,200 / Day',
    isVerified: true,
    isFeatured: false
  }
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'fp-1',
    title: 'Maison Lumière Haute Couture PFW',
    creator: 'Anya Laurent & Julian Vance',
    discipline: 'Runway Casting & High-Fashion Hair',
    year: '2025',
    description: 'An ethereal Paris Fashion Week runway show featuring 28 top international models, sculptural hair crowns, and couture silk ensembles.',
    impactMetric: '24.8M+',
    metricLabel: 'Global Fashion Week Impressions',
    image: '/showcase/fashion-runway.jpg',
    tags: ['Paris Fashion Week', 'Haute Couture', 'Model Casting', 'Session Hair']
  },
  {
    id: 'fp-2',
    title: 'Auric Glow Global Beauty Campaign',
    creator: 'Meera Varma & Camille Renoir',
    discipline: 'Beauty Direction & Editorial Photography',
    year: '2025',
    description: 'A worldwide luxury beauty and skincare campaign showcasing multi-dimensional glass-skin textures, gold accents, and medium-format portraits.',
    impactMetric: '99.8%',
    metricLabel: 'Brand Licensing Approval Rating',
    image: '/showcase/beauty-makeup.jpg',
    tags: ['Luxury Cosmetics', 'Key MUA', 'High-Res Skin', 'Campaign Shoot']
  },
  {
    id: 'fp-3',
    title: 'Velvet Nocturne Architectural Editorial',
    creator: 'Camille Renoir & Tariq Al-Sayed',
    discipline: 'Fashion Photography & Wardrobe Styling',
    year: '2024',
    description: 'A 40-page editorial spread shot during the blue hour across Mediterranean architectural landmarks, highlighting couture eveningwear.',
    impactMetric: '12 Covers',
    metricLabel: 'International Magazine Pickups',
    image: '/showcase/wardrobe-styling.jpg',
    tags: ['Archival Couture', 'Editorial Cover', 'Wardrobe Styling', 'Chiaroscuro']
  }
];

export const PLATFORM_PILLARS = [
  {
    step: '01',
    title: 'Build Your Comp Card & Beauty Book',
    subtitle: 'High-Definition Model & MUA Showcase',
    description: 'Create a stunning digital comp card and uncompressed 4K beauty portfolio. Display verified physical measurements, skin tones, tear sheets, and runway footage without social media compression.',
    features: ['Digital comp card with downloadable PDF', 'Verified height, measurements & skin tone specs', '4K uncompressed beauty & runway gallery'],
    icon: 'Sparkles'
  },
  {
    step: '02',
    title: 'Get Discovered by Top Brands & Agencies',
    subtitle: 'Curated Casting & Scout Visibility',
    description: 'Put your look directly in front of casting directors, luxury fashion houses, advertising agencies, and commercial photographers searching for specific talent.',
    features: ['Direct scout search by location, height, and style', 'Verified talent authenticity seal', 'Private casting call notifications'],
    icon: 'Compass'
  },
  {
    step: '03',
    title: 'Book Runway, Campaigns & Shoots',
    subtitle: 'Transparent Rates & Protected Bookings',
    description: 'Receive structured booking inquiries with clear shoot dates, call times, usage licensing, and travel buyouts. Zero platform deductions on your talent fees.',
    features: ['Clear usage rights & licensing agreements', 'Guaranteed milestone and shoot payouts', 'Direct brand-to-talent communication'],
    icon: 'Briefcase'
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Digital Comp Cards & 4K Books',
    description: 'Say goodbye to compressed Instagram grids. Display skin textures, makeup fidelity, and runway catwalks in uncompressed high definition.',
    icon: 'Feather'
  },
  {
    title: 'Verified Physical & Skill Specs',
    description: 'Casting directors get verified heights, measurements, skin tones, and specialty certifications—eliminating guesswork on shoot day.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Direct Casting & Brand Inquiries',
    description: 'Connect directly with luxury brands, fashion week producers, and beauty campaigns without losing 30-40% in traditional agency fees.',
    icon: 'Target'
  },
  {
    title: 'Transparent Licensing & Usage Rights',
    description: 'Every booking clarifies exact usage terms (Digital, Print, Worldwide Broadcast, Buyouts) so models and artists are properly compensated.',
    icon: 'Users'
  },
  {
    title: 'High-Caliber Fashion Network',
    description: 'Join a curated ecosystem of top runway models, celebrity MUAs, master hair sculptors, and award-winning fashion photographers.',
    icon: 'TrendingUp'
  },
  {
    title: 'Global Casting Reach',
    description: 'Be scouted and booked across major fashion capitals: Paris, Milan, New York, London, Tokyo, Dubai, and Mumbai.',
    icon: 'Globe'
  }
];
