import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyWebsiteMatters } from './components/WhyWebsiteMatters';
import { ServicesSection } from './components/ServicesSection';
import { WhoWeBuildFor } from './components/WhoWeBuildFor';
import { FeaturedWork } from './components/FeaturedWork';
import { ProcessSection } from './components/ProcessSection';
import { WhyVizora } from './components/WhyVizora';
import { AboutVizora } from './components/AboutVizora';
import { FAQSection } from './components/FAQSection';
import { ProjectInquiryForm } from './components/ProjectInquiryForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ModelPortfolioDemo } from './demos/ModelPortfolioDemo';
import { MakeupArtistDemo } from './demos/MakeupArtistDemo';
import { PhotographerDemo } from './demos/PhotographerDemo';
import { BeautyStudioDemo } from './demos/BeautyStudioDemo';
import { DemoRouteId, InquiryPreselection } from './types';

function parseDemoRoute(pathname: string): DemoRouteId | null {
  const clean = pathname.replace(/\/+$/, '');
  if (clean === '/demos/model-portfolio') return 'model-portfolio';
  if (clean === '/demos/makeup-artist') return 'makeup-artist';
  if (clean === '/demos/photographer') return 'photographer';
  if (clean === '/demos/beauty-studio') return 'beauty-studio';
  return null;
}

export const App: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<DemoRouteId | null>(() =>
    parseDemoRoute(window.location.pathname)
  );
  const [inquiryPreselection, setInquiryPreselection] =
    useState<InquiryPreselection | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handlePopState = () => {
      setActiveDemo(parseDemoRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track active section while on homepage
  useEffect(() => {
    if (activeDemo) return;
    const sectionIds = ['hero', 'services', 'work', 'who-we-help', 'process', 'about'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeDemo]);

  const scrollToElement = useCallback((elementId: string) => {
    requestAnimationFrame(() => {
      const target = document.getElementById(elementId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, []);

  const handleNavigateSection = useCallback(
    (sectionId: string) => {
      if (activeDemo) {
        window.history.pushState({}, '', `/#${sectionId}`);
        setActiveDemo(null);
        setTimeout(() => scrollToElement(sectionId), 60);
      } else {
        window.history.replaceState({}, '', `/#${sectionId}`);
        scrollToElement(sectionId);
      }
    },
    [activeDemo, scrollToElement]
  );

  const handleStartProject = useCallback(
    (preselection?: InquiryPreselection) => {
      if (preselection) {
        setInquiryPreselection({ ...preselection });
      }
      if (activeDemo) {
        window.history.pushState({}, '', '/#inquiry');
        setActiveDemo(null);
        setTimeout(() => scrollToElement('inquiry'), 80);
      } else {
        window.history.replaceState({}, '', '/#inquiry');
        scrollToElement('inquiry');
      }
    },
    [activeDemo, scrollToElement]
  );

  const handleOpenDemo = useCallback((demoId: DemoRouteId) => {
    const nextPath = `/demos/${demoId}`;
    window.history.pushState({}, '', nextPath);
    setActiveDemo(demoId);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleBackToStudio = useCallback(() => {
    window.history.pushState({}, '', '/#work');
    setActiveDemo(null);
    setTimeout(() => scrollToElement('work'), 60);
  }, [scrollToElement]);

  // Render full profession-specific concept demo website if on /demos/* route
  if (activeDemo === 'model-portfolio') {
    return (
      <ModelPortfolioDemo
        onBackToStudio={handleBackToStudio}
        onSelectDemo={handleOpenDemo}
        onCreateSimilar={handleStartProject}
      />
    );
  }

  if (activeDemo === 'makeup-artist') {
    return (
      <MakeupArtistDemo
        onBackToStudio={handleBackToStudio}
        onSelectDemo={handleOpenDemo}
        onCreateSimilar={handleStartProject}
      />
    );
  }

  if (activeDemo === 'photographer') {
    return (
      <PhotographerDemo
        onBackToStudio={handleBackToStudio}
        onSelectDemo={handleOpenDemo}
        onCreateSimilar={handleStartProject}
      />
    );
  }

  if (activeDemo === 'beauty-studio') {
    return (
      <BeautyStudioDemo
        onBackToStudio={handleBackToStudio}
        onSelectDemo={handleOpenDemo}
        onCreateSimilar={handleStartProject}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-vizora-black text-white flex flex-col font-sans selection:bg-vizora-blue selection:text-white">
      <Navbar
        onNavigateSection={handleNavigateSection}
        onStartProject={handleStartProject}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Section 6: Hero — The Signature Experience */}
        <Hero
          onStartProject={handleStartProject}
          onExploreWork={() => handleNavigateSection('work')}
          onOpenDemo={handleOpenDemo}
        />

        {/* Section 7: Why Your Own Website Matters */}
        <WhyWebsiteMatters onStartProject={handleStartProject} />

        {/* Section 8: Our Services */}
        <ServicesSection
          onStartProject={handleStartProject}
          onOpenDemo={handleOpenDemo}
        />

        {/* Section 9: Who We Build For */}
        <WhoWeBuildFor
          onStartProject={handleStartProject}
          onOpenDemo={handleOpenDemo}
        />

        {/* Section 10: Featured Work — 4 Navigable Concept Demo Websites */}
        <FeaturedWork
          onOpenDemo={handleOpenDemo}
          onStartProject={handleStartProject}
        />

        {/* Section 11: Our Process */}
        <ProcessSection onStartProject={handleStartProject} />

        {/* Section 12: Why Vizora */}
        <WhyVizora />

        {/* Section 13: About Vizora */}
        <AboutVizora onStartProject={handleStartProject} />

        {/* Section 14: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 15: Project Inquiry Form */}
        <ProjectInquiryForm preselection={inquiryPreselection} />

        {/* Section 16: Final CTA */}
        <FinalCTA
          onStartProject={handleStartProject}
          onExploreWork={() => handleNavigateSection('work')}
        />
      </main>

      {/* Section 16: Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onStartProject={handleStartProject}
        onOpenDemo={handleOpenDemo}
      />
    </div>
  );
};

export default App;
