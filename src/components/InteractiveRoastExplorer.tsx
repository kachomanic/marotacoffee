"use client";

import React, { useState } from "react";
import { Coffee, Flame, Heart, Sparkles, Thermometer } from "lucide-react";

interface RoastProfile {
  level: string;
  name: string;
  temp: string;
  time: string;
  description: string;
  acidity: number;
  body: number;
  sweetness: number;
  notes: string[];
  recommended: string;
  bgGradient: string;
  colorTheme: string;
}

const ROAST_PROFILES: RoastProfile[] = [
  {
    level: "LIGHT",
    name: "Cinnamon & City Roast",
    temp: "196°C / 385°F",
    time: "9.2 mins",
    description: "Ideal for showing micro-lot characteristics. Roasting just up to the first crack preserves the delicate floral, herbal, and tea-like qualities of the beans. Highlights the unique Nicaraguan highland terroir in its purest form.",
    acidity: 4.5,
    body: 2.5,
    sweetness: 3.5,
    notes: ["Jasmine", "Orange Blossom", "Citrus Zest", "Green Tea"],
    recommended: "Maragogype & Geisha Varieties",
    bgGradient: "from-amber-600/10 via-amber-800/10 to-coffee-dark",
    colorTheme: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
  {
    level: "MEDIUM",
    name: "Full City Roast",
    temp: "210°C / 410°F",
    time: "11.5 mins",
    description: "Highly stable and versatile profile. Develops deep caramelization while retaining subtle berry fruitiness. Highlights a thick creamy body and intense honeyed sweetness. Recommended for espresso origins and balanced blends.",
    acidity: 3.0,
    body: 4.0,
    sweetness: 4.8,
    notes: ["Milk Chocolate", "Toasted Almond", "Caramel Toffee", "Red Plum"],
    recommended: "Caturra & Bourbon Varieties",
    bgGradient: "from-coffee-light/10 via-coffee-medium/10 to-coffee-dark",
    colorTheme: "text-award-gold border-award-gold/30 bg-award-gold/10",
  },
  {
    level: "DARK",
    name: "Vienna & French Roast",
    temp: "224°C / 435°F",
    time: "13.8 mins",
    description: "Excellent for low-acidity applications. Roasting past the second crack mutes sharp acidities, replacing them with a robust, bold, and smoky profile. Brings out the deep cocoa oils, molasses, and bold crema from the bean.",
    acidity: 1.5,
    body: 4.8,
    sweetness: 3.0,
    notes: ["Dark Cocoa", "Molasses", "Smoked Cedar", "Toasted Hazelnut"],
    recommended: "Pacamara Variety",
    bgGradient: "from-coffee-medium/20 via-coffee-dark/50 to-coffee-dark",
    colorTheme: "text-stone-400 border-stone-500/30 bg-stone-500/10",
  },
];

export const InteractiveRoastExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"LIGHT" | "MEDIUM" | "DARK">("MEDIUM");
  
  const currentProfile = ROAST_PROFILES.find((p) => p.level === activeTab) || ROAST_PROFILES[1];

  const renderGauge = (label: string, value: number, icon: React.ReactNode) => {
    const totalBars = 5;
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-medium text-coffee-cream/80">
          <span className="flex items-center gap-1.5">
            {icon}
            {label}
          </span>
          <span className="text-award-gold font-bold">{value.toFixed(1)} / 5.0</span>
        </div>
        <div className="flex gap-1.5 h-2">
          {Array.from({ length: totalBars }).map((_, i) => {
            const fillAmount = Math.max(0, Math.min(1, value - i));
            return (
              <div 
                key={i} 
                className="flex-1 bg-coffee-cream/10 rounded-full overflow-hidden"
              >
                <div 
                  className="h-full bg-gradient-to-r from-award-gold to-award-gold-light transition-all duration-500 ease-out"
                  style={{ width: `${fillAmount * 100}%` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="roast-explorer" className={`py-24 bg-gradient-to-b ${currentProfile.bgGradient} transition-all duration-700 relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-semibold tracking-widest text-award-gold uppercase font-sans">Roaster Resource Center</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-cream">Roasting Profile Behavior</h2>
          <p className="font-sans text-sm text-coffee-cream/70 max-w-xl mx-auto font-light">
            Our green coffee lots exhibit exceptional thermal stability. Read below to understand how our beans develop under different roasting environments.
          </p>
        </div>

        {/* Roast Explorer Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Selector Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            {ROAST_PROFILES.map((profile) => {
              const isSelected = activeTab === profile.level;
              return (
                <button
                  key={profile.level}
                  onClick={() => setActiveTab(profile.level as any)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-350 cursor-pointer ${
                    isSelected
                      ? "bg-coffee-earth border-award-gold shadow-lg shadow-award-gold/5 scale-[1.02]"
                      : "bg-coffee-earth/40 border-coffee-light/10 hover:border-coffee-light/20 hover:bg-coffee-earth/60 hover:scale-[1.01]"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded border ${
                      isSelected ? profile.colorTheme : "text-coffee-cream/40 border-coffee-cream/10 bg-transparent"
                    }`}>
                      {profile.level}
                    </span>
                    <Flame className={`w-4 h-4 transition-transform duration-350 ${
                      isSelected ? "text-award-gold rotate-12 scale-110" : "text-coffee-cream/20"
                    }`} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-coffee-cream">{profile.name}</h3>
                  <p className="font-sans text-[11px] text-coffee-cream/55 mt-1">
                    Development Temperature: {profile.temp}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Data Screen */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between border border-coffee-light/10 relative overflow-hidden">
              {/* Decorative coffee bean graphic overlay */}
              <Coffee className="absolute right-[-20px] bottom-[-20px] w-64 h-64 text-coffee-cream/[0.02] -rotate-45 pointer-events-none" />

              <div className="space-y-8 relative z-10">
                {/* Header Info */}
                <div className="flex flex-wrap justify-between items-start gap-4 pb-6 border-b border-coffee-light/10">
                  <div>
                    <span className="text-xs tracking-widest text-award-gold font-bold uppercase block mb-1">Development Phase</span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-coffee-cream">
                      {currentProfile.name}
                    </h3>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-coffee-cream/5 border border-coffee-cream/10">
                      <Thermometer className="w-4 h-4 text-award-gold" />
                      <div className="text-left">
                        <span className="block text-[9px] text-coffee-cream/50 uppercase">Temp</span>
                        <span className="text-xs font-bold text-coffee-cream">{currentProfile.temp.split(" / ")[0]}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-coffee-cream/5 border border-coffee-cream/10">
                      <Sparkles className="w-4 h-4 text-award-gold" />
                      <div className="text-left">
                        <span className="block text-[9px] text-coffee-cream/50 uppercase">Time</span>
                        <span className="text-xs font-bold text-coffee-cream">{currentProfile.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-coffee-cream/80 leading-relaxed font-light">
                  {currentProfile.description}
                </p>

                {/* Flavor Gauges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {renderGauge("Acidity Development", currentProfile.acidity, <Sparkles className="w-3.5 h-3.5 text-award-gold" />)}
                  {renderGauge("Body Integration", currentProfile.body, <Coffee className="w-3.5 h-3.5 text-award-gold" />)}
                  {renderGauge("Sweetness Peak", currentProfile.sweetness, <Heart className="w-3.5 h-3.5 text-award-gold" />)}
                </div>

                {/* Tasting Notes Bullets */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-award-gold tracking-widest uppercase block">Lot Taste Profile Characteristics</span>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.notes.map((note) => (
                      <span 
                        key={note}
                        className="px-4 py-2 bg-coffee-cream/5 hover:bg-coffee-cream/8 border border-coffee-cream/10 text-coffee-cream rounded-full text-xs font-sans tracking-wide transition-colors"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommended Varieties */}
              <div className="mt-8 pt-6 border-t border-coffee-light/10 flex justify-between items-center text-xs sm:text-sm text-coffee-cream/65 relative z-10">
                <span>Recommended Varieties for this Profile:</span>
                <span className="font-serif font-bold text-award-gold">{currentProfile.recommended}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
