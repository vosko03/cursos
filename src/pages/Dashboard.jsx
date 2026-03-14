import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Bot, Search, Video, Briefcase, Award, 
  MessageSquare, TrendingUp, Cpu, Layers, Globe, 
  ArrowRight, Sparkles, ArrowLeft
} from 'lucide-react';

const StrategyNode = ({ title, subtitle, icon: Icon, color, active, onClick }) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer transition-all duration-300 transform 
      ${active 
        ? 'scale-105 ring-2 ring-offset-2 ring-indigo-500 bg-white shadow-md' 
        : 'hover:scale-102 bg-slate-50 hover:bg-white shadow-sm hover:shadow'
      } 
      border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center space-y-3 group relative overflow-hidden`}
  >
    <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full opacity-10 ${color.replace('text-', 'bg-')}`}></div>
    <div className={`p-4 rounded-full ${color.replace('text-', 'bg-')} text-white shadow-inner group-hover:scale-110 transition-transform duration-300`}>
      <Icon size={28} strokeWidth={2} />
    </div>
    <div className="space-y-1">
      <h3 className="font-extrabold text-gray-800 text-sm md:text-base leading-tight">{title}</h3>
      <p className="text-xs font-medium text-gray-500">{subtitle}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [selectedNode, setSelectedNode] = useState('central');

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

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans selection:bg-indigo-200">
      <div className="max-w-6xl mx-auto mb-6">
        <Link to="/" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Tornar a l'inici
        </Link>
      </div>
      
      <header className="max-w-6xl mx-auto mb-10 text-center space-y-3">
        <div className="inline-flex items-center justify-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-bold mb-2">
          <Sparkles size={16} />
          <span>Mapa Estratègic Interactiu</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Visió <span className="text-indigo-600">cursos.cat</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          La primera plataforma d'integració lingüística i professional de Catalunya impulsada 100% per IA.
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6 border-b-2 border-slate-200 pb-2">
            <div className="p-2 bg-slate-200 rounded-lg text-slate-700"><Layers size={24}/></div>
            <div><h2 className="text-xl font-bold text-slate-800">1. Motor d'Adquisició</h2><p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Trànsit automatitzat</p></div>
          </div>
          <StrategyNode {...nodes.seo} active={selectedNode === 'seo'} onClick={() => setSelectedNode('seo')} />
          <StrategyNode {...nodes.videos} active={selectedNode === 'videos'} onClick={() => setSelectedNode('videos')} />
          <div className="flex justify-center py-2 opacity-50"><ArrowRight size={24} className="transform rotate-90 lg:rotate-0 text-slate-400" /></div>
          <StrategyNode {...nodes.inmigrantes} active={selectedNode === 'inmigrantes'} onClick={() => setSelectedNode('inmigrantes')} />
        </div>

        <div className="space-y-4 lg:pt-0 pt-8">
          <div className="flex items-center gap-2 mb-6 border-b-2 border-indigo-200 pb-2">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700"><Cpu size={24}/></div>
            <div><h2 className="text-xl font-bold text-indigo-900">2. Producte Principal</h2><p className="text-xs text-indigo-500 uppercase font-semibold tracking-wider">Retenció i Valor</p></div>
          </div>
          <div className="bg-gradient-to-b from-indigo-50 to-white p-2 rounded-3xl border border-indigo-100 shadow-xl relative">
            <div className="absolute inset-0 bg-indigo-400 blur-3xl opacity-10 rounded-full"></div>
            <StrategyNode {...nodes.central} active={selectedNode === 'central'} onClick={() => setSelectedNode('central')} />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <StrategyNode {...nodes.tutor} active={selectedNode === 'tutor'} onClick={() => setSelectedNode('tutor')} />
              <StrategyNode {...nodes.comunidad} active={selectedNode === 'comunidad'} onClick={() => setSelectedNode('comunidad')} />
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:pt-0 pt-8">
          <div className="flex items-center gap-2 mb-6 border-b-2 border-slate-200 pb-2">
            <div className="p-2 bg-slate-200 rounded-lg text-slate-700"><TrendingUp size={24}/></div>
            <div><h2 className="text-xl font-bold text-slate-800">3. Monetització</h2><p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Fluxos d'Ingressos</p></div>
          </div>
          <StrategyNode {...nodes.b2b} active={selectedNode === 'b2b'} onClick={() => setSelectedNode('b2b')} />
          <StrategyNode {...nodes.certificacion} active={selectedNode === 'certificacion'} onClick={() => setSelectedNode('certificacion')} />
          <StrategyNode {...nodes.afiliacion} active={selectedNode === 'afiliacion'} onClick={() => setSelectedNode('afiliacion')} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 mb-8">
        <div className={`bg-white p-6 md:p-8 rounded-3xl shadow-2xl border-t-4 transition-colors duration-500 ${
          nodes[selectedNode].color.includes('indigo') ? 'border-t-indigo-500' :
          nodes[selectedNode].color.includes('blue') ? 'border-t-blue-500' :
          nodes[selectedNode].color.includes('amber') ? 'border-t-amber-500' :
          nodes[selectedNode].color.includes('rose') ? 'border-t-rose-500' :
          nodes[selectedNode].color.includes('teal') ? 'border-t-teal-500' :
          nodes[selectedNode].color.includes('emerald') ? 'border-t-emerald-500' :
          nodes[selectedNode].color.includes('pink') ? 'border-t-pink-500' :
          'border-t-orange-500'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 border-b pb-6">
            <div className={`p-5 rounded-2xl ${nodes[selectedNode].color.replace('text-', 'bg-')} text-white shadow-lg`}>
              {React.createElement(nodes[selectedNode].icon, { size: 40, strokeWidth: 1.5 })}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Mòdul Seleccionat</p>
              <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">{nodes[selectedNode].title}</h2>
              <p className={`text-lg font-medium mt-1 ${nodes[selectedNode].color.replace('bg-', 'text-').replace('-500', '-600')}`}>
                {nodes[selectedNode].subtitle}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                <Sparkles size={18} className="text-amber-500" /> Visió del Mòdul
              </h4>
              <p className="text-slate-600 leading-relaxed text-lg">{nodes[selectedNode].content.descripció}</p>
            </div>
            <div className="md:col-span-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-800 text-lg mb-4">Claus d'Execució</h4>
              <ul className="space-y-4">
                {Object.entries(nodes[selectedNode].content).map(([key, value]) => {
                  if (key.toLowerCase() === 'descripció') return null;
                  return (
                    <li key={key} className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                      <span className="capitalize font-bold text-slate-700 min-w-[140px] text-sm mt-0.5">{key.replace(/_/g, ' ')}:</span> 
                      <span className="text-slate-600 font-medium">
                        {Array.isArray(value) 
                          ? <div className="flex flex-wrap gap-2">{value.map(tag => (<span key={tag} className="bg-white border border-slate-200 px-2 py-1 rounded-md text-xs font-bold text-slate-700 shadow-sm">{tag}</span>))}</div>
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
      <footer className="text-center text-slate-400 text-sm font-medium pb-8">Prem qualsevol mòdul per aprofundir | Projecte Estratègic cursos.cat</footer>
    </div>
  );
};

export default Dashboard;