"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { StorySection } from "../components/StorySection";
import { InteractiveRoastExplorer } from "../components/InteractiveRoastExplorer";
import { ProductCatalog } from "../components/ProductCatalog";
import { CartDrawer } from "../components/CartDrawer";
import { CheckoutModal } from "../components/CheckoutModal";
import { Coffee, ShieldCheck, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="min-h-screen">
        <HeroSection />
        
        <StorySection />
        
        <InteractiveRoastExplorer />
        
        <ProductCatalog />
      </main>

      {/* Slide Drawer and Checkout Modals */}
      <CartDrawer />
      <CheckoutModal />

      {/* Footer */}
      <footer className="bg-coffee-earth border-t border-coffee-light/10 pt-16 pb-12 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-organic-light/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-coffee-light/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <Coffee className="w-7 h-7 text-award-gold" />
              <span className="font-serif text-lg font-bold tracking-wide text-coffee-cream">
                MAROTA COFFEE GROUP
              </span>
            </div>
            <p className="font-sans text-xs text-coffee-cream/70 max-w-sm leading-relaxed">
              Marota Coffee Group is a premier Nicaraguan coffee export group. We source, dry mill, and export high-altitude organic specialty coffee lots from Matagalpa, Jinotega, and Nueva Segovia directly to international roasters and brokers.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-organic-light font-medium uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered Exporter & Organic Certified</span>
            </div>
          </div>

          {/* Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-award-gold uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs text-coffee-cream/65 font-medium">
              <li>
                <a href="#story" className="hover:text-award-gold transition-colors">Origin & Logistics Sourcing</a>
              </li>
              <li>
                <a href="#roast-explorer" className="hover:text-award-gold transition-colors">Roast Development Guide</a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-award-gold transition-colors">Available Export Lots</a>
              </li>
              <li>
                <a href="#" className="hover:text-award-gold transition-colors">Sustainability Reports</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-award-gold uppercase tracking-wider">Join Offering Sheet List</h4>
            <p className="text-xs text-coffee-cream/70 leading-relaxed">
              Subscribe to receive our monthly Green Coffee Offering Sheets, crop forecasts, and logistics reports.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-coffee-cream/35" />
                <input
                  type="email"
                  required
                  placeholder="importer@company.com"
                  className="w-full pl-10 pr-3 py-2.5 bg-coffee-dark/50 border border-coffee-light/25 focus:border-award-gold rounded-full text-xs text-coffee-cream outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="p-2.5 bg-award-gold hover:bg-award-gold-light text-coffee-dark rounded-full transition-all shadow-md cursor-pointer flex-shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-coffee-cream/45">
          <span>&copy; {new Date().getFullYear()} Marota Coffee Group. Exporting worldwide from Corinto, Nicaragua. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-award-gold transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
            <a href="#" className="hover:text-award-gold transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
