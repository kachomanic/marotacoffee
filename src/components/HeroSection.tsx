"use client";

import React from "react";
import { Award, ShieldCheck, ArrowRight, Truck } from "lucide-react";

export const HeroSection: React.FC = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById("catalog");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Rich Dark Gradients */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-pulse-slow"
        style={{
          backgroundImage: "url('/images/coffee_plantation.png')",
          animationDuration: "12s"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/80 to-coffee-dark/40 z-10" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-coffee-dark/50 to-coffee-dark z-10" />

      {/* Grid Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Headline & Badges */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 animate-fade-in-up">
          {/* Export Badges Row */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-organic-medium/70 border border-organic-light/35 backdrop-blur-sm text-organic-light text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Certified Organic Lots
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coffee-medium/70 border border-award-gold/35 backdrop-blur-sm text-award-gold text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Cup of Excellence Winners
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/35 backdrop-blur-sm text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              Global Freight & Logistics
            </div>
          </div>

          {/* Premium Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-coffee-cream">
            Marota Coffee Group <br />
            <span className="text-gold-gradient block mt-1">Nicaraguan Export Partners</span>
          </h1>

          {/* Premium Description */}
          <p className="font-sans text-base sm:text-lg text-coffee-cream/80 max-w-xl leading-relaxed font-light">
            Connecting global roasters, importers, and brokers with award-winning specialty lots 
            and certified organic green coffee directly from Matagalpa, Jinotega, and Nueva Segovia.
            We manage sourcing, quality control, dry milling, and export logistics.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={scrollToCatalog}
              className="inline-flex items-center gap-2 px-8 py-4 bg-award-gold hover:bg-award-gold-light text-coffee-dark font-sans font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer hover:shadow-award-gold/20"
            >
              Explore Export Lots
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("story");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-coffee-cream/5 hover:bg-coffee-cream/10 border border-coffee-cream/15 text-coffee-cream font-sans font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              Milling & Logistics
            </button>
          </div>
        </div>

        {/* Right: Floating Product Preview Card */}
        <div className="lg:col-span-5 flex justify-center items-center lg:justify-end animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="glass-panel rounded-2xl p-6 max-w-sm w-full relative group hover:border-award-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-award-gold/5">
            {/* Visual Bag Showcase */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-b from-coffee-medium/40 to-coffee-dark/80 p-6 flex justify-center items-center mb-6">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                style={{ backgroundImage: "url('/images/pourover_coffee.png')" }}
              />
              <img 
                src="/images/coffee_bag.png" 
                alt="Marota Coffee Group Export Lot Bag" 
                className="h-48 w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 animate-float"
              />
            </div>

            {/* Info */}
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl font-bold text-coffee-cream">Caturra Peaberry</h3>
                  <p className="text-xs text-award-gold tracking-wide uppercase font-semibold">Lot #402 - Micro-lot</p>
                </div>
                <div className="text-right">
                  <span className="block font-sans text-lg font-bold text-award-gold">$4.50 / lb</span>
                  <span className="block text-[9px] text-coffee-cream/50 uppercase">Green FOB Corinto</span>
                </div>
              </div>
              <p className="text-xs text-coffee-cream/70 font-sans leading-normal">
                Strictly High Grown (SHG) organic lot. Balanced medium body, intense caramelized brown sugar 
                sweetness, and clean cup qualities with citrus acidity.
              </p>
              
              <div className="pt-2 border-t border-coffee-light/10 flex justify-between items-center text-[11px] text-coffee-cream/50">
                <span>Process: Washed</span>
                <span>Available: 120 Bags</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave/Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-coffee-dark to-transparent z-20" />
    </section>
  );
};
