import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-timber-dark">
      {/* Authentic Minnesota Yard - Mature oaks/maples and a clean residential lawn */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1920&auto=format&fit=crop" 
          alt="Minnesota residential yard with mature trees" 
          className="w-full h-full object-cover opacity-40 grayscale-[20%]"
        />
        {/* Darker gradients to fix the "too bright" issue and enhance text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-timber-dark via-timber-dark/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-timber-dark via-transparent to-timber-dark/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl pt-24 md:pt-32">
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-klein-orange/20 border-l-4 border-klein-orange mb-10 backdrop-blur-md">
            <span className="font-rugged text-klein-orange text-sm md:text-base uppercase tracking-[0.3em] font-bold">Paynesville, MN • Klein Tree Services</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading leading-[0.9] mb-8 uppercase font-black tracking-tight">
            <span className="text-white block">PRECISION</span>
            <span className="text-klein-orange block italic">POWER.</span>
            <span className="text-white block opacity-20 text-4xl md:text-7xl mt-2 tracking-widest uppercase">Arborist Work</span>
          </h1>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-12 max-w-3xl font-marker leading-relaxed drop-shadow-2xl">
            From the highest climbs to the deepest grinds. We are the brothers who bring skill to every tree we touch. Professional results, zero yard debris.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-premium px-10 py-5 text-white text-xl flex items-center justify-center space-x-3 group shadow-2xl"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="h-6 w-6 transform group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, '#services')}
              className="px-10 py-5 border-2 border-white/20 hover:border-white transition-all text-white font-bold tracking-widest text-center flex items-center justify-center space-x-2 backdrop-blur-md hover:bg-white/5"
            >
              <span>SERVICES</span>
            </a>
          </div>

          {/* Stats Ticker */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div className="flex flex-col">
              <p className="font-rugged text-klein-orange text-3xl md:text-4xl font-bold">100%</p>
              <p className="text-[10px] md:text-xs font-bold uppercase text-white tracking-widest opacity-60">Fully Insured</p>
            </div>
            <div className="flex flex-col">
              <p className="font-rugged text-klein-orange text-3xl md:text-4xl font-bold">24/7</p>
              <p className="text-[10px] md:text-xs font-bold uppercase text-white tracking-widest opacity-60">Emergency Crew</p>
            </div>
            <div className="flex flex-col">
              <p className="font-rugged text-klein-orange text-3xl md:text-4xl font-bold">LOCAL</p>
              <p className="text-[10px] md:text-xs font-bold uppercase text-white tracking-widest opacity-60">Paynesville Owned</p>
            </div>
            <div className="flex flex-col">
              <p className="font-rugged text-klein-orange text-3xl md:text-4xl font-bold">CLEAN</p>
              <p className="text-[10px] md:text-xs font-bold uppercase text-white tracking-widest opacity-60">Zero Yard Waste</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;