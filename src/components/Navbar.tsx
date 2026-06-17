"use client";

import React, { useState, useEffect } from "react";
import { Coffee, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export const Navbar: React.FC = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ${
          isScrolled
            ? "py-4 bg-coffee-dark/80 backdrop-blur-md border-b border-coffee-light/10 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Coffee className="w-8 h-8 text-award-gold group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <span className="font-serif text-xl font-bold tracking-wide text-coffee-cream">
                MAROTA COFFEE
              </span>
              <span className="block text-[10px] tracking-widest text-award-gold font-sans font-semibold">
                NICARAGUAN EXPORTERS
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wide">
            <button
              onClick={() => scrollToSection("story")}
              className="text-coffee-cream/80 hover:text-award-gold transition-colors duration-250 cursor-pointer"
            >
              Origin & Logistics
            </button>
            <button
              onClick={() => scrollToSection("roast-explorer")}
              className="text-coffee-cream/80 hover:text-award-gold transition-colors duration-250 cursor-pointer"
            >
              Roast Guide
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-coffee-cream/80 hover:text-award-gold transition-colors duration-250 cursor-pointer"
            >
              Export Lots
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="px-4 py-2 bg-organic-medium hover:bg-organic-light/95 border border-organic-light/20 text-coffee-cream rounded-full transition-all duration-250 shadow-md cursor-pointer hover:shadow-organic-light/10 hover:scale-[1.02]"
            >
              Source Lots
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-coffee-cream/5 text-coffee-cream transition-colors duration-250 cursor-pointer"
              aria-label="Open Inquiry Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-award-gold text-coffee-dark text-[11px] font-bold rounded-full flex items-center justify-center animate-pulse-slow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-coffee-cream/5 text-coffee-cream transition-colors duration-250 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-[73px] bg-coffee-dark/95 border-b border-coffee-light/10 backdrop-blur-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-6 gap-4 font-sans text-base font-medium tracking-wide">
            <button
              onClick={() => scrollToSection("story")}
              className="text-left py-2 text-coffee-cream/80 hover:text-award-gold transition-colors"
            >
              Origin & Logistics
            </button>
            <button
              onClick={() => scrollToSection("roast-explorer")}
              className="text-left py-2 text-coffee-cream/80 hover:text-award-gold transition-colors"
            >
              Roast Guide
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-left py-2 text-coffee-cream/80 hover:text-award-gold transition-colors"
            >
              Export Lots
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="w-full text-center py-3 bg-organic-medium hover:bg-organic-light/90 border border-organic-light/20 text-coffee-cream rounded-full transition-all mt-2"
            >
              Source Lots
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
