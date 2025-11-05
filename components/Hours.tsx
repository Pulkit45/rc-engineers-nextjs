"use client";
import { useEffect, useState, useRef } from "react";

export default function Hours() {
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

  return (
    <section id="hours" ref={ref} className="section relative overflow-hidden bg-white">
      <div className="container grid md:grid-cols-2 gap-8">
        <div
          data-index={0}
          style={{ transitionDelay: "80ms" }}
          className={["card p-8 transition-all duration-700 bg-gradient-to-br from-blue-50 to-white hover:shadow-xl hover:-translate-y-2", visible.includes(0) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"].join(" ")}
        >
          <div className="text-3xl font-bold mb-6 text-[var(--text)]">Operating Hours</div>
          <ul className="mt-4 space-y-3 text-[var(--muted)] text-base">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              <strong>Mon – Sat:</strong> 9:00 AM – 7:00 PM
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              <strong>Sunday:</strong> Emergency support only
            </li>
          </ul>
          <p className="mt-6 text-base text-[var(--muted)] bg-blue-50 p-4 rounded-lg border border-blue-100">
            We respond to emergencies 24 × 7 — call any of our regional leads.
          </p>
        </div>

        <div
          data-index={1}
          style={{ transitionDelay: "200ms" }}
          className={["card p-8 transition-all duration-700 bg-gradient-to-br from-green-50 to-white hover:shadow-xl hover:-translate-y-2", visible.includes(1) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"].join(" ")}
        >
          <div className="text-3xl font-bold mb-6 text-[var(--text)]">Workshop &amp; Field</div>
          <p className="text-[var(--muted)] mt-2 text-base leading-relaxed">
            Field crews mobilize within hours for breakdowns. Workshop jobs are scheduled with
            milestone-based tracking and daily updates.
          </p>
          <p className="mt-6 text-base text-[var(--muted)] bg-green-50 p-4 rounded-lg border border-green-100">
            Each assignment is monitored in real-time until hand-over.
          </p>
        </div>
      </div>
    </section>
  );
}
