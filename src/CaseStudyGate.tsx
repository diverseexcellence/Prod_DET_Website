import React, { useState, useRef, useEffect } from 'react';
import { Lock, Mail, KeyRound, CheckCircle2, ArrowRight } from 'lucide-react';

const API = 'https://raas.diverseexcellence.com/api/case-studies';

export function CaseStudyGate({ onUnlock }: { onUnlock: () => void }) {
  const [mode, setMode] = useState<'choose' | 'request' | 'login'>('choose');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [issued, setIssued] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [hp, setHp] = useState(''); // honeypot
  const openedAt = useRef(Date.now());

  useEffect(() => { openedAt.current = Date.now(); }, [mode]);

  const requestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setBusy(true);
    try {
      const r = await fetch(API + '/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: hp, formMs: Date.now() - openedAt.current }),
      });
      const d = await r.json();
      if (!r.ok) { setError(d.error || 'Something went wrong.'); setBusy(false); return; }
      if (d.password) { setIssued(d.password); setPassword(d.password); }
      setBusy(false);
    } catch {
      setError('Could not reach the access service. Please try again.');
      setBusy(false);
    }
  };

  const verify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setBusy(true);
    try {
      const r = await fetch(API + '/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const d = await r.json();
      if (!r.ok) { setError(d.error || 'Invalid email or access code.'); setBusy(false); return; }
      try { sessionStorage.setItem('det_cs_ok', '1'); } catch { /* no-op */ }
      onUnlock();
    } catch {
      setError('Could not reach the access service. Please try again.');
      setBusy(false);
    }
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#3B82F6] focus:outline-none text-slate-900 bg-white';
  const btnCls = 'w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2';

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <section className="py-20 px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[80vh] flex items-start justify-center">
        <div className="max-w-md w-full mt-8">
          <div className="bg-white rounded-3xl shadow-xl border-2 border-slate-200 p-10">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">Case Studies Access</h1>
            <p className="text-sm text-slate-600 text-center mb-8">
              Our client case studies are available on request. Enter your email to receive an access code, or sign in if you already have one.
            </p>

            {mode === 'choose' && (
              <div className="space-y-3">
                <button className={btnCls} onClick={() => { setMode('request'); setError(''); }}>
                  <Mail className="h-4 w-4" /> Request Access
                </button>
                <button
                  className="w-full py-3 rounded-xl font-bold text-[#3B82F6] border-2 border-[#3B82F6] hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                  onClick={() => { setMode('login'); setError(''); }}
                >
                  <KeyRound className="h-4 w-4" /> I Have an Access Code
                </button>
              </div>
            )}

            {mode === 'request' && !issued && (
              <form onSubmit={requestAccess} className="space-y-4">
                <input
                  type="email" required placeholder="you@company.com" value={email}
                  onChange={e => setEmail(e.target.value)} className={inputCls} maxLength={120}
                />
                {/* honeypot: hidden from humans, bots fill it */}
                <input
                  type="text" value={hp} onChange={e => setHp(e.target.value)}
                  name="website" tabIndex={-1} autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, opacity: 0 }}
                  aria-hidden="true"
                />
                {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
                <button type="submit" className={btnCls} disabled={busy}>
                  {busy ? 'Requesting…' : <>Get My Access Code <ArrowRight className="h-4 w-4" /></>}
                </button>
                <button type="button" className="w-full text-sm text-slate-500 hover:text-slate-700" onClick={() => setMode('choose')}>← Back</button>
              </form>
            )}

            {mode === 'request' && issued && (
              <div className="space-y-4 text-center">
                <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto" />
                <p className="text-sm text-slate-700">Your access code:</p>
                <div className="font-mono text-lg font-bold bg-slate-100 border-2 border-slate-200 rounded-xl py-3 px-4 text-slate-900 select-all">{issued}</div>
                <p className="text-xs text-slate-500">Save this code — you can use it with your email any time you return.</p>
                <button className={btnCls} onClick={verify} disabled={busy}>
                  {busy ? 'Opening…' : <>Enter Case Studies <ArrowRight className="h-4 w-4" /></>}
                </button>
              </div>
            )}

            {mode === 'login' && (
              <form onSubmit={verify} className="space-y-4">
                <input
                  type="email" required placeholder="you@company.com" value={email}
                  onChange={e => setEmail(e.target.value)} className={inputCls} maxLength={120}
                />
                <input
                  type="text" required placeholder="Access code (CS-…)" value={password}
                  onChange={e => setPassword(e.target.value)} className={inputCls} maxLength={40}
                />
                {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
                <button type="submit" className={btnCls} disabled={busy}>
                  {busy ? 'Checking…' : <>Unlock Case Studies <ArrowRight className="h-4 w-4" /></>}
                </button>
                <button type="button" className="w-full text-sm text-slate-500 hover:text-slate-700" onClick={() => setMode('choose')}>← Back</button>
              </form>
            )}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">
            Access requests are reviewed by Diverse Excellence Technology. Your email is used only to manage case study access.
          </p>
        </div>
      </section>
    </div>
  );
}
