import React, { useState } from 'react';
import { COMPANY_DETAILS, SLAB_SOLUTIONS } from '../data/solutionsData';
import { 
  X, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  Building, 
  MapPin, 
  Phone, 
  Mail,
  Sparkles,
  Copy,
  Check,
  RotateCcw
} from 'lucide-react';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export const QuoteFormModal: React.FC<QuoteFormModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [siteLocation, setSiteLocation] = useState('Bloemfontein');
  const [slabSolution, setSlabSolution] = useState(initialData?.slabSolution || 'Lattice Rib & Block');
  const [blockType, setBlockType] = useState('Polystyrene (EPS) Lightweight Blocks');
  const [estimatedArea, setEstimatedArea] = useState(initialData?.estimatedArea || 120);
  const [floorLevel, setFloorLevel] = useState(initialData?.floorLevel || 'First Floor (Suspended)');
  const [additionalNotes, setAdditionalNotes] = useState(initialData?.additionalNotes || '');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateMailtoUrl = () => {
    const subject = `Engineering Quote Request: ${slabSolution} - ${fullName.trim() || 'New Client'} (${siteLocation.trim() || 'Bloemfontein'})`;
    const emailBody = 
      `Dear Smart Slabs Engineering Team,\n\n` +
      `I would like to request an official engineering layout drawing & quotation for our suspended slab:\n\n` +
      `----------------------------------------\n` +
      `PROJECT & CLIENT SPECIFICATIONS:\n` +
      `----------------------------------------\n` +
      `• Client / Company: ${fullName.trim() || 'N/A'}\n` +
      `• Contact Phone / WhatsApp: ${phone.trim() || 'N/A'}\n` +
      `• Email Address: ${email.trim() || 'N/A'}\n` +
      `• Site Suburb / Location: ${siteLocation.trim() || 'Bloemfontein'}\n` +
      `• Slab System: ${slabSolution}\n` +
      `• Void / Block Option: ${blockType}\n` +
      `• Estimated Slab Area: ${estimatedArea} m²\n` +
      `• Floor Level: ${floorLevel}\n` +
      `• Special Engineering Constraints / Notes:\n  ${additionalNotes.trim() || 'None provided'}\n` +
      `----------------------------------------\n\n` +
      `Please review and provide a quotation.\n\n` +
      `Kind regards,\n` +
      `${fullName.trim() || 'Client'}`;

    return `mailto:slabs@smartslabs.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const getWhatsAppUrl = () => {
    const text = 
      `*SMART SLABS - QUOTE REQUEST*\n` +
      `--------------------------------\n` +
      `*Client:* ${fullName || 'Client'}\n` +
      `*Phone:* ${phone || 'N/A'}\n` +
      `*Email:* ${email || 'N/A'}\n` +
      `*Site Location:* ${siteLocation}\n` +
      `*Slab Solution:* ${slabSolution}\n` +
      `*Block Type:* ${blockType}\n` +
      `*Estimated Area:* ${estimatedArea} m²\n` +
      `*Floor Level:* ${floorLevel}\n` +
      `*Notes:* ${additionalNotes || 'Please quote on engineering layout'}\n` +
      `--------------------------------\n` +
      `Please provide engineering layout drawings and quotation.`;

    return `https://wa.me/27824185877?text=${encodeURIComponent(text)}`;
  };

  const triggerEmailClient = () => {
    const mailtoUrl = generateMailtoUrl();
    try {
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.target = '_top';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = mailtoUrl;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Automatically trigger opening default email client
    triggerEmailClient();

    // Show confirmation view
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const whatsappUrl = getWhatsAppUrl();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyDetails = () => {
    const text = 
      `To: slabs@smartslabs.co.za\n` +
      `Subject: Engineering Quote Request: ${slabSolution} - ${fullName || 'Client'}\n\n` +
      `Client: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Location: ${siteLocation}\n` +
      `Slab System: ${slabSolution}\n` +
      `Block Option: ${blockType}\n` +
      `Area: ${estimatedArea} m²\n` +
      `Floor: ${floorLevel}\n` +
      `Notes: ${additionalNotes || 'N/A'}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#141b26] border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-[#0d121c] to-[#162030] border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#70c03b]">
              Smart Slabs Bloemfontein
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Request a Free Engineering Quote
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[78vh] overflow-y-auto">
            
            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Full Name / Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Johan van der Merwe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#70c03b]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 082 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#70c03b]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. johan@example.co.za"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#70c03b]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Site Suburb / Town (Free State) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Wild Olive Estate, Bloemfontein"
                  value={siteLocation}
                  onChange={(e) => setSiteLocation(e.target.value)}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#70c03b]"
                />
              </div>
            </div>

            {/* Slab Specification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Slab System
                </label>
                <select
                  value={slabSolution}
                  onChange={(e) => setSlabSolution(e.target.value)}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#70c03b]"
                >
                  <option value="Pre-Stressed Hollowcore">Pre-Stressed Hollowcore</option>
                  <option value="Lattice Rib & Block">Lattice Rib & Block</option>
                  <option value="Pre-Stressed Rib & Block">Pre-Stressed Rib & Block</option>
                  <option value="Insitu Concrete Slab">Insitu Concrete Slab</option>
                  <option value="Windeck Solutions">Windeck Composite Slabs</option>
                  <option value="Engineering Recommendation">Let Smart Slabs Recommend</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Block / Void Option
                </label>
                <select
                  value={blockType}
                  onChange={(e) => setBlockType(e.target.value)}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#70c03b]"
                >
                  <option value="Polystyrene (EPS) Lightweight Blocks">Polystyrene (EPS) Blocks (Lightweight & Insulating)</option>
                  <option value="Concrete Hollow Blocks">Concrete Hollow Blocks (Standard)</option>
                  <option value="Precast Hollowcore Cores">Hollowcore Extruded Voids</option>
                  <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Estimated Slab Area (m²)
                </label>
                <input
                  type="number"
                  min="10"
                  max="10000"
                  value={estimatedArea}
                  onChange={(e) => setEstimatedArea(Number(e.target.value))}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#70c03b]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Floor Level
                </label>
                <select
                  value={floorLevel}
                  onChange={(e) => setFloorLevel(e.target.value)}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#70c03b]"
                >
                  <option value="Ground Floor Mezzanine">Ground Floor Mezzanine</option>
                  <option value="First Floor (Suspended)">First Floor (Suspended)</option>
                  <option value="Second Floor">Second Floor</option>
                  <option value="Roof Deck / Suspended Patio">Roof Deck / Suspended Patio</option>
                  <option value="Multi-Storey 3+ Floors">Multi-Storey 3+ Floors</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Additional Project Notes / Special Engineering Constraints
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Crane access is available on street front, double volume area over lounge..."
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#70c03b]"
              />
            </div>

            {/* Form Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-xs sm:text-sm font-bold shadow-xl shadow-[#5da832]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Submit Quote Request (Opens Mail App)</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 px-1 pt-1 gap-1">
              <span>Direct Email: <strong className="text-slate-300">slabs@smartslabs.co.za</strong></span>
              <span>WhatsApp / Phone: <strong className="text-slate-300">082 418 5877 (Bevan Williams)</strong></span>
            </div>

          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#5da832]/20 border border-[#5da832] flex items-center justify-center text-[#70c03b] mx-auto shadow-lg shadow-[#5da832]/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-white">
                Opening Mail App...
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your default mail client has been opened with your quote specifications pre-filled and addressed to <strong className="text-[#70c03b]">slabs@smartslabs.co.za</strong>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={triggerEmailClient}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-lg transition-all"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Launch Mail App Again</span>
              </button>

              <button
                onClick={handleOpenWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs font-bold shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                <span>Send via WhatsApp (+27 82 418 5877)</span>
              </button>

              <button
                onClick={handleCopyDetails}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-bold text-xs border border-white/15 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#70c03b]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-300" />
                    <span>Copy Details</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

