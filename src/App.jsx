import React, { useState } from 'react';
import { 
  Users, 
  Bot, 
  Search, 
  Video, 
  Briefcase, 
  Award, 
  MessageSquare, 
  TrendingUp,
  Cpu,
  Layers,
  Globe,
  Sparkles
} from 'lucide-react';

// Componente para cada nodo (ahora más pequeño y en formato horizontal)
const StrategyNode = ({ title, subtitle, icon: Icon, color, active, onClick }) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer transition-all duration-300 transform 
      ${active 
        ? 'ring-2 ring-indigo-500 bg-white shadow-md scale-[1.02] z-10' 
        : 'hover:scale-[1.02] bg-slate-50 hover:bg-white shadow-sm hover:shadow'
      } 
      border border-gray-100 rounded-xl p-3 flex items-center gap-3 group relative overflow-hidden w-full`}
  >
    <div className={`p-2.5 rounded-lg ${color.replace('text-', 'bg-')} text-white shadow-inner group-hover:scale-110 transition-transform duration-300 shrink-0`}>
      <Icon size={20} strokeWidth={2} />
    </div>
    <div className="space-y-0.5 text-left overflow-hidden">
      <h3 className="font-bold text-gray-800 text-sm leading-tight truncate">{title}</h3>
      <p className="text-xs font-medium text-gray-500 truncate">{subtitle}</p>
    </div>
  </div>
);

const App = () => {
  const [selectedNode, setSelectedNode] = useState('central');

  // Dades extretes de l'estratègia mestra de cursos.cat
  const nodes = {
    central: {
      title: "cursos.cat",
      subtitle: "Plataforma IA + català",
      icon: Globe,
      color: "text-indigo-600 bg-indigo-600",
      content: {
        descripció: "El nucli de l'ecosistema. Un entorn d'immersió sota demanda impulsat 100% per Intel·ligència Artificial, dissenyat per resoldre la integració lingüística i laboral.",
        innovació: "Entorn hiperpersonalitzat que abandona el Moodle estàtic tradicional.",
        tecnologia: ["Next.js", "Gemini API", "ElevenLabs", "Supabase", "Stripe"],
        objectiu: "Convertir-se en la plataforma líder d'aprenentatge del català modern."
      }
    },
    inmigrantes: {
      title: "B2C: Nouvinguts",
      subtitle: "Major audiència activa",
      icon: Users,
      color: "text-blue-500 bg-blue-500",
      content: {
        descripció: "La base principal d'usuaris que busquen integració laboral. Necessiten aprendre ràpid amb barreres d'entrada baixes.",
        estratègia: "Model Freemium (10 min/dia gratis) per a captació massiva.",
        monetització: "Subscripció Micro: 4,99€/mes per accés il·limitat al Tutor IA de Veu.",
        impacte_Social: "Foment del català, integració laboral i cohesió social."
      }
    },
    seo: {
      title: "SEO Programàtic IA",
      subtitle: "Milers de pàgines auto",
      icon: Search,
      color: "text-amber-500 bg-amber-500",
      content: {
        descripció: "Generació automàtica de landing pages per capturar trànsit 'Long Tail' de Google.",
        automatització: "Script (Python + Gemini API) que creua [Professió] + [Ciutat a Catalunya].",
        exemple: "cursos.cat/vocabulari-catala-infermeres-girona",
        resultat: "Trànsit orgànic passiu, massiu i gratuït des de cercadors."
      }
    },
    videos: {
      title: "Vídeos Faceless IA",
      subtitle: "YouTube → Trànsit gratis",
      icon: Video,
      color: "text-rose-500 bg-rose-500",
      content: {
        descripció: "Creació de contingut viral educatiu diari sense intervenció humana directa, per derivar trànsit a la plataforma.",
        flux_de_Treball: "Notícies RSS → Gemini (resum/vocabulari) → HeyGen (Avatar) → ElevenLabs (Veu) → Publicació Auto.",
        plataformes: ["TikTok", "YouTube Shorts", "Instagram Reels"],
        call_to_Action: "\"Practica aquesta conversa gratis amb la IA a cursos.cat\""
      }
    },
    tutor: {
      title: "Tutor IA Contextual",
      subtitle: "Aprèn xerrant 24/7",
      icon: Bot,
      color: "text-teal-500 bg-teal-500",
      content: {
        descripció: "Motor d'IA conversacional (Veu i Text) que simula situacions reals adaptades a la professió de l'usuari (ex. client a una terrassa, pacient al CAP).",
        característiques: "Paciència infinita, correcció de pronunciació suau, adaptació automàtica de nivell (A1-C2).",
        tecnologia_Clau: "Google Gemini 2.5 (Multimodal Live API) amb avatars de veu ('Jordi', 'Montserrat').",
        diferenciador: "No ensenya gramàtica avorrida, entrena per a la vida real."
      }
    },
    comunidad: {
      title: "Comunitat + Pràctica",
      subtitle: "Tàndem IA + humans",
      icon: MessageSquare,
      color: "text-emerald-500 bg-emerald-500",
      content: {
        descripció: "Fòrum o servidor Discord integrat perquè els usuaris no estudiïn sols.",
        funcionament: "Tàndem lingüístic entre usuaris per practicar.",
        integració_IA: "Bots d'IA en canals de veu que actuen com a companys de debat sobre actualitat catalana quan no hi ha humans disponibles.",
        retenció: "Crea pertinença i redueix la taxa d'abandonament (churn)."
      }
    },
    b2b: {
      title: "B2B Empreses",
      subtitle: "Ticket més alt, €€€",
      icon: Briefcase,
      color: "text-emerald-600 bg-emerald-600",
      content: {
        descripció: "Solució 'SaaS Educatiu' per a departaments de Recursos Humans en empreses catalanes (supermercats, hospitals, atenció al client).",
        model: "Subscripció corporativa (Ex: 200€/mes per 50 empleats).",
        panell_RRHH: "Dashboard automàtic amb hores de pràctica i progrés de fluïdesa de la plantilla.",
        proposta_de_Valor: "Compliment normatiu, RSC i millora en atenció al client local."
      }
    },
    certificacion: {
      title: "Certificació pròpia",
      subtitle: "Examen IA + diploma",
      icon: Award,
      color: "text-pink-500 bg-pink-500",
      content: {
        descripció: "Emissió d'un 'Certificat de Fluïdesa Pràctica' avaluat íntegrament per IA.",
        procés: "Entrevista de veu de 15 minuts amb la IA avaluant comprensió, vocabulari i pronunciació.",
        entregable: "Diploma en PDF (tecnologia Blockchain/NFT opcional) llest per afegir a LinkedIn.",
        monetització: "Cobrament per dret a examen (Ex: 15€)."
      }
    },
    afiliacion: {
      title: "Afiliació + Ads",
      subtitle: "Ingressos passius auto",
      icon: TrendingUp,
      color: "text-orange-500 bg-orange-500",
      content: {
        descripció: "Monetització complementària per a usuaris del pla gratuït.",
        publicitat: "Anuncis (AdSense) mostrats a la interfície gratuïta.",
        afiliats: "Links recomanats dinàmicament: comptes bancaris sense comissions, agències de lloguer, assegurances per a nouvinguts.",
        avantatge: "Rendibilitza el trànsit de baix poder adquisitiu sense cost addicional."
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8 font-sans selection:bg-indigo-200">
      
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center justify-center space-x-2 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
            <Sparkles size={14} />
            <span>Dashboard Estratègic</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visió <span className="text-indigo-600">cursos.cat</span>
          </h1>
          <p className="text-slate-500 max-w-xl text-sm md:text-base mt-1">
            La primera plataforma d'integració lingüística i professional de Catalunya impulsada 100% per IA.
          </p>
        </div>
      </header>

      {/* Main Layout: Left Menu & Right Detail Panel */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 relative">
        
        {/* COLUMNA IZQUIERDA: Menú de Nodos (Sección scrolleable o apilada en mobile) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-5 shrink-0">
          
          {/* Adquisición */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
              <Layers size={18} className="text-slate-400"/>
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">1. Adquisició</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              <StrategyNode {...nodes.seo} active={selectedNode === 'seo'} onClick={() => setSelectedNode('seo')} />
              <StrategyNode {...nodes.videos} active={selectedNode === 'videos'} onClick={() => setSelectedNode('videos')} />
              <StrategyNode {...nodes.inmigrantes} active={selectedNode === 'inmigrantes'} onClick={() => setSelectedNode('inmigrantes')} />
            </div>
          </div>

          {/* Producto Core */}
          <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-2xl shadow-sm border border-indigo-100 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="flex items-center gap-2 mb-3 border-b border-indigo-100 pb-2 relative z-10">
              <Cpu size={18} className="text-indigo-500"/>
              <h2 className="text-sm font-bold text-indigo-900 uppercase tracking-wider">2. Producte Principal</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 relative z-10">
              <StrategyNode {...nodes.central} active={selectedNode === 'central'} onClick={() => setSelectedNode('central')} />
              <StrategyNode {...nodes.tutor} active={selectedNode === 'tutor'} onClick={() => setSelectedNode('tutor')} />
              <StrategyNode {...nodes.comunidad} active={selectedNode === 'comunidad'} onClick={() => setSelectedNode('comunidad')} />
            </div>
          </div>

          {/* Monetización */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
              <TrendingUp size={18} className="text-slate-400"/>
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">3. Monetització</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              <StrategyNode {...nodes.b2b} active={selectedNode === 'b2b'} onClick={() => setSelectedNode('b2b')} />
              <StrategyNode {...nodes.certificacion} active={selectedNode === 'certificacion'} onClick={() => setSelectedNode('certificacion')} />
              <StrategyNode {...nodes.afiliacion} active={selectedNode === 'afiliacion'} onClick={() => setSelectedNode('afiliacion')} />
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: Panel de Detalle (Sticky en Desktop) */}
        <div className="w-full lg:w-2/3">
          <div className="sticky top-6">
            <div className={`bg-white p-6 md:p-8 rounded-3xl shadow-xl border-t-4 transition-colors duration-500 min-h-[500px] ${
              nodes[selectedNode].color.includes('indigo') ? 'border-t-indigo-500' :
              nodes[selectedNode].color.includes('blue') ? 'border-t-blue-500' :
              nodes[selectedNode].color.includes('amber') ? 'border-t-amber-500' :
              nodes[selectedNode].color.includes('rose') ? 'border-t-rose-500' :
              nodes[selectedNode].color.includes('teal') ? 'border-t-teal-500' :
              nodes[selectedNode].color.includes('emerald') ? 'border-t-emerald-500' :
              nodes[selectedNode].color.includes('pink') ? 'border-t-pink-500' :
              'border-t-orange-500'
            }`}>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8 border-b pb-6">
                <div className={`p-4 rounded-2xl ${nodes[selectedNode].color.replace('text-', 'bg-')} text-white shadow-md shrink-0`}>
                  {React.createElement(nodes[selectedNode].icon, { size: 36, strokeWidth: 1.5 })}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Anàlisi del Mòdul</p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
                    {nodes[selectedNode].title}
                  </h2>
                  <p className={`text-base md:text-lg font-medium mt-1 ${nodes[selectedNode].color.replace('bg-', 'text-').replace('-500', '-600')}`}>
                    {nodes[selectedNode].subtitle}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Main Description */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800 text-base flex items-center gap-2">
                    <Sparkles size={16} className="text-amber-500" />
                    Visió del Mòdul
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    {nodes[selectedNode].content.descripció}
                  </p>
                </div>
                
                {/* Tech / Automation Details */}
                <div className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 text-base mb-4 border-b border-slate-200 pb-2">Claus d'Execució</h4>
                  <ul className="space-y-3.5">
                    {Object.entries(nodes[selectedNode].content).map(([key, value]) => {
                      if (key.toLowerCase() === 'descripció') return null;
                      
                      return (
                        <li key={key} className="flex flex-col gap-1">
                          <span className="capitalize font-bold text-slate-700 text-sm">
                            {key.replace(/_/g, ' ')}:
                          </span> 
                          <span className="text-slate-600 font-medium text-sm">
                            {Array.isArray(value) 
                              ? <div className="flex flex-wrap gap-1.5 mt-1">
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
      
      <footer className="max-w-7xl mx-auto mt-12 text-center text-slate-400 text-xs md:text-sm font-medium pb-4">
        Prem qualsevol mòdul per aprofundir | Projecte Estratègic cursos.cat
      </footer>
    </div>
  );
};

export default App;