"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";

export default function DocumentsPage() {
  const [visible, setVisible] = useState<number[]>([]);
  const ref = useRef<HTMLElement>(null);
  const pdfViewerRef = useRef<HTMLDivElement>(null);

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

  const documents = [
    {
      name: "R & C Profile",
      filename: "R & C Profile (2).pdf",
      path: "/images/documents/R & C Profile (2).pdf",
      description: "Company profile and capabilities overview"
    }
  ];

  return (
    <>
      <Header />
      <main ref={ref} className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[var(--primary)] via-blue-600 to-[var(--primary)]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-0" />
          
          <div className="container py-20 md:py-28 relative z-10">
            <div className="max-w-4xl text-center mx-auto">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/30 bg-white/90 backdrop-blur-md shadow-lg text-[var(--primary)] mb-8">
                <span className="text-lg">📄</span>
                <span>Documents</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
                Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">Documents</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg leading-relaxed font-medium">
                Browse and download our company profiles, brochures, and technical documentation
              </p>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="section relative overflow-hidden bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                <span className="gradient-text">Available Documents</span>
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Browse and download our company documents
              </p>
            </div>

            {/* PDF Viewer */}
            <div className="mb-12 max-w-6xl mx-auto">
              <div className="card p-6 border-2 border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-1">
                      {documents[0]?.name || "Document"}
                    </h3>
                    <p className="text-sm text-[var(--muted)]">
                      {documents[0]?.description || ""}
                    </p>
                  </div>
                  <a
                    href={`/images/documents/${encodeURIComponent(documents[0]?.filename || "")}`}
                    download
                    className="btn btn-primary px-6 py-3 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                  >
                    <span>📥</span>
                    <span>Download PDF</span>
                  </a>
                </div>
                
                <div 
                  ref={pdfViewerRef}
                  className="w-full rounded-lg overflow-hidden border-2 border-blue-100 bg-gray-50"
                  style={{ minHeight: '800px' }}
                >
                  <iframe
                    src={`/images/documents/${encodeURIComponent(documents[0]?.filename || "")}#toolbar=1&navpanes=1&scrollbar=1`}
                    className="w-full h-full"
                    style={{ minHeight: '800px' }}
                    title={documents[0]?.name || "PDF Viewer"}
                  />
                </div>
              </div>
            </div>

            {/* Document List */}
            {documents.length > 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {documents.map((doc, i) => (
                  <div
                    key={doc.filename}
                    data-index={i}
                    style={{ transitionDelay: `${i * 100}ms` }}
                    className={[
                      "card p-6 relative transition-all duration-500 bg-white border-2 border-blue-100",
                      "hover:translate-y-[-8px] hover:border-blue-400 hover:shadow-2xl",
                      visible.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    ].join(" ")}
                  >
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center shadow-lg">
                        <span className="text-3xl text-white">📄</span>
                      </div>
                      <h3 className="text-lg font-bold text-[var(--text)] mb-1">{doc.name}</h3>
                      <p className="text-xs text-[var(--muted)]">{doc.description}</p>
                    </div>

                    <div className="pt-4 border-t border-blue-100">
                      <a
                        href={`/images/documents/${encodeURIComponent(doc.filename)}`}
                        download
                        className="btn btn-primary w-full justify-center py-2.5 text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                      >
                        <span>📥</span>
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

