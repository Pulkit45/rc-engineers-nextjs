"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Expertise() {
  const [visible, setVisible] = useState<string[]>([]);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = e.target.getAttribute("data-index") || "";
          setVisible((v) => (v.includes(idx) ? v : [...v, idx]));
        }
      });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll("[data-index]")?.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const coreValues = [
    { title: "Technical Proficiency", description: "Decades of hands-on turbine work—precision at every stage." },
    { title: "Client Satisfaction",   description: "Fast comms, transparent updates, and consistent outcomes." },
    { title: "Reliable Solutions",    description: "From field balancing to full overhauls—process-driven reliability." }
  ];

  const bullets = [
    "OEM-agnostic: Siemens • GE • BHEL • Triveni",
    "Vibration analysis • Field balancing • Laser alignment",
    "Rotor, bearing & seal refurbishing (micron-level)",
    "Erection & commissioning assistance",
    "Zero-incident, safety-first culture",
  ];

  return (
    <section id="expertise" ref={ref} className="section relative overflow-hidden bg-white">
      <div className="container">
        <div className="text-center mb-24">
          <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-black border-2 border-amber-300 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 text-amber-700 shadow-lg mb-8">
            <span className="text-xl">⭐</span>
            <span className="tracking-wide">Our Expertise</span>
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-[var(--muted)] max-w-3xl mx-auto font-semibold leading-relaxed">Veteran turbine engineers. Proven reliability. Nationwide presence.</p>
        </div>

        {/* Gallery Showcase */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            '/images/gallery-1-4k.jpg',
            '/images/gallery-2-4k.jpg',
            '/images/gallery-3-4k.jpg',
            '/images/gallery-4-4k.jpg'
          ].map((img, idx) => (
            <div
              key={idx}
              data-index={`gallery-${idx}`}
              className={[
                "rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-white",
                "hover:scale-110 hover:-rotate-1",
                visible.includes(`gallery-${idx}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              ].join(" ")}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <Image 
                src={img} 
                alt={`Turbine work ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {coreValues.map((c, i) => (
            <div
              key={c.title}
              data-index={`core-${i}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={["card p-10 lg:p-12 text-center transition-all duration-500 bg-white border-2 border-blue-100 hover:shadow-2xl hover:-translate-y-3 hover:border-blue-400 hover:scale-105", visible.includes(`core-${i}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"].join(" ")}
            >
              <div className="mx-auto mb-8 w-24 h-24 rounded-3xl flex items-center justify-center text-white text-4xl font-black
                              bg-gradient-to-br from-[var(--primary)] via-[#3b82f6] to-[#6aa6ff] shadow-2xl">
                ✓
              </div>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-black text-[var(--text)] mb-4">{c.title}</h4>
              <p className="text-[var(--muted)] leading-relaxed text-base md:text-lg font-medium">{c.description}</p>
            </div>
          ))}
        </div>

        <div
          data-index="tech"
          className={["card p-10 md:p-14 lg:p-16 transition-all duration-500 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 border-2 border-blue-200", visible.includes("tech") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"].join(" ")}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              <span className="gradient-text">Technical Capabilities</span>
            </h3>
            <p className="text-[var(--muted)] text-xl md:text-2xl font-semibold">Full-spectrum service expertise</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {bullets.map((b, i) => (
              <div
                key={b}
                data-index={`b-${i}`}
                style={{ transitionDelay: `${i * 80}ms` }}
                className={["rounded-2xl border-2 border-blue-200 bg-white px-8 py-6 transition-all shadow-lg",
                            "hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 hover:scale-105",
                            visible.includes(`b-${i}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1.5 inline-block w-4 h-4 rounded-full bg-gradient-to-r from-[var(--primary)] to-[#6aa6ff] shadow-md flex-shrink-0" />
                  <p className="text-[var(--text)] font-bold leading-relaxed text-base md:text-lg">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
