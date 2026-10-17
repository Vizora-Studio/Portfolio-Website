import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { ServicesSection } from './components/ServicesSection';
import { WhoWeBuildFor } from './components/WhoWeBuildFor';
import { WhyVizora } from './components/WhyVizora';
import { ProcessSection } from './components/ProcessSection';
import { AboutVizora } from './components/AboutVizora';
import { FAQSection } from './components/FAQSection';
import { ProjectInquiryForm } from './components/ProjectInquiryForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ModelPortfolioDemo } from './demos/ModelPortfolioDemo';
import { MakeupArtistDemo } from './demos/MakeupArtistDemo';
import { PhotographerDemo } from './demos/PhotographerDemo';
import { BeautyStudioDemo } from './demos/BeautyStudioDemo';
import { DemoRouteId, InquiryPreselection, PageRouteId } from './types';

function parseDemoRoute(pathname: string): DemoRouteId | null {
  const clean = pathname.replace(/\/+$/, '');
  if (clean === '/demos/model-portfolio') return 'model-portfolio';
  if (clean === '/demos/makeup-artist') return 'makeup-artist';
  if (clean === '/demos/photographer') return 'photographer';
  if (clean === '/demos/beauty-studio') return 'beauty-studio';
  return null;
}

function parsePageRoute(pathname: string): PageRouteId {
  const clean = pathname.replace(/\/+$/, '');
  if (clean === '/services') return 'services';
  if (clean === '/work') return 'work';
  if (clean === '/who-we-help') return 'who-we-help';
  if (clean === '/process') return 'process';
  if (clean === '/about') return 'about';
  if (clean === '/start-project') return 'start-project';
  return 'home';
}

export const App: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<DemoRouteId | null>(() =>
    parseDemoRoute(window.location.pathname)
  );
  const [activePage, setActivePage] = useState<PageRouteId>(() =>
    parsePageRoute(window.location.pathname)
  );
  const [inquiryPreselection, setInquiryPreselection] =
    useState<InquiryPreselection | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handlePopState = () => {
      setActiveDemo(parseDemoRoute(window.location.pathname));
      setActivePage(parsePageRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track active section while on homepage
  useEffect(() => {
    if (activeDemo || activePage !== 'home') return;
    const sectionIds = [
      'hero',
      'work',
      'services',
      'who-we-help',
      'why-vizora',
      'process',
      'about',
      'inquiry',
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;
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
  }, [activeDemo, activePage]);

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
      if (activeDemo || activePage !== 'home') {
        window.history.pushState({}, '', `/#${sectionId}`);
        setActiveDemo(null);
        setActivePage('home');
        setTimeout(() => scrollToElement(sectionId), 60);
      } else {
        window.history.replaceState({}, '', `/#${sectionId}`);
        scrollToElement(sectionId);
      }
    },
    [activeDemo, activePage, scrollToElement]
  );

  const handleStartProject = useCallback(
    (preselection?: InquiryPreselection) => {
      if (preselection) {
        setInquiryPreselection({ ...preselection });
      }
      if (activeDemo || activePage !== 'home') {
        window.history.pushState({}, '', '/#inquiry');
        setActiveDemo(null);
        setActivePage('home');
        setTimeout(() => scrollToElement('inquiry'), 80);
      } else {
        window.history.replaceState({}, '', '/#inquiry');
        scrollToElement('inquiry');
      }
    },
    [activeDemo, activePage, scrollToElement]
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
    setActivePage('home');
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
    <div className="relative min-h-screen bg-[#F5EBDD] text-[#211C19] flex flex-col font-sans selection:bg-[#C99A52]/30 selection:text-[#211C19]">
      <Navbar
        onNavigateSection={handleNavigateSection}
        onStartProject={handleStartProject}
        activeSection={activeSection}
        activePage={activePage}
      />

      <main className="flex-1">
        {activePage !== 'home' ? (
          <div className="pt-28">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 pb-4">
              <button
                type="button"
                onClick={() => handleNavigateSection('hero')}
                className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#9A6B28] hover:text-[#211C19] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Full Studio Experience</span>
              </button>
            </div>
            {activePage === 'work' && (
              <FeaturedWork
                onOpenDemo={handleOpenDemo}
                onStartProject={handleStartProject}
              />
            )}
            {activePage === 'services' && (
              <ServicesSection
                onStartProject={handleStartProject}
                onOpenDemo={handleOpenDemo}
              />
            )}
            {activePage === 'who-we-help' && (
              <WhoWeBuildFor
                onStartProject={handleStartProject}
                onOpenDemo={handleOpenDemo}
              />
            )}
            {activePage === 'process' && (
              <>
                <ProcessSection onStartProject={handleStartProject} />
                <FAQSection />
              </>
            )}
            {activePage === 'about' && (
              <>
                <AboutVizora onStartProject={handleStartProject} />
                <WhyVizora />
              </>
            )}
            <ProjectInquiryForm preselection={inquiryPreselection} />
            <FinalCTA
              onStartProject={handleStartProject}
              onExploreWork={() => handleNavigateSection('work')}
            />
          </div>
        ) : (
          <>
            {/* Section 01: Hero — The Editorial Showcase */}
            <Hero
              onStartProject={handleStartProject}
              onExploreWork={() => handleNavigateSection('work')}
              onOpenDemo={handleOpenDemo}
            />

            {/* Section 02: Featured Portfolio — Selected Works */}
            <FeaturedWork
              onOpenDemo={handleOpenDemo}
              onStartProject={handleStartProject}
            />

            {/* Section 03: Services — Crafted Digital Offerings */}
            <ServicesSection
              onStartProject={handleStartProject}
              onOpenDemo={handleOpenDemo}
            />

            {/* Section 04: Who We Help — Industry Showcase */}
            <WhoWeBuildFor
              onStartProject={handleStartProject}
              onOpenDemo={handleOpenDemo}
            />

            {/* Section 05: Why Vizora — The Studio Difference */}
            <WhyVizora />

            {/* Section 06: Our Process — Calm, Clear, Collaborative */}
            <ProcessSection onStartProject={handleStartProject} />

            {/* Section 07: Studio Introduction — About Vizora */}
            <AboutVizora onStartProject={handleStartProject} />

            {/* Frequently Asked Questions */}
            <FAQSection />

            {/* Start Your Project Inquiry Form */}
            <ProjectInquiryForm preselection={inquiryPreselection} />

            {/* Section 08: Final Project Invitation */}
            <FinalCTA
              onStartProject={handleStartProject}
              onExploreWork={() => handleNavigateSection('work')}
            />
          </>
        )}
      </main>

      {/* Section 09: Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onStartProject={handleStartProject}
        onOpenDemo={handleOpenDemo}
      />
    </div>
  );
};

export default App;
