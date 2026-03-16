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
        {/* Capçalera del Resum Integrada */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8 border-b border-zinc-100 pb-8">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Resum Executiu</p>
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight leading-tight mb-3">
              Estratègia i Model de Creixement
            </h2>
            <p className="text-base font-medium text-zinc-500">
              Cursos.cat: la primera plataforma d'integració lingüística de Catalunya impulsada 100% per IA.
            </p>
          </div>
          
          {/* LOGO REPRESENTATIU DE CURSOS (Superior Dreta) */}
          <div className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-3.5 rounded-xl shadow-md shrink-0">
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
            <div className="bg-zinc-50/80 p-5 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3 text-zinc-800">
                <div className="p-1.5 bg-blue-100 text-blue-600 rounded-md"><Cpu size={16} strokeWidth={2.5}/></div>
                <h4 className="font-bold">1. La Solució</h4>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">Entorn immersiu amb un tutor d'IA de veu disponible 24/7 que simula situacions quotidianes (anar al metge, entrevistes), combinat amb una comunitat humana per fer tàndems.</p>
            </div>
            
            <div className="bg-zinc-50/80 p-5 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3 text-zinc-800">
                <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-md"><Layers size={16} strokeWidth={2.5}/></div>
                <h4 className="font-bold">2. Creixement</h4>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">Captació massiva i passiva via SEO programàtic (resolent milers de cerques "long tail" a Google) i viralitat a xarxes socials, impulsant un model Freemium molt accessible.</p>
            </div>

            <div className="bg-zinc-50/80 p-5 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3 text-zinc-800">
                <div className="p-1.5 bg-amber-100 text-amber-600 rounded-md"><TrendingUp size={16} strokeWidth={2.5}/></div>
                <h4 className="font-bold">3. Negoci</h4>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">Monetització escalable venent solucions B2B a departaments de RRHH, emissió de certificacions de fluïdesa avaluades per IA i integració d'ingressos passius per afiliació.</p>
            </div>
          </div>

          <div className="mt-6 bg-zinc-900 text-white p-4 rounded-xl flex items-start gap-3 shadow-md">
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
    isSummary: true
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
    content: { "Descripció": "L'aprenentatge aïllat té una taxa d'abandonament alta. Per solucionar-ho, fomentem la cohesió social i l'arrelament a través d'espais digitals segurs on la IA passa a un segon pla i el factor humà pren el relleu. Integrem la comunitat directament en el procés.", "Funcionament": "Sistema de matchmaking per crear
