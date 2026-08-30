import React, { useState } from 'react';
import { COMPANY_DETAILS, FAQS } from '../data/solutionsData';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  FileText, 
  Send,
  Building,
  Navigation
} from 'lucide-react';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="contact" className="py-24 bg-[#070a0f] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQs Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5da832]/15 border border-[#5da832]/30 text-[#70c03b] text-xs font-bold uppercase tracking-widest">
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Suspended Slab <span className="text-[#65a30d]">Engineering FAQs</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Got questions about hollowcore spans, polystyrene vs concrete blocks, or crane access in Bloemfontein?
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#141b26] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-[#70c03b] transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#70c03b] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Official Contact Card Section Matching Flyer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Flyer Contact Card */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#161f2c] to-[#0e141f] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <Logo size="lg" variant="dark" />

              <div className="pt-2">
                <div className="text-xs uppercase tracking-widest text-[#70c03b] font-bold">
                  Direct Technical Contact
                </div>
                <h3 className="text-3xl font-extrabold text-white mt-1">
                  {COMPANY_DETAILS.contactPerson}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Suspended Concrete Slabs & Staircase Specialist
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-black/40 border border-white/10 hover:border-[#70c03b]/60 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#5da832]/20 border border-[#5da832]/40 flex items-center justify-center text-[#70c03b] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Direct Telephone</span>
                    <span className="text-base font-bold text-white group-hover:text-[#70c03b] transition-colors">
                      {COMPANY_DETAILS.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-black/40 border border-white/10 hover:border-[#70c03b]/60 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#5da832]/20 border border-[#5da832]/40 flex items-center justify-center text-[#70c03b] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Email Inquiries & Plan Take-offs</span>
                    <span className="text-base font-bold text-white group-hover:text-[#70c03b] transition-colors">
                      {COMPANY_DETAILS.email}
                    </span>
                  </div>
                </a>

                {/* Physical Address */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-[#5da832]/20 border border-[#5da832]/40 flex items-center justify-center text-[#70c03b] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Factory & Physical Address</span>
                    <span className="text-sm font-semibold text-white">
                      {COMPANY_DETAILS.address}
                    </span>
                  </div>
                </div>

                {/* Website & Operating Hours */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-[#70c03b] flex-shrink-0" />
                    <div>
                      <span className="text-[9px] text-slate-400 block uppercase">Official Web</span>
                      <span className="text-xs font-bold text-white">{COMPANY_DETAILS.website}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#70c03b] flex-shrink-0" />
                    <div>
                      <span className="text-[9px] text-slate-400 block uppercase">Hours</span>
                      <span className="text-xs font-bold text-white">{COMPANY_DETAILS.operatingHours}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <div className="pt-4">
              <a
                href={COMPANY_DETAILS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs font-black shadow-lg shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                <span>Chat Directly with Bevan on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Location & Quick Inquiry */}
          <div className="lg:col-span-6 bg-[#141b26] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5da832]/15 border border-[#5da832]/30 text-[#70c03b] text-xs font-bold uppercase">
                <Navigation className="w-3.5 h-3.5" />
                <span>Bloemfontein Yard Location</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                Visit Our Manufacturing Yard
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Conveniently located in New East End, Bloemfontein, with dedicated heavy logistics routes 
                for rapid flatbed delivery and crane transport across the Free State and Central South Africa.
              </p>

              {/* Stylized Interactive Map Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 h-64 flex items-center justify-center text-center p-6 group">
                <div 
                  className="absolute inset-0 opacity-20 bg-cover bg-center filter grayscale"
                  style={{
                    backgroundImage: `radial-gradient(#70c03b 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                  }}
                />

                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#5da832] text-white flex items-center justify-center mx-auto shadow-xl animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-black text-base">Smart Slabs Yard</div>
                    <div className="text-xs text-slate-300">148 Fritz Stockenstrom Str., New East End</div>
                    <div className="text-[11px] text-[#70c03b] font-semibold">Bloemfontein, 9301</div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=148+Fritz+Stockenstrom+Str+New+East+End+Bloemfontein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#70c03b]" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white block">Need on-site measure & quote?</span>
                We visit sites throughout Bloemfontein and surrounds.
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-md"
              >
                Book Site Inspection
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
