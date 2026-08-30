import React, { useState } from 'react';
import { 
  Scale, 
  Check, 
  X, 
  Flame, 
  Clock, 
  Weight, 
  Layers, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ComparisonMatrixProps {
  onOpenQuoteModal: (data?: any) => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ onOpenQuoteModal }) => {
  const comparisonData = [
    {
      system: 'Pre-Stressed Hollowcore',
      span: 'Up to 11.5 m (Unpropped)',
      speed: '⚡ 300 - 800 m²/day (Fastest)',
      weight: '220 - 320 kg/m²',
      propping: 'Zero (Self-supporting)',
      thermal: 'Standard (R 0.35)',
      fire: '120 - 240 Mins',
      craneReq: 'Yes (Crane placed)',
      bestFor: 'Large spans, commercial buildings & fast-track multi-storey',
    },
    {
      system: 'Lattice Rib & Block (Polystyrene EPS)',
      span: 'Up to 7.5 m',
      speed: '80 - 150 m²/day',
      weight: '🌟 160 kg/m² (35% Lighter)',
      propping: 'Temporary (1.6m centres)',
      thermal: '🔥 High (R 1.85+)',
      fire: '90 - 120 Mins',
      craneReq: 'No (Manual carry friendly)',
      bestFor: 'Residential homes, high insulation, restricted crane access',
    },
    {
      system: 'Lattice Rib & Block (Concrete Hollow)',
      span: 'Up to 7.5 m',
      speed: '80 - 120 m²/day',
      weight: '240 kg/m²',
      propping: 'Temporary (1.5m centres)',
      thermal: 'Standard (R 0.45)',
      fire: '90 - 120 Mins',
      craneReq: 'No (Manual carry)',
      bestFor: 'Standard residential double-storeys & additions',
    },
    {
      system: 'Pre-Stressed Rib & Block',
      span: 'Up to 8.5 m',
      speed: '100 - 200 m²/day',
      weight: '175 - 250 kg/m²',
      propping: 'Reduced (2.0m centres)',
      thermal: 'Medium to High (EPS option)',
      fire: '90 - 120 Mins',
      craneReq: 'No / Light crane optional',
      bestFor: 'Longer spans with minimal propping lines',
    },
    {
      system: 'Custom Insitu Concrete',
      span: 'Unlimited custom specs',
      speed: 'Custom (28-day cure)',
      weight: '320 - 450 kg/m² (Heaviest)',
      propping: 'Full falsework required',
      thermal: 'Standard (R 0.30)',
      fire: '120 - 240 Mins',
      craneReq: 'Concrete pump truck',
      bestFor: 'Curved walls, cantilevered decks, swimming pools & heavy machinery',
    },
    {
      system: 'Windeck Composite Slabs',
      span: 'Up to 6.0 m',
      speed: '300 - 500 m²/day',
      weight: '160 - 220 kg/m²',
      propping: 'Single central prop line',
      thermal: 'Standard (R 0.40)',
      fire: '90 - 120 Mins',
      craneReq: 'Minimal',
      bestFor: 'Steel-framed structures, commercial mezzanine expansions',
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-[#0d121c] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5da832]/15 border border-[#5da832]/30 text-[#70c03b] text-xs font-bold uppercase tracking-widest">
            <Scale className="w-3.5 h-3.5" />
            <span>Engineering Decision Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Compare Our <span className="text-[#65a30d]">Slab Systems</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Need help deciding between Pre-Stressed Hollowcore, Polystyrene EPS Rib & Block, 
            or In-situ slabs? Compare all structural specifications below.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="bg-[#141b26] border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0e141f] border-b border-white/15 text-slate-300">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-white">Slab System</th>
                  <th className="p-4 sm:p-5 font-semibold">Max Span</th>
                  <th className="p-4 sm:p-5 font-semibold">Install Speed</th>
                  <th className="p-4 sm:p-5 font-semibold">Self-Weight</th>
                  <th className="p-4 sm:p-5 font-semibold">Propping Lines</th>
                  <th className="p-4 sm:p-5 font-semibold">Thermal R-Value</th>
                  <th className="p-4 sm:p-5 font-semibold">Fire Rating</th>
                  <th className="p-4 sm:p-5 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-200">
                {comparisonData.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-white/[0.03] transition-colors"
                  >
                    <td className="p-4 sm:p-5">
                      <div className="font-bold text-white text-sm">{row.system}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 max-w-xs">{row.bestFor}</div>
                    </td>
                    <td className="p-4 sm:p-5 font-semibold text-slate-100">{row.span}</td>
                    <td className="p-4 sm:p-5">{row.speed}</td>
                    <td className="p-4 sm:p-5">
                      <span className={row.weight.includes('Lighter') ? 'text-[#70c03b] font-bold' : ''}>
                        {row.weight}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5">{row.propping}</td>
                    <td className="p-4 sm:p-5">
                      <span className={row.thermal.includes('High') ? 'text-[#70c03b] font-bold' : ''}>
                        {row.thermal}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5">{row.fire}</td>
                    <td className="p-4 sm:p-5 text-right">
                      <button
                        onClick={() => onOpenQuoteModal({ additionalNotes: `Inquiry for ${row.system}` })}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold transition-all shadow-sm"
                      >
                        <span>Quote</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Callout */}
          <div className="p-4 sm:p-6 bg-[#0e141f] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#70c03b]" />
              <span>All systems fully designed to SANS 10400 / SANS 10100 structural codes.</span>
            </div>

            <div className="text-slate-400">
              Need on-site engineering advice in Bloemfontein? <strong className="text-white">Call Bevan Williams at 082 418 5877</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
