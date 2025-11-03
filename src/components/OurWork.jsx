import React from 'react';

const OurWork = () => {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(1200px 400px at 20% 0%, rgba(255,204,238,0.6), transparent), radial-gradient(1200px 400px at 80% 0%, rgba(249,122,23,0.25), transparent)'
        }} />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-3xl p-8 md:p-12 border border-white/60 bg-white/70 backdrop-blur shadow-xl">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>Our Work</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold" style={{
              background: 'linear-gradient(90deg, #f97a17, #ffccee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Programs and Impact</h1>
            <p className="mt-3 text-lg text-gray-800 max-w-3xl">We focus on education, equality, nutrition, clothing and community development. Explore featured initiatives and access transparent weekly, monthly and annual reports.</p>
            <div className="mt-6 flex gap-3">
              <a href="/" className="px-5 py-2.5 rounded-full font-semibold backdrop-blur bg-white/70 border border-white/60 text-gray-900">← Back to Home</a>
              <a href="#initiatives" className="px-5 py-2.5 rounded-full font-semibold text-white" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>View initiatives</a>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives grid */}
      <section id="initiatives" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Highlighted Initiatives</h2>
          <p className="text-gray-700 mt-1">A glimpse into a few of our ongoing programs.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: 'Community Learning Centers',
              tag: 'Education',
              img: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1200&auto=format&fit=crop'
            }, {
              title: 'Women Leadership Circles',
              tag: 'Equality',
              img: 'https://images.unsplash.com/photo-1532635215-8cf7e1b9ee2e?q=80&w=1200&auto=format&fit=crop'
            }, {
              title: 'Nutrition & Midday Meals',
              tag: 'Nutrition',
              img: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1200&auto=format&fit=crop'
            }].map((card, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-xl border border-white/40 bg-white/70 backdrop-blur">
                <div className="h-44 w-full bg-cover bg-center" style={{ backgroundImage: `url(${card.img})` }} />
                <div className="p-5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>{card.tag}</span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{card.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">Live monitoring with weekly, monthly and annual reports available for download.</p>
                  <div className="mt-4 flex gap-3">
                    <a href="#reports" className="font-semibold" style={{ color: '#f97a17' }}>Reports →</a>
                    <a href="#gallery" className="font-semibold text-gray-700">Gallery →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports CTA */}
      <section id="reports" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl p-8 border border-white/60 bg-white/70 backdrop-blur">
            <h3 className="text-2xl font-extrabold text-gray-900">Transparent reporting</h3>
            <p className="text-gray-700 mt-1">Download native handwritten reports or choose your preferred language PDF.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" className="px-4 py-2 rounded-full font-semibold text-white" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>Download Handwritten PDF</a>
              <a href="#" className="px-4 py-2 rounded-full font-semibold border border-white/60 bg-white/70">Choose Language PDF</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
