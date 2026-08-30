import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/solutionsData';
import { 
  Calculator, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle, 
  FileText, 
  Zap, 
  ShieldCheck, 
  Info,
  Scale,
  Clock,
  Home
} from 'lucide-react';

interface SlabCalculatorProps {
  onOpenQuoteModal: (data?: any) => void;
}

export const SlabCalculator: React.FC<SlabCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [slabType, setSlabType] = useState<string>('lattice-eps');
  const [length, setLength] = useState<number>(12);
  const [width, setWidth] = useState<number>(8);
  const [floorLevel, setFloorLevel] = useState<string>('First Floor (Suspended)');
  const [includeStairs, setIncludeStairs] = useState<boolean>(false);
  const [stairType, setStairType] = useState<string>('Concrete Pre-Cast Flight');

  const area = Math.max(1, Math.round(length * width * 10) / 10);

  // Structural parameters based on type
  const getStructuralMetrics = () => {
    switch (slabType) {
      case 'hollowcore':
        return {
          name: 'Pre-Stressed Hollowcore Slabs',
          toppingThickness: '60 mm structural topping',
          weightPerM2: 260, // kg/m2
          propping: 'None (Self-supporting unpropped)',
          speedM2PerDay: 400,
          thermalR: 'R 0.35 (Standard)',
          recommendedFor: 'Maximum speed & long open spans (up to 11.5m)',
          rateRange: { min: 650, max: 920 }, // ZAR / m2 estimate range
        };
      case 'lattice-eps':
        return {
          name: 'Lattice Rib & Block (Polystyrene EPS Blocks)',
          toppingThickness: '55 mm topping with Ref 100 mesh',
          weightPerM2: 165, // 35% lighter!
          propping: 'Temporary props at 1.6m centres',
          speedM2PerDay: 120,
          thermalR: 'R 1.85 (High Thermal Insulation)',
          recommendedFor: 'Ultra-lightweight, high insulation, easy manual carry',
          rateRange: { min: 520, max: 740 },
        };
      case 'lattice-concrete':
        return {
          name: 'Lattice Rib & Block (Concrete Hollow Blocks)',
          toppingThickness: '55 mm topping with Ref 100 mesh',
          weightPerM2: 245,
          propping: 'Temporary props at 1.5m centres',
          speedM2PerDay: 100,
          thermalR: 'R 0.45 (Standard)',
          recommendedFor: 'Heavy load capacity, standard residential suspended floors',
          rateRange: { min: 480, max: 690 },
        };
      case 'prestressed-eps':
        return {
          name: 'Pre-Stressed Rib & Block (Polystyrene EPS)',
          toppingThickness: '50 mm topping with welded mesh',
          weightPerM2: 175,
          propping: 'Reduced props at 2.0m centres',
          speedM2PerDay: 150,
          thermalR: 'R 1.80 (High Thermal Insulation)',
          recommendedFor: 'Reduced propping, long spans with high insulation',
          rateRange: { min: 560, max: 790 },
        };
      case 'prestressed-concrete':
        return {
          name: 'Pre-Stressed Rib & Block (Concrete Hollow Blocks)',
          toppingThickness: '55 mm topping with welded mesh',
          weightPerM2: 255,
          propping: 'Reduced props at 1.8m centres',
          speedM2PerDay: 130,
          thermalR: 'R 0.45',
          recommendedFor: 'High load residential and commercial floors',
          rateRange: { min: 530, max: 750 },
        };
      case 'insitu':
        return {
          name: 'Custom Insitu Concrete Slab',
          toppingThickness: '180mm - 250mm monolithic pour',
          weightPerM2: 380,
          propping: 'Full falsework shuttering support (28-day cure)',
          speedM2PerDay: 40,
          thermalR: 'R 0.30',
          recommendedFor: 'Curved walls, cantilevers, swimming pools & heavy machinery',
          rateRange: { min: 850, max: 1350 },
        };
      case 'windeck':
        return {
          name: 'Windeck Composite Deck Slabs',
          toppingThickness: '65 mm above ribs',
          weightPerM2: 190,
          propping: 'Single prop line during pour',
          speedM2PerDay: 350,
          thermalR: 'R 0.40',
          recommendedFor: 'Multi-storey commercial & steel frame buildings',
          rateRange: { min: 620, max: 880 },
        };
      default:
        return {
          name: 'Suspended Concrete Slab',
          toppingThickness: '55 mm',
          weightPerM2: 220,
          propping: 'Standard',
          speedM2PerDay: 120,
          thermalR: 'Standard',
          recommendedFor: 'Suspended flooring',
          rateRange: { min: 520, max: 750 },
        };
    }
  };

  const metrics = getStructuralMetrics();
  const totalWeightTonnes = Math.round((area * metrics.weightPerM2) / 100) / 10;
  const estimatedDays = Math.max(1, Math.ceil(area / metrics.speedM2PerDay));
  const estimatedMinCost = Math.round((area * metrics.rateRange.min) / 100) * 100;
  const estimatedMaxCost = Math.round((area * metrics.rateRange.max) / 100) * 100;

  // WhatsApp pre-formatted message
  const whatsappEstimateText = encodeURIComponent(
    `Hello Bevan (Smart Slabs),\n\nI used your online Slab Estimator for my project in Bloemfontein / Free State:\n- Slab Solution: ${metrics.name}\n- Dimensions: ${length}m x ${width}m (${area} m²)\n- Floor Level: ${floorLevel}\n- Staircase: ${includeStairs ? stairType : 'None'}\n- Estimated Weight: ~${totalWeightTonnes} Tonnes\n\nPlease provide an official quotation and layout engineering drawings.`
  );

  const handleProceedToQuote = () => {
    onOpenQuoteModal({
      slabSolution: slabType,
      estimatedArea: area,
      floorLevel,
      requiresStaircase: includeStairs,
      staircaseType: includeStairs ? stairType : '',
      additionalNotes: `Calculated dimensions: ${length}m x ${width}m = ${area} m² (${metrics.name})`,
    });
  };

  return (
    <section id="calculator" className="py-20 bg-[#0d1117] border-y border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#5da832]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5da832]/15 border border-[#5da832]/30 text-[#70c03b] text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Engineering Tool</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Suspended Slab <span className="text-[#65a30d]">Estimator & Specifier</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Select your preferred slab system, enter your site dimensions, and get instant 
            engineered weight specs, propping guidelines, and approximate budget estimates for your Bloemfontein project.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Input Controls */}
          <div className="lg:col-span-7 bg-[#161d28] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* 1. Solution Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                1. Select Slab Solution
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                
                <button
                  type="button"
                  onClick={() => setSlabType('lattice-eps')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    slabType === 'lattice-eps'
                      ? 'bg-[#5da832]/20 border-[#70c03b] text-white shadow-md'
                      : 'bg-black/30 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">Lattice Rib & Block</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#5da832] text-white font-bold">EPS Blocks</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Lightweight Polystyrene (35% weight reduction & R-value)</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSlabType('lattice-concrete')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    slabType === 'lattice-concrete'
                      ? 'bg-[#5da832]/20 border-[#70c03b] text-white shadow-md'
                      : 'bg-black/30 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">Lattice Rib & Block</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-200">Hollow Concrete</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Standard heavy-duty concrete blocks for residential</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSlabType('hollowcore')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    slabType === 'hollowcore'
                      ? 'bg-[#5da832]/20 border-[#70c03b] text-white shadow-md'
                      : 'bg-black/30 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">Pre-Stressed Hollowcore</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-600 text-white font-bold">Fastest</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Factory-cured precast voids, zero propping, long spans</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSlabType('prestressed-eps')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    slabType === 'prestressed-eps'
                      ? 'bg-[#5da832]/20 border-[#70c03b] text-white shadow-md'
                      : 'bg-black/30 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">Pre-Stressed Rib & Block</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#5da832] text-white font-bold">EPS Blocks</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">High-tensile prestressed ribs with insulating blocks</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSlabType('insitu')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    slabType === 'insitu'
                      ? 'bg-[#5da832]/20 border-[#70c03b] text-white shadow-md'
                      : 'bg-black/30 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">Custom Insitu Slabs</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-700 text-white">Monolithic</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">On-site formed for curves, heavy loads & cantilevers</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSlabType('windeck')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    slabType === 'windeck'
                      ? 'bg-[#5da832]/20 border-[#70c03b] text-white shadow-md'
                      : 'bg-black/30 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">Windeck Composite</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-600 text-white">Steel Profile</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Permanent steel decking shutter for fast commercial floors</p>
                </button>

              </div>
            </div>

            {/* 2. Dimensions Sliders */}
            <div className="space-y-4 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Slab Dimensions
                </label>
                <span className="text-sm font-extrabold text-[#70c03b] bg-[#5da832]/20 px-2.5 py-0.5 rounded-md border border-[#5da832]/40">
                  Total Area: {area} m²
                </span>
              </div>

              {/* Length Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Span Length:</span>
                  <span className="font-bold text-white">{length} metres</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  step="0.5"
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#5da832]"
                />
              </div>

              {/* Width Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Building Width:</span>
                  <span className="font-bold text-white">{width} metres</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#5da832]"
                />
              </div>
            </div>

            {/* 3. Floor Level & Staircase Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Floor Level
                </label>
                <select
                  value={floorLevel}
                  onChange={(e) => setFloorLevel(e.target.value)}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#70c03b]"
                >
                  <option value="Ground Mezzanine">Ground Mezzanine</option>
                  <option value="First Floor (Suspended)">First Floor (Suspended)</option>
                  <option value="Second Floor">Second Floor</option>
                  <option value="Roof Deck / Suspended Patio">Roof Deck / Suspended Patio</option>
                  <option value="Multi-Storey 3+ Floors">Multi-Storey 3+ Floors</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Staircase Requirement
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="stairs-toggle"
                    checked={includeStairs}
                    onChange={(e) => setIncludeStairs(e.target.checked)}
                    className="w-4 h-4 rounded text-[#5da832] focus:ring-[#5da832] bg-slate-900 border-white/20"
                  />
                  <label htmlFor="stairs-toggle" className="text-xs text-slate-200 cursor-pointer">
                    Include Staircase Flight
                  </label>
                </div>

                {includeStairs && (
                  <select
                    value={stairType}
                    onChange={(e) => setStairType(e.target.value)}
                    className="mt-2 w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#70c03b]"
                  >
                    <option value="Concrete Pre-Cast Flight">Concrete Pre-Cast Flight</option>
                    <option value="Concrete Insitu Cast Flight">Concrete Insitu Custom Flight</option>
                    <option value="Architectural Steel Staircase">Architectural Steel Staircase</option>
                  </select>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Breakdown & Instant Quote Summary */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#192333] to-[#0f1521] border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-6">
            
            {/* Header */}
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#70c03b] font-bold mb-1">
                Engineering Specification
              </div>
              <h3 className="text-xl font-extrabold text-white leading-tight">
                {metrics.name}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {metrics.recommendedFor}
              </p>
            </div>

            {/* Calculated Structural Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Scale className="w-3.5 h-3.5 text-[#70c03b]" />
                  <span>Total Dead Weight</span>
                </div>
                <div className="text-lg font-black text-white">
                  ~{totalWeightTonnes} <span className="text-xs font-normal text-slate-400">Tonnes</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  ({metrics.weightPerM2} kg/m²)
                </div>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#70c03b]" />
                  <span>Placement Time</span>
                </div>
                <div className="text-lg font-black text-white">
                  {estimatedDays} <span className="text-xs font-normal text-slate-400">{estimatedDays === 1 ? 'Day' : 'Days'}</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Rate: ~{metrics.speedM2PerDay} m²/day
                </div>
              </div>
            </div>

            {/* Technical Detail Checklist */}
            <div className="bg-black/20 border border-white/10 rounded-xl p-4 space-y-2.5 text-xs">
              <div className="flex items-start justify-between">
                <span className="text-slate-400">Concrete Topping:</span>
                <span className="font-semibold text-slate-200 text-right">{metrics.toppingThickness}</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-slate-400">Propping Support:</span>
                <span className="font-semibold text-slate-200 text-right">{metrics.propping}</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-slate-400">Thermal Insulation:</span>
                <span className="font-semibold text-[#70c03b] text-right">{metrics.thermalR}</span>
              </div>
              {includeStairs && (
                <div className="flex items-start justify-between pt-1 border-t border-white/10">
                  <span className="text-slate-400">Included Staircase:</span>
                  <span className="font-semibold text-white text-right">{stairType}</span>
                </div>
              )}
            </div>

            {/* Estimated Budget Range */}
            <div className="p-4 rounded-xl bg-[#5da832]/10 border border-[#5da832]/30 space-y-1 text-center">
              <div className="text-[11px] uppercase tracking-wider text-slate-300">
                Indicative Supply & Place Range (excl. VAT)
              </div>
              <div className="text-2xl font-black text-white text-[#70c03b]">
                R {estimatedMinCost.toLocaleString()} — R {estimatedMaxCost.toLocaleString()}
              </div>
              <div className="text-[10px] text-slate-400">
                *Subject to site access, crane logistics, and exact structural engineer drawings.
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleProceedToQuote}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-lg shadow-[#5da832]/30 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Submit Details for Formal Quote</span>
              </button>

              <a
                href={`https://wa.me/27824185877?text=${whatsappEstimateText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#4ade80] border border-[#25D366]/40 text-xs font-bold transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Send Estimate to Bevan via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
