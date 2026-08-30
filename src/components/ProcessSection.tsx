import React from 'react';
import { WORK_PROCESS_STEPS } from '../data/solutionsData';
import { 
  FileCheck, 
  DraftingCompass, 
  Factory, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenQuoteModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuoteModal }) => {
  const stepIcons = [
    <FileCheck className="w-5 h-5 text-[#70c03b]" />,
    <DraftingCompass className="w-5 h-5 text-[#70c03b]" />,
    <Factory className="w-5 h-5 text-[#70c03b]" />,
    <Truck className="w-5 h-5 text-[#70c03b]" />,
    <ShieldCheck className="w-5 h-5 text-[#70c03b]" />
  ];

  return (
    <section id="process" className="py-24 bg-[#0d121c] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5da832]/15 border border-[#5da832]/30 text-[#70c03b] text-xs font-bold uppercase tracking-widest">
            <DraftingCompass className="w-3.5 h-3.5" />
            <span>Seamless Project Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We <span className="text-[#65a30d]">Work With You</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From initial architectural plan take-off to final concrete topping and SANS engineer 
            certification sign-off, our team ensures seamless delivery and maximum structural precision.
          </p>
        </div>

        {/* 5 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {WORK_PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-[#141b26] border border-white/10 p-6 flex flex-col justify-between hover:border-[#70c03b]/60 transition-all duration-300 group shadow-lg hover:-translate-y-1"
            >
              {/* Step Number Top Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#5da832]/20 border border-[#5da832]/40 flex items-center justify-center">
                  {stepIcons[idx]}
                </div>
                <span className="text-2xl font-black text-slate-600 group-hover:text-[#70c03b] transition-colors font-mono">
                  {step.step}
                </span>
              </div>

              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white group-hover:text-[#70c03b] transition-colors leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>Timeline:</span>
                <span className="text-[#70c03b] font-bold">{step.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#162130] via-[#101722] to-[#162130] border border-[#5da832]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ready to submit your architectural plans?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Email your PDF/DWG files to <strong className="text-white">slabs@smartslabs.co.za</strong> or upload them in our quote form for a 24-hour turnaround.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-lg shadow-[#5da832]/30 transition-all"
          >
            <span>Upload Plans for Free Take-Off</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
