import heroLake from './imports/hero-lake-16x9-1920.jpg'
import concrete from './imports/concrete-2.jpg'
import mLogo from './imports/M-logo.png'
import mr10Logo from './imports/mr10-logo.png'

const experience = [
  { period: '2022 – nu', title: 'Projectmanager & Consultant', company: 'Van der Let & Partners', sub: 'marketing & webdevelopment · Heerenveen' },
  { period: '2003 – nu', title: 'Ontwerp, Advies & Webontwikkeling', company: 'mr10', sub: 'Nederland' },
  { period: '2016 – 2021', title: 'Art Director / Teamleider / Strateeg', company: 'Bomondo', sub: 'Aldeboarn' },
  { period: '2014 – 2015', title: 'UI / IO / Frontend Consultant', company: 'CMD The Next Web – NHL', sub: 'Leeuwarden' },
  { period: '2003 – 2012', title: 'Freelance Flash Designer & Developer', company: 'Inertia Creative', sub: '' },
]

const education = [
  { period: '1997 – 2002', title: 'Communicatie Ontwerp', company: 'Kunstacademie Minerva Groningen', sub: 'Bachelor' },
  { period: '2017', title: 'UX Design', company: 'NCOI Opleidingen', sub: 'HBO Module · 8.5' },
  { period: '2016', title: 'Webdesign', company: 'NCOI Opleidingen', sub: 'HBO Module · 7.0' },
  { period: '2021', title: 'Innovatiestrategie & Agile / Scrum', company: 'Competence Factory', sub: '' },
]

