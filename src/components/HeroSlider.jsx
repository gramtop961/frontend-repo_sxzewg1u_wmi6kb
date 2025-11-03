import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const slides = [
  {
    title: 'Every child deserves a future',
    subtitle: 'Education, dignity and hope for all',
    caption: 'Child Education | Community Schools | Scholarships'
  },
  {
    title: 'Equality empowers communities',
    subtitle: 'Advocacy, training and safe spaces',
    caption: 'Gender Equality | Voice | Leadership'
  },
  {
    title: 'Join hands to uplift lives',
    subtitle: 'Nutrition, clothing and social development',
    caption: 'Meals | Warm Clothes | Skill Building'
  }
];

const Dot = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`h-2 w-2 rounded-full transition-all ${active ? 'w-6 bg-white' : 'bg-white/60'}`}
    aria-label="Go to slide"
  />
);

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const s = slides[index];

  return (
    <section id="home" className="pt-16">
      <div className="relative h-[80vh] w-full overflow-hidden rounded-b-[2rem]">
        {/* Spline cover */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Gradient overlays should not block interactions */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(120deg, rgba(249,122,23,0.25), rgba(255,204,238,0.25))'
        }} />
        <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style={{
          background: 'linear-gradient(0deg, rgba(255,255,255,0.9), rgba(255,255,255,0))'
        }} />

        {/* Content overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-gray-900">
          <div className="w-full max-w-2xl rounded-3xl p-6 md:p-8 backdrop-blur bg-white/50 border border-white/60 shadow-xl">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>Hope Blossom Collective</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold" style={{
              background: 'linear-gradient(90deg, #f97a17, #ffccee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {s.title}
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-gray-800">{s.subtitle}</p>
            <p className="mt-2 text-sm text-gray-600">{s.caption}</p>
            <div className="mt-6 flex gap-4">
              <a href="#causes" className="px-6 py-3 rounded-full font-semibold shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-white/60" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>
                Explore Our Work
              </a>
              <a href="/our-work" className="px-6 py-3 rounded-full font-semibold backdrop-blur bg-white/60 text-gray-900 border border-white/60 shadow">
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, i) => (
            <Dot key={i} active={i === index} onClick={() => setIndex(i)} />
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div id="projects" className="max-w-7xl mx-auto px-6 -mt-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: 'Community Learning Center',
            img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
            tag: 'Education'
          }, {
            title: 'Women Leadership Circles',
            img: 'https://images.unsplash.com/photo-1520975682031-aeec6dd223e9?q=80&w=1200&auto=format&fit=crop',
            tag: 'Equality'
          }, {
            title: 'Warm Winters Campaign',
            img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
            tag: 'Clothing'
          }].map((card, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-xl border border-white/40 bg-white/60 backdrop-blur group">
              <div className="h-44 w-full bg-cover bg-center" style={{ backgroundImage: `url(${card.img})` }} />
              <div className="p-5">
                <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>{card.tag}</span>
                <h3 className="mt-3 text-lg font-bold text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Real impact stories and measurable progress every week.</p>
                <a href="#impact" className="inline-block mt-4 font-semibold" style={{ color: '#f97a17' }}>Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
