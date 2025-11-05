import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesBlock from "@/components/ServicesBlock";

export default function ServicesPage(){
  return (
    <>
      <Header />
      <main className="relative">
        <img src="/images/services-bg.svg" alt="" className="absolute inset-0 w-full h-full object-cover -z-10"/>
        <div className="container py-16">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="text-base-muted mt-2 max-w-2xl">From emergency breakdowns to planned overhauls, we’ve got you covered.</p>
        </div>
        <ServicesBlock />
      </main>
      <Footer />
    </>
  );
}
