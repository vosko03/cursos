import React, { useState, useEffect } from 'react';
import { 
  Users, Bot, Search, Video, Briefcase, Award, 
  MessageSquare, TrendingUp, Cpu, Layers, Globe, 
  Home, Map, Sparkles, Menu, X, BookOpen, GraduationCap
} from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";

// --- COMPONENTS SECUNDARIS ---

const StrategyNode = ({ title, icon: Icon, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left transition-all duration-200 ease-out group rounded-lg p-1.5 flex items-center gap-3
      ${active 
        ? `bg-zinc-100 text-zinc-900 font-medium shadow-sm` 
        : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
      }`}
  >
    <div className={`p-1.5 rounded-md transition-colors duration-200 ${active ? 'bg-white shadow-sm text-zinc-900' : 'bg-transparent text-zinc-400 group-hover:text-zinc-700'}`}>
      <Icon size={18} strokeWidth={2} />
    </div>
    <div className="overflow-hidden">
      <h3 className="text-sm truncate">
        {title}
      </h3>
    </div>
  </button>
);

const DetailPanel = ({ node }) => {
  if (!node) return null;

  // Renderització específica per a la pàgina de Resum Executiu
  if (node.isSummary) {
    return (
      <div key="summary" className="h-full animate-fade-in flex flex-col">
        {/* Capçalera del Resum */}
        <div className="flex justify-between items-start gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">Visió General</p>
            <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
              {node.title}
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              {node.subtitle}
            </p>
          </div>
          
          {/* LOGO REPRESENTATIU DE CURSOS (Superior Dreta) */}
          <div className="hidden sm:flex items-center gap-2 bg-zinc-900 text-white px-4 py-3 rounded-xl shadow-md shrink-0">
            <GraduationCap size={24} className="text-blue-400" />
            <span className="font-bold text-lg tracking-tight">cursos<span className="text-blue-400">.cat</span></span>
          </div>
        </div>

        {/* Contingut fàcil de llegir */}
        <div className="space-y-6 text-zinc-600 text-sm leading-relaxed">
          <p className="text-base font-medium text-zinc-800">
            Cursos.cat neix amb la missió de democratitzar l'aprenentatge del català, eliminant les barreres d'entrada tradicionals mitjançant tecnologia d'Intel·ligència Artificial avançada i conversacional.
          </p>
          <p>
            Aquest projecte no és un LMS o curs estàtic tradicional, sinó un ecosistema integral dissenyat per aconseguir una integració sociolaboral real. L'estratègia es divideix en tres pilars clau:
          </p>

          {/* Targetes resum de les 3 fases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-zinc-50/80 p-5 rounded-xl border border-zinc-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-zinc-800">
                <div className="p-1.5 bg-blue-100 text-blue-600 rounded-md"><Cpu size={16} strokeWidth={2.5}/></div>
                <h4 className="font-bold">1. La Solució</h4>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">Entorn immersiu amb un tutor d'IA de veu disponible 24/7 que simula situacions quotidianes (anar al metge, entrevistes), combinat amb una comunitat humana per fer tàndems.</p>
            </div>
            
            <div className="bg-zinc-50/80 p-5 rounded-xl border border-zinc-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-zinc-800">
                <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-md"><Layers size={16} strokeWidth={2.5}/></div>
                <h4 className="font-bold">2. Creixement</h4>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">Captació massiva i passiva via SEO programàtic (resolent milers de cerques "long tail" a Google) i viralitat a xarxes socials, impulsant un model Freemium molt accessible.</p>
            </div>

            <div className="bg-zinc-50/80 p-5 rounded-xl border border-zinc-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-zinc-800">
                <div className="p-1.5 bg-amber-100 text-amber-600 rounded-md"><TrendingUp size={16} strokeWidth={2.5}/></div>
                <h4 className="font-bold">3. Negoci</h4>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">Monetització escalable venent solucions B2B a departaments de RRHH, emissió de certificacions de fluïdesa avaluades per IA i integració d'ingressos passius per afiliació.</p>
            </div>
          </div>

          <div className="mt-8 bg-zinc-900 text-white p-4 rounded-xl flex items-start gap-3 shadow-md">
            <Sparkles size={20} className="shrink-0 mt-0.5 text-blue-400" />
            <p className="text-sm font-medium">Tria qualsevol dels mòduls al menú lateral per explorar en detall l'estratègia, la tecnologia base i les claus d'execució de cada peça del projecte.</p>
          </div>
        </div>
      </div>
    );
  }

  // Renderització per defecte dels mòduls
  return (
    <div key={node.title} className="h-full animate-fade-in">
      <div className="flex justify-between items-start gap-4 mb-8">
        <div className="pr-4">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">Pilar Estratègic</p>
          <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
            {node.title}
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            {node.subtitle}
          </p>
        </div>
        <div className={`p-3.5 rounded-xl border shrink-0 shadow-sm ${node.colorTheme}`}>
          {React.createElement(node.icon, { size: 26, strokeWidth: 1.5 })}
        </div>
      </div>
      
      <div className="space-y-8">
        <div>
          <h4 className="font-semibold text-zinc-900 text-sm flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-zinc-400" />
            Visió i Justificació del Mòdul
          </h4>
          <p className="text-zinc-600 leading-relaxed text-sm">
            {node.content["Descripció"]}
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-zinc-900 text-sm mb-4 pb-3 border-b border-zinc-100">
            Claus d'Execució i Dades
          </h4>
          <ul className="space-y-5">
            {Object.entries(node.content).map(([key, value]) => {
              if (key === 'Descripció') return null;
              
              return (
                <li key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6 group">
                  <span className="font-medium text-zinc-800 text-sm sm:w-40 shrink-0">
                    {key}
                  </span> 
                  <span className="text-zinc-600 text-sm">
                    {Array.isArray(value) 
                      ? <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                          {value.map(tag => (
                            <span key={tag} className="bg-white border border-zinc-200 px-2.5 py-1 rounded-md text-xs text-zinc-600 shadow-sm">
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

// --- DADES AMB COLORS ASSIGNATS ---

const nodes = {
  resumen: {
    isSummary: true,
    title: "Resum Executiu",
    subtitle: "Visió general i estructura del projecte",
    icon: BookOpen
  },
  central: { 
    title: "Plataforma Core", subtitle: "L'ecosistema immersiu", icon: Globe, 
    colorTheme: "bg-blue-50 text-blue-600 border-blue-200",
    content: { "Descripció": "El nucli tecnològic de cursos.cat. Consisteix en un entorn d'immersió sota demanda impulsat al 100% per Intel·ligència Artificial, dissenyat per superar les limitacions de l'ensenyament estàtic tradicional. Ofereix una experiència fluida, totalment gamificada i adaptada de forma dinàmica al ritme d'absorció i interessos de cada alumne.", "Innovació": "Motor d'aprenentatge hiperpersonalitzat que s'allunya de la rigidesa dels clàssics LMS com Moodle, generant contingut on-the-fly.", "Tecnologia base": ["Next.js", "Gemini Pro", "Matxa-TTS (Aina)", "Supabase", "Stripe"], "Escalabilitat": "Arquitectura 'serverless' i de microserveis preparada per suportar desenes de milers d'usuaris concurrents sense degradació de latència ni costos d'infraestructura innecessaris." } 
  },
  tutor: { 
    title: "Tutor IA Contextual", subtitle: "Pràctica hiperrealista 24/7", icon: Bot, 
    colorTheme: "bg-teal-50 text-teal-600 border-teal-200",
    content: { "Descripció": "Motor d'IA conversacional avançat (per veu en temps real i text) que simula situacions reals i quotidianes amb les quals l'usuari es trobarà: des d'una visita al metge, fer tràmits a l'ajuntament, fins a atendre clients al sector serveis. Actua com un professor natiu infinitament pacient, eliminant l'ansietat o la vergonya de parlar en públic.", "Tecnologia vocal": "Integració de Matxa-TTS Catalan Multispeaker del Projecte Aina (Generalitat/BSC) per garantir accents naturals de les diferents variants del català.", "Diferenciador": "No es basa en ensenyar taules gramaticals de memòria, sinó que entrena habilitats lingüístiques pràctiques per sobreviure i integrar-se en el dia a dia.", "Mètriques d'èxit": "Garantir un augment del 300% en el temps efectiu de pràctica oral respecte a les classes grupals presencials on l'alumne a penes intervé." } 
  },
  comunidad: { 
    title: "Comunitat i Tàndem", subtitle: "La xarxa social humana", icon: MessageSquare, 
    colorTheme: "bg-orange-50 text-orange-600 border-orange-200",
    content: { "Descripció": "L'aprenentatge aïllat té una taxa d'abandonament alta. Per solucionar-ho, fomentem la cohesió social i l'arrelament a través d'espais digitals segurs on la IA passa a un segon pla i el factor humà pren el relleu. Integrem la comunitat directament en el procés.", "Funcionament": "Sistema de matchmaking per crear tàndems lingüístics entre usuaris de nivells complementaris.", "Dinàmiques": "Implementació de lligues setmanals, 'leaderboards' i reptes col·lectius per mantenir la motivació intrínseca alta.", "Retenció": "La generació de sentit de pertinença és l'eina número u per reduir la taxa de 'churn' (usuaris que es donen de baixa)." } 
  },
  inmigrantes: { 
    title: "Mercat: Nouvinguts", subtitle: "El gruix de l'adquisició B2C", icon: Users, 
    colorTheme: "bg-indigo-50 text-indigo-600 border-indigo-200",
    content: { "Descripció": "El nostre segment objectiu de més volum: persones arribades recentment que necessiten el català com a eina urgent d'arrelament i ascensor sociolaboral. Volem oferir una barrera d'entrada gairebé inexistent per democratitzar l'accés a la llengua, atraient-los cap al nostre ecosistema des del primer minut.", "Estratègia de captació": "Product-Led Growth mitjançant un model Freemium molt atractiu (ex: 10 minuts al dia de conversa amb IA gratuïts).", "Fidelització": "Sistema de ratxes ('streaks') inspirat en aplicacions d'hàbits d'èxit com Duolingo per assegurar la recurrència diària.", "Impacte social": "Alineació total amb polítiques de foment del català, cohesió social i integració al mercat laboral local." } 
  },
  seo: { 
    title: "SEO Programàtic IA", subtitle: "Captació orgànica passiva", icon: Search, 
    colorTheme: "bg-emerald-50 text-emerald-600 border-emerald-200",
    content: { "Descripció": "El nostre motor d'adquisició més potent i rendible a mitjà termini. Consisteix en la generació i indexació massiva de pàgines web altament específiques dissenyades per interceptar cerques de nínxol (Long Tail) que l'usuari fa a Google abans o poc després d'arribar a Catalunya.", "Procés automatitzat": "Scripts en Python interactuant amb l'API de Gemini per crear milers d'estructures com: 'Vocabulari en català per a [Professió] a [Ciutat]'.", "Conversió": "Cada landing està optimitzada amb Copywriting persuasiu per capturar l'usuari (lead) en els primers 15 segons d'haver aterrat.", "Exemple real": "Si un usuari busca 'Aprender catalán para trabajar de camarero en Girona', som el primer resultat amb un mòdul gratuït exacte preparat per a ell." } 
  },
  videos: { 
    title: "Viralitat 'Faceless'", subtitle: "Trànsit des de xarxes socials", icon: Video, 
    colorTheme: "bg-rose-50 text-rose-600 border-rose-200",
    content: { "Descripció": "Una autèntica màquina de contingut. Creació automatitzada i escalable de vídeos educatius de format curt (micro-learning) dissenyats específicament per a l'algoritme de TikTok, Instagram Reels i YouTube Shorts. Tot es genera mitjançant IA, sense dependre d'actors o càmeres.", "Flux de treball": "Extracció de notícies o modismes → Guió amb Gemini → Generació de vídeo → Veu amb Matxa-TTS → Publicació.", "Optimització contínua": "Anàlisi A/B automàtic de la retenció d'audiència (hooks) per iterar i millorar els guions en temps real.", "Call to action": "Tots els vídeos deriven l'audiència mitjançant un 'hook' clar: 'Practica aquesta conversa tu mateix gratis a cursos.cat'." } 
  },
  b2b: { 
    title: "B2B per a Empreses", subtitle: "Alt valor i ingressos recurrents", icon: Briefcase, 
    colorTheme: "bg-slate-100 text-slate-700 border-slate-300",
    content: { "Descripció": "L'escala de monetització principal. Una solució 'SaaS (Software as a Service) Educatiu' dissenyada exclusivament per a departaments de Recursos Humans. Està enfocada a sectors on l'atenció al client en català és crucial (sanitat, hostaleria, 'retail') però on hi ha molta rotació de personal castellanoparlant o estranger.", "Model de negoci": "Contractes corporatius de llicències per volum (ex: tarifa plana de 200€/mes per formar fins a 50 empleats simultàniament).", "Proposta de valor": "Garanteix el compliment normatiu de drets lingüístics, millora les ràtios d'atenció al client i potencia la RSC corporativa.", "Onboarding senzill": "Desplegament ràpid mitjançant enllaços d'invitació al correu corporatiu i un panell de control HR per veure el progrés en temps real de la plantilla." } 
  },
  certificacion: { 
    title: "Certificació IA", subtitle: "L'estàndard pràctic del mercat", icon: Award, 
    colorTheme: "bg-amber-50 text-amber-600 border-amber-200",
    content: { "Descripció": "Creació d'un nou estàndard d'avaluació al sector. Emissió d'un 'Certificat de Fluïdesa Pràctica' completament examinat i qualificat per models de llenguatge avançats. Supera la burocràcia dels exàmens oficials i ofereix a empreses i usuaris una prova de nivell oral instantània, objectiva i accessible des de qualsevol lloc.", "Avaluació digital": "Examen oral de 15 minuts interactuant amb l'avatar IA, on s'avalua fonètica, fluïdesa, vocabulari i temps de resposta.", "El producte": "Diploma digital verificat (PDF/Blockchain) preparat per integrar-se a un sol clic al perfil de LinkedIn de l'usuari.", "Validesa al mercat": "L'estratègia inclou forjar aliances ràpides amb portals de feina (InfoJobs) i ETTs locals perquè reconeguin aquesta certificació com un filtre vàlid de contractació." } 
  },
  afiliacion: { 
    title: "Afiliació Estratègica", subtitle: "Monetització indirecta", icon: TrendingUp, 
    colorTheme: "bg-purple-50 text-purple-600 border-purple-200",
    content: { "Descripció": "No tots els usuaris tindran capacitat per pagar una subscripció (especialment els nouvinguts). Aquest mòdul assegura que el 100% del trànsit generi ingressos passius i no intrusius, oferint serveis de valor afegit just en el moment que l'usuari els necessita per assentar-se al país.", "Escalat contextual": "Si l'usuari demana a la IA vocabulari per llogar un pis, la plataforma mostrarà anuncis o links d'afiliats de portals immobiliaris de forma dinàmica i natural.", "Publicitat": "Integració d'anuncis d'alta qualitat (Google AdSense / programàtica) únicament a la versió gratuïta per incentivar el pas a Premium.", "Rendibilitat": "Permet absorbir els costos de l'API de Gemini (tokens) generats pels usuaris Freemium, fent que el creixement sigui sostenible econòmicament des del dia 1." } 
  }
};

// --- COMPONENT PRINCIPAL ---

const Dashboard = () => {
  // Canviem l'estat inicial perquè carregui 'resumen'
  const [selectedNode, setSelectedNode] = useState('resumen');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Cursos.cat: la primera plataforma d'integració lingüística de Catalunya impulsada 100% per IA.";
  }, []);

  const handleNodeSelect = (key) => {
    setSelectedNode(key);
    if (window.innerWidth < 1024) {
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const SidebarContent = () => (
    <div className="flex flex-col gap-6"> {/* Gap reduït de 8 a 6 */}
      
      {/* Enllaç al resum a la part superior */}
      <div className="pb-4 border-b border-zinc-200">
        <StrategyNode 
          title="Resum Executiu" 
          icon={BookOpen} 
          active={selectedNode === 'resumen'} 
          onClick={() => handleNodeSelect('resumen')} 
        />
      </div>

      <section className="space-y-2"> {/* Space-y reduït */}
        <div className="flex items-center gap-2 mb-1.5 text-zinc-400 pl-1">
          <Cpu size={14}/>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">1. La Solució Base</h2>
        </div>
        <div className="flex flex-col gap-0.5"> {/* Gap intern reduït */}
          {['central', 'tutor', 'comunidad'].map(key => (
            <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <div className="flex items-center gap-2 mb-1.5 text-zinc-400 pl-1">
          <Layers size={14}/>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">2. Motor de Creixement</h2>
        </div>
        <div className="flex flex-col gap-0.5">
          {['inmigrantes', 'seo', 'videos'].map(key => (
            <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <div className="flex items-center gap-2 mb-1.5 text-zinc-400 pl-1">
          <TrendingUp size={14}/>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">3. Model de Negoci</h2>
        </div>
        <div className="flex flex-col gap-0.5">
          {['b2b', 'certificacion', 'afiliacion'].map(key => (
            <StrategyNode key={key} {...nodes[key]} active={selectedNode === key} onClick={() => handleNodeSelect(key)} />
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-zinc-900 selection:bg-zinc-200">
      
      <div className="sticky top-0 z-40 bg-[#FAFAFA]/80 backdrop-blur-lg pt-4 pb-4 px-4 md:px-6 lg:px-8 border-b border-zinc-200/60">
        <header className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 md:gap-4">
            <div className="inline-flex items-center gap-2 bg-zinc-900 text-white px-3.5 py-2 rounded-md text-sm font-medium shrink-0">
              <Home size={16} />
              <span>cursos.cat</span>
            </div>
            
            <div className="border-l border-zinc-300 pl-4 hidden md:block">
              <h1 className="text-base font-semibold text-zinc-900 tracking-tight leading-tight">Cursos.cat: la primera plataforma d'integració lingüística de Catalunya impulsada 100% per IA.</h1>
              <p className="text-sm text-zinc-500 mt-0.5">Estratègia i Model de Creixement</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:inline-flex items-center gap-2 bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider border border-zinc-200 shrink-0">
              <Map size={14} />
              <span>Mapa Estratègic</span>
            </div>

            <button 
              className="lg:hidden p-2 -mr-2 text-zinc-600 hover:bg-zinc-200/50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>

        </header>
      </div>

      <div 
        className={`fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMobileMenuOpen(false)} 
      />

      <aside className={`fixed inset-y-0 right-0 w-[280px] sm:w-[320px] bg-[#FAFAFA] z-50 p-6 border-l border-zinc-200 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8 border-b border-zinc-200 pb-4">
          <span className="font-semibold text-zinc-900 text-sm uppercase tracking-wider">Navegació</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-zinc-500 hover:bg-zinc-200/50 rounded-md transition-colors">
            <X size={20}/>
          </button>
        </div>
        <SidebarContent />
      </aside>

      <main className="w-full px-4 md:px-6 lg:px-8 pt-4 md:pt-5 pb-8">
        <div className="max-w-6xl mx-auto bg-white border border-zinc-200 shadow-sm rounded-2xl flex flex-col lg:flex-row overflow-hidden min-h-[600px]">
          
          <aside className="hidden lg:block w-[300px] bg-zinc-50/50 border-r border-zinc-200 p-6 shrink-0">
            <SidebarContent />
          </aside>

          <section className="flex-1 p-6 md:p-8 lg:p-10 bg-white">
            <DetailPanel node={nodes[selectedNode]} />
          </section>

        </div>
      </main>
      
      <footer className="max-w-6xl mx-auto mb-8 text-center px-4">
        <p className="text-zinc-400 text-sm font-medium">
          cursos.cat &bull; Selecciona un mòdul per explorar l'estratègia
        </p>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #e4e4e7; border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #d4d4d8; }
      `}} />

      <Analytics />
    </div>
  );
};

export default Dashboard;
