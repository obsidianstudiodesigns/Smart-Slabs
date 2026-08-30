import React from 'react';
import { COMPANY_DETAILS } from '../data/solutionsData';
import { MessageSquare, Phone, FileText } from 'lucide-react';

interface FloatingContactProps {
  onOpenQuoteModal: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Quick Quote Pill */}
      <button
        onClick={onOpenQuoteModal}
        className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-2xl shadow-[#5da832]/50 border border-white/20 transition-all transform hover:scale-105 active:scale-95 group"
      >
        <FileText className="w-4 h-4 text-white" />
        <span className="hidden sm:inline">Get Instant Quote</span>
        <span className="sm:hidden">Quote</span>
      </button>

      {/* WhatsApp Floating Button */}
      <a
        href={COMPANY_DETAILS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-black shadow-2xl shadow-[#25D366]/40 hover:bg-[#20bd5a] transition-all transform hover:scale-110 active:scale-95 group"
        aria-label="Chat with Bevan Williams on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 text-black fill-black/10" />
        
        {/* Tooltip on desktop hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/90 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat with Bevan: {COMPANY_DETAILS.phone}
        </span>
      </a>
      
    </div>
  );
};
