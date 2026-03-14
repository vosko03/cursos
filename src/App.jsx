import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
  ArrowRight,
  Sparkles,
  BookOpen,
  ArrowLeft
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
    {/* Decoració de fons */}
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
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans selection:bg-indigo-200">
      <div className="max-w-6xl mx-auto mb-6">
        <Link to="/" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Tornar a l'inici
        </Link>
      </div>
      
      {/* Header */}
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

      {/* Grid Central */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
        
        {/* Columna Esquerra: Trànsit i Adquisició */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6 border-b-2 border-slate-200 pb-2">
            <div className="p-2 bg-slate-200 rounded-lg text-slate-700">
              <Layers size={24}/>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">1. Motor d'Adquisició</h2>
              <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Trànsit automatitzat</p>
            </div>
          </div>
          <StrategyNode {...nodes.seo} active={selectedNode === 'seo'} onClick={() => setSelectedNode('seo')} />
          <StrategyNode {...nodes.videos} active={selectedNode === 'videos'} onClick={() => setSelectedNode('videos')} />
          <div className="flex justify-center py-2 opacity-50">
            <ArrowRight size={24} className="transform rotate-90 lg:rotate-0 text-slate-400" />
          </div>
          <StrategyNode {...nodes.inmigrantes} active={selectedNode === 'inmigrantes'} onClick={() => setSelectedNode('inmigrantes')} />
        </div>

        {/* Columna Central: Producte Core */}
        <div className="space-y-4 lg:pt-0 pt-8">
          <div className="flex items-center gap-2 mb-6 border-b-2 border-indigo-200 pb-2">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
              <Cpu size={24}/>
            </div>
            <div>
              <h2 className="text-xl font-bold text-indigo-900">2. Producte Principal</h2>
              <p className="text-xs text-indigo-500 uppercase font-semibold tracking-wider">Retenció i Valor</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-indigo-50 to-white p-2 rounded-3xl border border-indigo-100 shadow-xl relative">
            {/* Resplendor darrere del central */}
            <div className="absolute inset-0 bg-indigo-400 blur-3xl opacity-10 rounded-full"></div>
            
            <StrategyNode {...nodes.central} active={selectedNode === 'central'} onClick={() => setSelectedNode('central')} />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <StrategyNode {...nodes.tutor} active={selectedNode === 'tutor'} onClick={() => setSelectedNode('tutor')} />
              <StrategyNode {...nodes.comunidad} active={selectedNode === 'comunidad'} onClick={() => setSelectedNode('comunidad')} />
            </div>
          </div>
        </div>

        {/* Columna Dreta: Monetització */}
        <div className="space-y-4 lg:pt-0 pt-8">
          <div className="flex items-center gap-2 mb-6 border-b-2 border-slate-200 pb-2">
            <div className="p-2 bg-slate-200 rounded-lg text-slate-700">
              <TrendingUp size={24}/>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">3. Monetització</h2>
              <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Fluxos d'Ingressos</p>
            </div>
          </div>
          <StrategyNode {...nodes.b2b} active={selectedNode === 'b2b'} onClick={() => setSelectedNode('b2b')} />
          <StrategyNode {...nodes.certificacion} active={selectedNode === 'certificacion'} onClick={() => setSelectedNode('certificacion')} />
          <StrategyNode {...nodes.afiliacion} active={selectedNode === 'afiliacion'} onClick={() => setSelectedNode('afiliacion')} />
        </div>
      </div>

      {/* Panell de Detall Inferior (Dashboard View) */}
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
              <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                {nodes[selectedNode].title}
              </h2>
              <p className={`text-lg font-medium mt-1 ${nodes[selectedNode].color.replace('bg-', 'text-').replace('-500', '-600')}`}>
                {nodes[selectedNode].subtitle}
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {/* Descripció Principal */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                <Sparkles size={18} className="text-amber-500" />
                Visió del Mòdul
              </h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                {nodes[selectedNode].content.descripció}
              </p>
            </div>
            
            {/* Detalls de Tecnologia / Automatització */}
            <div className="md:col-span-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-800 text-lg mb-4">Claus d'Execució</h4>
              <ul className="space-y-4">
                {Object.entries(nodes[selectedNode].content).map(([key, value]) => {
                  if (key.toLowerCase() === 'descripció') return null;
                  
                  return (
                    <li key={key} className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                      <span className="capitalize font-bold text-slate-700 min-w-[140px] text-sm mt-0.5">
                        {key.replace(/_/g, ' ')}:
                      </span> 
                      <span className="text-slate-600 font-medium">
                        {Array.isArray(value) 
                          ? <div className="flex flex-wrap gap-2">
                              {value.map(tag => (
                                <span key={tag} className="bg-white border border-slate-200 px-2 py-1 rounded-md text-xs font-bold text-slate-700 shadow-sm">{tag}</span>
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
      
      <footer className="text-center text-slate-400 text-sm font-medium pb-8">
        Prem qualsevol mòdul per aprofundir | Projecte Estratègic cursos.cat
      </footer>
    </div>
  );
};

const Home = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
    <div className="text-center max-w-2xl space-y-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
        Benvinguts a <span className="text-indigo-600">cursos.cat</span>
      </h1>
      <p className="text-xl text-slate-600">
        La primera plataforma d'immersió lingüística impulsada 100% per IA.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Link to="/dash" className="px-8 py-4 text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
          <Sparkles size={20} /> Mapa Estratègic
        </Link>
        <Link to="/blog" className="px-8 py-4 text-lg font-bold text-indigo-600 bg-white border-2 border-indigo-100 hover:border-indigo-300 rounded-full transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
          <BookOpen size={20} /> Llegir el Blog
        </Link>
      </div>
    </div>
  </div>
);

// --- NOU COMPONENT: ÍNDEX DEL BLOG ---
const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans selection:bg-indigo-200">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" /> Tornar a l'inici
        </Link>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            El Blog de <span className="text-indigo-600">cursos.cat</span>
          </h1>
          <p className="text-xl text-slate-600">
            Consells, vocabulari i notícies per a la teva integració a Catalunya.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {/* Targeta d'Entrada de Blog */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1590123654443-41a45778844f?auto=format&fit=crop&q=80&w=600" 
                alt="Vista de Girona" 
                className="h-full w-full object-cover min-h-[250px]"
              />
            </div>
            <div className="p-8 md:w-3/5 flex flex-col justify-center">
              <div className="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 uppercase w-max">
                Sector Sanitari • SEO Local
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-indigo-600 transition-colors">
                <Link to="/blog/vocabulari-catala-infermeres-girona">
                  Vocabulari de Supervivència per a Infermeres a Girona: De "Nena" a "Tirita"
                </Link>
              </h2>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Has arribat a l'Hospital Trueta o al Santa Caterina amb tota la il·lusió, el teu títol flamant, i de sobte, un avi et diu: "Nena, em fa mal el panxell i vull una tirita". Pànic? Zero. Descobreix el teu kit d'emergència lingüística.
              </p>
              <Link to="/blog/vocabulari-catala-infermeres-girona" className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-800 transition-colors mt-auto">
                Llegir l'article <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT DE L'ENTRADA COMPLETA ---
const BlogPost = () => {
  useEffect(() => {
    document.title = "Vocabulari per a Infermeres a Girona | cursos.cat";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = "Aprèn el vocabulari clau per treballar d'infermera a Girona. De 'panxell' a 'sofraja', comunica't millor amb els pacients.";
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 font-sans selection:bg-rose-200">
      <Link to="/blog" className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Tornar al blog
      </Link>
      
      <header className="mb-10 text-center">
        <div className="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-bold tracking-wide mb-4 uppercase">
          Sector Sanitari • SEO Local
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
          Vocabulari de Supervivència per a Infermeres a Girona: De "Nena" a "Tirita"
        </h1>
        <p className="text-slate-500 font-medium">Temps de lectura: 2 minuts</p>
      </header>

      <figure className="mb-10 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
        <img 
          src="https://images.unsplash.com/photo-1590123654443-41a45778844f?auto=format&fit=crop&q=80&w=1200" 
          alt="Cases de l'Onyar a Girona, reflexades a l'aigua" 
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
        />
        <figcaption className="text-center text-sm text-slate-400 mt-2 pb-3 italic">
          Preparada per entendre tots els pacients de les comarques gironines?
        </figcaption>
      </figure>

      <div className="prose prose-lg prose-indigo mx-auto text-slate-700 leading-relaxed space-y-6">
        <p className="text-xl font-medium text-slate-800">
          Has arribat a l'Hospital Trueta o al Santa Caterina amb tota la il·lusió, el teu títol flamant, i de sobte, un avi et diu: <span className="italic font-bold">"Nena, em fa mal el panxell i vull una tirita"</span>. Pànic? Zero.
        </p>
        <p>
          Girona té una màgia especial, i el seu vocabulari als passadissos d'hospital també. No n'hi ha prou amb saber com posar una via o extreure sang; cal entendre què et demana el pacient per curar-lo i connectar-hi humanament.
        </p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">El teu kit d'emergència lingüística:</h2>
        <ul className="bg-slate-50 rounded-xl p-6 space-y-4 border border-slate-100 list-none">
          <li className="flex gap-3">
            <span className="text-rose-500 font-bold">👉</span>
            <div>
              <strong className="text-slate-900 block">"Panxell"</strong>
              <span>No és una panxa petita. És el <b>bessó de la cama</b>. Si els fa mal, pensa en problemes de circulació, no en digestions pesades!</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-rose-500 font-bold">👉</span>
            <div>
              <strong className="text-slate-900 block">"Tirita" / "Tireta"</strong>
              <span>Un clàssic. L'apòsit o tireta de tota la vida.</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-rose-500 font-bold">👉</span>
            <div>
              <strong className="text-slate-900 block">"Fer mal a la sofraja"</strong>
              <span>La part del darrere del genoll. Si sents això i saps què vol dir, ja ets pràcticament gironina d'adopció.</span>
            </div>
          </li>
        </ul>

        <p className="mt-8 bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-indigo-900 shadow-inner">
          A <strong>cursos.cat</strong> sabem que l'empatia comença per parlar l'idioma del pacient. Per això, el nostre Tutor IA et prepara per a aquestes situacions reals amb pacients virtuals simulats.
        </p>

        <div className="text-center mt-10">
          <Link to="/dash" className="inline-block bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-800 transition-colors shadow-lg">
            Vols practicar? Prova l'estratègia
          </Link>
        </div>
      </div>
    </article>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/vocabulari-catala-infermeres-girona" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;