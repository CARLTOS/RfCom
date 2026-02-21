"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight, Wifi, ShieldCheck, Mail, MapPin,
  MessageCircle, CreditCard, X, ExternalLink, Play, Tv, HeadphonesIcon, Phone,
  Zap, Rocket, Activity, Globe, Gauge, Check
} from "lucide-react";
import data from "@/lib/data.json";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function Home() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const planIcons = [
    <Zap key="30" size={32} />,
    <Activity key="40" size={32} />,
    <Globe key="50" size={32} />,
    <Gauge key="60" size={32} />,
    <Rocket key="100" size={32} />,
  ];

  return (
    <main className="min-h-screen selection:bg-brand-orange selection:text-white">

      {/* Floating WhatsApp Button */}
      <a
        href={data.system.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-all duration-300 hover:rotate-12 flex items-center justify-center group"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
          ¿Necesitas ayuda?
        </span>
      </a>

      {/* Payment Options Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-xl" onClick={() => setShowPaymentModal(false)}></div>
          <Card className="relative w-full max-w-md p-8 shadow-2xl animate-in zoom-in duration-300">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-20"
            >
              <X size={20} />
            </button>
            <div className="text-center mb-10">
              <h3 className="text-3xl font-black mb-2 text-gradient-orange">Caja RFCOM</h3>
              <p className="text-text-secondary text-sm">Selecciona tu método de pago preferido</p>
            </div>
            <div className="grid gap-4">
              <a
                href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments"
                target="_blank"
                className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-[24px] hover:border-brand-orange/50 hover:bg-brand-orange/5 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-inner">
                    <CreditCard className="text-brand-blue" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Pago Amigo</h4>
                    <p className="text-xs text-text-dim uppercase tracking-widest font-bold">Convenio Bancolombia</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <ArrowRight size={18} className="text-text-dim group-hover:text-white" />
                </div>
              </a>
              <a
                href="https://checkout.wompi.co/l/RFCOMSAS"
                target="_blank"
                className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-[24px] hover:border-brand-orange/50 hover:bg-brand-orange/5 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-3 shadow-inner">
                    <img src="https://wompi.com/assets/img/logo-wompi.svg" alt="Wompi" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Wompi</h4>
                    <p className="text-xs text-text-dim uppercase tracking-widest font-bold">PSE, Nequi, Tarjetas</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <ArrowRight size={18} className="text-text-dim group-hover:text-white" />
                </div>
              </a>
            </div>
          </Card>
        </div>
      )}

      {/* Navbar Section */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "glass-nav py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 relative group logo-spotlight">
              <img
                src="/logo-rfcom-final.png"
                alt="RFCOM Logo"
                className="h-16 md:h-24 w-auto logo-img transition-transform duration-500 group-hover:scale-110"
              />
              {/* Subtle underline flare to ground the logo */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-orange blur-sm opacity-50 rounded-full group-hover:w-20 group-hover:opacity-100 transition-all duration-700"></div>
            </div>

            <div className="hidden lg:flex space-x-12 items-center text-sm font-bold uppercase tracking-[0.15em]">
              <a href="#inicio" className="text-white hover:text-brand-orange transition-all relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange hover:after:w-full after:transition-all">Inicio</a>
              <a href="#planes" className="text-text-secondary hover:text-white transition-all relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange hover:after:w-full after:transition-all">Planes</a>
              <a href="#contacto" className="text-text-secondary hover:text-white transition-all relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange hover:after:w-full after:transition-all">Contacto</a>

              <Button onClick={() => setShowPaymentModal(true)} size="md" className="ml-6 px-10">
                Pagar Factura
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[100vh] flex items-center pt-24 pb-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-[-10%] w-[40%] h-[40%] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 text-center lg:text-left" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full mb-8 shadow-[0_0_20px_rgba(255,157,0,0.1)]">
                <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
                <span className="text-brand-orange text-xs font-black uppercase tracking-[0.2em]">Sintoniza con el futuro</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tighter">
                Tu Conexión <br />
                <span className="text-gradient-orange">Ideal</span> Comienza <br />
                Aquí
              </h1>
              <p className="text-text-secondary text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Siente la verdadera velocidad. Internet simétrico premium en <span className="text-white font-bold underline decoration-brand-orange decoration-2 underline-offset-4">Restrepo, Meta</span>.
              </p>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <Button size="lg" onClick={() => window.open(data.system.whatsapp, '_blank')}>
                  Contratar Ahora <ArrowRight size={20} />
                </Button>
                <div className="flex -space-x-3 items-center ml-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-slate-800 flex items-center justify-center overflow-hidden shadow-lg">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                    </div>
                  ))}
                  <div className="pl-6 text-sm font-bold text-text-secondary">
                    <span className="text-white">+1k</span> Clientes satisfechos
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Geometry */}
            <div className="lg:col-span-6 relative" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative aspect-square w-full max-w-[600px] mx-auto animate-float">
                {/* Decorative Rings */}
                <div className="absolute inset-0 border-2 border-white/5 rounded-full"></div>
                <div className="absolute inset-10 border border-brand-orange/10 rounded-full border-dashed animate-spin [animation-duration:60s]"></div>

                {/* Main Circular Container */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-full border-4 border-white/5 shadow-2xl overflow-hidden p-1">
                  <div className="w-full h-full rounded-full bg-brand-dark overflow-hidden flex items-center justify-center relative inner-shadow">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,157,0,0.1),transparent_70%)]"></div>
                    <img
                      src="https://www.rfcom.co/wp-content/uploads/2025/01/Restrepo-Meta.png"
                      alt="Mapa"
                      className="w-[85%] h-[85%] object-contain filter drop-shadow-[0_0_50px_rgba(255,157,0,0.3)] brightness-125 hover:scale-105 transition-transform duration-700"
                    />

                    {/* Location Pin Upgrade */}
                    <div className="absolute top-[48%] left-[53%] z-30">
                      <div className="relative flex flex-col items-center animate-bounce">
                        <div className="w-6 h-6 bg-brand-orange rounded-full animate-ping opacity-40"></div>
                        <div className="absolute top-0 w-6 h-6 bg-brand-orange rounded-full border-4 border-brand-dark shadow-[0_0_20px_rgba(255,157,0,0.8)]"></div>
                        <div className="mt-6 glass-nav px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl border border-brand-orange/30 whitespace-nowrap">
                          Restrepo, Meta
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Repositioned Floating Stats Cards to avoid overlap */}
                <Card className="absolute top-[10%] left-[-10%] p-6 z-40 animate-float [animation-delay:-2s] border-brand-orange/20 max-w-[190px]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <p className="text-white font-black text-xl leading-none">100%</p>
                      <p className="text-text-dim text-[10px] uppercase font-bold mt-1">Seguro</p>
                    </div>
                  </div>
                </Card>

                <Card className="absolute bottom-[20%] right-[-10%] p-6 z-40 animate-float [animation-delay:-4s] border-brand-orange/20 max-w-[210px]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange shadow-[0_0_15px_rgba(255,157,0,0.2)]">
                      <Wifi size={28} />
                    </div>
                    <div>
                      <p className="text-white font-black text-xl leading-tight">Fibra<br />Simétrica</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planes Section - Grid 3 top, 2 bottom */}
      <section id="planes" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24" data-aos="fade-up">
            <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-xs mb-4 block">Tarifas 2026</span>
            <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter">Nuestros <span className="text-gradient-orange">Planes</span></h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto font-medium">Velocidad pura sin interrupciones. Elige la potencia que tu hogar necesita hoy.</p>
          </div>

          <div className="space-y-12">
            {/* Top Row: 3 Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {data.plans.slice(0, 3).map((plan, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  <Card className="h-full flex flex-col p-10 group relative border-white/5 hover:border-brand-orange/20">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-[0_0_30px_rgba(255,157,0,0.4)] transition-all duration-500">
                      {planIcons[i]}
                    </div>
                    <h3 className="text-xs font-black text-text-dim uppercase tracking-[0.2em] mb-4 font-bold">Internet Hogar</h3>
                    <div className="text-6xl font-black mb-8 leading-none tracking-tighter text-white">{plan.megas}</div>

                    <ul className="space-y-4 mb-10 text-sm font-bold text-text-secondary flex-grow pt-8 border-t border-white/5">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <Check size={16} className="text-brand-orange shrink-0" /> {feature}
                        </li>
                      ))}
                      <li className="pt-4 text-xs font-black uppercase text-brand-orange tracking-wider">
                        {plan.tv}
                      </li>
                    </ul>

                    <Button variant="primary" className="w-full" onClick={() => window.open(`${data.system.whatsapp}?text=Hola,%20quisiera%20contratar%20el%20plan%20de%20${plan.megas}`, '_blank')}>
                      Contratar Ahora
                    </Button>
                  </Card>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 Plans Centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
              {data.plans.slice(3, 5).map((plan, i) => (
                <div key={i + 3} data-aos="fade-up" data-aos-delay={i * 100}>
                  <Card className="h-full flex flex-col p-10 group relative border-brand-orange/20 bg-brand-blue/5">
                    {i === 1 && (
                      <div className="absolute top-5 right-10 px-4 py-1 bg-brand-orange text-white text-[10px] font-black uppercase rounded-full shadow-lg">MÁS POPULAR</div>
                    )}
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-[0_0_30px_rgba(255,157,0,0.4)] transition-all duration-500">
                      {planIcons[i + 3]}
                    </div>
                    <h3 className="text-xs font-black text-text-dim uppercase tracking-[0.2em] mb-4 font-bold">Internet Hogar</h3>
                    <div className="text-6xl font-black mb-8 leading-none tracking-tighter text-white">{plan.megas}</div>

                    <ul className="space-y-4 mb-10 text-sm font-bold text-text-secondary flex-grow pt-8 border-t border-white/5">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <Check size={16} className="text-brand-orange shrink-0" /> {feature}
                        </li>
                      ))}
                      <li className="pt-4 text-xs font-black uppercase text-brand-orange tracking-wider">
                        {plan.tv}
                      </li>
                    </ul>

                    <Button variant="primary" className="w-full" onClick={() => window.open(`${data.system.whatsapp}?text=Hola,%20quisiera%20contratar%20el%20plan%20de%20${plan.megas}`, '_blank')}>
                      Contratar Ahora
                    </Button>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info/Trust Section - Visual Overhaul */}
      <section id="contacto" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-5" data-aos="fade-right">
              <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-xs mb-6 block">Sobre Nosotros</span>
              <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase leading-none">Más que <br /><span className="text-gradient-orange">Conexión</span>,<br /> Confianza.</h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 shrink-0 bg-brand-blue/30 rounded-full flex items-center justify-center text-brand-orange border border-white/5">
                    <MapPin size={30} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-2 text-white uppercase italic">Sede Central</h4>
                    <p className="text-text-secondary leading-relaxed font-medium">Centro Comercial Balcones Plaza<br />Local 28A - Restrepo, Meta</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 shrink-0 bg-brand-blue/30 rounded-full flex items-center justify-center text-brand-orange border border-white/5">
                    <HeadphonesIcon size={30} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-2 text-white uppercase italic">Soporte Local</h4>
                    <p className="text-text-secondary leading-relaxed font-medium">Escríbenos directamente o visítanos.<br />Respuestas en tiempo real.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="relative premium-card p-3 rounded-[40px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.8213619520448!2d-73.56588934509893!3d4.240003057404314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ef37400000001%3A0xe67c1e55ec582eb7!2sRFCOM%20SAS!5e0!3m2!1ses!2sco!4v1740000000000"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-[32px] brightness-90 saturate-50 hover:saturate-100 transition-all duration-700"
                ></iframe>

                <div className="absolute top-10 right-10 bg-brand-orange p-8 rounded-3xl shadow-2xl animate-float">
                  <Phone size={24} className="text-white mb-2" />
                  <p className="text-white/80 text-[10px] font-black uppercase tracking-widest">Llamada Directa</p>
                  <p className="text-white text-xl font-black">+57 321 893 5393</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer - Minimalist Premium */}
      <footer className="py-24 relative mt-32">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-block relative group logo-spotlight mb-16">
            <img
              src="/logo-rfcom-final.png"
              alt="RFCOM Logo"
              className="h-24 md:h-32 w-auto logo-img transition-all duration-700"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-10 mb-16 text-text-dim text-xs font-black uppercase tracking-widest">
            <a href="#inicio" className="hover:text-brand-orange transition-colors">Inicio</a>
            <a href="#planes" className="hover:text-brand-orange transition-colors">Planes</a>
            <a href="#contacto" className="hover:text-brand-orange transition-colors">Contacto</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Términos</a>
          </div>

          <p className="text-text-dim/50 text-[10px] font-black uppercase tracking-[0.8em]">
            &copy; 2026 RFCOM SAS - Sintoniza con el Futuro
          </p>
        </div>
      </footer>

      {/* Background Noise Layer (Global) */}
      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] mix-blend-overlay">
        <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <filter id='noiseFilter'>
            <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
          </filter>
          <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
      </div>

    </main>
  );
}
