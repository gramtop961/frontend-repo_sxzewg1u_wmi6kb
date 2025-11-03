import React, { useMemo } from 'react';

const allCauses = [
  {
    name: 'Child Education',
    tag: 'Education',
    banner: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1600&auto=format&fit=crop',
    summary: 'Community schools, scholarships and after-school learning support for underserved children.',
    gallery: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7',
      'https://images.unsplash.com/photo-1490122417551-6ee9691429d0',
      'https://images.unsplash.com/photo-1462068563783-680af2f8a49c',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d'
    ]
  },
  {
    name: 'Gender Equality',
    tag: 'Equality',
    banner: 'https://images.unsplash.com/photo-1532635215-8cf7e1b9ee2e?q=80&w=1600&auto=format&fit=crop',
    summary: 'Leadership circles, rights awareness and safe spaces enabling women and girls to thrive.',
    gallery: [
      'https://images.unsplash.com/photo-1520975682031-aeec6dd223e9',
      'https://images.unsplash.com/photo-1512070679279-8988d32161be',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'
    ]
  },
  {
    name: 'Healthcare Access',
    tag: 'Health',
    banner: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
    summary: 'Preventive screenings, mobile clinics and health education in remote communities.',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      'https://images.unsplash.com/photo-1582719478185-1f40a9f9925b',
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c'
    ]
  },
  {
    name: 'Nutrition & Meals',
    tag: 'Nutrition',
    banner: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1600&auto=format&fit=crop',
    summary: 'Midday meals for children and nutrition kits for families facing food insecurity.',
    gallery: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      'https://images.unsplash.com/photo-1498522271744-27973d3e3fbc',
      'https://images.unsplash.com/photo-1478144592103-25e218a04891'
    ]
  },
  {
    name: 'Clothes & Warmth',
    tag: 'Clothing',
    banner: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop',
    summary: 'Seasonal drives for warm clothing and essentials for families in vulnerable conditions.',
    gallery: [
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
      'https://images.unsplash.com/photo-1485841890310-6a055c88698a'
    ]
  },
  {
    name: 'Clean Water',
    tag: 'Water',
    banner: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1600&auto=format&fit=crop',
    summary: 'Safe drinking water through filtration units and community water stewardship.',
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a',
      'https://images.unsplash.com/photo-1441123285228-1448e608f3d5',
      'https://images.unsplash.com/photo-1504805572947-34fad45aed93'
    ]
  }
];

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const getReportUrl = (base, type) => `https://example.com/reports/${base}-${type}.pdf`;

const CauseDetail = ({ slug }) => {
  const cause = useMemo(() => {
    return allCauses.find((c) => slugify(c.name) === slug) || {
      name: 'Our Work',
      tag: 'Impact',
      banner: 'https://images.unsplash.com/photo-1490122417551-6ee9691429d0?q=80&w=1600&auto=format&fit=crop',
      summary: 'Explore our initiatives, transparent reports and real stories of change.',
      gallery: [
        'https://images.unsplash.com/photo-1509062522246-3755977927d7',
        'https://images.unsplash.com/photo-1520975682031-aeec6dd223e9',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c'
      ]
    };
  }, [slug]);

  const base = slugify(cause.name);

  return (
    <div className="pt-16">
      {/* Banner with title */}
      <section className="relative h-[38vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cause.banner})` }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(255,255,255,0))' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-8">
          <div className="rounded-2xl p-4 md:p-6 backdrop-blur bg-white/40 border border-white/50">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>{cause.tag}</span>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-white drop-shadow">{cause.name}</h1>
            <p className="mt-1 text-white/90 max-w-2xl">{cause.summary}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {/* Left: description and reports */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl p-6 border border-white/60 bg-white/70 backdrop-blur shadow">
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">What we do</h2>
              <p className="mt-2 text-gray-700">We collaborate with local partners to design context-led solutions. Our work combines immediate relief with long-term capacity building, ensuring every rupee reaches the community and creates lasting change.</p>
            </div>

            <div className="rounded-3xl p-6 border border-white/60 bg-white/70 backdrop-blur shadow">
              <h3 className="text-lg md:text-xl font-extrabold text-gray-900">Download Reports</h3>
              <p className="text-gray-700 mt-1">Access weekly, monthly and annual updates in handwritten native format or your preferred language.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-5 bg-gradient-to-br from-white/80 to-white/50 border border-white/60">
                  <h4 className="font-bold text-gray-900">Handwritten (Native)</h4>
                  <p className="text-sm text-gray-600 mt-1">Field-verified notes captured on ground.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['weekly','monthly','annual'].map((t) => (
                      <a key={t} href={getReportUrl(base, `${t}-native`)} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full text-white font-semibold" style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}>{t}</a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl p-5 bg-gradient-to-br from-white/80 to-white/50 border border-white/60">
                  <h4 className="font-bold text-gray-900">Choose Language (PDF)</h4>
                  <p className="text-sm text-gray-600 mt-1">Translated for clarity and accessibility.</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {['english','hindi','bengali','marathi','tamil','telugu'].map((lang) => (
                      <a key={lang} href={getReportUrl(base, `monthly-${lang}`)} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white/70 border border-white/60 text-gray-900 font-semibold">{lang[0].toUpperCase()+lang.slice(1)}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: gallery */}
          <div className="space-y-4">
            <div className="rounded-3xl p-6 border border-white/60 bg-white/70 backdrop-blur shadow">
              <h3 className="text-lg md:text-xl font-extrabold text-gray-900">Gallery</h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {cause.gallery.map((u, i) => (
                  <img key={i} src={`${u}?q=80&w=600&auto=format&fit=crop`} alt="gallery" className="h-28 w-full object-cover rounded-xl border border-white/60" />
                ))}
              </div>
            </div>
            <a href="/our-work" className="block text-center px-5 py-3 rounded-full font-semibold border border-white/60 bg-white/80 text-gray-900">← Back to Our Work</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CauseDetail;
