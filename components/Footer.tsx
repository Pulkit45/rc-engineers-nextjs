"use client";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

const OfficeMaps = dynamic(() => import('@/components/OfficeMaps'), { ssr: false });

export default function Footer(){
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setShow(true));
    }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <OfficeMaps />
      <footer ref={ref} className="mt-16 border-t border-[var(--border)] bg-white">
      <div className={["container py-12 transition-all duration-700", show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"].join(" ")}>
        <div className="text-center mb-10">
          <div className="text-2xl font-extrabold">R&amp;C Engineers &amp; Associates</div>
          <p className="text-[var(--muted)]">A perfect lifeline for steam turbine</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="card p-6">
            <div className="font-bold text-lg mb-3">🇮🇳 Local Office</div>
            <p className="text-sm text-[var(--muted)]">
              <strong>Address:</strong><br/>
              <a
                href="https://maps.app.goo.gl/VgTSTJFKZX6ZQaK17"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                318 HUDA Pundri<br/>Kaithal, Haryana 136026
              </a>
            </p>
            <p className="text-sm text-[var(--muted)] mt-2">
              <strong>Phone:</strong><br/>
              +91 9888803453<br/>+91 9306998833
            </p>
          </div>

          <div className="card p-6">
            <div className="font-bold text-lg mb-3">🌍 Overseas Office</div>
            <p className="text-sm text-[var(--muted)]">
              <strong>Address:</strong><br/>
              <a
  href="https://maps.app.goo.gl/MdmyqXY4WJd3aKHV9"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
> Unit 018 Panorama Gardens B/C<br/>70 Soetdoring Avenue<br/>Bassonia, Ext. 1, 2091</a>
            </p>
            <p className="text-sm text-[var(--muted)] mt-2">
              <strong>Phone:</strong><br/>
              +27 74 717 0959<br/>+27 78 139 1509
            </p>
          </div>

          <div className="card p-6">
            <div className="font-bold text-lg mb-3">📧 Contact</div>
            <p className="text-sm text-[var(--muted)]">
              <strong>Email:</strong><br/>rcengineers95@gmail.com
            </p>
            <p className="text-sm text-[var(--muted)] mt-2">
              <strong>Operating Hours:</strong><br/>
              Mon–Sat: 9:00 AM – 7:00 PM<br/>Sunday: Emergency support only
            </p>
          </div>

          <div className="card p-6">
            <div className="font-bold text-lg mb-3">🔧 Services</div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              • Turbine Repair &amp; Servicing<br/>
              • Inspection &amp; Overhauling<br/>
              • Parts Replacement<br/>
              • Emergency Repairs<br/>
              • Performance Optimization
            </p>
          </div>
        </div>

        <div className={["text-center py-5 text-xs text-[var(--muted)] border-t border-[var(--border)]", show ? "opacity-100" : "opacity-0"].join(" ")}>
          © {new Date().getFullYear()} R&amp;C Engineers &amp; Associates. All rights reserved.
        </div>
      </div>
    </footer>
    </>
  );
}
