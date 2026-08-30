import React, { useState } from 'react';
import { SLAB_SOLUTIONS } from '../data/solutionsData';
import { SlabSolution } from '../types';
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Flame, 
  Maximize2, 
  Weight, 
  Clock, 
  FileText,
  Sparkles,
  Info
} from 'lucide-react';

interface SlabSolutionsProps {
  onSelectSolution: (solution: SlabSolution) => void;
  onOpenQuoteModal: (data?: any) => void;
}

export const SlabSolutions: React.FC<SlabSolutionsProps> = ({ onSelectSolution, onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <section id="slab-solutions" className="py-24 bg-[#0b0f17] relative overflow-hidden">
      {/* Background Decor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5da832]/15 border border-[#5da832]/30 text-[#70c03b] text-xs font-bold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>Precision Suspended Flooring</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Slab <span className="text-[#65a30d]">Solutions</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every system is engineered to South African SANS standards, custom manufactured in Bloemfontein, 
              and delivered with full structural design certificates and layout drawings.
            </p>
          </div>

          {/* Direct CTA */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-lg shadow-[#5da832]/25 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Request Comparative Quote</span>
            </button>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SLAB_SOLUTIONS.map((solution) => (
            <div
              key={solution.id}
              className="group rounded-2xl bg-[#141b26] border border-white/10 hover:border-[#70c03b]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#5da832]/10 hover:-translate-y-1"
            >
              {/* Product Visual Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={solution.image}
                  alt={solution.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                
                {/* Category & Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-[#070a0e]/80 backdrop-blur-md text-[10px] uppercase tracking-wider font-bold text-[#70c03b] border border-white/10">
                    SANS 10400
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#5da832] text-white text-[10px] font-bold shadow-md">
                    {solution.maxSpan}
                  </span>
                </div>

                {/* Bottom Title Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141b26] via-transparent to-transparent" />
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  
                  {/* Name and Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#70c03b] transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-xs text-[#70c03b] font-semibold mt-0.5">
                      {solution.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Block Options if Applicable (Crucial from flyer!) */}
                  {solution.blockOptions && (
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Available Filler Options:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {solution.blockOptions.map((opt, i) => (
                          <span
                            key={i}
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              opt.includes('Polystyrene')
                                ? 'bg-[#5da832]/20 text-[#70c03b] border border-[#5da832]/30'
                                : 'bg-slate-800 text-slate-200 border border-white/10'
                            }`}
                          >
                            ✓ {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Highlights Checklist */}
                  <div className="space-y-1.5 pt-2">
                    {solution.keyFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#70c03b] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Metric Pills */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-400 block text-[9px] uppercase">Speed</span>
                    <span className="text-slate-200 font-semibold">{solution.installationSpeed.split(' ')[0]}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-400 block text-[9px] uppercase">Propping</span>
                    <span className="text-slate-200 font-semibold">{solution.proppingRequirement.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => onSelectSolution(solution)}
                    className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5 text-[#70c03b]" />
                    <span>Tech Specs</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal({ slabSolution: solution.id })}
                    className="py-2.5 px-3 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-md shadow-[#5da832]/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
