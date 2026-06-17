"use client";

import React from "react";
import { X, Trash2, Plus, Minus, ClipboardList, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQty,
    removeFromCart,
    cartCount,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-coffee-dark/80 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Sliding Panel */}
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="w-full bg-coffee-earth border-l border-coffee-light/10 flex flex-col justify-between shadow-2xl relative">
          
          {/* Header */}
          <div className="p-6 border-b border-coffee-light/10 flex justify-between items-center bg-coffee-dark/50">
            <div className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-award-gold" />
              <h3 className="font-serif text-lg font-bold text-coffee-cream">Selected Lots & Samples</h3>
              <span className="text-xs px-2 py-0.5 rounded bg-award-gold/10 text-award-gold font-bold">
                {cartCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full hover:bg-coffee-cream/5 text-coffee-cream/60 hover:text-coffee-cream cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="p-4 rounded-full bg-coffee-cream/5 border border-coffee-cream/10 text-coffee-cream/35">
                  <ClipboardList className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-base text-coffee-cream font-bold">Your inquiry list is empty</p>
                  <p className="font-sans text-xs text-coffee-cream/60 max-w-[200px]">
                    Browse our active export lots and micro-lots to add sample request boxes.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-award-gold text-coffee-dark font-sans font-bold text-xs rounded-full cursor-pointer hover:bg-award-gold-light transition-colors"
                >
                  Browse Export Lots
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-coffee-dark/30 border border-coffee-light/10 rounded-2xl relative group hover:border-coffee-light/20 transition-all"
                >
                  {/* Product Mini Image */}
                  <div className="w-20 h-20 bg-gradient-to-b from-coffee-medium/20 to-coffee-earth rounded-xl p-2 flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-auto object-contain drop-shadow-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="font-serif text-sm font-bold text-coffee-cream leading-tight">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-[10px] text-award-gold/80 mt-0.5">{item.variety}</p>
                      <p className="text-[9px] text-coffee-cream/55">Recommended Roast: {item.roast}</p>
                    </div>

                    {/* Qty selectors (Sample bag counts) */}
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center bg-coffee-dark/60 border border-coffee-light/15 rounded-lg px-1.5 py-0.5">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="p-1 text-coffee-cream/60 hover:text-coffee-cream cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs text-coffee-cream font-bold font-sans">
                          {item.qty} Sample Box(es)
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="p-1 text-coffee-cream/60 hover:text-coffee-cream cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove item */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-coffee-cream/35 hover:text-red-400 p-1.5 transition-colors cursor-pointer"
                        aria-label="Remove Lot"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-coffee-light/10 space-y-4 bg-coffee-dark/50">
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs text-coffee-cream/70">
                  <span>Selected Lots</span>
                  <span>{cart.length} Lots</span>
                </div>
                <div className="flex justify-between text-xs text-organic-light font-medium">
                  <span>Sample Material Costs</span>
                  <span>FREE FOR ROASTERS</span>
                </div>
                <div className="flex justify-between text-xs text-organic-light">
                  <span>Importer Delivery Logistics</span>
                  <span>Direct Trade Courier</span>
                </div>
                <div className="h-px bg-coffee-light/10 my-1" />
                <div className="flex justify-between text-sm font-bold text-coffee-cream">
                  <span>FOB Base Invoicing</span>
                  <span className="text-award-gold text-sm font-sans font-bold">
                    Custom Quote Pending
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-award-gold hover:bg-award-gold-light text-coffee-dark font-sans font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-award-gold/15 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Submit Inquiry & Request Samples
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center py-2 text-xs text-coffee-cream/60 hover:text-coffee-cream transition-colors cursor-pointer"
                >
                  Continue Reviewing Lots
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
