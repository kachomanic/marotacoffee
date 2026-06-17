"use client";

import React, { useState } from "react";
import { Filter, Star, ClipboardList, Award } from "lucide-react";
import { useCart } from "../context/CartContext";

interface Product {
  id: string;
  name: string;
  variety: string;
  price: number; // FOB or Sample price
  priceUnit: string; // FOB per lb or per sample box
  roast: "LIGHT" | "MEDIUM" | "DARK";
  flavorCategory: "Citrus & Floral" | "Sweet & Chocolatey" | "Nutty & Spicy";
  tastingNotes: string[];
  description: string;
  score: number;
  altitude: string;
  availableVol: string;
  process: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: "maragogype-organic",
    name: "Maragogype Reserve",
    variety: "Maragogype (Elephant Beans)",
    price: 4.80,
    priceUnit: "lb (Green FOB)",
    roast: "LIGHT",
    flavorCategory: "Citrus & Floral",
    tastingNotes: ["Bergamot", "Lemon Blossom", "Jasmine Tea"],
    description: "Colossal screen beans sourced from mineral-rich volcanic shade estates. Delivers an extremely smooth, tea-like body, delicate citrus brightness, and premium floral honeys.",
    score: 90.2,
    altitude: "1,420m",
    availableVol: "65 Bags (69kg)",
    process: "Washed / Organic",
    image: "/images/coffee_bag.png",
  },
  {
    id: "pacamara-micro",
    name: "Pacamara Estate",
    variety: "Pacamara",
    price: 4.55,
    priceUnit: "lb (Green FOB)",
    roast: "DARK",
    flavorCategory: "Nutty & Spicy",
    tastingNotes: ["Dark Cocoa", "Red Cherry", "Cinnamon Spice"],
    description: "An exceptional hybrid yielding intense, full-bodied complexity. Exhibits bold dark chocolate undertones balanced by stone fruit sweetness and a warm cinnamon-spiced finish.",
    score: 88.5,
    altitude: "1,380m",
    availableVol: "110 Bags (69kg)",
    process: "Natural / Organic",
    image: "/images/coffee_bag.png",
  },
  {
    id: "caturra-volcanic",
    name: "Caturra Peaberry",
    variety: "Caturra & Bourbon",
    price: 4.10,
    priceUnit: "lb (Green FOB)",
    roast: "MEDIUM",
    flavorCategory: "Sweet & Chocolatey",
    tastingNotes: ["Milk Chocolate", "Caramel Honey", "Red Plum"],
    description: "The traditional heart of Nicaraguan specialty coffee. Slow-roasted to medium to maximize caramelization, resulting in a smooth, creamy body and notes of sweet plum.",
    score: 87.0,
    altitude: "1,450m",
    availableVol: "240 Bags (69kg)",
    process: "Washed / Organic",
    image: "/images/coffee_bag.png",
  },
  {
    id: "geisha-champion",
    name: "Geisha Special Reserve",
    variety: "Geisha Micro-Lot",
    price: 6.80,
    priceUnit: "lb (Green FOB)",
    roast: "LIGHT",
    flavorCategory: "Citrus & Floral",
    tastingNotes: ["Jasmine Honey", "Mandarin Orange", "Bergamot"],
    description: "A rare organic micro-lot of the celebrated Geisha variety. Extremely delicate and tea-like, with intense aromas of jasmine, clean white honey, and a crystalline sweet finish.",
    score: 91.8,
    altitude: "1,520m",
    availableVol: "30 Bags (69kg)",
    process: "Honey / Organic",
    image: "/images/coffee_bag.png",
  },
];

