import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/solutionsData';
import { Send, CheckCircle2, MessageSquare, Phone, FileText } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectClassification, setProjectClassification] = useState('Residential Double-Storey');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message as direct communication option
    const textMsg = 
      `*DIRECT WEB ENQUIRY - SMART SLABS*\n` +
      `--------------------------------\n` +
      `*Name:* ${fullName || 'Not provided'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Email:* ${email || 'Not provided'}\n` +
      `*Project Type:* ${projectClassification}\n` +
      `*Message/Details:* ${message || 'Plan take-off request'}\n` +
      `--------------------------------\n` +
      `Sent via smartslabs.co.za`;

    const whatsappUrl = `https://wa.me/27824185877?text=${encodeURIComponent(textMsg)}`;
    
    // Store and set submitted state
    setSubmitted(true);

    // Also optional auto-open or allow manual click
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setProjectClassification('Residential Double-Storey');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="bg-[#0b0f17] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Glow decorative accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00a859]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner - Exact Match to Reference */}
      <div className="mb-6 relative z-10">
        <div className="inline-block bg-[#00a859] text-white font-black text-xs sm:text-sm px-3 py-1.5 uppercase tracking-wide rounded-sm shadow-md">
          SEND A MESSAGE OR REQUEST PLAN TAKE-OFF
        </div>
        <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed max-w-2xl">
          Have architectural drawings or an engineer’s schedule? Let us know and we will get back to you with a comprehensive quote.
        </p>
      </div>

      {submitted ? (
        <div className="py-10 px-6 rounded-2xl bg-black/40 border border-[#00a859]/40 text-center space-y-5 animate-fade-in relative z-10">
          <div className="w-14 h-14 rounded-full bg-[#00a859]/20 border border-[#00a859] flex items-center justify-center mx-auto text-[#00a859]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h4 className="text-xl font-bold text-white">Enquiry Received!</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-1.5">
              Thank you, <strong className="text-white">{fullName || 'Valued Client'}</strong>. Bevan Williams and the engineering team have received your request and will contact you promptly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/27824185877?text=${encodeURIComponent(
                `Hi Bevan, I just submitted an enquiry for ${projectClassification} (${fullName}). Please check your records.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-black text-xs shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>Forward Instantly to Bevan on WhatsApp</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 transition-all"
            >
              Send Another Message
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#00a859] hover:bg-[#00914d] active:scale-[0.99] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#00a859]/30 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Submit Direct Enquiry</span>
            </button>
          </div>
        </form>
      )}

    </div>
  );
};
