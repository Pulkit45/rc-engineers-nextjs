"use client";
import { useEffect, useState, useRef } from "react";

export default function StatsCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section relative overflow-hidden bg-gradient-to-br from-[var(--primary)] via-blue-600 to-[var(--primary)]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "url('/images/turbines/stats-4k.jpg')", backgroundPosition: "center", backgroundSize: "cover" } as React.CSSProperties}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/90 via-blue-600/85 to-[var(--primary)]/90" />

      <div
        className={[
          "container relative z-10 text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-[0.99]"
        ].join(" ")}
      >
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
          99.2% Uptime Goals. 24×7 Response. Nationwide Reach.
        </h3>

        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Talk to our technical lead within minutes. We mobilize fast so your plant keeps generating.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { k: "Avg. Dispatch", v: "⟶ 4–8 hrs" },
            { k: "Cities Served", v: "55+" },
            { k: "Jobs Completed", v: "1,200+" }
          ].map((s, i) => (
            <div
              key={s.k}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-6 hover:bg-white/20 hover:scale-105 transition-all shadow-xl"
            >
              <div className="text-sm text-white/80 font-medium mb-2">{s.k}</div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-white">{s.v}</div>
            </div>
          ))}
        </div>

        <a
          href="/contact"
          className="btn bg-white text-[var(--primary)] border-0 mt-10 px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 hover:bg-blue-50 transition-all inline-flex items-center gap-2"
        >
          Request a Call
        </a>
      </div>
    </section>
  );
}
