import React from 'react';
import { SlabSolution } from '../types';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Scale, 
  Clock, 
  FileText, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface TechnicalSpecsModalProps {
  solution: SlabSolution | null;
  onClose: () => void;
  onOpenQuoteModal: (data?: any) => void;
}

export const TechnicalSpecsModal: React.FC<TechnicalSpecsModalProps> = ({
  solution,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#141b26] border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="relative p-6 bg-gradient-to-r from-[#0e141e] to-[#161d2b] border-b border-white/10 flex items-start justify-between">
          <div>
            <span className="px-2.5 py-1 rounded-md bg-[#5da832]/20 border border-[#5da832]/40 text-[#70c03b] text-xs font-bold uppercase tracking-wider">
              Technical Specification Sheet
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-2">
              {solution.name}
            </h3>
            <p className="text-xs text-[#70c03b] font-medium mt-0.5">
              {solution.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              System Overview
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {solution.description}
            </p>
          </div>

          {/* Core Engineered Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">Max Span</span>
              <span className="text-sm font-bold text-white">{solution.maxSpan}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">Installation Rate</span>
              <span className="text-sm font-bold text-white">{solution.installationSpeed}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">Propping Required</span>
              <span className="text-sm font-bold text-white">{solution.proppingRequirement}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">Fire Resistance</span>
              <span className="text-sm font-bold text-[#70c03b]">{solution.fireRating}</span>
            </div>
          </div>

          {/* Deep Technical Parameters */}
          <div className="p-5 rounded-xl bg-black/30 border border-white/10 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#70c03b]">
              Structural & Material Standards (SANS Compliance)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Concrete Strength Grade:</span>
                <span className="font-semibold text-white">{solution.technicalDetails.concreteGrade}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Steel Reinforcement / Prestressing:</span>
                <span className="font-semibold text-white">{solution.technicalDetails.reinforcement}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Cast In-situ Topping:</span>
                <span className="font-semibold text-white">{solution.technicalDetails.toppingThickness}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Acoustic Sound Attenuation:</span>
                <span className="font-semibold text-white">{solution.technicalDetails.soundInsulation}</span>
              </div>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Engineering Advantages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {solution.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#70c03b] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Applications */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Recommended Building Applications
            </h4>
            <div className="flex flex-wrap gap-2">
              {solution.idealFor.map((app, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200 font-medium"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#0e141e] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Engineered in Bloemfontein • SANS 10400 Certified
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-semibold"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal({ slabSolution: solution.id });
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-lg shadow-[#5da832]/30 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Quote This System</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
