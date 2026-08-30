import React from 'react';
import { COMPANY_DETAILS, SLAB_SOLUTIONS } from '../data/solutionsData';
import heroWallpaper from '../assets/images/hero_concrete_slabs_1788101867899.jpg';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Shield, 
  CheckCircle2, 
  Calculator, 
  ArrowRight, 
  MessageSquare,
  Layers,
  Sparkles,
  Download,
  Building,
  Award
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onOpenCalculator }) => {
  const slabHighlights = [
    'Pre-Stressed Hollowcore Slabs',
    'Lattice Rib & Block (Hollow & EPS Blocks)',
    'Pre-Stressed Rib & Block Slabs',
    'Custom Insitu Concrete Slabs',
    'Windeck Composite Slabs',
    'Pre-Cast & Insitu Concrete Staircases',
    'Structural Steel Staircases'
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070a0f]">
      {/* Photorealistic Hero Wallpaper Background with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroWallpaper}
          alt="High Precision Pre-stressed Suspended Concrete Slabs"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-75 contrast-110 transition-transform duration-1000"
        />
        {/* Layered cinematic overlays: dark radial focus, industrial slate tones & brand green ambient light */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a0e]/95 via-[#0b0f17]/85 to-[#0b0f17]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f] via-transparent to-[#070a0e]/60" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#5da832]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy & Executive Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#70c03b] animate-pulse" />
              <span className="text-[#70c03b] font-bold">Bloemfontein & Central SA</span>
              <span className="text-slate-400">|</span>
              <span>148 Fritz Stockenstrom Str., New East End</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
                Engineered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  Suspended Concrete
                </span>{' '}
                <span className="text-[#65a30d] font-black inline-block underline decoration-[#5da832]/40 decoration-wavy decoration-2">
                  Slabs & Stairs
                </span>
              </h1>
              
              <div className="flex items-center gap-3 pt-1">
                <div className="h-6 w-1 bg-[#5da832] rounded-full" />
                <p className="text-lg sm:text-xl font-bold text-slate-200 tracking-wide">
                  Bevan Williams <span className="text-slate-400 font-normal text-sm sm:text-base">— Structural Technical Specialist</span>
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Specialized manufacturing, engineering supply, and on-site crane placement of 
              <strong className="text-white font-semibold"> Pre-Stressed Hollowcore</strong>, 
              <strong className="text-white font-semibold"> Lattice & Pre-Stressed Rib & Block</strong> (Concrete & Polystyrene), 
              <strong className="text-white font-semibold"> Insitu Slabs</strong>, and 
              <strong className="text-white font-semibold"> Pre-Cast Concrete & Steel Staircases</strong>.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-sm font-bold shadow-xl shadow-[#5da832]/30 transition-all transform hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <span>Request Free Slab Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold backdrop-blur-sm transition-all hover:border-[#70c03b]/50"
              >
                <Calculator className="w-4 h-4 text-[#70c03b]" />
                <span>Instant Slab Calculator</span>
              </button>

              <a
                href={COMPANY_DETAILS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#4ade80] border border-[#25D366]/40 text-sm font-semibold backdrop-blur-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Direct WhatsApp</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#70c03b] flex-shrink-0" />
                <span>SANS 10400 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#70c03b] flex-shrink-0" />
                <span>Full Crane Erection</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-[#70c03b] flex-shrink-0" />
                <span>High-Strength 40+ MPa</span>
              </div>
            </div>
          </div>

          {/* Right Card: Direct Technical Card Matching Flyer Style */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#161f2c]/90 to-[#0d121c]/95 border border-white/15 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#70c03b] font-bold">
                    Official Solutions
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Our Slab & Stair Solutions
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#5da832]/20 border border-[#5da832]/40 flex items-center justify-center text-[#70c03b]">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              {/* Checklist Items from Flyer */}
              <div className="space-y-3 mb-6">
                {slabHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded bg-[#5da832]/20 border border-[#5da832]/40 flex items-center justify-center text-[#70c03b] flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Flyer Contact Box */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Direct Line (Bevan):</span>
                  <a 
                    href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="text-white font-bold hover:text-[#70c03b] transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#70c03b]" />
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Direct Email:</span>
                  <a 
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-white font-semibold hover:text-[#70c03b] transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#70c03b]" />
                    {COMPANY_DETAILS.email}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Yard & Offices:</span>
                  <span className="text-slate-200 font-medium text-right">
                    148 Fritz Stockenstrom Str, New East End
                  </span>
                </div>
              </div>

              {/* Instant Action */}
              <div className="mt-5">
                <a
                  href="#slab-solutions"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold border border-white/15 transition-all text-center"
                >
                  <span>Explore Technical Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#70c03b]" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
