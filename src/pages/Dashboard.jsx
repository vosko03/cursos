import React, { useState, useRef } from 'react';
import { 
  Users, Bot, Search, Video, Briefcase, Award, 
  MessageSquare, TrendingUp, Cpu, Layers, Globe, 
  Home, Map, Sparkles
} from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";

// --- COMPONENTS SECUNDARIS ---

const StrategyNode = ({ title, icon: Icon, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left transition-all duration-300 ease-out group rounded-xl p-2 flex items-center gap-3 border
      ${active 
        ? `bg-white border-zinc-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] z-10` 
        : 'border-transparent hover:bg-zinc-100/50 opacity-70 hover:opacity-100'
      }`}
  >
    <div className={`p-1.5 rounded-lg transition-colors duration-300 ${active ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-500 group-hover:text-zinc-800 group-hover:bg-zinc-200/50'}`}>
      <Icon size={16} strokeWidth={2} />
    </div>
    <div className="overflow-hidden">
      <h3 className={`font-semibold text-sm leading-tight truncate transition-colors ${active ? 'text-zinc-900' : 'text-zinc-600 group-hover:text-zinc-900'}`}>
        {title}
      </h3>
    </div>
  </button>
);

const DetailPanel = ({ node }) => {
  if (!node) return null;

  return (
    // Afegim una clau (key) perquè React desmunti i remunti el component en canviar, activant l'animació CSS
    <div key={node.title} className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm h-full overflow-y-auto custom-scrollbar animate-fade-in">
      
      {/* Header del Panell */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
        <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-900 shrink-0">
          {React.createElement(node.icon, { size: 24, strokeWidth: 1.5 })}
        </div>
        <div>
          <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">Pilar Estratègic</p>
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
            {node.title}
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            {node.subtitle}
          </p>
        </div>
      </div>
      
      {/* Contingut principal */}
      <div className="space-y-8">
        <div>
          <h4 className="font-semibold text-zinc-900 text-sm flex items-center gap-2 mb-3">
            <Sparkles size={14} className="text-zinc-400" />
            Visió i Justificació del Mòdul
          </h4>
          <p className="text-zinc-600 leading-relaxed text-sm">
            {node.content.descripció}
          </p>
        </div>
        
        {/* Llista Minimalista (Sense fons gris, només línies netes) */}
        <div>
          <h4 className="font-semibold text-zinc-900 text-sm mb-4 pb-2 border-b border-zinc-100">
            Claus d'Execució i Dades
          </h4>
          <ul className="space-y-4">
            {Object.entries(node.content).map(([key, value]) => {
              if (key.toLowerCase() === 'descripció') return null;
              
              return (
                <li key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 group">
                  <span className="capitalize font-medium text-zinc-800 text-sm sm:w-36 shrink-0">
                    {key.replace(/_/g, ' ')}
                  </span> 
                  <span className="text-zinc-500 text-sm">
                    {Array.isArray(value) 
                      ? <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                          {value.map(tag => (
                            <span key={tag} className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md text-xs text-zinc-600">
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

// --- DADES ---
// Els temes de colors s'han eliminat. Ara tots els nodes comparteixen el mateix disseny minimalista.

const nodes = {
  central: { title: "Plataforma Core", subtitle: "L'ecosistema immersiu", icon: Globe, content: { descripció: "El nucli tecnològic de cursos.cat. Consisteix en un entorn d'immersió sota demanda impulsat al 100% per Intel·ligència Artificial, dissenyat per superar les limitacions de l'ensenyament estàtic tradicional. Ofereix una experiència fluida, totalment gamificada i adaptada de forma dinàmica al ritme d'absorció i interessos de cada alumne.", innovació: "Motor d'aprenentatge hiperpersonalitzat que s'allunya de la rigidesa dels clàssics LMS com Moodle, generant contingut on-the-fly.", tecnologia_Base: ["Next.js", "Gemini Pro", "Matxa-TTS (Aina)", "Supabase", "Stripe"], escalabilitat: "Arquitectura 'serverless' i de microserveis preparada per suportar desenes de milers d'usuaris concurrents sense degradació de latència ni costos d'infraestructura innecessaris." } },
  tutor: { title: "Tutor IA Contextual", subtitle: "Pràctica hiperrealista 24/7", icon: Bot, content: { descripció: "Motor d'IA conversacional avançat (per veu en temps real i text) que simula situacions reals i quotidianes amb les quals l'usuari es trobarà: des d'una visita al metge, fer tràmits a l'ajuntament, fins a atendre clients al sector serveis. Actua com un professor natiu infinitament pacient, eliminant l'ansietat o la vergonya de parlar en públic.", tecnologia_Vocal: "Integració de Matxa-TTS Catalan Multispeaker del Projecte Aina (Generalitat/BSC) per garantir accents naturals de les diferents variants del català.", diferenciador: "No es basa en ensenyar taules gramaticals de memòria, sinó que entrena habilitats lingüístiques pràctiques per sobreviure i integrar-se en el dia a dia.", mètriques_d_èxit: "Garantir un augment del 300% en el temps efectiu de pràctica oral respecte a les classes grupals presencials on l'alumne a penes intervé." } },
  comunidad: { title: "Comunitat i Tàndem", subtitle: "La xarxa social humana", icon: MessageSquare, content: { descripció: "L'aprenentatge aïllat té una taxa d'abandonament alta. Per solucionar-ho, fomentem la cohesió social i l'arrelament a través d'espais digitals segurs on la IA passa a un segon pla i el factor humà pren el relleu. Integrem la comunitat directament en el procés.", funcionament: "Sistema de matchmaking per crear tàndems lingüístics entre usuaris de nivells complementaris.", dinàmiques: "Implementació de lligues setmanals, 'leaderboards' i reptes col·lectius per mantenir la motivació intrínseca alta.", retenció: "La generació de sentit de pertinença és l'eina número u per reduir la taxa de 'churn' (usuaris que es donen de baixa)." } },
  
  inmigrantes: { title: "Mercat: Nouvinguts", subtitle: "El gruix de l'adquisició B2C", icon: Users, content: { descripció: "El nostre segment objectiu de més volum: persones arribades recentment que necessiten el català com a eina urgent d'arrelament i ascensor sociolaboral. Volem oferir una barrera d'entrada gairebé inexistent per democratitzar l'accés a la llengua, atraient-los cap al nostre ecosistema des del primer minut.", estratègia_de_Captació: "Product-Led Growth mitjançant un model Freemium molt atractiu (ex: 10 minuts al dia de conversa amb IA gratuïts).", fidelització: "Sistema de ratxes ('streaks') inspirat en aplicacions d'hàbits d'èxit com Duolingo per assegurar la recurrència diària.", impacte_Social: "Alineació total amb polítiques de foment del català, cohesió social i integració al mercat laboral local." } },
  seo: { title: "SEO Programàtic IA", subtitle: "Captació orgànica passiva", icon: Search, content: { descripció: "El nostre motor d'adquisició més potent i rendible a mitjà termini. Consisteix en la generació i indexació massiva de pàgines web altament específiques dissenyades per interceptar cerques de nínxol (Long Tail) que l'usuari fa a Google abans o poc després d'arribar a Catalunya.", procés_Automatitzat: "Scripts en Python interactuant amb l'API de Gemini per crear milers d'estructures com: 'Vocabulari en català per a [Professió] a [Ciutat]'.", conversió: "Cada landing està optimitzada amb Copywriting persuasiu per capturar l'usuari (lead) en els primers 15 segons d'haver aterrat.", exemple_Real: "Si un usuari busca 'Aprender catalán para trabajar de camarero en Girona', som el primer resultat amb un mòdul gratuït exacte preparat per a ell." } },
  videos: { title: "Viralitat 'Faceless'", subtitle: "Trànsit des de xarxes socials", icon: Video, content: { descripció: "Una autèntica màquina de contingut. Creació automatitzada i escalable de vídeos educatius de format curt (micro-learning) dissenyats específicament per a l'algoritme de TikTok, Instagram Reels i YouTube Shorts. Tot es genera mitjançant IA, sense dependre d'actors o càmeres.", flux_de_Treball: "Extracció de notícies o modismes → Guió amb Gemini → Generació de vídeo → Veu amb Matxa-TTS → Publicació.", optimització_Contínua: "Anàlisi A/B automàtic de la retenció d'audiència (hooks) per iterar i millorar els guions en temps real.", call_to_Action: "Tots els vídeos deriven l'audiència mitjançant un 'hook' clar: 'Practica aquesta conversa tu mateix gratis a cursos.cat'." } },
  
  b2b: { title: "B2B per a Empreses", subtitle: "Alt valor i ingressos recurrents", icon: Briefcase, content: { descripció: "L'escala de monetització principal. Una solució 'SaaS (Software as a Service) Educatiu' dissenyada exclusivament per a departaments de Recursos Humans. Està enfocada a sectors on l'atenció al client en català és crucial (sanitat, hostaleria, 'retail') però on hi ha molta rotació de personal castellanoparlant o estranger.", model_de_Negoci: "Contractes corporatius de llicències per volum (ex: tarifa plana de 200€/mes per formar fins a 50 empleats simultàniament).", proposta_de_Valor: "Garanteix el compliment normatiu de drets lingüístics, millora les ràtios d'atenció al client i potencia la RSC corporativa.", onboarding_Senzill: "Desplegament ràpid mitjançant enllaços d'invitació al correu corporatiu i un panell de control HR per veure el progrés en temps real de la plantilla." } },
  certificacion: { title: "Certificació IA", subtitle: "L'estàndard pràctic del mercat", icon: Award, content: { descripció: "Creació d'un nou estàndard d'avaluació al sector. Emissió d'un 'Certificat de Fluïdesa Pràctica' completament examinat i qualificat per models de llenguatge avançats. Supera la burocràcia dels exàmens oficials i ofereix a empreses i usuaris una prova de nivell oral instantània, objectiva i accessible des de qualsevol lloc.", avaluació_Digital: "Examen oral de 15 minuts interactuant amb l'avatar IA, on s'avalua fonètica, fluïdesa, vocabulari i temps de resposta.", el_Producte: "Diploma digital verificat (PDF/Blockchain) preparat per integrar-se a un sol clic al perfil de LinkedIn de l'usuari.", validesa_al_Mercat: "L'estratègia inclou forjar aliances ràpides amb portals de feina (InfoJobs) i ETTs locals perquè reconeguin aquesta certificació com un filtre vàlid de contractació." } },
  afiliacion: { title: "Afiliació Estratègica", subtitle: "Monetització indirecta", icon: TrendingUp, content: { descripció: "No tots els usuaris tindran capacitat per pagar una subscripció (especialment els nouvinguts). Aquest mòdul assegura que el 100% del trànsit generi ingressos passius i no intrusius, oferint serveis de valor afegit just en el moment que l'usuari els necessita per assentar-se al país.", escalat_Contextual: "Si l'usuari demana a la IA vocabulari per llogar un pis, la plataforma mostrarà anuncis o links d'afiliats de portals immobiliaris de forma dinàmica i natural.", publicitat: "Integració d'anuncis d'alta qualitat (Google AdSense / programàtica) únicament a la versió gratuïta per incentivar el pas a Premium.", rendibilitat: "Permet absorbir els costos de l'API de Gemini (tokens) generats pels usuaris Freemium, fent que el creixement sigui sostenible econòmicament des del dia 1." } }
};

// --- COMPONENT PRINCIPAL ---

const Dashboard = () => {
  const [selectedNode, setSelectedNode] = useState('central');
  const detailRef = useRef(null);

  const handleNodeSelect = (key) => {
    setSelectedNode(key);
    
    // Desplaçament per a mòbils
    if (window.innerWidth < 1024 && detailRef.current) {
      setTimeout(() => {
        const yPosition = detailRef.current.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-zinc-900 selection:bg-zinc-200 relative">
      
      {/* Capçalera STICKY Minimalista */}
      <div className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-lg pt-4 pb-4 px-4 md:px-6 lg:px-8 border-b border-zinc-200/50">
        <header className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            <div className="inline-flex items-center gap-2 bg-zinc-900 text-white px-3.5 py-2 rounded-md text-sm font-medium shrink-0 self-start md:self-auto">
              <Home size={16} />
              <span>cursos.cat</span>
            </div>
            <div className="border-l border-transparent md:border-zinc-300 md:pl-4">
              <h1 className="text-base font-semibold text-zinc-900 tracking-tight leading-tight">Estratègia i Model de Creixement</h1>
              <p className="text-sm text-zinc-500 mt-0.5">La primera plataforma d'integració lingüística i professional de Catalunya impulsada 100% per IA.</p>
            </div>
          </div>
          <div className="hidden md:inline-flex items-center gap-2 bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider border border-zinc-200 shrink-0">
            <Map size={14} />
            Mapa Estratègic
          </div>
        </header>
      </div>

      {/* Main Layout */}
      <main className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-4 md:px-6 lg:px-8 pt-8 pb-12">
        
        {/* Navegació Lateral Minimalista */}
        <aside className="w-full lg:w-[300px] flex flex-col gap-8 shrink-0">
          
          <section className="space-y-3">
            <div className="flex items-center gap-2 mb-2 text-zinc-400">
              <Cpu size={16}/>
              <h2 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">1. La Solució Base</h2>
            </div>
            <div className="flex flex-col gap-1.5">
              {['central', 'tutor', 'comunidad'].map(key => (
                <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 mb-2 text-zinc-400">
              <Layers size={16}/>
              <h2 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">2. Motor de Creixement</h2>
            </div>
            <div className="flex flex-col gap-1.5">
              {['inmigrantes', 'seo', 'videos'].map(key => (
                <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 mb-2 text-zinc-400">
              <TrendingUp size={16}/>
              <h2 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">3. Model de Negoci</h2>
            </div>
            <div className="flex flex-col gap-1.5">
              {['b2b', 'certificacion', 'afiliacion'].map(key => (
                <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
              ))}
            </div>
          </section>

        </aside>

        {/* Panell de Detall Central */}
        <section className="w-full lg:flex-1" ref={detailRef}>
          <div className="sticky top-[140px] h-[calc(100vh-160px)] min-h-[500px]">
            <DetailPanel node={nodes[selectedNode]} />
          </div>
        </section>

      </main>
      
      {/* Footer Minimalista */}
      <footer className="max-w-6xl mx-auto mb-8 text-center px-4 border-t border-zinc-200 pt-6">
        <p className="text-zinc-400 text-xs font-medium tracking-wider">
          cursos.cat &bull; Selecciona un mòdul per explorar l'estratègia
        </p>
      </footer>

      {/* CSS per a Transicions i Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #e4e4e7; border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #d4d4d8; }
      `}} />

      <Analytics />
    </div>
  );
};

export default Dashboard;
