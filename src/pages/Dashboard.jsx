import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Bot, Search, Video, Briefcase, Award, 
  MessageSquare, TrendingUp, Cpu, Layers, Globe, 
  ArrowRight, Sparkles, ArrowLeft
} from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";

// Component per a cada node
const StrategyNode = ({ title, subtitle, icon: Icon, color, active, onClick }) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer transition-all duration-200 
      ${active 
        ? 'ring-1 ring-indigo-500 bg-indigo-50/40 shadow-sm scale-[1.02] z-10 border-indigo-200' 
        : 'hover:bg-slate-100 border-transparent opacity-80 hover:opacity-100'
      } 
      border rounded-lg p-2 flex items-center gap-2.5 w-full`}
  >
    <div className={`p-1.5 rounded-md ${color.replace('text-', 'bg-')} text-white shrink-0`}>
      <Icon size={16} strokeWidth={2.5} />
    </div>
    <div className="text-left overflow-hidden">
      <h3 className={`font-bold text-sm leading-tight truncate ${active ? 'text-indigo-900' : 'text-slate-700'}`}>{title}</h3>
      <p className="text-xs font-medium text-slate-500 truncate mt-0.5">{subtitle}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [selectedNode, setSelectedNode] = useState('seo');
  const detailRef = useRef(null);

  const nodes = {
    central: {
      title: "cursos.cat", subtitle: "Plataforma IA + català", icon: Globe, color: "text-indigo-600 bg-indigo-600",
      content: { descripció: "El nucli de l'ecosistema. Un entorn d'immersió sota demanda impulsat 100% per Intel·ligència Artificial...", innovació: "Entorn hiperpersonalitzat que abandona el Moodle estàtic tradicional.", tecnologia: ["Next.js", "Gemini API", "ElevenLabs", "Supabase", "Stripe"], objectiu: "Convertir-se en la plataforma líder d'aprenentatge del català modern." }
    },
    inmigrantes: {
      title: "B2C: Nouvinguts", subtitle: "Major audiència activa", icon: Users, color: "text-blue-500 bg-blue-500",
      content: { descripció: "La base principal d'usuaris que busquen integració laboral...", estratègia: "Model Freemium (10 min/dia gratis) per a captació massiva.", monetització: "Subscripció Micro: 4,99€/mes per accés il·limitat al Tutor IA de Veu.", impacte_Social: "Foment del català, integració laboral i cohesió social." }
    },
    seo: {
      title: "SEO Programàtic IA", subtitle: "Milers de pàgines auto", icon: Search, color: "text-amber-500 bg-amber-500",
      content: { descripció: "Generació automàtica de landing pages per capturar trànsit 'Long Tail' de Google.", automatització: "Script (Python + Gemini API) que creua [Professió] + [Ciutat a Catalunya].", exemple: "cursos.cat/vocabulari-catala-infermeres-girona", resultat: "Trànsit orgànic passiu, massiu i gratuït des de cercadors." }
    },
    videos: {
      title: "Vídeos Faceless IA", subtitle: "YouTube → Trànsit gratis", icon: Video, color: "text-rose-500 bg-rose-500",
      content: { descripció: "Creació de contingut viral educatiu diari sense intervenció humana directa...", flux_de_Treball: "Notícies RSS → Gemini → HeyGen → ElevenLabs → Publicació Auto.", plataformes: ["TikTok", "YouTube Shorts", "Instagram Reels"], call_to_Action: "\"Practica aquesta conversa gratis amb la IA a cursos.cat\"" }
    },
    tutor: {
      title: "Tutor IA Contextual", subtitle: "Aprèn xerrant 24/7", icon: Bot, color: "text-teal-500 bg-teal-500",
      content: { descripció: "Motor d'IA conversacional (Veu i Text) que simula situacions reals...", característiques: "Paciència infinita, correcció de pronunciació suau, adaptació automàtica de nivell.", tecnologia_Clau: "Google Gemini 2.5 amb avatars de veu.", diferenciador: "No ensenya gramàtica avorrida, entrena per a la vida real." }
    },
    comunidad: {
      title: "Comunitat + Pràctica", subtitle: "Tàndem IA + humans", icon: MessageSquare, color: "text-emerald-500 bg-emerald-500",
      content: { descripció: "Fòrum o servidor Discord integrat perquè els usuaris no estudiïn sols.", funcionament: "Tàndem lingüístic entre usuaris per practicar.", integració_IA: "Bots d'IA en canals de veu que actuen com a companys de debat.", retenció: "Crea pertinença i redueix la taxa d'abandonament." }
    },
    b2b: {
      title: "B2B Empreses", subtitle: "Ticket més alt, €€€", icon: Briefcase, color: "text-emerald-600 bg-emerald-600",
      content: { descripció: "Solució 'SaaS Educatiu' per a departaments de Recursos Humans...", model: "Subscripció corporativa (Ex: 200€/mes per 50 empleats).", panell_RRHH: "Dashboard automàtic amb hores de pràctica i progrés.", proposta_de_Valor: "Compliment normatiu, RSC i millora en atenció al client local." }
    },
    certificacion: {
      title: "Certificació pròpia", subtitle: "Examen IA + diploma", icon: Award, color: "text-pink-500 bg-pink-500",
      content: { descripció: "Emissió d'un 'Certificat de Fluïdesa Pràctica' avaluat íntegrament per IA.", procés: "Entrevista de veu de 15 minuts amb la IA...", entregable: "Diploma en PDF llest per afegir a LinkedIn.", monetització: "Cobrament per dret a examen (Ex: 15€)." }
    },
    afiliacion: {
      title: "Afiliació + Ads", subtitle: "Ingressos passius auto", icon: TrendingUp, color: "text-orange-500 bg-orange-500",
      content: { descripció: "Monetització complementària per a usuaris del pla gratuït.", publicitat: "Anuncis (AdSense) mostrats a la interfície gratuïta.", afiliats: "Links recomanats dinàmicament...", avantatge: "Rendibilitza el trànsit de baix poder adquisitiu sense cost addicional." }
    }
  };

  const handleNodeSelect = (key) => {
    setSelectedNode(key);
    if (window.innerWidth < 1024 && detailRef.current) {
      setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <>
      <div className="h-screen bg-slate-50 p-4 md:p-5 lg:p-6 font-sans selection:bg-indigo-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="max-w-6xl mx-auto w-full mb-3">
          <div className="flex items-center justify-between mb-2">
            <Link to="/" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors text-sm">
              <ArrowLeft size={16} className="mr-1" /> Tornar
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center space-x-1.5 bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-bold">
                <Sparkles size={14} />
                <span>Mapa Estratègic</span>
              </div>
              <h1 className="text-lg font-extrabold text-slate-900">
                cursos.cat
              </h1>
            </div>
          </div>
          
          {/* Título restaurado */}
          <p className="text-slate-500 text-sm md:text-base mt-1 max-w-2xl whitespace-nowrap">
            La primera plataforma d'integració lingüística i professional de Catalunya impulsada 100% per IA.
          </p>
        </div>

        {/* Main Layout - SIN SCROLL EN MENÚ IZQUIERDO */}
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col lg:flex-row gap-4 lg:gap-5 min-h-0">
          
          {/* COLUMNA ESQUERRA - Menú de Nodes SIN SCROLL */}
          <div className="w-full lg:w-80 xl:w-96 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            
            {/* Adquisición */}
            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-1.5 mb-2">
                <Layers size={14} className="text-slate-400"/>
                <h2 className="text-xs font-bold text-slate-600 uppercase tracking-wider">1. Adquisició</h2>
              </div>
              <div className="flex flex-col gap-2">
                <StrategyNode {...nodes.seo} active={selectedNode === 'seo'} onClick={() => handleNodeSelect('seo')} />
                <StrategyNode {...nodes.videos} active={selectedNode === 'videos'} onClick={() => handleNodeSelect('videos')} />
                <StrategyNode {...nodes.inmigrantes} active={selectedNode === 'inmigrantes'} onClick={() => handleNodeSelect('inmigrantes')} />
              </div>
            </div>

            {/* Producte Principal */}
            <div className="bg-gradient-to-br from-indigo-50/50 to-white p-3 rounded-xl shadow-sm border border-indigo-100 relative">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
              <div className="flex items-center gap-1.5 mb-2 relative z-10">
                <Cpu size={14} className="text-indigo-500"/>
                <h2 className="text-xs font-bold text-indigo-800 uppercase tracking-wider">2. Producte Principal</h2>
              </div>
              <div className="flex flex-col gap-2 relative z-10">
                <StrategyNode {...nodes.central} active={selectedNode === 'central'} onClick={() => handleNodeSelect('central')} />
                <StrategyNode {...nodes.tutor} active={selectedNode === 'tutor'} onClick={() => handleNodeSelect('tutor')} />
                <StrategyNode {...nodes.comunidad} active={selectedNode === 'comunidad'} onClick={() => handleNodeSelect('comunidad')} />
              </div>
            </div>

            {/* Monetització */}
            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-1.5 mb-2">
                <TrendingUp size={14} className="text-slate-400"/>
                <h2 className="text-xs font-bold text-slate-600 uppercase tracking-wider">3. Monetització</h2>
              </div>
              <div className="flex flex-col gap-2">
                <StrategyNode {...nodes.b2b} active={selectedNode === 'b2b'} onClick={() => handleNodeSelect('b2b')} />
                <StrategyNode {...nodes.certificacion} active={selectedNode === 'certificacion'} onClick={() => handleNodeSelect('certificacion')} />
                <StrategyNode {...nodes.afiliacion} active={selectedNode === 'afiliacion'} onClick={() => handleNodeSelect('afiliacion')} />
              </div>
            </div>

          </div>

          {/* COLUMNA DRETA - Panell de Detall con scroll interno */}
          <div className="w-full lg:flex-1 min-h-0" ref={detailRef}>
            <div className="h-full">
              <div className={`bg-white p-5 md:p-6 rounded-2xl shadow-xl border-t-4 h-full overflow-y-auto custom-scrollbar transition-colors duration-500 ${
                nodes[selectedNode].color.includes('indigo') ? 'border-t-indigo-500' :
                nodes[selectedNode].color.includes('blue') ? 'border-t-blue-500' :
                nodes[selectedNode].color.includes('amber') ? 'border-t-amber-500' :
                nodes[selectedNode].color.includes('rose') ? 'border-t-rose-500' :
                nodes[selectedNode].color.includes('teal') ? 'border-t-teal-500' :
                nodes[selectedNode].color.includes('emerald') ? 'border-t-emerald-500' :
                nodes[selectedNode].color.includes('pink') ? 'border-t-pink-500' :
                'border-t-orange-500'
              }`}>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-3 border-b pb-3">
                  <div className={`p-3 rounded-xl ${nodes[selectedNode].color.replace('text-', 'bg-')} text-white shadow-md shrink-0`}>
                    {React.createElement(nodes[selectedNode].icon, { size: 24, strokeWidth: 1.5 })}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Anàlisi del Mòdul</p>
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight leading-tight">
                      {nodes[selectedNode].title}
                    </h2>
                    <p className={`text-sm font-semibold mt-1 ${nodes[selectedNode].color.replace('bg-', 'text-').replace('-500', '-600')}`}>
                      {nodes[selectedNode].subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5 mb-2">
                      <Sparkles size={14} className="text-amber-500" />
                      Visió del Mòdul
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {nodes[selectedNode].content.descripció}
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm mb-2 border-b border-slate-200 pb-2">Claus d'Execució</h4>
                    <ul className="space-y-2">
                      {Object.entries(nodes[selectedNode].content).map(([key, value]) => {
                        if (key.toLowerCase() === 'descripció') return null;
                        
                        return (
                          <li key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                            <span className="capitalize font-bold text-slate-700 text-xs sm:w-28 shrink-0">
                              {key.replace(/_/g, ' ')}:
                            </span> 
                            <span className="text-slate-600 font-medium text-sm">
                              {Array.isArray(value) 
                                ? <div className="flex flex-wrap gap-1.5">
                                    {value.map(tag => (
                                      <span key={tag} className="bg-white border border-slate-200 px-2 py-0.5 rounded text-xs font-bold text-slate-700 shadow-sm">{tag}</span>
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
            </div>
          </div>

        </div>
        
        {/* Footer */}
        <footer className="max-w-6xl mx-auto w-full mt-2 text-center text-slate-400 text-xs font-medium">
          Prem qualsevol mòdul per aprofundir | Projecte cursos.cat
        </footer>
      </div>
      
      {/* Estilos para scrollbar personalizada solo en panel derecho */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
      
      <Analytics />
    </>
  );
};

export default Dashboard;
