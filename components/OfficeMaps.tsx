"use client";

import Link from "next/link";

type Office = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  mapsLink: string; // Google Maps share link
  mapsEmbed: string; // Google Maps embed URL
};

const offices: Office[] = [
  {
    name: "IN Local Office",
    addressLine1: "318 HUDA Pundri",
    addressLine2: "Kaithal, Haryana 136026",
    mapsLink: "https://maps.app.goo.gl/VgTSTJFKZX6ZQaK17",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.85!2d76.3932!3d29.7999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ3JzU5LjYiTiA3NsKwMjMnMzUuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    name: "Overseas Office",
    addressLine1: "Unit 018 Panorama Gardens B/C",
    addressLine2: "70 Soetdoring Avenue, Bassonia, Ext. 1, 2091",
    mapsLink: "https://maps.app.goo.gl/MdmyqXY4WJd3aKHV9",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d28.2!3d-26.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA2JzAwLjAiUyAyOMKwMTInMDAuMCJF!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
  },
];


export default function OfficeMaps() {
  return (
    <section
      id="offices"
      className="section relative overflow-hidden bg-white"
    >
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-blue-200 bg-blue-50 text-blue-700 shadow-sm mb-6">
            <span className="text-lg">📍</span>
            <span>Our Offices</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text">Find Us on the Map</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Visit our offices or get directions using Google Maps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offices.map((o) => (
            <div
              key={o.name}
              className="card rounded-2xl overflow-hidden border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl"
            >
              <div className="aspect-[16/10] relative bg-gray-100">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(o.addressLine1 + (o.addressLine2 ? ', ' + o.addressLine2 : ''))}&output=embed`}
                  title={o.name}
                  loading="lazy"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="p-6 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="text-lg font-bold text-[var(--text)] mb-2">{o.name}</div>
                  <div className="text-sm text-[var(--muted)]">{o.addressLine1}</div>
                  {o.addressLine2 ? (
                    <div className="text-sm text-[var(--muted)]">{o.addressLine2}</div>
                  ) : null}
                </div>

                <Link
                  href={o.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-5 py-2.5 text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                >
                  Directions
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
