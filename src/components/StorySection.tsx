"use client";

import React from "react";
import { Award, Compass, Shield, Users } from "lucide-react";

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-gradient-to-b from-coffee-dark to-organic-green/45 relative overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-organic-light/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-award-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Images & Visual Collage */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Main Picture Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-coffee-light/10 shadow-2xl group max-w-md w-full aspect-[4/5]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/pourover_coffee.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-xl p-4 border border-award-gold/25">
                <span className="font-serif text-2xl font-bold text-award-gold">150+ Farms</span>
                <span className="text-xs text-coffee-cream/80 block mt-0.5 font-sans">Organic Sourcing Network across Nicaragua</span>
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Features */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-widest text-organic-light uppercase font-sans">Sourcing & SCM Excellence</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-cream leading-tight">
                Empowering Nicaraguan Growers, <br />
                <span className="text-gold-gradient">Supplying Global Roasters</span>
              </h2>
              <p className="font-sans text-base text-coffee-cream/80 leading-relaxed font-light">
                Marota Coffee Group is a certified exporter based in Matagalpa, Nicaragua. 
                We bridge the gap between smallholder organic cooperatives and international coffee buyers. 
                By operating our own dry milling operations, moisture-controlled warehouses, and cupping quality labs, 
                we ensure strict physical and sensory consistency from the volcanic highland soil directly to the shipping containers at Port Corinto.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Organic Sourcing */}
              <div className="glass-panel rounded-xl p-5 hover:border-organic-light/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-organic-medium/50 border border-organic-light/30 flex items-center justify-center text-organic-light mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-coffee-cream mb-2">Organic Traceability</h3>
                <p className="font-sans text-xs text-coffee-cream/75 leading-relaxed">
                  Every lot is fully traceable back to certified shade-grown estates in Jinotega and Matagalpa.
                </p>
              </div>

              {/* Quality Lab */}
              <div className="glass-panel rounded-xl p-5 hover:border-award-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-coffee-medium/50 border border-award-gold/30 flex items-center justify-center text-award-gold mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-coffee-cream mb-2">Q-Grader QC Labs</h3>
                <p className="font-sans text-xs text-coffee-cream/75 leading-relaxed">
                  Sensory assessments of every micro-lot, selecting only beans with SCAA scores exceeding 85.
                </p>
              </div>

              {/* Volcanic Terroir */}
              <div className="glass-panel rounded-xl p-5 hover:border-organic-light/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-organic-medium/50 border border-organic-light/30 flex items-center justify-center text-organic-light mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-coffee-cream mb-2">Milling & Prep</h3>
                <p className="font-sans text-xs text-coffee-cream/75 leading-relaxed">
                  Advanced processing (Natural, Honey, Washed) with strictly monitored dry mill defect sorting.
                </p>
              </div>

              {/* Export Logistics */}
              <div className="glass-panel rounded-xl p-5 hover:border-award-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-coffee-medium/50 border border-award-gold/30 flex items-center justify-center text-award-gold mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-coffee-cream mb-2">Export Logistics</h3>
                <p className="font-sans text-xs text-coffee-cream/75 leading-relaxed">
                  Handling all customs, phytosanitary certificates, ICO marking, and ocean freight logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
