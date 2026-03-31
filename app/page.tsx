"use client";
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, TrendingUp } from 'lucide-react';

// --- COMPONENTE LOGO SVG (Tipado para evitar subrayados rojos) ---
interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo = ({ className = "w-full h-full", light = false }: LogoProps) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={light ? "#0f172a" : "white"} />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="80" fill="url(#auraGrad)" />
    <circle cx="90" cy="85" r="48" stroke="url(#strokeGrad)" strokeWidth="5" />
    <path d="M65 70 A 30 30 0 0 1 95 55" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
    <path d="M128 123 L165 160" stroke="#10b981" strokeWidth="12" strokeLinecap="round" />
    <path d="M132 127 L161 156" stroke={light ? "#f8fafc" : "#0f172a"} strokeWidth="4" strokeLinecap="round" opacity="0.4" />
    <path d="M62 105 L80 85 L98 95 L120 70" stroke="#10b981" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <g filter="url(#glow)">
      <circle cx="120" cy="70" r="5" fill="white" />
    </g>
    <circle cx="120" cy="70" r="10" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
  </svg>
);

export default function Home() {

// --- PROTECCIÓN BÁSICA CONTRA COPIA ---
  React.useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquea F12, Ctrl+Shift+I, Ctrl+U (Ver código fuente)
      if (
        e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") || 
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const servicios = [
    { 
      titulo: "Gestión Contable", 
      desc: "Manejo integral de facturación electrónica y nómina.", 
      icon: <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    { 
      titulo: "Asesoría Tributaria", 
      desc: "Declaraciones de Renta, IVA, ICA y medios magnéticos.", 
      icon: <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    { 
      titulo: "Proyección Financiera", 
      desc: "Análisis de estados financieros e indicadores críticos.", 
      icon: <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    },
    { 
      titulo: "Legal y Constitución", 
      desc: "Creación de empresas y renovación de Cámara de Comercio.", 
      icon: <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0l-3-9m0 0l3 9m9-9l3 1m0 0l-3 9a5.002 5.002 0 006.001 0l-3-9m0 0l3 9m-9-9l3-2m2 2l3-2M9 22h6" /></svg>
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e17] font-sans text-slate-300">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0e17]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10">
                <Logo />
             </div>
             <span className="text-xl font-black text-white tracking-tighter">A&H <span className="text-[#10b981]">ASESOL</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#10b981] transition-colors">Inicio</Link>
            <a href="#nosotros" className="hover:text-[#10b981] transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-[#10b981] transition-colors">Servicios</a>
            <a href="#contacto" className="bg-[#10b981]/10 text-[#10b981] px-4 py-2 rounded-full border border-[#10b981]/20 hover:bg-[#10b981] hover:text-white transition-all">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#10b981] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Estrategia & Consultoría
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter">
              A&H <br/> <span className="text-[#10b981]">ASESOL</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-md leading-relaxed uppercase tracking-[0.1em] font-light">
              Seguridad financiera y <span className="text-white font-bold">crecimiento estratégico</span> para su empresa en Medellín.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/brochure" 
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#10b981] hover:text-white transition-all flex items-center gap-2 group"
              >
                Ver Portafolio Completo
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 md:w-[450px] md:h-[450px] bg-white/5 rounded-[3rem] p-12 backdrop-blur-md border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.15)] relative transform rotate-3">
              <Logo />
              <div className="absolute -bottom-6 -right-6 bg-[#10b981] text-black font-black p-6 rounded-2xl shadow-xl">
                EST. 2026
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- NOSOTROS --- */}
      <section id="nosotros" className="py-32 px-6 bg-[#0c121d]">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
               <div className="h-48 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center p-6 hover:bg-[#10b981]/5 transition-colors group">
                  <TrendingUp className="text-[#10b981] mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <span className="text-white font-bold">Crecimiento</span>
               </div>
               <div className="h-48 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center p-6 mt-12 hover:bg-[#10b981]/5 transition-colors group">
                  <ShieldCheck className="text-[#10b981] mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <span className="text-white font-bold">Seguridad</span>
               </div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-white mb-8 tracking-tight uppercase">¿Quiénes Somos?</h2>
              <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                Somos un grupo profesional con amplia experiencia en el área financiera y contable, comprometidos con la excelencia y la capacidad de agregar valor real a cada organización.
              </p>
              <div className="p-8 bg-[#10b981]/10 border-l-4 border-[#10b981] rounded-r-2xl">
                <p className="text-white text-lg font-medium italic">
                  "Nuestro apoyo está basado en la más estricta confidencialidad de la información de su empresa."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-white mb-20 text-center tracking-tight uppercase">Nuestras Soluciones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((s, i) => (
              <div key={i} className="group bg-white/5 p-8 rounded-[2rem] border border-white/5 hover:border-[#10b981]/50 hover:bg-white/10 transition-all duration-500">
                <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-white font-bold mb-4 uppercase tracking-tight">{s.titulo}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* --- SECCIÓN DE CONTACTO --- */}
      <section id="contacto" className="py-12 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#10b981]/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="mx-auto max-w-5xl">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              {/* Lado Izquierdo: Títulos */}
              <div className="md:w-1/3 text-left">
                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight leading-none">Hablemos de su <br/><span className="text-[#10b981]">Estrategia</span></h2>
                <p className="text-slate-400 uppercase tracking-widest text-[9px] font-bold">Consultoría inicial sin costo</p>
                <div className="mt-6 h-1 w-12 bg-[#10b981]/50 rounded-full"></div>
              </div>

              {/* Lado Derecho: Formulario */}
              <form 
                action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`} 
                method="POST" 
                className="md:w-2/3 grid md:grid-cols-2 gap-4"
              >
{/* Honeypot: Trampa invisible para bots (Protección Formspree) */}
                <input type="hidden" name="_gotcha" />

                <div className="space-y-1">
                  <label htmlFor="full-name" className="text-[9px] font-bold uppercase tracking-widest text-[#10b981] ml-2">Nombre o Empresa</label>
                  <input 
                    id="full-name"
                    type="text" 
                    name="name"
                    required
                    pattern="^[a-zA-Z0-9 ]+$"
                    title="Solo letras y números, por favor."
                    autoComplete="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#10b981]/50 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone-number" className="text-[9px] font-bold uppercase tracking-widest text-[#10b981] ml-2">WhatsApp / Teléfono</label>
                  <input 
                    id="phone-number"
                    type="tel" 
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    title="Ingrese los 10 dígitos de su celular (Ej: 3102044709)"
                    placeholder="310..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#10b981]/50 transition-all"
                  />
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label htmlFor="email-address" className="text-[9px] font-bold uppercase tracking-widest text-[#10b981] ml-2">Correo Electrónico</label>
                  <input 
                    id="email-address"
                    type="email" 
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#10b981]/50 transition-all"
                  />
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label htmlFor="message-box" className="text-[9px] font-bold uppercase tracking-widest text-[#10b981] ml-2">Mensaje</label>
                  <textarea 
                    id="message-box"
                    name="message"
                    required
                    rows={2} 
                    maxLength={500}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#10b981]/50 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="w-full bg-[#10b981] text-black font-black py-3.5 rounded-xl text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 px-6 bg-[#0a0e17]">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8"><Logo /></div>
             <span className="font-black text-white uppercase tracking-tighter">A&H ASESOL</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <span>📍 Medellín</span>
            <span>📞 310 2044709</span>
            <span>✉️ asesol.info@ayhsas.com</span>
          </div>
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">© 2026 Reservados.</p>
        </div>
      </footer>

{/* --- WHATSAPP FUTURISTA --- */}
      <a 
        href="https://wa.me/573102044709" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        {/* Aura de brillo exterior animada */}
        <div className="absolute inset-0 bg-[#10b981] rounded-full blur-xl opacity-40 group-hover:opacity-70 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
        
        {/* Cuerpo del botón */}
        <div className="relative w-16 h-16 bg-[#0a0e17]/80 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-500 group-hover:rounded-[2rem] group-hover:border-[#10b981]/50 group-active:scale-95">
          
          {/* Reflejo de cristal interno */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Icono con sombra de neón */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" height="30" 
            fill="currentColor" 
            className="text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] group-hover:scale-110 transition-transform duration-500" 
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607zM7.994 14.52a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </div>
      </a>
    </div>
  );
}