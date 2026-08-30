import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/solutionsData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Calculator, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  Building2,
  FileText
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (prefillData?: any) => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Slab Solutions', href: '#slab-solutions' },
    { name: 'Staircases', href: '#staircases' },
    { name: 'Slab Estimator', href: '#calculator', onClick: onOpenCalculator },
    { name: 'Comparison', href: '#comparison' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Details Strip Matching Flyer Header */}
      <div className="bg-[#070a0e] border-b border-white/10 text-xs text-slate-300 py-1.5 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#70c03b] transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-[#5da832]/20 flex items-center justify-center text-[#70c03b]">
                <Phone className="w-3 h-3" />
              </div>
              <span className="font-semibold text-white">{COMPANY_DETAILS.phone}</span>
              <span className="text-slate-400 text-[11px]">(Bevan Williams)</span>
            </a>

            <div className="flex items-center gap-1.5 text-slate-400">
              <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
                <MapPin className="w-3 h-3" />
              </div>
              <span>{COMPANY_DETAILS.address}</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-1.5 hover:text-[#70c03b] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#70c03b]" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>

            <div className="h-3 w-[1px] bg-white/20" />

            <div className="flex items-center gap-1 text-[#70c03b] font-medium text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SANS 10400 Certified Engineering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0b0f17]/95 backdrop-blur-md shadow-xl shadow-black/40 py-3 border-b border-white/10' 
            : 'bg-[#0b0f17]/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="focus:outline-none">
            <Logo size="md" variant="dark" />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-[#70c03b] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#70c03b] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_DETAILS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 text-xs font-semibold transition-all hover:border-[#70c03b]/50"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#70c03b]" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-lg shadow-[#5da832]/25 transition-all transform hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 bg-[#0d121c] rounded-xl p-4 shadow-2xl border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 hover:text-[#70c03b] text-sm font-medium transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 text-slate-200 border border-white/10 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#70c03b]" />
                <span>Call Bevan: {COMPANY_DETAILS.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#5da832] text-white text-sm font-bold shadow-lg shadow-[#5da832]/30"
              >
                <FileText className="w-4 h-4" />
                <span>Request Free Quote</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
