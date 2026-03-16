import React, { useState, useRef, useEffect } from 'react';
import { 
  Users, Bot, Search, Video, Briefcase, Award, 
  MessageSquare, TrendingUp, Cpu, Layers, Globe, 
  Home, Map, Sparkles
} from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";

// --- COMPONENTES SECUNDARIOS ---

const StrategyNode = ({ title, icon: Icon, theme, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left transition-all duration-300 ease-out group
      ${active 
        ? `ring-1 ${theme.ring} ${theme.bgActive} shadow-sm scale-[1.02] z-10` 
        : 'hover:bg-slate-50 border-transparent opacity-80 hover:opacity-100'
      } 
      border rounded-xl p-2 flex items-center gap-3`}
  >
    <div className={`p-1.5 rounded-lg transition-colors ${active ? theme.bgIconActive : theme.bgIcon} ${theme.textIcon}`}>
      <Icon size={16} strokeWidth={2.5} />
    </div>
    <div className="overflow-hidden">
      <h3 className={`font-semibold text-xs leading-tight truncate transition-colors ${active ? theme.textActive : 'text-slate-600 group-hover:text-slate-900'}`}>
        {title}
      </h3>
    </div>
  </button>
);

const DetailPanel = ({ node, theme }) => {
  if (!node) return null;

  return (
    <div className={`bg-white p-5 md:p-6 rounded-2xl shadow-lg border-t-4 h-full overflow-y-auto transition-all duration-500 ${theme.borderTop}`}>
      
      {/* Header del Panel */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 border-b border-slate-100 pb-4">
        <div className={`p-3 rounded-xl ${theme.bgIconActive} ${theme.textIcon} shadow-inner shrink-0`}>
          {React.createElement(node.icon, { size: 24, strokeWidth: 2 })}
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Anàlisi del Mòdul</p>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight leading-tight">
            {node.title}
          </h2>
          <p className={`text-sm font-medium mt-1 ${theme.textSubtitle}`}>
            {node.subtitle}
          </p>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="space-y-5">
        <div>
          <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5 mb-2">
            <Sparkles size={14} className="text-amber-500" />
            Visió del Mòdul
          </h4>
          <p className="text-slate-600 leading-relaxed text-sm">
            {node.content.descripció}
          </p>
        </div>
        
        <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
          <h4 className="font-bold text-slate-800 text-xs mb-3 border-b border-slate-200 pb-2 uppercase tracking-wide">
            Claus d'Execució
          </h4>
          <ul className="space-y-3">
            {Object.entries(node.content).map(([key, value]) => {
              if (key.toLowerCase() === 'descripció') return null;
              
              return (
                <li key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="capitalize font-semibold text-slate-700 text-xs sm:w-28 shrink-0">
                    {key.replace(/_/g, ' ')}
                  </span> 
                  <span className="text-slate-600 text-xs md:text-sm">
                    {Array.isArray(value) 
                      ? <div className="flex flex-wrap gap-1.5 mt-1 sm:mt-0">
                          {value.map(tag => (
                            <span key={tag} className="bg-white border border-slate-200 px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-700 shadow-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      : value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- DATOS Y TEMAS ---
// Definir los temas explícitamente evita bugs en producción con Tailwind
const themes = {
  indigo: { bgIcon: 'bg-indigo-100', bgIconActive: 'bg-indigo-500', textIcon: 'text-white', textActive: 'text-indigo-900', textSubtitle: 'text-indigo-600', bgActive: 'bg-indigo-50/50', ring: 'ring-indigo-500', borderTop: 'border-t-indigo-500' },
  blue: { bgIcon: 'bg-blue-100', bgIconActive: 'bg-blue-500', textIcon: 'text-white', textActive: 'text-blue-900', textSubtitle: 'text-blue-600', bgActive: 'bg-blue-50/50', ring: 'ring-blue-500', borderTop: 'border-t-blue-500' },
  amber: { bgIcon: 'bg-amber-100', bgIconActive: 'bg-amber-500', textIcon: 'text-white', textActive: 'text-amber-900', textSubtitle: 'text-amber-600', bgActive: 'bg-amber-50/50', ring: 'ring-amber-500', borderTop: 'border-t-amber-500' },
  rose: { bgIcon: 'bg-rose-100', bgIconActive: 'bg-rose-500', textIcon: 'text-white', textActive: 'text-rose-900', textSubtitle: 'text-rose-600', bgActive: 'bg-rose-50/50', ring: 'ring-rose-500', borderTop: 'border-t-rose-500' },
  teal: { bgIcon: 'bg-teal-100', bgIconActive: 'bg-teal-500', textIcon: 'text-white', textActive: 'text-teal-900', textSubtitle: 'text-teal-600', bgActive: 'bg-teal-50/50', ring: 'ring-teal-500', borderTop: 'border-t-teal-500' },
  emerald: { bgIcon: 'bg-emerald-100', bgIconActive: 'bg-emerald-500', textIcon: 'text-white', textActive: 'text-emerald-900', textSubtitle: 'text-emerald-600', bgActive: 'bg-emerald-50/50', ring: 'ring-emerald-500', borderTop: 'border-t-emerald-500' },
  pink: { bgIcon: 'bg-pink-100', bgIconActive: 'bg-pink-500', textIcon: 'text-white', textActive: 'text-pink-900', textSubtitle: 'text-pink-600', bgActive: 'bg-pink-50/50', ring: 'ring-pink-500', borderTop: 'border-t-pink-500' },
  orange: { bgIcon: 'bg-orange-100', bgIconActive: 'bg-orange-500', textIcon: 'text-white', textActive: 'text-orange-900', textSubtitle: 'text-orange-600', bgActive: 'bg-orange-50/50', ring: 'ring-orange-500', borderTop: 'border-t-orange-500' },
};

const nodes = {
  central: { theme: themes.indigo, title: "cursos.cat", subtitle: "Plataforma IA + català", icon: Globe, content: { descripció: "El nucli de l'ecosistema. Un entorn d'immersió sota demanda impulsat 100% per Intel·ligència Artificial...", innovació: "Entorn hiperpersonalitzat que abandona el Moodle estàtic tradicional.", tecnologia: ["Next.js", "Gemini API", "ElevenLabs", "Supabase", "Stripe"], objectiu: "Convertir-se en la plataforma líder d'aprenentatge del català modern." } },
  inmigrantes: { theme: themes.blue, title: "B2C: Nouvinguts", subtitle: "Major audiència activa", icon: Users, content: { descripció: "La base principal d'usuaris que busquen integració laboral...", estratègia: "Model Freemium (10 min/dia gratis) per a captació massiva.", monetització: "Subscripció Micro: 4,99€/mes per accés il·limitat al Tutor IA de Veu.", impacte_Social: "Foment del català, integració laboral i cohesió social." } },
  seo: { theme: themes.amber, title: "SEO Programàtic IA", subtitle: "Milers de pàgines auto", icon: Search, content: { descripció: "Generació automàtica de landing pages per capturar trànsit 'Long Tail' de Google.", automatització: "Script (Python + Gemini API) que creua [Professió] + [Ciutat a Catalunya].", exemple: "cursos.cat/vocabulari-catala-infermeres-girona", resultat: "Trànsit orgànic passiu, massiu i gratuït des de cercadors." } },
  videos: { theme: themes.rose, title: "Vídeos Faceless IA", subtitle: "YouTube → Trànsit gratis", icon: Video, content: { descripció: "Creació de contingut viral educatiu diari sense intervenció humana directa...", flux_de_Treball: "Notícies RSS → Gemini → HeyGen → ElevenLabs → Publicació Auto.", plataformes: ["TikTok", "YouTube Shorts", "Instagram Reels"], call_to_Action: "\"Practica aquesta conversa gratis amb la IA a cursos.cat\"" } },
  tutor: { theme: themes.teal, title: "Tutor IA Contextual", subtitle: "Aprèn xerrant 24/7", icon: Bot, content: { descripció: "Motor d'IA conversacional (Veu i Text) que simula situacions reals...", característiques: "Paciència infinita, correcció de pronunciació suau, adaptació automàtica de nivell.", tecnologia_Clau: "Google Gemini 2.5 amb avatars de veu.", diferenciador: "No ensenya gramàtica avorrida, entrena per a la vida real." } },
  comunidad: { theme: themes.emerald, title: "Comunitat + Pràctica", subtitle: "Tàndem IA + humans", icon: MessageSquare, content: { descripció: "Fòrum o servidor Discord integrat perquè els usuaris no estudiïn sols.", funcionament: "Tàndem lingüístic entre usuaris per practicar.", integració_IA: "Bots d'IA en canals de veu que actuen com a companys de debat.", retenció: "Crea pertinença i redueix la taxa d'abandonament." } },
  b2b: { theme: themes.emerald, title: "B2B Empreses", subtitle: "Ticket més alt, €€€", icon: Briefcase, content: { descripció: "Solució 'SaaS Educatiu' per a departaments de Recursos Humans...", model: "Subscripció corporativa (Ex: 200€/mes per 50 empleats).", panell_RRHH: "Dashboard automàtic amb hores de pràctica i progrés.", proposta_de_Valor: "Compliment normatiu, RSC i millora en atenció al client local." } },
  certificacion: { theme: themes.pink, title: "Certificació pròpia", subtitle: "Examen IA + diploma", icon: Award, content: { descripció: "Emissió d'un 'Certificat de Fluïdesa Pràctica' avaluat íntegrament per IA.", procés: "Entrevista de veu de 15 minuts amb la IA...", entregable: "Diploma en PDF llest per afegir a LinkedIn.", monetització: "Cobrament per dret a examen (Ex: 15€)." } },
  afiliacion: { theme: themes.orange, title: "Afiliació + Ads", subtitle: "Ingressos passius auto", icon: TrendingUp, content: { descripció: "Monetització complementària per a usuaris del pla gratuït.", publicitat: "Anuncis (AdSense) mostrats a la interfície gratuïta.", afiliats: "Links recomanats dinàmicament...", avantatge: "Rendibilitza el trànsit de baix poder adquisitiu sense cost addicional." } }
};

// --- COMPONENTE PRINCIPAL ---

const Dashboard = () => {
  const [selectedNode, setSelectedNode] = useState('seo');
  const detailRef = useRef(null);

  const handleNodeSelect = (key) => {
    setSelectedNode(key);
    if (window.innerWidth < 1024 && detailRef.current) {
      setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-6 lg:p-8 font-sans text-slate-900 selection:bg-indigo-200">
      
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-bold border border-indigo-100">
              <Home size={16} />
              <span>cursos.cat</span>
            </div>
            <span className="text-sm font-medium text-slate-500 border-l border-slate-200 pl-3">
              Plataforma d'integració lingüística impulsada per IA
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide border border-slate-200 self-start md:self-auto">
            <Map size={14} />
            Mapa Estratègic
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-72 xl:w-80 flex flex-col gap-5 shrink-0">
          
          {/* Adquisición */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 pl-1 mb-3">
              <div className="p-1.5 bg-slate-200/50 rounded-md text-slate-500"><Layers size={14}/></div>
              <h2 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">1. Adquisició</h2>
            </div>
            <div className="flex flex-col gap-1.5">
              {['seo', 'videos', 'inmigrantes'].map(key => (
                <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
              ))}
            </div>
          </section>

          {/* Producte Principal */}
          <section className="space-y-2 relative">
            {/* Efecto visual de fondo para el core */}
            <div className="absolute inset-0 bg-indigo-50/50 blur-xl rounded-full -z-10 transform scale-110"></div>
            
            <div className="flex items-center gap-2 pl-1 mb-3">
              <div className="p-1.5 bg-indigo-100 rounded-md text-indigo-600"><Cpu size={14}/></div>
              <h2 className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest">2. Producte Principal</h2>
            </div>
            <div className="flex flex-col gap-1.5">
              {['central', 'tutor', 'comunidad'].map(key => (
                <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
              ))}
            </div>
          </section>

          {/* Monetización */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 pl-1 mb-3">
              <div className="p-1.5 bg-emerald-100 rounded-md text-emerald-600"><TrendingUp size={14}/></div>
              <h2 className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">3. Monetització</h2>
            </div>
            <div className="flex flex-col gap-1.5">
              {['b2b', 'certificacion', 'afiliacion'].map(key => (
                <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
              ))}
            </div>
          </section>

        </aside>

        {/* Panel de Detalle */}
        <section className="w-full lg:flex-1" ref={detailRef}>
          <div className="sticky top-6 h-[calc(100vh-8rem)] min-h-[500px]">
            <DetailPanel node={nodes[selectedNode]} theme={nodes[selectedNode].theme} />
          </div>
        </section>

      </main>
      
      {/* Footer minimalista */}
      <footer className="max-w-6xl mx-auto mt-12 mb-4 text-center">
        <p className="text-slate-400 text-xs font-medium tracking-wide">
          Prem qualsevol mòdul per aprofundir &bull; Visió Estratègica
        </p>
      </footer>

      {/* Estilos para ocultar scrollbar en Webkit manteniendo la funcionalidad */}
      <style dangerouslySetInnerHTML={{__html: `
        .overflow-y-auto::-webkit-scrollbar { width: 6px; }
        .overflow-y-auto::-webkit-scrollbar-track { background: transparent; }
        .overflow-y-auto::-webkit-scrollbar-thumb { background-color: #e2e8f0; border-radius: 20px; }
      `}} />

      <Analytics />
    </div>
  );
};

export default Dashboard;