export default function App() {
  return (
    <div className="min-h-full bg-[#f0ede7]">

      {/* ══════════════════════════════════════
          HERO — full-bleed portrait
      ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: 560, maxHeight: 960 }}>

        {/* Full-bleed portrait */}
        <img
          src={heroLake}
          alt="Maarten van de Voorde aan het water"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />

        {/* Gradient: top vignette + heavy bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(20,19,17,0.3) 0%, rgba(20,19,17,0) 28%, rgba(20,19,17,0) 40%, rgba(20,19,17,0.55) 75%, rgba(20,19,17,0.75) 100%)',
          }}
        />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 sm:px-12 pt-9">
          <img
            src={mr10Logo}
            alt="mr10"
            className="h-9 sm:h-11 w-auto"
            style={{  }}
          />
          <a
            href="https://www.linkedin.com/in/maartenvandevoorde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.6rem] tracking-[0.22em] uppercase text-white/60 hover:text-white transition-colors duration-200 border border-white/25 hover:border-white/60 px-3 py-1.5 rounded-full"
          >
            LinkedIn
          </a>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 sm:px-12 pb-10 sm:pb-14">

          {/* Blue pill tag */}
          <div className="mb-5">
            <span
              className="inline-block bg-[#4BA8D0] text-white text-[0.6rem] tracking-[0.22em] uppercase px-4 py-1.5"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              digital projectmanager
            </span>
          </div>

          {/* Name — huge, Playfair Black */}
          <h1
            className="text-white font-black leading-[0.92] tracking-tight"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3.2rem, 11.5vw, 8.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Maarten<br />
            <span style={{ fontStyle: 'italic', fontWeight: 700 }}>van de Voorde</span>
          </h1>

          {/* Sub */}
          <div className="flex items-center gap-4 mt-5">
            <div className="h-px w-8 bg-white/40" />
            <p
              className="text-white/55 text-[0.62rem] tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              art direction · web strategie · emmeloord
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BIO
      ══════════════════════════════════════ */}
      <section className="bg-white px-8 sm:px-12 py-20 sm:py-28">
        <div className="max-w-[720px] mx-auto">
          <Label>Over</Label>

          <p
            className="leading-[1.5] font-bold text-[#1a1917] mb-10"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.35rem, 3.5vw, 1.9rem)',
            }}
          >
            Creatieve probleemoplosser die graag begrijpt hoe dingen werken —
            en ze vervolgens beter maakt.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5 text-[0.9rem] leading-[1.9] text-[#5a5651]">
            <p>
              Gedreven digitale professional en bevlogen projectleider met een scherp oog voor complexe digitale vraagstukken.
            </p>
            <p>
              Als iets niet werkt, wil ik weten waarom — en het oplossen. Van een hardnekkig UX-vraagstuk tot een project dat muurvast zit: ik duik er graag in. Niet om het alleen maar werkend te krijgen, maar om te begrijpen waaróm het werkt — en een oplossing te vinden die klopt.
            </p>
            <p>
              Dat doe ik door samen met opdrachtgevers en stakeholders relevante doelen te bepalen, en door middel van gericht onderzoek en grondige analyse deze doelen in werkbare strategie te vertalen voor ontwerpers en ontwikkelaars.
            </p>
            <p>
              Met een talent om overzicht te houden, jarenlange ervaring en actuele kennis, waarborg ik kwaliteit gedurende het hele ontwikkelproces, tot — misschien nog wel belangrijker — ver na de oplevering van het project.
            </p>
          </div>

          {/* Pull quote */}
          <div className="mt-14 border-l-[3px] border-[#4BA8D0] pl-7">
            <p
              className="font-bold italic text-[#1a1917] leading-[1.6]"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
              }}
            >
              "Voor mij zijn succesvol afgeronde projecten de kroon op datgene
              wat voor mij de belangrijkste factor is voor succes: een goede
              relatie met opdrachtgever en alle stakeholders."
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12">
            {['Probleemoplossing', 'Nieuwsgierigheid', 'Vakmanschap', 'Speelsheid', 'UX Design', 'Art Direction', 'Webontwikkeling', 'Interactiedesign', 'WordPress', 'Marketingstrategie', 'Grafisch ontwerp', 'Projectmanagement'].map((t) => (
              <span
                key={t}
                className="text-[0.62rem] tracking-[0.1em] uppercase border border-[#e0ddd6] text-[#7a7670] rounded-full px-3 py-1 hover:border-[#4BA8D0] hover:text-[#4BA8D0] transition-colors duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DRIE ICOONTJES
      ══════════════════════════════════════ */}
      <section className="relative px-8 sm:px-12 py-20 bg-[#f0ede7]">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${concrete})`, opacity: 0.18 }}
        />
        <div className="relative z-10 max-w-[720px] mx-auto">
          <Label muted>Expertise</Label>
          <div className="flex flex-col gap-4">
            {['Projectmanager', 'UX Visual Design', 'Vespa'].map((item) => (
              <div key={item} className="flex items-center gap-4 py-4 border-b border-[#dedad2] last:border-0">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#a09a93] w-6 text-right tabular-nums">
                  {['01', '02', '03'][['Projectmanager', 'UX Visual Design', 'Vespa'].indexOf(item)]}
                </span>
                <span
                  className="text-[1.1rem] font-bold text-[#1a1917]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WERKERVARING + OPLEIDING
      ══════════════════════════════════════ */}
      <section className="bg-white px-8 sm:px-12 py-20 sm:py-28">
        <div className="max-w-[720px] mx-auto grid sm:grid-cols-2 gap-16">
          <div>
            <Label>Werkervaring</Label>
            <div className="flex flex-col">
              {experience.map((item, i) => (
                <div key={i} className={i < experience.length - 1 ? 'pb-7 mb-7 border-b border-[#eeebe5]' : ''}>
                  <p className="text-[0.68rem] tracking-[0.08em] text-[#a09a93] tabular-nums mb-1.5">{item.period}</p>
                  <p className="text-[0.92rem] font-semibold text-[#1a1917] leading-snug mb-0.5">{item.title}</p>
                  <p className="text-[0.85rem] italic text-[#4BA8D0] mb-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>{item.company}</p>
                  {item.sub && <p className="text-[0.75rem] text-[#a09a93]">{item.sub}</p>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <Label>Opleiding</Label>
            <div className="flex flex-col">
              {education.map((item, i) => (
                <div key={i} className={i < education.length - 1 ? 'pb-7 mb-7 border-b border-[#eeebe5]' : ''}>
                  <p className="text-[0.68rem] tracking-[0.08em] text-[#a09a93] tabular-nums mb-1.5">{item.period}</p>
                  <p className="text-[0.92rem] font-semibold text-[#1a1917] leading-snug mb-0.5">{item.title}</p>
                  <p className="text-[0.85rem] italic text-[#4BA8D0] mb-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>{item.company}</p>
                  {item.sub && <p className="text-[0.75rem] text-[#a09a93]">{item.sub}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT + FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-[#f0ede7] px-8 sm:px-12 py-20">
        <div className="max-w-[720px] mx-auto">

          <h2
            className="font-bold italic text-[#1a1917] leading-none mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Samen werken?
          </h2>

          <p className="text-[#5a5651] text-[0.95rem] leading-[1.7] max-w-[480px] mb-10">
            Nieuwe site, bestaande site die een opknapbeurt verdient, of een SEO-probleem dat niemand
            meer snapt — ik los het op. Vraag je het lief, dan kijk ik ook naar je oldtimer Vespa.
          </p>

          <div className="flex flex-col gap-3 mb-16">
            <FooterLink icon="globe" label="mr10.nl" href="https://mr10.nl" />
            <FooterLink icon="linkedin" label="linkedin.com/in/maartenvandevoorde" href="https://www.linkedin.com/in/maartenvandevoorde" />
            <FooterLink icon="location" label="Emmeloord, Flevoland" href="#" />
          </div>

          {/* Bottom bar */}
          <div className="flex items-end justify-between pt-8 border-t border-[#dddad2]">
            <div className="flex items-center gap-4">
              <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[#b0aba3]">© 2026</p>
            </div>
            <img src={mLogo} alt="M" className="h-20 sm:h-24 w-auto" />
          </div>
        </div>
      </footer>

    </div>
  )
}

/* ── Sub-components ── */

function Label({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className={`text-[0.58rem] tracking-[0.25em] uppercase font-semibold ${muted ? 'text-[#9a9690]' : 'text-[#a09a93]'}`}>
        {children}
      </span>
      <div className={`flex-1 h-px ${muted ? 'bg-[#ccc9c2]' : 'bg-[#e8e4dc]'}`} />
    </div>
  )
}

function IlluCard({ label, sub, children }: { label: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="group flex flex-col items-center gap-4">
      <div className="w-full aspect-square bg-[#f8f5ef] border border-[#dedad2] flex items-center justify-center group-hover:border-[#4BA8D0] transition-colors duration-300">
        {children}
      </div>
      <div className="text-center">
        <p className="text-[0.63rem] tracking-[0.14em] uppercase text-[#1a1917] mb-0.5">{label}</p>
        <p className="text-[0.6rem] text-[#a09a93]">{sub}</p>
      </div>
    </div>
  )
}

function FooterLink({ icon, label, href }: { icon: 'globe' | 'linkedin' | 'location'; label: string; href: string }) {
  const Tag = href !== '#' ? 'a' : 'span'
  const props = href !== '#' ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Tag {...(props as any)} className="flex items-center gap-3 text-[#6b6762] hover:text-[#4BA8D0] transition-colors duration-200 group w-fit">
      <span className="w-8 h-8 border border-[#d5d0c8] group-hover:border-[#4BA8D0] transition-colors duration-200 flex items-center justify-center flex-shrink-0">
        {icon === 'globe' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
        {icon === 'linkedin' && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>}
        {icon === 'location' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
      </span>
      <span className="text-sm">{label}</span>
    </Tag>
  )
}
