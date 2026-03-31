"use client";
import React from 'react';
import Link from 'next/link';

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

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const ServiceCard = ({ title, items, icon }: ServiceCardProps) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-slate-600 text-xs leading-relaxed">
          <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function BrochurePage() {
  // --- PROTECCIÓN BÁSICA CONTRA COPIA ---
  React.useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Botón Volver */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Volver al Inicio
        </Link>
      </div>

      <header className="bg-[#0a0e17] text-white py-24 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="w-56 h-56 md:w-64 md:h-64 flex-shrink-0 bg-white/5 rounded-[2rem] p-10 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.1)] transform -rotate-3">
            <Logo />
          </div>
          <div className="text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              Portafolio Corporativo 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase">
              Portafolio de <span className="text-[#10b981]">Servicios</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg uppercase tracking-[0.2em] font-light leading-relaxed">
              Estrategia Financiera & <span className="font-bold text-slate-200">Consultoría Integral</span>
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto -mt-12 px-6 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-1 bg-emerald-500 rounded-full inline-block"></span>
              ¿Quiénes Somos?
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>Somos un grupo profesional con amplia trayectoria en el área financiera y contable. Contamos con un equipo de altas competencias diseñado para atender de manera eficiente y oportuna las necesidades de cada organización.</p>
              <p className="font-semibold text-slate-800">Brindamos seguridad y acompañamiento en todos los procesos financieros y en el manejo estratégico de la información de su negocio.</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 flex flex-col justify-center border border-slate-100">
            <div className="text-emerald-600 font-bold text-[10px] uppercase tracking-widest mb-2">Valores Core</div>
            <div className="text-xl font-black text-slate-900 mb-4 leading-tight uppercase">Compromiso & Confidencialidad</div>
            <p className="text-slate-500 text-xs italic">"Su tranquilidad financiera es nuestra prioridad absoluta."</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            title="Constitución de Empresas"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>}
            items={["Elaboración de Actas", "Cambio de Razón Social", "Gestión Cámara de Comercio", "Creación de RUT", "Documento Privado de Constitución"]}
          />
          <ServiceCard 
            title="Contabilización"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>}
            items={["Facturación Electrónica", "Gestión de Facturas (Venta/Compra)", "Recibos de Caja y Egresos", "Conciliaciones Bancarias", "Gestión de Nómina e Inventarios"]}
          />
          <ServiceCard 
            title="Proyección Financiera"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>}
            items={["Indicadores Financieros", "Análisis de Estados Financieros", "Análisis Vertical y Horizontal", "Identificación de Riesgos y Oportunidades"]}
          />
          <ServiceCard 
            title="Impuestos"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>}
            items={["Declaración de Renta e IVA", "Presentación de ICA", "Medios Magnéticos", "Información Exógena", "Retención en la Fuente"]}
          />
          <ServiceCard 
            title="Otros Servicios"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>}
            items={["Auditoría Externa", "Revisoría Fiscal", "Implementación de NIIF", "Vinculación a Seguridad Social"]}
          />
          <div className="bg-[#10b981] rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg shadow-emerald-500/20">
            <div>
              <h3 className="font-bold text-xl mb-4 uppercase tracking-tighter">¿Listo para empezar?</h3>
              <p className="text-emerald-50 mb-6 text-xs opacity-90 leading-relaxed uppercase tracking-widest">Optimice sus procesos financieros con el respaldo de expertos.</p>
            </div>
            <div className="space-y-4">
              <a href="mailto:asesol.info@ayhsas.com" className="flex items-center gap-3 text-[10px] font-bold tracking-widest hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                ASESOL.INFO@AYHSAS.COM
              </a>
              <a href="https://wa.me/573102044709" className="flex items-center gap-3 text-[10px] font-bold tracking-widest hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +57 310 2044709
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-24 border-t border-slate-200 pt-10 text-center text-slate-400 text-[10px] uppercase tracking-[0.4em]">
        &copy; 2026 A&H ASESOL • ESTRATEGIA FINANCIERA INTEGRAL
      </footer>
    </div>
  );
}