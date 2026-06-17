import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";

export const metadata: Metadata = {
  title: "Marota Coffee Group | Premium Nicaraguan Coffee Exporters",
  description: "Marota Coffee Group is a certified specialty green coffee exporter based in Nicaragua. We source, mill, and export premium organic micro-lots and high-volume commercial grades directly to international roasters and brokers.",
  keywords: ["Nicaraguan Coffee Exporters", "Organic Green Coffee Sourcing", "Matagalpa Specialty Coffee", "Jinotega Coffee Lots", "Cup of Excellence Nicaragua", "Coffee Direct Trade Logistics"],
  authors: [{ name: "Marota Coffee Group" }],
  openGraph: {
    title: "Marota Coffee Group | Nicaraguan Coffee Export Partners",
    description: "Sourcing premium green coffee lots from Jinotega and Matagalpa. Strict dry mill grading and direct trade export logistics.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-coffee-dark text-coffee-cream">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
