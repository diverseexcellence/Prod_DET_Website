import React, { useEffect, useRef, useState } from 'react';
import {
  GraduationCap, Database, FileCheck2, RefreshCcw, ShieldCheck, Zap,
  ArrowLeft, ArrowRight, CheckCircle, Workflow, CalendarRange, Users,
  ClipboardCheck, Award, Layers, PlayCircle
} from 'lucide-react';

/* Scroll-triggered reveal wrapper */
function Reveal({ children, delay = 0, from = 'up' }: { children: React.ReactNode; delay?: number; from?: 'up' | 'left' | 'right' | 'zoom' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const hidden =
    from === 'left' ? 'opacity-0 -translate-x-16' :
    from === 'right' ? 'opacity-0 translate-x-16' :
    from === 'zoom' ? 'opacity-0 scale-75' :
    'opacity-0 translate-y-14';
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${shown ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : hidden}`}
    >
      {children}
    </div>
  );
}

/* Parallax hero graphic that animates with scroll */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return y;
}

export function SISPage({ setCurrentPage }: { setCurrentPage: (p: string) => void }) {
  const scrollY = useScrollY();

  const pillars = [
    {
      tag: 'CORE', icon: Database, color: 'from-blue-500 to-indigo-600', ring: 'border-blue-200 hover:border-blue-400',
      title: 'PowerSchool SIS Administration',
      items: ['Configuration, access & user support', 'Enrollment, grading & attendance workflows', 'Troubleshooting, corrections & data cleanup'],
    },
    {
      tag: 'INDIANA', icon: FileCheck2, color: 'from-amber-500 to-orange-600', ring: 'border-amber-200 hover:border-amber-400',
      title: 'Indiana Reporting & Compliance',
      items: ['DEX issue triage and reconciliation', 'State-reporting workflow support', 'IDOE / vendor coordination and validation'],
    },
    {
      tag: 'SYSTEMS', icon: Workflow, color: 'from-emerald-500 to-teal-600', ring: 'border-emerald-200 hover:border-emerald-400',
      title: 'Integrations & Data Quality',
      items: ['Clever / ClassLink rostering support', 'Data-flow and source-of-truth troubleshooting', 'Sync validation, audits & exception cleanup'],
    },
    {
      tag: 'CONTINUITY', icon: RefreshCcw, color: 'from-violet-500 to-purple-600', ring: 'border-violet-200 hover:border-violet-400',
      title: 'Annual Cycles & Transitions',
      items: ['BOY / EOY / rollover support', 'Grade storage & master-schedule support', 'Interim coverage, documentation & handoff'],
    },
  ];

  const model = [
    {
      num: '01', name: 'STABILIZE', sub: 'Keep daily operations moving', icon: ShieldCheck, color: 'from-blue-600 to-indigo-700',
      items: ['Resolve PowerSchool issues quickly', 'Clean up recurring data problems', 'Maintain dependable user and access workflows'],
    },
    {
      num: '02', name: 'HIGH-RISK MOMENTS', sub: 'Add capacity when it matters', icon: Zap, color: 'from-amber-500 to-red-500',
      items: ['State-reporting deadlines', 'Start / end-of-year cycles', 'Staff transitions, backlog or temporary gaps'],
    },
    {
      num: '03', name: 'CONTINUITY', sub: 'Leave the system stronger', icon: Layers, color: 'from-emerald-600 to-teal-700',
      items: ['Document critical workflows', 'Clarify ownership and escalation paths', 'Reduce single-person dependency'],
    },
  ];

  const fits = [
    'Your SIS owner is stretched thin',
    'Reporting or data-quality work is piling up',
    'You need specialist coverage without another FTE',
    'You want a reliable partner who communicates and documents',
  ];

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">

      {/* ───────── HERO ───────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 pt-24">
        {/* animated orbs follow scroll */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[520px] h-[520px] rounded-full bg-blue-600/20 blur-3xl animate-pulse"
            style={{ top: '-120px', left: '-140px', transform: `translateY(${scrollY * 0.25}px)` }} />
          <div className="absolute w-[420px] h-[420px] rounded-full bg-violet-600/20 blur-3xl animate-pulse"
            style={{ bottom: '-100px', right: '-120px', transform: `translateY(${-scrollY * 0.2}px)`, animationDelay: '1s' }} />
          <div className="absolute w-[280px] h-[280px] rounded-full bg-cyan-500/15 blur-3xl"
            style={{ top: '38%', left: '58%', transform: `translateY(${scrollY * 0.12}px)` }} />
          {/* floating data glyphs */}
          {['📊', '🎓', '🗂', '📈', '🧮', '🏫'].map((g, i) => (
            <span key={i} className="absolute text-3xl opacity-20 animate-bounce"
              style={{
                left: `${8 + i * 16}%`, top: `${14 + (i % 3) * 26}%`,
                animationDuration: `${2.6 + i * 0.5}s`, animationDelay: `${i * 0.4}s`,
                transform: `translateY(${scrollY * (0.06 + i * 0.02)}px)`,
              }}>{g}</span>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <Reveal from="zoom">
            <div className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
              <GraduationCap className="h-5 w-5 text-cyan-300 mr-2" />
              <span className="text-sm font-bold tracking-widest text-cyan-200 uppercase">Education Technology Services</span>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              K–12 SIS &<br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">Data Operations</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Specialized PowerSchool and Indiana data support that adds capacity <span className="text-white font-semibold">without disrupting the team.</span>
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {['Flexible Fractional Support', 'Remote-First', 'Project or Ongoing Capacity'].map((c) => (
                <span key={c} className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-slate-200 backdrop-blur-sm">{c}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={600} from="zoom">
            <button
              onClick={() => document.getElementById('sis-pillars')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300"
            >
              Explore the Services
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce text-sm font-semibold tracking-widest">
          SCROLL ▼
        </div>
      </section>

      {/* ───────── FOUR PILLARS ───────── */}
      <section id="sis-pillars" className="py-24 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-black tracking-[0.25em] text-blue-600 uppercase">What We Deliver</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">Four Pillars of SIS Support</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <Reveal key={p.tag} delay={i * 120} from={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`group bg-white rounded-3xl p-8 border-2 ${p.ring} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <p.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-xs font-black tracking-[0.2em] text-slate-400">{p.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-5">{p.title}</h3>
                  <ul className="space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── OPERATING MODEL ───────── */}
      <section className="py-24 px-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-3xl" style={{ top: '10%', right: '-100px', transform: `translateY(${-scrollY * 0.05}px)` }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-4">
              <span className="text-sm font-black tracking-[0.25em] text-cyan-400 uppercase">Operating Model</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-3">Own the work. <span className="text-cyan-300">Strengthen the team.</span></h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">Hands-on SIS support aligned to DET's "enhance, not replace" philosophy.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {model.map((m, i) => (
              <Reveal key={m.num} delay={i * 180} from="up">
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-7xl font-black text-white/10 absolute top-4 right-6 select-none">{m.num}</div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-xl mb-6`}>
                    <m.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-wide">{m.name}</h3>
                  <p className="text-cyan-300 text-sm font-semibold mb-5">{m.sub}</p>
                  <ul className="space-y-2.5">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start text-slate-300 text-sm">
                        <span className="text-cyan-400 mr-2 mt-0.5">▸</span>{it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* A good fit when */}
          <Reveal delay={200}>
            <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-400/20 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">A good fit when…</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {fits.map((f, i) => (
                  <div key={f} className="flex items-center bg-white/5 rounded-2xl px-6 py-4 border border-white/10">
                    <ClipboardCheck className="h-6 w-6 text-cyan-300 mr-4 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── CREDENTIALS ───────── */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-black tracking-[0.25em] text-blue-600 uppercase">Specialized Capacity</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-3">K–12 systems expertise,<br className="hidden md:block" /> available when needed</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">DET extends client teams with hands-on SIS, data operations, and Indiana reporting support.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              { big: '5+', label: 'years of PowerSchool experience', icon: Database, color: 'from-blue-500 to-indigo-600' },
              { big: 'CETL', label: 'certified education technology leadership', icon: Award, color: 'from-amber-500 to-orange-600' },
              { big: 'K–12', label: 'executive data & technology leadership', icon: GraduationCap, color: 'from-emerald-500 to-teal-600' },
            ].map((c, i) => (
              <Reveal key={c.big} delay={i * 150} from="zoom">
                <div className="bg-white rounded-3xl p-10 text-center border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg mb-6`}>
                    <c.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-5xl font-black text-slate-900 mb-3">{c.big}</div>
                  <div className="text-slate-600 font-medium">{c.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-10 text-center shadow-2xl">
              <h3 className="text-xl font-black text-white tracking-wide mb-6 uppercase">Engagement Options</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Fractional support', 'Interim / transition coverage', 'Defined projects', 'Annual-cycle support'].map((e) => (
                  <span key={e} className="px-6 py-3 bg-white/15 border border-white/25 rounded-full text-white font-semibold backdrop-blur-sm">{e}</span>
                ))}
              </div>
              <p className="text-blue-100 mt-7 text-sm font-medium tracking-wide">Responsive · collaborative · documentation-minded · remote-first</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── ANIMATED HERO GRAPHICS (scroll-driven) ───────── */}
      <section className="relative py-32 px-8 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/20 to-violet-600/20 blur-3xl"
            style={{ top: '-180px', left: '50%', transform: `translateX(-50%) translateY(${scrollY * 0.04}px) scale(${1 + Math.min(scrollY / 12000, 0.2)})` }} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Reveal from="zoom">
            <div className="flex justify-center gap-6 md:gap-10 mb-12">
              {[Database, FileCheck2, Workflow, CalendarRange, Users].map((I, i) => (
                <div key={i}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500/80 to-violet-600/80 backdrop-blur flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-bounce"
                  style={{ animationDuration: `${2.2 + i * 0.35}s`, animationDelay: `${i * 0.15}s` }}>
                  <I className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Your data, <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">dependable.</span><br />
              Your team, <span className="bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">stronger.</span>
            </h2>
          </Reveal>
          <Reveal delay={350}>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">See how DET keeps K–12 student information systems accurate, compliant, and ready for every deadline.</p>
          </Reveal>
        </div>
      </section>

      {/* ───────── VIDEO FINALE ───────── */}
      <section className="py-24 px-8 bg-gradient-to-b from-slate-950 to-indigo-950">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-5 py-2 bg-white/10 border border-white/20 rounded-full mb-5">
                <PlayCircle className="h-5 w-5 text-cyan-300 mr-2" />
                <span className="text-sm font-bold tracking-widest text-cyan-200 uppercase">Watch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white">K–12 SIS &amp; Data Operations in Action</h2>
            </div>
          </Reveal>
          <Reveal delay={200} from="zoom">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/15 bg-black">
              <video controls preload="metadata" className="w-full h-auto block" poster="">
                <source src="/sis-data-operations.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Reveal>
          <Reveal delay={350}>
            <div className="text-center mt-14">
              <button
                onClick={() => { setCurrentPage('Contact'); window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 mr-4"
              >
                Talk to DET About SIS Support
              </button>
              <button
                onClick={() => { setCurrentPage('Services'); window.scrollTo(0, 0); }}
                className="bg-white/10 border border-white/25 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 mt-4 md:mt-0"
              >
                <ArrowLeft className="inline-block mr-2 h-5 w-5" />
                Back to Services
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
