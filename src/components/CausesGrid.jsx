import React, { useMemo, useState } from 'react';

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

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${active ? 'text-white' : 'text-gray-700 bg-white/50'} `}
    style={active ? { background: 'linear-gradient(90deg, #f97a17, #ffccee)' } : {}}
  >
    {children}
  </button>
);

const WorkDetail = ({ topic, onClose }) => {
  const [tab, setTab] = useState('weekly');
  const [language, setLanguage] = useState('English');

  const banner = useMemo(() => ({
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop',
    title: topic,
    subtitle: 'Impact reports and resources'
  }), [topic]);

  const reportFile = (kind) => {
    const fileBase = topic.toLowerCase().replace(/[^a-z]+/g, '-');
    return `https://example.com/reports/${fileBase}-${kind}.pdf`;
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/40 flex items-center justify-center p-4">
      <div className="relative max-w-5xl w-full overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold shadow">Close</button>
        <div className="h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url(${banner.image})` }}>
          <div className="h-full w-full flex items-end p-6" style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">{banner.title}</h3>
              <p className="text-white/90">{banner.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex flex-wrap gap-3">
            <TabButton active={tab==='weekly'} onClick={() => setTab('weekly')}>Weekly Report</TabButton>
            <TabButton active={tab==='monthly'} onClick={() => setTab('monthly')}>Monthly Report</TabButton>
            <TabButton active={tab==='annual'} onClick={() => setTab('annual')}>Annual Report</TabButton>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-5 bg-gradient-to-br from-white/70 to-white/40 border border-white/60 backdrop-blur">
              <h4 className="font-bold text-gray-900">Download: Native Language (Handwritten)</h4>
              <p className="text-sm text-gray-600 mt-1">Locally prepared, field-verified notes in the community's native script.</p>
              <a
                href={reportFile(tab + '-native')}
                target="_blank" rel="noreferrer"
                className="mt-4 inline-block px-5 py-2 rounded-full font-semibold text-white shadow"
                style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}
              >
                Download PDF
              </a>
            </div>

            <div className="rounded-2xl p-5 bg-gradient-to-br from-white/70 to-white/40 border border-white/60 backdrop-blur">
              <h4 className="font-bold text-gray-900">Download: Choose Your Language</h4>
              <p className="text-sm text-gray-600 mt-1">Translated and typeset for clarity. Pick your preferred language.</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <select
                  className="px-4 py-2 rounded-full bg-white/80 border border-white/60 text-gray-800"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  {['English','Hindi','Bengali','Marathi','Tamil','Telugu','Kannada','Gujarati','Punjabi','Urdu'].map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <a
                  href={reportFile(tab + '-' + language.toLowerCase())}
                  target="_blank" rel="noreferrer"
                  className="px-5 py-2 rounded-full font-semibold text-white shadow"
                  style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CausesGrid = () => {
  const [openTopic, setOpenTopic] = useState(null);

  return (
    <section id="causes" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{
            background: 'linear-gradient(90deg, #f97a17, #ffccee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Where We Work</h2>
          <p className="mt-3 text-gray-600">Click a topic to explore reports, resources and impact stories.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setOpenTopic(t)}
              className="group relative overflow-hidden rounded-2xl p-5 h-32 text-left bg-white/60 border border-white/60 backdrop-blur hover:shadow-xl transition"
            >
              <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at 0% 0%, #ffccee, transparent 60%)' }} />
              <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at 100% 100%, #f97a17, transparent 60%)' }} />
              <span className="relative z-10 font-bold text-gray-900">{t}</span>
              <span className="relative z-10 mt-2 block text-xs text-gray-600">Tap to view weekly, monthly and annual reports</span>
            </button>
          ))}
        </div>
      </div>

      {openTopic && <WorkDetail topic={openTopic} onClose={() => setOpenTopic(null)} />}
    </section>
  );
};

export default CausesGrid;
