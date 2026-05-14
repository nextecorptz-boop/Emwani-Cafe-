/* global React, Crest, Wordmark, MushongeBand */

// ─── BUTTONS ──────────────────────────────────────────────────────
function Btn({ kind = 'primary', size = 'md', children, icon, ...rest }) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600, letterSpacing: '0.02em',
    borderRadius: 'var(--r-pill)',
    transition: 'all var(--dur-quick) var(--ease-pour)',
    cursor: 'pointer', display: 'inline-flex',
    alignItems: 'center', gap: 'var(--s-3)',
    border: '1px solid transparent',
  };
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 13 },
    md: { padding: '12px 22px', fontSize: 14 },
    lg: { padding: '16px 28px', fontSize: 15 },
  };
  const kinds = {
    primary: { background: 'var(--ink)', color: 'var(--bone)' },
    brand:   { background: 'var(--mushonge)', color: 'var(--bone)' },
    ember:   { background: 'var(--ember)', color: 'var(--bone)' },
    gold:    { background: 'var(--gold)', color: 'var(--ink)' },
    ghost:   { background: 'transparent', color: 'var(--ink)', borderColor: 'var(--ink)' },
    quiet:   { background: 'transparent', color: 'var(--ink)' },
  };
  return (
    <button {...rest} style={{ ...base, ...sizes[size], ...kinds[kind] }}>
      <span>{children}</span>
      {icon !== false && <span aria-hidden style={{ fontSize: '0.9em', opacity: 0.7 }}>→</span>}
    </button>
  );
}

function ButtonsCard() {
  return (
    <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 'var(--r-3)', padding: 'var(--s-7)' }}>
      <div className="em-mono" style={{ color: 'var(--fg-soft)', marginBottom: 'var(--s-5)' }}>Buttons · pill-form · pour-eased</div>
      <div style={{ display: 'flex', gap: 'var(--s-3)', flexWrap: 'wrap', alignItems: 'center' }}>
        <Btn kind="primary" size="lg">Order Emwani</Btn>
        <Btn kind="brand">Visit the café</Btn>
        <Btn kind="ember">Read our story</Btn>
        <Btn kind="gold">Chioda Gold</Btn>
        <Btn kind="ghost">Wholesale</Btn>
        <Btn kind="quiet" icon={false}>Skip intro</Btn>
      </div>
      <div style={{ display: 'flex', gap: 'var(--s-3)', flexWrap: 'wrap', alignItems: 'center', marginTop: 'var(--s-4)' }}>
        <Btn kind="primary" size="sm">Add to bag</Btn>
        <Btn kind="brand" size="sm">View product</Btn>
        <Btn kind="ghost" size="sm">Trace this bean</Btn>
      </div>
    </div>
  );
}

