import React, { useState, useRef } from 'react';
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
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pilar Estratègic</p>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight leading-tight">
            {node.title}
          </h2>
          <p className={`text-sm font-medium mt-1 ${theme.textSubtitle}`}>
            {node.subtitle}
          </p>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5 mb-2">
            <Sparkles size={14} className="text-amber-500" />
            Visió i Justificació del Mòdul
          </h4>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {node.content.descripció}
          </p>
        </div>
        
        <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-100">
          <h4 className="font-bold text-slate-800 text-xs mb-4 border-b border-slate-200 pb-2 uppercase tracking-wide">
            Claus d'Execució i Dades
          </h4>
          <ul className="space-y-4">
            {Object.entries(node.content).map(([key, value]) => {
              if (key.toLowerCase() === 'descripció') return null;
              
              return (
                <li key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="capitalize font-bold text-slate-700 text-xs sm:w-32 shrink-0">
                    {key.replace(/_/g, ' ')}
                  </span> 
                  <span className="text-slate-600 text-sm">
                    {Array.isArray(value) 
                      ? <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                          {value.map(tag => (
                            <span key={tag} className="bg-white border border-slate-200 px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-700 shadow-sm">
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
  central: { theme: themes.indigo, title: "Plataforma Core", subtitle: "L'ecosistema immersiu", icon: Globe, content: { descripció: "El nucli tecnològic de cursos.cat. Consisteix en un entorn d'immersió sota demanda impulsat al 100% per Intel·ligència Artificial, dissenyat per superar les limitacions de l'ensenyament estàtic tradicional. Ofereix una experiència fluida, totalment gamificada i adaptada de forma dinàmica al ritme d'absorció i interessos de cada alumne.", innovació: "Motor d'aprenentatge hiperpersonalitzat que s'allunya de la rigidesa dels clàssics LMS com Moodle, generant contingut on-the-fly.", tecnologia_Base: ["Next.js", "Gemini Pro", "ElevenLabs (TTS)", "Supabase", "Stripe"], escalabilitat: "Arquitectura 'serverless' i de microserveis preparada per suportar desenes de milers d'usuaris concurrents sense degradació de latència ni costos d'infraestructura innecessaris." } },
  tutor: { theme: themes.teal, title: "Tutor IA Contextual", subtitle: "Pràctica hiperrealista 24/7", icon: Bot, content: { descripció: "Motor d'IA conversacional avançat (per veu en temps real i text) que simula situacions reals i quotidianes amb les quals l'usuari es trobarà: des d'una visita al metge, fer tràmits a l'ajuntament, fins a atendre clients al sector serveis. Actua com un professor natiu infinitament pacient, eliminant l'ansietat o la vergonya de parlar en públic.", característiques: "Correcció de pronunciació no intrusiva, adaptació de vocabulari sectorial automàtica i reconeixement d'accents.", diferenciador: "No es basa en ensenyar taules gramaticals de memòria, sinó que entrena habilitats lingüístiques pràctiques per sobreviure i integrar-se en el dia a dia.", mètriques_d_èxit: "Garantir un augment del 300% en el temps efectiu de pràctica oral respecte a les classes grupals presencials on l'alumne a penes intervé." } },
  comunidad: { theme: themes.emerald, title: "Comunitat i Tàndem", subtitle: "La xarxa social humana", icon: MessageSquare, content: { descripció: "L'aprenentatge aïllat té una taxa d'abandonament alta. Per solucionar-ho, fomentem la cohesió social i l'arrelament a través d'espais digitals segurs on la IA passa a un segon pla i el factor humà pren el relleu. Integrem la comunitat directament en el procés.", funcionament: "Sistema de matchmaking per crear tàndems lingüístics entre usuaris de nivells complementaris.", dinàmiques: "Implementació de lligues setmanals, 'leaderboards' i reptes col·lectius per mantenir la motivació intrínseca alta.", retenció: "La generació de sentit de pertinença és l'eina número u per reduir la taxa de 'churn' (usuaris que es donen de baixa)." } },
  
  inmigrantes: { theme: themes.blue, title: "Mercat: Nouvinguts", subtitle: "El gruix de l'adquisició B2C", icon: Users, content: { descripció: "El nostre segment objectiu de més volum: persones arribades recentment que necessiten el català com a eina urgent d'arrelament i ascensor sociolaboral. Volem oferir una barrera d'entrada gairebé inexistent per democratitzar l'accés a la llengua, atraient-los cap al nostre ecosistema des del primer minut.", estratègia_de_Captació: "Product-Led Growth mitjançant un model Freemium molt atractiu (ex: 10 minuts al dia de conversa amb IA gratuïts).", fidelització: "Sistema de ratxes ('streaks') inspirat en aplicacions d'hàbits d'èxit com Duolingo per assegurar la recurrència diària.", impacte_Social: "Alineació total amb polítiques de foment del català, cohesió social i integració al mercat laboral local." } },
  seo: { theme: themes.amber, title: "SEO Programàtic IA", subtitle: "Captació orgànica passiva", icon: Search, content: { descripció: "El nostre motor d'adquisició més potent i rendible a mitjà termini. Consisteix en la generació i indexació massiva de pàgines web altament específiques dissenyades per interceptar cerques de nínxol (Long Tail) que l'usuari fa a Google abans o poc després d'arribar a Catalunya.", procés_Automatitzat: "Scripts en Python interactuant amb l'API de Gemini per crear milers d'estructures com: 'Vocabulari en català per a [Professió] a [Ciutat]'.", conversió: "Cada landing està optimitzada amb Copywriting persuasiu per capturar l'usuari (lead) en els primers 15 segons d'haver aterrat.", exemple_Real: "Si un usuari busca 'Aprender catalán para trabajar de camarero en Girona', som el primer resultat amb un mòdul gratuït exacte preparat per a ell." } },
  videos: { theme: themes.rose, title: "Viralitat 'Faceless'", subtitle: "Trànsit des de xarxes socials", icon: Video, content: { descripció: "Una autèntica màquina de contingut. Creació automatitzada i escalable de vídeos educatius de format curt (micro-learning) dissenyats específicament per a l'algoritme de TikTok, Instagram Reels i YouTube Shorts. Tot es genera mitjançant IA, sense dependre d'actors o càmeres.", flux_de_Treball: "Extracció de notícies o modismes → Guió amb Gemini → Generació de vídeo amb HeyGen → Veu amb ElevenLabs → Publicació.", optimització_Contínua: "Anàlisi A/B automàtic de la retenció d'audiència (hooks) per iterar i millorar els guions en temps real.", call_to_Action: "Tots els vídeos deriven l'audiència mitjançant un 'hook' clar: 'Practica aquesta conversa tu mateix gratis a cursos.cat'." } },
  
  b2b: { theme: themes.emerald, title: "B2B per a Empreses", subtitle: "Alt valor i ingressos recurrents", icon: Briefcase, content: { descripció: "L'escala de monetització principal. Una solució 'SaaS (Software as a Service) Educatiu' dissenyada exclusivament per a departaments de Recursos Humans. Està enfocada a sectors on l'atenció al client en català és crucial (sanitat, hostaleria, 'retail') però on hi ha molta rotació de personal castellanoparlant o estranger.", model_de_Negoci: "Contractes corporatius de llicències per volum (ex: tarifa plana de 200€/mes per formar fins a 50 empleats simultàniament).", proposta_de_Valor: "Garanteix el compliment normatiu de drets lingüístics, millora les ràtios d'atenció al client i potencia la RSC corporativa.", onboarding_Senzill: "Desplegament ràpid mitjançant enllaços d'invitació al correu corporatiu i un panell de control HR per veure el progrés en temps real de la plantilla." } },
  certificacion: { theme: themes.pink, title: "Certificació IA", subtitle: "L'estàndard pràctic del mercat", icon: Award, content: { descripció: "Creació d'un nou estàndard d'avaluació al sector. Emissió d'un 'Certificat de Fluïdesa Pràctica' completament examinat i qualificat per models de llenguatge avançats. Supera la burocràcia dels exàmens oficials i ofereix a empreses i usuaris una prova de nivell oral instantània, objectiva i accessible des de qualsevol lloc.", avaluació_Digital: "Examen oral de 15 minuts interactuant amb l'avatar IA, on s'avalua fonètica, fluïdesa, vocabulari i temps de resposta.", el_Producte: "Diploma digital verificat (PDF/Blockchain) preparat per integrar-se a un sol clic al perfil de LinkedIn de l'usuari.", validesa_al_Mercat: "L'estratègia inclou forjar aliances ràpides amb portals de feina (InfoJobs) i ETTs locals perquè reconeguin aquesta certificació com un filtre vàlid de contractació." } },
  afiliacion: { theme: themes.orange, title: "Afiliació Estratègica", subtitle: "Monetització indirecta", icon: TrendingUp, content: { descripció: "No tots els usuaris tindran capacitat per pagar una subscripció (especialment els nouvinguts). Aquest mòdul assegura que el 100% del trànsit generi ingressos passius i no intrusius, oferint serveis de valor afegit just en el moment que l'usuari els necessita per assentar-se al país.", escalat_Contextual: "Si l'usuari demana a la IA vocabulari per llogar un pis, la plataforma mostrarà anuncis o links d'afiliats de portals immobiliaris de forma dinàmica i natural.", publicitat: "Integració d'anuncis d'alta qualitat (Google AdSense / programàtica) únicament a la versió gratuïta per incentivar el pas a Premium.", rendibilitat: "Permet absorbir els costos de l'API de Gemini (tokens) generats pels usuaris Freemium, fent que el creixement sigui sostenible econòmicament des del dia 1." } }
};

// --- COMPONENTE PRINCIPAL ---

const Dashboard = () => {
  const [selectedNode, setSelectedNode] = useState('central');
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
      
      {/* Header Presentación */}
      <header className="max-w-6xl mx-auto mb-8 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md">
              <Home size={18} />
              <span>cursos.cat</span>
            </div>
            <div className="border-l-2 border-slate-200 pl-4">
              <h1 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Estratègia i Model de Creixement</h1>
              <p className="text-sm font-medium text-slate-500 mt-0.5">Visió interactiva del producte, adquisició i model de negoci.</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-2 rounded-lg text-sm font-bold uppercase tracking-wide border border-indigo-100 self-start md:self-auto shadow-sm">
            <Map size={16} />
            Pitch Deck View
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Navigation - Nuevo Orden de Presentación */}
        <aside className="w-full lg:w-80 xl:w-80 flex flex-col gap-6 shrink-0">
          
          {/* FASE 1: La Solución */}
          <section className="space-y-2 relative">
            <div className="absolute inset-0 bg-indigo-50/60 blur-2xl rounded-full -z-10 transform scale-105"></div>
            <div className="flex items-center gap-2 pl-1 mb-4">
              <div className="p-1.5 bg-indigo-600 rounded-md text-white shadow-md"><Cpu size={14}/></div>
              <h2 className="text-xs font-bold text-slate-800 uppercase tracking-widest">1. La Solució Base</h2>
            </div>
            <div className="flex flex-col gap-2">
              {['central', 'tutor', 'comunidad'].map(key => (
                <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
              ))}
            </div>
          </section>

          {/* FASE 2: Crecimiento */}
          <section className="space-y-2 mt-4">
            <div className="flex items-center gap-2 pl-1 mb-4 border-t border-slate-200 pt-6">
              <div className="p-1.5 bg-amber-500 rounded-md text-white shadow-md"><Layers size={14}/></div>
              <h2 className="text-xs font-bold text-slate-800 uppercase tracking-widest">2. Motor de Creixement</h2>
            </div>
            <div className="flex flex-col gap-2">
              {['inmigrantes', 'seo', 'videos'].map(key => (
                <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
              ))}
            </div>
          </section>

          {/* FASE 3: Negocio */}
          <section className="space-y-2 mt-4">
            <div className="flex items-center gap-2 pl-1 mb-4 border-t border-slate-200 pt-6">
              <div className="p-1.5 bg-emerald-600 rounded-md text-white shadow-md"><TrendingUp size={14}/></div>
              <h2 className="text-xs font-bold text-slate-800 uppercase tracking-widest">3. Model de Negoci</h2>
            </div>
            <div className="flex flex-col gap-2">
              {['b2b', 'certificacion', 'afiliacion'].map(key => (
                <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
              ))}
            </div>
          </section>

        </aside>

        {/* Panel de Detalle */}
        <section className="w-full lg:flex-1" ref={detailRef}>
          <div className="sticky top-6 h-[calc(100vh-8rem)] min-h-[550px]">
            <DetailPanel node={nodes[selectedNode]} theme={nodes[selectedNode].theme} />
          </div>
        </section>

      </main>
      
      {/* Footer minimalista */}
      <footer className="max-w-6xl mx-auto mt-12 mb-4 text-center">
        <p className="text-slate-400 text-xs font-medium tracking-wide">
          cursos.cat &copy; 2024 &bull; Selecciona un mòdul per explorar l'estratègia
        </p>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .overflow-y-auto::-webkit-scrollbar { width: 6px; }
        .overflow-y-auto::-webkit-scrollbar-track { background: transparent; }
        .overflow-y-auto::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover { background-color: #94a3b8; }
      `}} />

      <Analytics />
    </div>
  );
};

export default Dashboard;
