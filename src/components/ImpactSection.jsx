import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const amounts = [
  { value: 50, label: 'Plate of food' },
  { value: 100, label: 'Full meal' },
  { value: 200, label: 'Clothes' },
  { value: 500, label: 'Community program' },
  { value: 1000, label: 'Social development' },
];

const ImpactSection = ({ onDonateClick }) => {
  const [selected, setSelected] = useState(100);

  return (
    <section id="impact" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{
            background: 'linear-gradient(90deg, #f97a17, #ffccee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Real People. Real Impact.</h2>
          <p className="mt-3 text-gray-600">Stories of change from the communities we serve.</p>
        </div>

        {/* Video testimonials */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {['dQw4w9WgXcQ','ysz5S6PUM-U'].map((id) => (
            <div key={id} className="rounded-2xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur shadow">
              <div className="aspect-video">
                <iframe
                  title={`testimonial-${id}`}
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 text-sm text-gray-700">"Your support changed my life" — Community member</div>
            </div>
          ))}
        </div>

        {/* Image gallery */}
        <div className="mt-12">
          <h3 className="font-bold text-gray-900 mb-4">Gallery</h3>
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
            {[
              'https://images.unsplash.com/photo-1509062522246-3755977927d7',
              'https://images.unsplash.com/photo-1520975682031-aeec6dd223e9',
              'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
              'https://images.unsplash.com/photo-1490122417551-6ee9691429d0',
              'https://images.unsplash.com/photo-1462068563783-680af2f8a49c',
              'https://images.unsplash.com/photo-1509099836639-18ba1795216d'
            ].map((u, i) => (
              <img
                key={i}
                className="h-40 w-64 object-cover rounded-xl snap-start border border-white/60"
                src={`${u}?q=80&w=800&auto=format&fit=crop`}
                alt="Impact"
              />
            ))}
          </div>
        </div>

        {/* Donate section */}
        <div id="donate" className="mt-14 rounded-3xl p-6 md:p-10 border border-white/60 bg-white/70 backdrop-blur shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 20% 20%, #ffccee 0%, transparent 60%), radial-gradient(circle at 80% 80%, #f97a17 0%, transparent 60%)' }} />
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-gray-900">Make a Donation</h3>
            <p className="text-gray-700 mt-1">Choose an amount and uplift a life today.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {amounts.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setSelected(value)}
                  className={`px-4 py-2 rounded-full border font-semibold transition ${selected===value ? 'text-white border-transparent' : 'border-white/70 text-gray-800 bg-white/70'}`}
                  style={selected===value ? { background: 'linear-gradient(90deg, #f97a17, #ffccee)' } : {}}
                >
                  ₹{value} — {label}
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onDonateClick?.(selected)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg"
                style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}
              >
                <Heart className="fill-white/90" size={18}/> Donate ₹{selected}
              </button>
              <span className="text-sm text-gray-600">Secure contribution • Tax-deductible receipt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
