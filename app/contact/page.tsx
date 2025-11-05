import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage(){
  return (
    <>
      <Header />
      <main className="relative">
        <img src="/images/contact-bg.svg" alt="" className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30"/>
        <section className="section">
          <div className="container grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 bg-blue-50 text-blue-700 mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">Contact Us</h1>
              <p className="text-lg text-[var(--muted)] mb-6">
                Share your turbine details, OEM, symptoms, and outage window. We'll respond fast with a plan.
              </p>

              <div className="card p-6">
                <div className="text-xl font-semibold mb-4">R&amp;C Engineers &amp; Associates</div>
                
                <div className="space-y-3 text-base-muted">
                  <div>
                    <strong className="text-[var(--text)]">📧 Email:</strong><br/>
                    <a href="mailto:rcengineers95@gmail.com" className="hover:underline">rcengineers95@gmail.com</a>
                  </div>
                  
                  <div>
                    <strong className="text-[var(--text)]">📞 Phone (India):</strong><br/>
                    <a href="tel:+919888803453" className="hover:underline">+91 9888803453</a><br/>
                    <a href="tel:+919306998833" className="hover:underline">+91 9306998833</a>
                  </div>
                  
                  <div>
                    <strong className="text-[var(--text)]">📞 Phone (South Africa):</strong><br/>
                    <a href="tel:+27747170959" className="hover:underline">+27 74 717 0959</a><br/>
                    <a href="tel:+27781391509" className="hover:underline">+27 78 139 1509</a>
                  </div>
                  
                  <div>
                    <strong className="text-[var(--text)]">📍 Address (India):</strong><br/>
                    <a 
                      href="https://maps.app.goo.gl/VgTSTJFKZX6ZQaK17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      318 HUDA Pundri, Kaithal, Haryana 136026
                    </a>
                  </div>
                  
                  <div>
                    <strong className="text-[var(--text)]">📍 Address (South Africa):</strong><br/>
                    <a 
                      href="https://maps.app.goo.gl/MdmyqXY4WJd3aKHV9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Unit 018 Panorama Gardens B/C<br/>70 Soetdoring Avenue, Bassonia, Ext. 1, 2091
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
