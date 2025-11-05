import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesBlock from "@/components/ServicesBlock";
import Expertise from "@/components/Expertise";
import StatsCTA from "@/components/StatsCTA";
import Hours from "@/components/Hours";

export default function Page(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesBlock />
        <Expertise />
        <StatsCTA />
        <Hours />
      </main>
      <Footer />
    </>
  );
}
