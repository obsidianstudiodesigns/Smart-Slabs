import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, RotateCcw, Copy, Check } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectClassification, setProjectClassification] = useState('Residential Double-Storey');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateEnquiryText = () => {
    return (
      `*DIRECT WEB ENQUIRY - SMART SLABS*\n` +
      `--------------------------------\n` +
      `*Name:* ${fullName.trim() || 'Not provided'}\n` +
      `*Phone / WhatsApp:* ${phone.trim() || 'Not provided'}\n` +
      `*Email:* ${email.trim() || 'Not provided'}\n` +
      `*Project Classification:* ${projectClassification}\n` +
      `*Project Details / Dimensions / Message:*\n${message.trim() || 'Please contact me regarding plan take-off and pricing.'}\n` +
      `--------------------------------\n` +
      `Sent via smartslabs.co.za`
    );
  };

  const generateMailtoUrl = () => {
    const subject = `Slab Enquiry: ${projectClassification} - ${fullName.trim() || 'New Client'}`;
    const emailBody = 
      `Dear Smart Slabs Engineering Team,\n\n` +
      `I would like to request a quotation / plan take-off for our project:\n\n` +
      `Full Name: ${fullName.trim() || 'N/A'}\n` +
      `Phone / WhatsApp: ${phone.trim() || 'N/A'}\n` +
      `Email: ${email.trim() || 'N/A'}\n` +
      `Project Classification: ${projectClassification}\n\n` +
      `Project Details / Dimensions / Message:\n` +
      `${message.trim() || 'Please review attached/supplied plans for a suspended concrete slab quotation.'}\n\n` +
      `Kind regards,\n` +
      `${fullName.trim() || 'Client'}`;

    return `mailto:slabs@smartslabs.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const getWhatsAppUrl = () => {
    const text = generateEnquiryText();
    return `https://wa.me/27824185877?text=${encodeURIComponent(text)}`;
  };

  const triggerEmailClient = () => {
    const mailtoUrl = generateMailtoUrl();
    
    // Create a temporary link element to trigger mailto reliably across all browsers and iframes
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

    // Automatically trigger opening the user's default email client
    triggerEmailClient();

    // Show confirmation state
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const whatsappUrl = getWhatsAppUrl();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyDetails = () => {
    const text = 
      `To: slabs@smartslabs.co.za\n` +
      `Subject: Slab Enquiry: ${projectClassification} - ${fullName.trim() || 'New Client'}\n\n` +
      `Full Name: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Classification: ${projectClassification}\n` +
      `Details: ${message || 'Plan take-off request'}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setProjectClassification('Residential Double-Storey');
    setMessage('');
    setSubmitted(false);
    setCopied(false);
  };

  return (
    <div className="bg-[#0b0f17] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Glow decorative accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00a859]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="mb-6 relative z-10">
        <div className="inline-block bg-[#00a859] text-white font-black text-xs sm:text-sm px-3 py-1.5 uppercase tracking-wide rounded-sm shadow-md">
          SEND A MESSAGE OR REQUEST PLAN TAKE-OFF
        </div>
        <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed max-w-2xl">
          Have architectural drawings or an engineer’s schedule? Let us know and we will get back to you with a comprehensive quote.
        </p>
      </div>

      {submitted ? (
        <div className="py-10 px-6 rounded-2xl bg-black/40 border border-[#00a859]/40 text-center space-y-6 animate-fade-in relative z-10">
          <div className="w-14 h-14 rounded-full bg-[#00a859]/20 border border-[#00a859] flex items-center justify-center mx-auto text-[#00a859] shadow-lg shadow-[#00a859]/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h4 className="text-xl sm:text-2xl font-bold text-white">Opening Email Client...</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Your default mail app (Outlook, Apple Mail, or Gmail) has been launched with pre-filled enquiry details addressed to <strong className="text-[#00a859]">slabs@smartslabs.co.za</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={triggerEmailClient}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00a859] hover:bg-[#00914d] text-white font-bold text-xs shadow-lg transition-all"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Launch Mail App Again</span>
            </button>

            <button
              onClick={handleOpenWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs shadow-lg transition-all"
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
                  <Check className="w-4 h-4 text-[#00a859]" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-300" />
                  <span>Copy Details</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-medium text-xs border border-white/10 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New Enquiry</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {/* Row 1: Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="form-full-name" className="block text-xs font-bold text-slate-200 mb-1.5">
                Full Name
              </label>
              <input
                id="form-full-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. David Miller"
                className="w-full bg-[#121722] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00a859] focus:ring-1 focus:ring-[#00a859] transition-all"
              />
            </div>

            <div>
              <label htmlFor="form-phone" className="block text-xs font-bold text-slate-200 mb-1.5">
                Phone / WhatsApp
              </label>
              <input
                id="form-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 082 000 0000"
                className="w-full bg-[#121722] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00a859] focus:ring-1 focus:ring-[#00a859] transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email & Project Classification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="form-email" className="block text-xs font-bold text-slate-200 mb-1.5">
                Email Address
              </label>
              <input
                id="form-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. david@builder.co.za"
                className="w-full bg-[#121722] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00a859] focus:ring-1 focus:ring-[#00a859] transition-all"
              />
            </div>

            <div>
              <label htmlFor="form-classification" className="block text-xs font-bold text-slate-200 mb-1.5">
                Project Classification
              </label>
              <div className="relative">
                <select
                  id="form-classification"
                  value={projectClassification}
                  onChange={(e) => setProjectClassification(e.target.value)}
                  className="w-full bg-[#121722] border border-[#00a859] sm:border-white/15 focus:border-[#00a859] focus:ring-1 focus:ring-[#00a859] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all cursor-pointer"
                >
                  <option value="Residential Double-Storey" className="bg-[#121722] text-white">
                    Residential Double-Storey
                  </option>
                  <option value="Commercial Development" className="bg-[#121722] text-white">
                    Commercial Development
                  </option>
                  <option value="Industrial / Warehouse Mezzanine" className="bg-[#121722] text-white">
                    Industrial / Warehouse Mezzanine
                  </option>
                  <option value="Multi-Unit Housing Scheme" className="bg-[#121722] text-white">
                    Multi-Unit Housing Scheme
                  </option>
                  <option value="Renovation & Addition Slab" className="bg-[#121722] text-white">
                    Renovation & Addition Slab
                  </option>
                  <option value="Architectural Custom Insitu" className="bg-[#121722] text-white">
                    Architectural Custom Insitu
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Row 3: Project Details / Message */}
          <div>
            <label htmlFor="form-message" className="block text-xs font-bold text-slate-200 mb-1.5">
              Project Details / Message
            </label>
            <textarea
              id="form-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Provide approximate floor dimensions, site location, timeline or any special requirements..."
              className="w-full bg-[#121722] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00a859] focus:ring-1 focus:ring-[#00a859] transition-all resize-none"
            />
          </div>

          {/* Action Buttons: Primary Email Submit & Direct WhatsApp Action */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
            <button
              type="submit"
              className="sm:col-span-8 py-4 rounded-xl bg-[#00a859] hover:bg-[#00914d] active:scale-[0.99] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#00a859]/30 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Submit Direct Enquiry (Opens Mail App)</span>
            </button>

            <button
              type="button"
              onClick={handleOpenWhatsApp}
              className="sm:col-span-4 py-4 rounded-xl bg-[#1e293b] hover:bg-[#334155] active:scale-[0.99] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/15 shadow-md transition-all cursor-pointer"
              title="Send directly to Bevan Williams on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Send via WhatsApp</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 px-1 pt-1 gap-1">
            <span>Direct Email: <strong className="text-slate-300">slabs@smartslabs.co.za</strong></span>
            <span>WhatsApp / Phone: <strong className="text-slate-300">082 418 5877 (Bevan Williams)</strong></span>
          </div>
        </form>
      )}

    </div>
  );
};

