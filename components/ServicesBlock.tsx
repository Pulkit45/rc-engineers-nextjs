"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesBlock() {
  const [visible, setVisible] = useState<number[]>([]);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = parseInt(e.target.getAttribute("data-index") || "0");
          setVisible((v) => (v.includes(idx) ? v : [...v, idx]));
        }
      });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll("[data-index]")?.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const services = [
    { title: "Turbine Repair, Servicing, Refurbishing, Purchase & Sale", subtitle: "Comprehensive Solutions", desc: "Complete shop + field solutions: repair, servicing, refurbishing, purchase/sale, erection, commissioning, overhauling, and troubleshooting for reliable performance and longer life."},
    { title: "Turbine Inspection", subtitle: "Performance Optimization", desc: "Condition assessment, vibration analysis, balancing, and health checks to keep units at peak output and extend maintenance intervals."},
    { title: "Turbine Parts Replacement", subtitle: "Emergency Repairs", desc: "Rapid response on critical components—rotors, bearings, seals, blades—with OEM-level precision to minimize downtime."},
    { title: "Turbine Upgrades", subtitle: "Technical Support", desc: "Modernizations and control tweaks to boost efficiency, safety, and reliability—plus on-call technical guidance."}
  ];

  return (
    <section id="services" ref={ref} className="section relative overflow-hidden bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-blue-200 bg-blue-50 text-blue-700 shadow-sm mb-6">
            <span className="text-lg">🔧</span>
            <span>Our Services</span>
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text">Comprehensive Turbine Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto font-medium leading-relaxed">
            Precision engineering, rapid mobilization, and OEM-agnostic expertise.
          </p>
        </div>
        
        {/* Featured Image Section */}
        <div className="mb-16 relative rounded-2xl overflow-hidden shadow-xl group border-2 border-white">
          <Image 
            src="/images/turbines/services-4k.jpg" 
            alt="Turbine Services" 
            width={1200}
            height={600}
            className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
            <div className="max-w-4xl">
              <h3 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
                Industry-Leading Turbine Expertise
              </h3>
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl drop-shadow-xl font-semibold">
                Decades of experience delivering reliable, efficient turbine solutions nationwide
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((s, i) => (
            <article 
              key={s.title} 
              data-index={i} 
              style={{ transitionDelay: `${i * 120}ms` }} 
              className={[
                "card p-8 md:p-10 relative transition-all duration-300 bg-white border border-blue-100",
                "hover:translate-y-[-6px] hover:border-blue-300 hover:shadow-xl",
                visible.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              ].join(" ")}
            >
              <div className="absolute -top-3 left-8 w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
              
              <div className="mb-6 flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-[var(--primary)] via-[#3b82f6] to-[#6aa6ff] shadow-lg">
                  {i + 1}
                </div>
                <div className="text-xs font-bold text-[#2563eb] uppercase tracking-wide">{s.subtitle}</div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold leading-tight text-[var(--text)] mb-4">{s.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed text-base mb-6">{s.desc}</p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-blue-100">
                <Link href="/contact" className="btn btn-primary px-6 py-3 text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Get Quote
                </Link>
                <a href="#expertise" className="btn btn-ghost px-6 py-3 text-sm font-semibold hover:bg-blue-50">
                  See Capabilities
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