export const ProductCatalog: React.FC = () => {
  const { addToCart } = useCart();
  const [roastFilter, setRoastFilter] = useState<string>("ALL");
  const [flavorFilter, setFlavorFilter] = useState<string>("ALL");

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesRoast = roastFilter === "ALL" || product.roast === roastFilter;
    const matchesFlavor = flavorFilter === "ALL" || product.flavorCategory === flavorFilter;
    return matchesRoast && matchesFlavor;
  });

  return (
    <section id="catalog" className="py-24 bg-coffee-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-widest text-organic-light uppercase font-sans">Exports Catalogue</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-cream">Export Lots & Varieties</h2>
            <p className="font-sans text-sm text-coffee-cream/70 max-w-xl font-light">
              FOB Puerto Corinto contract rates. Request sample bag kits (300g green or roasted) for custom quality reviews in your roastery.
            </p>
          </div>

          {/* Filter Dashboard Icon */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-coffee-cream/5 border border-coffee-cream/10 rounded-full text-xs text-coffee-cream/60">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Showing {filteredProducts.length} Export Lots</span>
          </div>
        </div>

        {/* Filters Panel */}
        <div className="glass-panel rounded-2xl p-6 mb-12 border border-coffee-light/10 flex flex-wrap gap-8 items-center justify-between">
          <div className="flex flex-wrap gap-8">
            {/* Roast Filter */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-award-gold uppercase tracking-wider">Recommended Roast</label>
              <div className="flex flex-wrap gap-2">
                {["ALL", "LIGHT", "MEDIUM", "DARK"].map((roast) => (
                  <button
                    key={roast}
                    onClick={() => setRoastFilter(roast)}
                    className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-250 cursor-pointer ${
                      roastFilter === roast
                        ? "bg-award-gold border-award-gold text-coffee-dark font-bold shadow-md shadow-award-gold/15"
                        : "bg-transparent border-coffee-light/10 text-coffee-cream/70 hover:border-coffee-light/35 hover:text-coffee-cream"
                    }`}
                  >
                    {roast === "ALL" ? "All Roasts" : roast}
                  </button>
                ))}
              </div>
            </div>

            {/* Flavor Filter */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-organic-light uppercase tracking-wider">Flavor Profile</label>
              <div className="flex flex-wrap gap-2">
                {["ALL", "Citrus & Floral", "Sweet & Chocolatey", "Nutty & Spicy"].map((flavor) => (
                  <button
                    key={flavor}
                    onClick={() => setFlavorFilter(flavor)}
                    className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-250 cursor-pointer ${
                      flavorFilter === flavor
                        ? "bg-organic-medium border-organic-light/35 text-coffee-cream font-bold shadow-md shadow-organic-medium/15"
                        : "bg-transparent border-coffee-light/10 text-coffee-cream/70 hover:border-coffee-light/35 hover:text-coffee-cream"
                    }`}
                  >
                    {flavor === "ALL" ? "All Profiles" : flavor}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reset Filters */}
          {(roastFilter !== "ALL" || flavorFilter !== "ALL") && (
            <button
              onClick={() => {
                setRoastFilter("ALL");
                setFlavorFilter("ALL");
              }}
              className="text-xs text-coffee-cream/50 hover:text-award-gold transition-colors font-medium border-b border-dashed border-coffee-cream/20 pb-0.5 hover:border-award-gold cursor-pointer"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center border border-coffee-light/10">
            <p className="font-sans text-coffee-cream/60">No export lots match your current filters. Try relaxing your selection.</p>
            <button
              onClick={() => {
                setRoastFilter("ALL");
                setFlavorFilter("ALL");
              }}
              className="mt-4 px-6 py-2.5 bg-coffee-cream/5 border border-coffee-cream/10 rounded-full text-xs text-coffee-cream hover:bg-coffee-cream/10 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="glass-panel rounded-2xl p-5 border border-coffee-light/10 hover:border-award-gold/25 transition-all duration-350 flex flex-col justify-between group hover:shadow-xl hover:shadow-award-gold/[0.02] hover:-translate-y-1"
              >
                <div>
                  {/* Product Image Panel */}
                  <div className="relative aspect-square bg-gradient-to-b from-coffee-medium/20 to-coffee-earth rounded-xl p-4 flex items-center justify-center mb-5 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-36 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* SCAA Cupping Rating Badge */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-coffee-dark/80 backdrop-blur-md border border-award-gold/25 text-award-gold text-[10px] font-bold tracking-wide flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-award-gold" />
                      Q-Score: {product.score}
                    </div>

                    {/* Altitude Tag */}
                    <div className="absolute bottom-2.5 left-2.5 text-[9px] text-coffee-cream/40 font-mono">
                      Alt: {product.altitude}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-serif text-lg font-bold text-coffee-cream leading-tight">
                        {product.name}
                      </h3>
                      <div className="text-right">
                        <span className="font-sans font-bold text-base text-award-gold block">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-[9px] text-coffee-cream/45 block mt-0.5">{product.priceUnit}</span>
                      </div>
                    </div>

                    <p className="text-[10px] font-semibold tracking-wider text-award-gold uppercase">
                      {product.variety}
                    </p>

                    <p className="text-xs text-coffee-cream/75 leading-relaxed font-light line-clamp-3">
                      {product.description}
                    </p>

                    {/* Tags row */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="text-[9px] px-2 py-0.5 rounded bg-coffee-cream/5 border border-coffee-cream/10 text-coffee-cream/65 uppercase tracking-wide">
                        {product.process}
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded bg-organic-medium/40 border border-organic-light/20 text-organic-light uppercase tracking-wide">
                        {product.availableVol}
                      </span>
                    </div>

                    {/* Tasting Notes */}
                    <div className="pt-3 pb-1 flex flex-wrap gap-1">
                      {product.tastingNotes.map((note) => (
                        <span
                          key={note}
                          className="text-[9px] px-2 py-0.5 bg-coffee-cream/5 text-coffee-cream/50 rounded-full border border-transparent font-medium"
                        >
                          • {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    variety: product.variety,
                    roast: product.roast,
                    image: product.image,
                  })}
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 bg-coffee-cream/5 hover:bg-award-gold hover:text-coffee-dark border border-coffee-cream/15 hover:border-award-gold text-coffee-cream text-xs font-sans font-semibold rounded-xl transition-all duration-350 cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <ClipboardList className="w-3.5 h-3.5" />
                  Add to Inquiry & Samples
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Award Footer Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-organic-green/35 border border-organic-light/10 rounded-2xl max-w-xl mx-auto">
            <Award className="w-6 h-6 text-award-gold flex-shrink-0" />
            <p className="text-xs text-coffee-cream/75 text-left leading-normal font-sans">
              All exports hold certified <span className="text-organic-light font-semibold">100% Organic</span> traceability and adhere to SCAA guidelines. We supply sample logistics globally.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
