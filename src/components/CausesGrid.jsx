import React from 'react';

const topics = [
  'Child Education',
  'Gender Equality',
  'Healthcare Access',
  'Nutrition & Meals',
  'Clothes & Warmth',
  'Clean Water',
  'Sanitation',
  'Skill Development',
  'Youth Sports',
  'Mental Wellness',
  'Climate Action',
  'Senior Care'
];

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const CausesGrid = () => {
  return (
    <section id="causes" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{
            background: 'linear-gradient(90deg, #f97a17, #ffccee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Where We Work</h2>
          <p className="mt-3 text-gray-600">Click a topic to open its full page with banner, gallery and downloadable PDFs.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map((t) => (
            <a
              key={t}
              href={`/cause/${slugify(t)}`}
              className="group relative overflow-hidden rounded-2xl p-5 h-32 text-left bg-white/60 border border-white/60 backdrop-blur hover:shadow-xl transition"
            >
              <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at 0% 0%, #ffccee, transparent 60%)' }} />
              <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at 100% 100%, #f97a17, transparent 60%)' }} />
              <span className="relative z-10 font-bold text-gray-900">{t}</span>
              <span className="relative z-10 mt-2 block text-xs text-gray-600">Visit detail page →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesGrid;
