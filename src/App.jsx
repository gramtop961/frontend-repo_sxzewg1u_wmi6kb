import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import CausesGrid from './components/CausesGrid';
import ImpactSection from './components/ImpactSection';
import OurWork from './components/OurWork';
import { Heart } from 'lucide-react';

function App() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [amount, setAmount] = useState(100);
  const [path, setPath] = useState(() => window.location.pathname);

  const openDonate = (val) => {
    if (typeof val === 'number') setAmount(val);
    setDonateOpen(true);
  };

  // Lightweight client-side routing without extra deps
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);

    const onClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const url = new URL(a.href, window.location.origin);
      const isSameOrigin = url.origin === window.location.origin;
      const isInternal = isSameOrigin && url.pathname.startsWith('/');
      const modifier = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0 || a.target === '_blank';
      if (isInternal && !modifier) {
        e.preventDefault();
        history.pushState({}, '', url.pathname + url.search + url.hash);
        setPath(url.pathname);
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', onPop);
      document.removeEventListener('click', onClick);
    };
  }, []);

  const isOurWork = useMemo(() => path === '/our-work', [path]);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fff6fc, #fff3e9)' }}>
      <Navbar onDonateClick={openDonate} />

      {!isOurWork && (
        <main>
          <HeroSlider />
          <CausesGrid />
          <ImpactSection onDonateClick={openDonate} />

          {/* About & Contact */}
          <section id="contact" className="py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
              <div className="rounded-3xl p-8 border border-white/60 bg-white/70 backdrop-blur">
                <h3 className="text-2xl font-extrabold text-gray-900">About Us</h3>
                <p className="mt-3 text-gray-700">We are a community-first nonprofit advancing education, equality and dignity. Through local partnerships and deep listening, we co-create solutions that last.</p>
                <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
                  <li>Transparent reporting: weekly, monthly, annual</li>
                  <li>Programs across 12+ focus areas</li>
                  <li>Volunteer-driven with professional guidance</li>
                </ul>
              </div>
              <div className="rounded-3xl p-8 border border-white/60 bg-white/70 backdrop-blur">
                <h3 className="text-2xl font-extrabold text-gray-900">Contact</h3>
                <form className="mt-4 space-y-4">
                  <input className="w-full px-4 py-3 rounded-xl border border-white/60 bg-white/80" placeholder="Your name" />
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-white/60 bg-white/80" placeholder="Email" />
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-white/60 bg-white/80" placeholder="Message" />
                  <button type="button" className="px-6 py-3 rounded-full font-semibold text-white" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      )}

      {isOurWork && (
        <main>
          <OurWork />
        </main>
      )}

      {/* Floating donate button */}
      <button
        onClick={() => openDonate(amount)}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold shadow-xl animate-bounce"
        style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}
      >
        <span>❤️ Donate</span>
      </button>

      {/* Donate modal */}
      {donateOpen && (
        <div className="fixed inset-0 z-[70] bg-black/40 flex items-center justify-center p-4">
          <div className="relative max-w-xl w-full rounded-3xl bg-white shadow-2xl overflow-hidden">
            <button onClick={() => setDonateOpen(false)} className="absolute top-4 right-4 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold shadow">Close</button>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-gray-900">Complete Your Donation</h3>
              <p className="text-gray-700 mt-1">Thank you for choosing to give. Select an amount or enter a custom value.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[50,100,200,500,1000].map(v => (
                  <button key={v} onClick={() => setAmount(v)}
                          className={`px-4 py-2 rounded-full border font-semibold transition ${amount===v ? 'text-white border-transparent' : 'border-white/70 text-gray-800 bg-white/70'}`}
                          style={amount===v ? { background: 'linear-gradient(90deg, #f97a17, #ffccee)' } : {}}>
                    ₹{v}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <input
                  type="number"
                  className="px-4 py-2 rounded-xl border border-white/60 bg-white/80 w-40"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  min={1}
                />
                <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>
                  <Heart className="fill-white/90" size={18}/> Donate ₹{amount}
                </button>
              </div>
              <div className="mt-6 text-xs text-gray-500">
                By donating you agree to our terms. Secure payment is simulated in this preview.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
