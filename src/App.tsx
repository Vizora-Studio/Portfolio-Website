import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { PortfolioGallery } from './components/PortfolioGallery';
import { HowItWorks } from './components/HowItWorks';
import { BookingsSection } from './components/BookingsSection';
import { FeaturedWork } from './components/FeaturedWork';
import { WhyVizora } from './components/WhyVizora';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PortfolioModal } from './components/PortfolioModal';
import { BookingModal } from './components/BookingModal';
import { CreatorApplyModal } from './components/CreatorApplyModal';
import { CreatorPortfolio } from './types';

export const App: React.FC = () => {
  const [selectedCreator, setSelectedCreator] = useState<CreatorPortfolio | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingCreator, setBookingCreator] = useState<string | undefined>(undefined);
  const [isCreatorApplyOpen, setIsCreatorApplyOpen] = useState(false);

  const handleOpenBooking = (creatorName?: string) => {
    setBookingCreator(creatorName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingCreator(undefined);
  };

  const handleSelectCreator = (creator: CreatorPortfolio) => {
    setSelectedCreator(creator);
  };

  const handleCloseCreatorModal = () => {
    setSelectedCreator(null);
  };

  const handleBookFromCreatorModal = (creatorName: string) => {
    handleOpenBooking(creatorName);
  };

  return (
    <div className="relative min-h-screen bg-vizora-midnight text-slate-100 flex flex-col font-sans selection:bg-vizora-gold selection:text-vizora-midnight">
      {/* Persistent Translucent Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Section A: Cinematic Intro and Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Section B: The Vizora Vision (Editorial Warm Ivory Section) */}
        <Vision onOpenBooking={() => handleOpenBooking()} />

        {/* Section C: Explore Creative Portfolios (Interactive Gallery) */}
        <PortfolioGallery
          onSelectCreator={handleSelectCreator}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section D: How Vizora Works (3-Step Interactive Timeline) */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* Section E: Bookings and Collaborations (Scope Estimator & Workflow) */}
        <BookingsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section F: Featured Work (Editorial Case Studies Showcase) */}
        <FeaturedWork onOpenBooking={() => handleOpenBooking()} />

        {/* Section G: Why Vizora (Core Value Propositions) */}
        <WhyVizora onOpenBooking={() => handleOpenBooking()} />

        {/* Section H: Final Call To Action (Celestial Orbit Halo) */}
        <FinalCTA
          onOpenBooking={() => handleOpenBooking()}
          onOpenCreatorApply={() => setIsCreatorApplyOpen(true)}
        />
      </main>

      {/* Section I: Luxury Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenCreatorApply={() => setIsCreatorApplyOpen(true)}
      />

      {/* Modals & Interactive Drawers */}
      <PortfolioModal
        creator={selectedCreator}
        onClose={handleCloseCreatorModal}
        onBookCreator={handleBookFromCreatorModal}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedCreator={bookingCreator}
      />

      <CreatorApplyModal
        isOpen={isCreatorApplyOpen}
        onClose={() => setIsCreatorApplyOpen(false)}
      />
    </div>
  );
};

export default App;
