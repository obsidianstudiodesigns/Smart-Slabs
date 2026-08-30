import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SlabCalculator } from './components/SlabCalculator';
import { SlabSolutions } from './components/SlabSolutions';
import { StaircasesSection } from './components/StaircasesSection';
import { TechnicalSpecsModal } from './components/TechnicalSpecsModal';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { QuoteFormModal } from './components/QuoteFormModal';
import { SlabSolution } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefillData, setQuotePrefillData] = useState<any>(null);
  const [selectedSolutionForSpecs, setSelectedSolutionForSpecs] = useState<SlabSolution | null>(null);

  const handleOpenQuoteModal = (prefillData?: any) => {
    setQuotePrefillData(prefillData || null);
    setQuoteModalOpen(true);
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans selection:bg-[#5da832] selection:text-white">
      {/* Navigation */}
      <Navbar 
        onOpenQuoteModal={handleOpenQuoteModal} 
        onOpenCalculator={handleOpenCalculator} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Photorealistic Concrete Slabs Wallpaper */}
        <Hero 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
          onOpenCalculator={handleOpenCalculator} 
        />

        {/* Interactive Slab Estimator & Specifier */}
        <SlabCalculator 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        {/* Core Slab Solutions Breakdown */}
        <SlabSolutions 
          onSelectSolution={(sol) => setSelectedSolutionForSpecs(sol)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Staircases Section (Concrete Pre-Cast / Insitu & Steel) */}
        <StaircasesSection 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        {/* Decision Comparison Matrix */}
        <ComparisonMatrix 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        {/* Featured Projects & Installations */}
        <ProjectsGallery 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        {/* Engineering 5-Step Process */}
        <ProcessSection 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
        />

        {/* Contact, Location & FAQs */}
        <ContactSection 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenQuoteModal={() => handleOpenQuoteModal()} 
      />

      {/* Floating Action Buttons */}
      <FloatingContact 
        onOpenQuoteModal={() => handleOpenQuoteModal()} 
      />

      {/* Modals */}
      <TechnicalSpecsModal
        solution={selectedSolutionForSpecs}
        onClose={() => setSelectedSolutionForSpecs(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <QuoteFormModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={quotePrefillData}
      />
    </div>
  );
}
