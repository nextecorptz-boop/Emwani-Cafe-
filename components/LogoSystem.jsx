/* global React, Crest, Wordmark */

// ─── LOGO ANATOMY ─────────────────────────────────────────────────
function LogoAnatomy() {
  const layers = [
    { label: 'Crown',     desc: 'Royalty · pride · Karagwe Kingdom',           color: 'var(--gold)' },
    { label: 'E (abstract)', desc: 'Identity · woven through the crest',        color: 'var(--ember)' },
    { label: 'Coffee leaves', desc: 'Life · fertility · sustainability',         color: 'var(--leaf)' },
    { label: 'Coffee bean',  desc: 'Robusta · the core · strength · legacy',    color: 'var(--bean)' },
    { label: 'Mushonge arcs', desc: 'Traditional Haya hut · shelter · roots',    color: 'var(--earth)' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 360px) 1fr', gap: 'var(--s-9)', alignItems: 'start' }}>
      <div style={{ background: 'var(--paper)', borderRadius: 'var(--r-3)', border: '1px solid var(--rule)', padding: 'var(--s-7)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Crest size={220} color="var(--mushonge)" />
        <div style={{ marginTop: 'var(--s-6)', textAlign: 'center' }}>
          <Wordmark size={28} color="var(--mushonge)" />
          <div className="em-mono" style={{ marginTop: 'var(--s-2)', color: 'var(--fg-soft)' }}>COFFEE · CO · TZ</div>
        </div>
      </div>
      <div>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--fg-muted)', maxWidth: '50ch', margin: 0 }}>
          The Emwani crest is a stacked symbol, not a logo to redraw at small size.
          Read top-down: <b style={{ color: 'var(--ink)' }}>crown · identity · leaves · bean · hut.</b> Five
          layers, one inheritance.
        </p>
        <ol style={{ marginTop: 'var(--s-6)', padding: 0, listStyle: 'none', display: 'grid', gap: 'var(--s-4)' }}>
          {layers.map((l, i) => (
            <li key={l.label} style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: 'var(--s-4)', alignItems: 'center', paddingBottom: 'var(--s-4)', borderBottom: '1px solid var(--rule)' }}>
              <span className="em-mono" style={{ color: 'var(--fg-soft)' }}>0{i+1}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500 }}>{l.label}</div>
                <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>{l.desc}</div>
              </div>
              <span style={{ width: 28, height: 28, borderRadius: '50%', background: l.color, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)' }}></span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

// ─── LOGO LOCKUPS ─────────────────────────────────────────────────
function LogoLockups() {
  const cells = [
    { bg: 'var(--bone)',     fg: 'var(--mushonge)', label: 'PRIMARY · LIGHT' },
    { bg: 'var(--mushonge)', fg: 'var(--cream)',    label: 'BRAND · DARK' },
    { bg: 'var(--ink)',      fg: 'var(--gold)',     label: 'PREMIUM · GOLD' },
    { bg: 'var(--ember)',    fg: 'var(--bone)',     label: 'CEREMONIAL · RED' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--s-3)' }}>
      {cells.map(c => (
        <div key={c.label} style={{ background: c.bg, color: c.fg, borderRadius: 'var(--r-2)', minHeight: 220, padding: 'var(--s-5)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(0,0,0,0.06)' }}>
          <span className="em-mono" style={{ opacity: 0.7, alignSelf: 'flex-start' }}>{c.label}</span>
          <Crest size={88} color="currentColor" />
          <Wordmark size={18} color="currentColor" />
        </div>
      ))}
    </div>
  );
}

// ─── LOGO RULES ───────────────────────────────────────────────────
function LogoRules() {
  const rules = [
    { do: true,  text: 'Hold a minimum clearspace of one bean-height around the full crest.' },
    { do: true,  text: 'Use Mushonge green or Ink for the crest by default. Gold only on dark.' },
    { do: true,  text: 'Pair crest + wordmark vertically for primary lockups; horizontal only ≥ 96px.' },
    { do: false, text: 'Do not gradient, drop-shadow, or rotate the crest.' },
    { do: false, text: 'Do not place the crest over busy photography without a dark scrim.' },
    { do: false, text: 'Do not redraw or recolor a single layer (leaf, bean) in isolation as a logo.' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--s-3)' }}>
      {rules.map((r, i) => (
        <div key={i} style={{ background: r.do ? 'var(--paper)' : '#FDF4EE', border: `1px solid ${r.do ? 'var(--rule)' : '#E8C4B8'}`, borderRadius: 'var(--r-2)', padding: 'var(--s-5)', display: 'flex', gap: 'var(--s-4)', alignItems: 'flex-start' }}>
          <span style={{
            width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
            background: r.do ? 'var(--leaf)' : 'var(--ember)',
            color: r.do ? 'var(--bone)' : 'var(--bone)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
          }}>{r.do ? '✓' : '×'}</span>
          <div>
            <div className="em-mono" style={{ color: r.do ? 'var(--leaf)' : 'var(--ember)' }}>{r.do ? 'DO' : "DON'T"}</div>
            <div style={{ fontSize: 15, color: 'var(--fg)', marginTop: 4, lineHeight: 1.5 }}>{r.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { LogoAnatomy, LogoLockups, LogoRules });
