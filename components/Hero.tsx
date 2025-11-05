"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-[var(--nav-h)]">
      <div
        className="hero-photo"
        style={{ backgroundImage: "url('/images/turbines/hero-4k.jpg')" } as React.CSSProperties}
      />
      {/* Balanced overlay - lighter to show background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/35 to-[var(--primary)]/55 z-0" />
<div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15 z-0" />

      
      {/* Subtle decorative orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl z-0" />
      
      <div className="container py-24 md:py-32 relative z-10">
      <div className={`max-w-5xl text-center mx-auto ${show ? "animate-[fadeUp_.8s_ease-out_both]" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/30 bg-white/90 backdrop-blur-md shadow-lg text-[var(--primary)] mb-8 hover:scale-105 transition-transform">
            <span className="text-lg">🚀</span>
            <span>R&C Engineers & Associates</span>
          </span>
          
          <h1 className="font-extrabold leading-[1.1] tracking-tight text-white mb-8">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2">
              A PERFECT{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-white drop-shadow-2xl font-black">
                  LIFELINE
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-300 to-transparent rounded-full opacity-50"></span>
              </span>
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1 text-white/95">
              FOR STEAM TURBINE
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg leading-relaxed font-medium px-4">
            End-to-end turbine repair, overhaul, and performance optimization — executed with precision engineering and rapid turnaround.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link 
              href="#services" 
              className="group relative px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[#3b82f6] rounded-xl shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link 
              href="/contact" 
              className="px-10 py-4 text-base font-bold text-[var(--primary)] bg-white rounded-xl shadow-xl hover:scale-105 hover:bg-blue-50 border border-white/30 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 max-w-xl mx-auto px-4">
            {[
              { label: "99.2%", sublabel: "Uptime", icon: "⚡" },
              { label: "24/7", sublabel: "Support", icon: "🛡️" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-5 rounded-xl bg-white/8 backdrop-blur-sm border border-white/15 hover:bg-white/12 transition-all flex-1 max-w-[200px]">
                <div className="text-xl mb-1.5">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-md mb-1">{stat.label}</div>
                <div className="text-xs md:text-sm text-white/85 font-medium uppercase tracking-wide">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