// ─── ORIGIN STORY CARD ────────────────────────────────────────────
function OriginCard() {
  return (
    <article style={{ background: 'var(--mushonge)', color: 'var(--cream)', borderRadius: 'var(--r-3)', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.12, color: 'var(--cream)' }}>
        <div style={{ position: 'absolute', right: -40, top: -20 }}><Crest size={320} color="currentColor"/></div>
      </div>
      <div style={{ position: 'relative', padding: 'var(--s-8)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-8)', alignItems: 'center' }}>
        <div>
          <div className="em-mono" style={{ color: 'var(--gold-soft)' }}>ROOTED IN KARAGWE · KAGERA</div>
          <h3 className="em-display" style={{ fontSize: 56, lineHeight: 1, marginTop: 'var(--s-4)', marginBottom: 0 }}>
            The earth itself <span className="em-italic" style={{ color: 'var(--gold)' }}>exhales</span> Robusta.
          </h3>
          <p style={{ marginTop: 'var(--s-5)', fontSize: 17, color: 'rgba(245,237,217,0.78)', maxWidth: '40ch', lineHeight: 1.6 }}>
            Long before colonial markets commodified it, coffee was sacred — offered as a covenant
            between leaders, used to forge community bonds, and roasted over fires that marked
            life's most meaningful transitions.
          </p>
        </div>
        <div style={{ borderLeft: '1px solid rgba(245,237,217,0.18)', paddingLeft: 'var(--s-7)' }}>
          <div className="em-mono" style={{ color: 'var(--gold-soft)' }}>FOUNDER · 2025</div>
          <p className="em-display em-italic" style={{ fontSize: 28, lineHeight: 1.25, marginTop: 'var(--s-3)', color: 'var(--bone)' }}>
            "I did not leave Tanzania to escape my roots. I left to strengthen them."
          </p>
          <div style={{ marginTop: 'var(--s-5)', display: 'flex', alignItems: 'center', gap: 'var(--s-3)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(245,237,217,0.12)', border: '1px solid rgba(245,237,217,0.25)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--gold-soft)' }}>LK</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>Leodger Leonard Kachebonaho</div>
              <div className="em-mono" style={{ color: 'var(--gold-soft)' }}>CEO & FOUNDER</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── JOURNEY STEP ────────────────────────────────────────────────
function JourneySteps() {
  const steps = [
    { n: '01', title: 'Soil',      desc: 'Mbinga, Mbozi, Karagwe — direct relationships with farmer groups.' },
    { n: '02', title: 'Cherry',    desc: 'Hand-picked, sorted, washed; ekyansi-wrapped honor of place.' },
    { n: '03', title: 'Roast',     desc: 'Small-batch roasting; bold curve for Ingoma, gracious for Chioda.' },
    { n: '04', title: 'Cup',       desc: 'Emwani Café and home pour — Drip bags built for the city pace.' },
  ];
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--s-4)' }}>
      {steps.map(s => (
        <li key={s.n} style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 'var(--r-3)', padding: 'var(--s-6)', position: 'relative' }}>
          <div className="em-mono" style={{ color: 'var(--ember)' }}>STEP {s.n}</div>
          <div className="em-display" style={{ fontSize: 36, marginTop: 'var(--s-3)', lineHeight: 1 }}>{s.title}</div>
          <p style={{ marginTop: 'var(--s-4)', color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.55 }}>{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

// ─── FARMER / SUSTAINABILITY CARD ─────────────────────────────────
function FarmerCard() {
  return (
    <div style={{ background: 'var(--bone)', border: '1px solid var(--rule)', borderRadius: 'var(--r-3)', padding: 'var(--s-7)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-7)' }}>
      <div>
        <div className="em-mono" style={{ color: 'var(--leaf)' }}>FARMER · CENTRIC</div>
        <h3 className="em-display" style={{ fontSize: 36, lineHeight: 1.05, margin: 'var(--s-3) 0 var(--s-4)' }}>
          Not suppliers. <span className="em-italic" style={{ color: 'var(--leaf)' }}>Partners.</span>
        </h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.6, margin: 0 }}>
          Direct work with farmer groups in Mbinga, Mbozi, and Karagwe. Fair prices, training,
          agronomic support, and long-term relationships rooted in shared value.
        </p>
      </div>
      <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-5)' }}>
        {[
          ['3', 'Sourcing regions'],
          ['100%', 'Direct relationships'],
          ['Eco', 'Biodegradable packaging'],
          ['2025', 'Founded'],
        ].map(([n, l]) => (
          <div key={l} style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-3)' }}>
            <dt className="em-display" style={{ fontSize: 40, lineHeight: 1, color: 'var(--mushonge)' }}>{n}</dt>
            <dd className="em-mono" style={{ color: 'var(--fg-soft)', margin: 'var(--s-2) 0 0' }}>{l}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ─── CAFÉ EXPERIENCE CARD ─────────────────────────────────────────
function CafeCard() {
  return (
    <div style={{ background: 'var(--bean)', color: 'var(--cream)', borderRadius: 'var(--r-3)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 320 }}>
      <div style={{ padding: 'var(--s-7)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div className="em-mono" style={{ color: 'var(--gold-soft)' }}>EMWANI CAFÉ · DAR ES SALAAM</div>
          <h3 className="em-display" style={{ fontSize: 48, lineHeight: 1.02, margin: 'var(--s-3) 0 var(--s-4)' }}>
            Not a coffee shop. <span className="em-italic" style={{ color: 'var(--gold)' }}>A culture hub.</span>
          </h3>
          <p style={{ color: 'rgba(245,237,217,0.75)', maxWidth: '40ch', margin: 0 }}>
            A network of learning platforms, youth empowerment spaces, and showrooms for the
            beans and the blends.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--s-3)', marginTop: 'var(--s-6)' }}>
          {['Roastery', 'Listening room', 'Bean library', 'Trainings'].map(t => (
            <span key={t} className="em-mono" style={{ color: 'var(--gold-soft)' }}>· {t}</span>
          ))}
        </div>
      </div>
      <div style={{ position: 'relative', background: 'linear-gradient(180deg, #4A2D1E 0%, #2A1810 100%)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        {/* Stylized cup with steam */}
        <svg viewBox="0 0 240 320" style={{ width: '70%', height: '100%' }}>
          <g stroke="var(--cream)" strokeWidth="1.4" fill="none" opacity="0.7">
            <path d="M 80 80 C 60 40, 140 30, 110 -10"><animate attributeName="d" dur="6s" repeatCount="indefinite"
              values="M 80 80 C 60 40, 140 30, 110 -10; M 80 80 C 100 40, 60 30, 110 -10; M 80 80 C 60 40, 140 30, 110 -10"/></path>
            <path d="M 140 80 C 160 40, 100 30, 130 -10" opacity="0.6"><animate attributeName="d" dur="7.5s" repeatCount="indefinite"
              values="M 140 80 C 160 40, 100 30, 130 -10; M 140 80 C 120 40, 170 30, 130 -10; M 140 80 C 160 40, 100 30, 130 -10"/></path>
          </g>
          {/* cup */}
          <path d="M 60 160 L 70 280 Q 70 300 90 300 L 150 300 Q 170 300 170 280 L 180 160 Z" fill="var(--cream)"/>
          <ellipse cx="120" cy="160" rx="60" ry="14" fill="var(--bean)"/>
          <path d="M 180 180 Q 215 180 215 215 Q 215 240 180 240" fill="none" stroke="var(--cream)" strokeWidth="10" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}

// ─── CONTACT / FOOTER BLOCK ───────────────────────────────────────
function ContactBlock() {
  return (
    <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: 'var(--s-8) var(--s-7)', borderRadius: 'var(--r-3)', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 'var(--s-7)', alignItems: 'flex-start' }}>
      <div>
        <Crest size={56} color="var(--gold)"/>
        <div className="em-display" style={{ fontSize: 32, marginTop: 'var(--s-5)', lineHeight: 1.1, maxWidth: '20ch' }}>
          Our ancestors planted pride. <span className="em-italic" style={{ color: 'var(--gold)' }}>We roast their legacy.</span>
        </div>
      </div>
      <div>
        <div className="em-mono" style={{ color: 'var(--gold-soft)' }}>VISIT</div>
        <div style={{ marginTop: 'var(--s-3)', lineHeight: 1.7 }}>
          22nd Floor, PSPF Tower<br/>
          Mission St, Ilala CBD<br/>
          Dar es Salaam, Tanzania
        </div>
      </div>
      <div>
        <div className="em-mono" style={{ color: 'var(--gold-soft)' }}>CONNECT</div>
        <div style={{ marginTop: 'var(--s-3)', lineHeight: 1.7 }}>
          +255 748 787 981<br/>
          leodger@emwanicoffee.co.tz<br/>
          www.emwanicoffee.co.tz
        </div>
      </div>
    </div>
  );
}

// ─── MOBILE STICKY CTA ────────────────────────────────────────────
function MobileCtaPreview() {
  return (
    <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 'var(--r-3)', padding: 'var(--s-6)' }}>
      <div className="em-mono" style={{ color: 'var(--fg-soft)' }}>MOBILE · STICKY · 360 × 64</div>
      <div style={{ marginTop: 'var(--s-5)', width: 360, maxWidth: '100%', margin: 'var(--s-5) auto 0' }}>
        <div style={{
          background: 'var(--ink)', color: 'var(--bone)',
          borderRadius: 'var(--r-pill)', padding: '14px 18px',
          display: 'flex', alignItems: 'center', gap: 'var(--s-4)',
          boxShadow: 'var(--shadow-2)',
        }}>
          <Crest size={28} color="var(--gold)"/>
          <div style={{ flex: 1, lineHeight: 1.2 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Chioda Gold · 500G</div>
            <div className="em-mono" style={{ color: 'var(--gold-soft)' }}>FROM TSh 28,000</div>
          </div>
          <span style={{ background: 'var(--gold)', color: 'var(--ink)', borderRadius: 'var(--r-pill)', padding: '8px 14px', fontSize: 13, fontWeight: 700 }}>ORDER</span>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION HEADER ───────────────────────────────────────────────
function SectionHeaderExample() {
  return (
    <div style={{ background: 'var(--mushonge)', color: 'var(--cream)', padding: 'var(--s-9) var(--s-7)', borderRadius: 'var(--r-3)' }}>
      <div className="em-mono" style={{ color: 'var(--gold-soft)' }}>— PART · 02 · OUR PRODUCTS</div>
      <h3 className="em-display" style={{ fontSize: 72, lineHeight: 1, marginTop: 'var(--s-4)', marginBottom: 0 }}>
        Behind our <span className="em-italic" style={{ color: 'var(--gold)' }}>product names.</span>
      </h3>
      <p style={{ color: 'rgba(245,237,217,0.75)', maxWidth: '54ch', marginTop: 'var(--s-5)', fontSize: 19, lineHeight: 1.55 }}>
        At Emwani, names are chosen not for trend but for truth. Each product line is named
        after a traditional African dance — rhythm, movement, the unspoken language of our
        culture.
      </p>
    </div>
  );
}

Object.assign(window, { Btn, ButtonsCard, OriginCard, JourneySteps, FarmerCard, CafeCard, ContactBlock, MobileCtaPreview, SectionHeaderExample });
