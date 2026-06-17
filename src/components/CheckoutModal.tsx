"use client";

import React, { useState } from "react";
import { X, ShieldCheck, Mail, User, MapPin, RefreshCw, CheckCircle, Building2, Globe } from "lucide-react";
import { useCart } from "../context/CartContext";

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotal, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", company: "", email: "", address: "", country: "", notes: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate inquiry submission micro-animation
    setTimeout(() => {
      setStatus("success");
      clearCart();
    }, 2000);
  };

  const handleClose = () => {
    if (status === "success") {
      setStatus("idle");
      setForm({ name: "", company: "", email: "", address: "", country: "", notes: "" });
    }
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={status !== "loading" ? handleClose : undefined}
        className="absolute inset-0 bg-coffee-dark/85 backdrop-blur-sm transition-opacity duration-350"
      />

      {/* Modal Box */}
      <div className="relative glass-panel rounded-3xl w-full max-w-lg border border-coffee-light/10 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-coffee-light/10">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-coffee-cream">
            {status === "success" ? "Inquiry Submitted" : "Request Quote & Samples"}
          </h3>
          {status !== "loading" && (
            <button 
              onClick={handleClose} 
              className="p-1.5 rounded-full hover:bg-coffee-cream/5 text-coffee-cream/60 hover:text-coffee-cream cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content States */}
        {status === "idle" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Context Summary */}
            <p className="text-xs text-coffee-cream/75 leading-relaxed bg-coffee-cream/5 border border-coffee-light/10 rounded-2xl p-4">
              You are requesting samples and pricing for selected Nicaraguan coffee lots. 
              Our exports desk will calculate FOB Corinto pricing and coordinate shipping to your destination.
            </p>

            {/* Input fields */}
            <div className="space-y-3">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-coffee-cream/60 uppercase tracking-wide">Contact Person</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-coffee-cream/30" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-coffee-dark/50 border border-coffee-light/25 focus:border-award-gold rounded-xl text-sm text-coffee-cream outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Company / Roastery */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-coffee-cream/60 uppercase tracking-wide">Roastery / Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-coffee-cream/30" />
                  <input
                    type="text"
                    required
                    placeholder="Apex Coffee Roasters"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-coffee-dark/50 border border-coffee-light/25 focus:border-award-gold rounded-xl text-sm text-coffee-cream outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-coffee-cream/60 uppercase tracking-wide">Business Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-coffee-cream/30" />
                  <input
                    type="email"
                    required
                    placeholder="importer@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-coffee-dark/50 border border-coffee-light/25 focus:border-award-gold rounded-xl text-sm text-coffee-cream outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Destination Country */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-coffee-cream/60 uppercase tracking-wide">Destination Country</label>
                  <div className="relative">
                    <Globe className="absolute left-3.5 top-3.5 w-4 h-4 text-coffee-cream/30" />
                    <input
                      type="text"
                      required
                      placeholder="Germany"
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-coffee-dark/50 border border-coffee-light/25 focus:border-award-gold rounded-xl text-sm text-coffee-cream outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Shipping address for samples */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-coffee-cream/60 uppercase tracking-wide">Port or Delivery Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-coffee-cream/30" />
                    <input
                      type="text"
                      required
                      placeholder="Hamburg Port / HQ Address"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-coffee-dark/50 border border-coffee-light/25 focus:border-award-gold rounded-xl text-sm text-coffee-cream outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Inquiry notes / Estimated Volume */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-coffee-cream/60 uppercase tracking-wide">Inquiry Notes / Target Volume (e.g. 20 Bags, 1 FCL)</label>
                <textarea
                  placeholder="Tell us about your roasting operations and volume requirements..."
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-coffee-dark/50 border border-coffee-light/25 focus:border-award-gold rounded-xl text-sm text-coffee-cream outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-2 text-xs text-organic-light/85">
                <ShieldCheck className="w-4 h-4" />
                <span>Authorized exporter. Registered with CETREX Nicaragua.</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-award-gold hover:bg-award-gold-light text-coffee-dark font-sans font-bold text-sm rounded-xl transition-all duration-300 shadow-lg cursor-pointer"
              >
                Submit Lot Inquiry & Sample Request
              </button>
            </div>
          </form>
        )}

        {status === "loading" && (
          <div className="py-12 flex flex-col items-center justify-center space-y-4">
            <RefreshCw className="w-12 h-12 text-award-gold animate-spin" />
            <h4 className="font-serif text-lg text-coffee-cream font-bold">Processing inquiry...</h4>
            <p className="font-sans text-xs text-coffee-cream/60">Registering request with Marota Coffee Group Export Desk.</p>
          </div>
        )}

        {status === "success" && (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-organic-medium border border-organic-light flex items-center justify-center text-organic-light shadow-lg shadow-organic-medium/10">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-coffee-cream">Inquiry Submitted Successfully</h4>
              <p className="font-sans text-xs text-organic-light font-semibold uppercase tracking-wider">
                Marota Coffee Group Exports
              </p>
            </div>

            <p className="font-sans text-sm text-coffee-cream/80 max-w-sm leading-relaxed font-light">
              Thank you, <span className="font-semibold text-coffee-cream">{form.name}</span> from <span className="font-semibold text-coffee-cream">{form.company}</span>. 
              Our exports agent will email you spec sheets, logistics information, and coordinate shipping your sample box to <span className="font-semibold text-coffee-cream">{form.country}</span> shortly.
            </p>

            <button
              onClick={handleClose}
              className="px-8 py-3.5 bg-coffee-cream/5 hover:bg-coffee-cream/10 border border-coffee-cream/15 text-coffee-cream font-sans font-semibold text-xs rounded-full transition-all cursor-pointer"
            >
              Continue Sourcing Lots
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
