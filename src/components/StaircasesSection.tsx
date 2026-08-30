import React from 'react';
import { STAIRCASES_SOLUTIONS } from '../data/solutionsData';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  FileText,
  Hammer
} from 'lucide-react';

interface StaircasesSectionProps {
  onOpenQuoteModal: (data?: any) => void;
}

export const StaircasesSection: React.FC<StaircasesSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="staircases" className="py-24 bg-[#070a0f] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5da832]/15 border border-[#5da832]/30 text-[#70c03b] text-xs font-bold uppercase tracking-widest">
            <Hammer className="w-3.5 h-3.5" />
            <span>Architectural & Structural Access</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered <span className="text-[#65a30d]">Staircase Solutions</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From rapid-erection factory pre-cast concrete flights to bespoke architectural floating 
            cantilever steps and heavy-duty industrial structural steel staircases.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {STAIRCASES_SOLUTIONS.map((staircase) => (
            <div
              key={staircase.id}
              className="rounded-2xl bg-[#141b26] border border-white/15 overflow-hidden flex flex-col justify-between shadow-2xl hover:border-[#70c03b]/60 transition-all duration-300 group"
            >
              {/* Image Banner */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <img
                  src={staircase.image}
                  alt={staircase.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-lg bg-[#070a0e]/85 backdrop-blur-md text-xs font-bold text-[#70c03b] border border-white/15">
                    {staircase.type}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#141b26] via-transparent to-transparent" />
              </div>

              {/* Body */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#70c03b] transition-colors">
                      {staircase.name}
                    </h3>
                    <p className="text-xs text-[#70c03b] font-semibold mt-1">
                      {staircase.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {staircase.description}
                  </p>

                  {/* Options List */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Engineering Configurations:
                    </div>
                    {staircase.options.map((opt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#70c03b] flex-shrink-0 mt-0.5" />
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="pt-3">
                    <div className="text-[11px] text-slate-400 font-semibold mb-1.5">
                      Ideal Applications:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {staircase.idealFor.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-slate-300 text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Custom drawings & load specs
                  </div>

                  <button
                    onClick={() => onOpenQuoteModal({ requiresStaircase: true, staircaseType: staircase.name })}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-lg shadow-[#5da832]/20 transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Quote This Staircase</span>
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
