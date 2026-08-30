import React from 'react';
import { Logo } from './Logo';
import { COMPANY_DETAILS, SLAB_SOLUTIONS } from '../data/solutionsData';
import { Phone, Mail, MapPin, Globe, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080c] border-t border-white/10 text-slate-400 text-xs">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" variant="dark" />
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Smart Slabs is Bloemfontein’s premier manufacturer and specialist contractor for 
              pre-stressed hollowcore slabs, lattice rib & block, pre-stressed rib & block, in-situ slabs, 
              and architectural concrete and steel staircases.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#70c03b] font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-[#70c03b]" />
              <span>SANS 10400 & SANS 10100 Structural Design Compliance</span>
            </div>
          </div>

          {/* Slab Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Slab Solutions
            </h4>
            <ul className="space-y-2">
              {SLAB_SOLUTIONS.map((sol) => (
                <li key={sol.id}>
                  <a
                    href="#slab-solutions"
                    className="hover:text-[#70c03b] transition-colors"
                  >
                    {sol.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Staircases & Tools */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Stairs & Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#staircases" className="hover:text-[#70c03b] transition-colors">
                  Concrete Pre-Cast Stairs
                </a>
              </li>
              <li>
                <a href="#staircases" className="hover:text-[#70c03b] transition-colors">
                  Insitu Concrete Staircases
                </a>
              </li>
              <li>
                <a href="#staircases" className="hover:text-[#70c03b] transition-colors">
                  Structural Steel Staircases
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#70c03b] transition-colors">
                  Slab Estimator & Calculator
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-[#70c03b] transition-colors">
                  Engineering Decision Matrix
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact from Flyer */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Direct Contact
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="font-bold text-white">
                {COMPANY_DETAILS.contactPerson}
              </div>
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[#70c03b] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#70c03b]" />
                <span>{COMPANY_DETAILS.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2 hover:text-[#70c03b] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#70c03b]" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#70c03b] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 text-[11px]">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">Smart Slabs</strong> ({COMPANY_DETAILS.website}). All rights reserved. Bloemfontein, Free State.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
