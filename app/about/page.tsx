"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function AboutPage(){
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<(number | string)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index') || '0';
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      title: "35+ Years Experience",
      description: "Decades of expertise in turbine services"
    },
    {
      title: "Former Belliss & Triveni Engineers",
      description: "Dedicated team with specialized knowledge"
    },
    {
      title: "Multi-Industry Expertise",
      description: "Serving sugar, distillery, paper, and fertilizer industries"
    },
    {
      title: "Comprehensive Services",
      description: "Inspection, overhauling, retrofitting, and online leak detection"
    }
  ];

  return (
    <>
      <Header />
      <main ref={sectionRef} className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 -z-10">
            <Image 
              src="/images/about-bg.svg" 
              alt="" 
              fill 
              className="object-cover animate-float opacity-20"
              priority
            />
          </div>
          
          <div className="container relative z-10">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="tag animate-pulse bg-blue-100 text-blue-800 border-blue-200">About R&C Engineers</span>
              <h1 className="text-5xl md:text-7xl font-bold mt-4 text-white">
                About <span className="text-blue-400">R&C Engineers</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mt-6 leading-relaxed max-w-3xl mx-auto">
                Welcome to R&C Engineers & Associates, where our expertise in turbine services is backed by over 35 years of experience.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="section bg-gradient-to-b from-white to-slate-50">
          <div className="container">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="card p-8 md:p-12 bg-white shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Our Story</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Our dedicated team of former Belliss and Triveni service engineers is committed to delivering high-quality repair, refurbishment, and commissioning services for BELLISS INDIA LTD. and TRIVENI turbines.
                  </p>
                  
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    We pride ourselves on our comprehensive offerings, including inspection, overhauling, retrofitting, and online leak detection, ensuring optimal steam consumption and reliable performance.
                  </p>
                  
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Join our esteemed customers from the sugar, distillery, paper, and fertilizer industries and experience our unwavering commitment to excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Our Achievements</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, i) => (
                  <div 
                    key={achievement.title}
                    data-index={`achievement-${i}`}
                    className={`card p-6 text-center transition-all duration-700 hover:scale-105 hover:shadow-xl group bg-white border-2 border-slate-100 hover:border-blue-200 ${
                      visibleItems.includes(`achievement-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Values */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div 
                data-index="mission"
                className={`card p-8 transition-all duration-700 hover:scale-105 hover:shadow-xl group bg-white border-2 border-slate-100 hover:border-green-200 ${
                  visibleItems.includes('mission') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  Be the most dependable lifeline for steam turbines by combining precision engineering with rapid response and unwavering commitment to excellence.
                </p>
              </div>
              
              <div 
                data-index="values"
                className={`card p-8 transition-all duration-700 hover:scale-105 hover:shadow-xl group bg-white border-2 border-slate-100 hover:border-purple-200 ${
                  visibleItems.includes('values') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  ⭐
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Our Values</h3>
                <ul className="space-y-3">
                  {[
                    "Safety above all",
                    "Transparency & accountability", 
                    "Continuous improvement",
                    "Client partnership mindset"
                  ].map((value, i) => (
                    <li key={value} className="flex items-center text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
