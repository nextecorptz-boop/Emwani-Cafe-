/* global React */
const { useState, useEffect, useRef } = React;

// ─── COLOR PALETTE CARD ───────────────────────────────────────────
function Swatch({ name, role, hex, fg = "var(--ink)", note }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard?.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  return (
    <button onClick={copy} style={{
      textAlign: 'left', display: 'flex', flexDirection: 'column',
      background: hex, color: fg, padding: 'var(--s-5)',
      borderRadius: 'var(--r-2)', minHeight: 168,
      border: '1px solid rgba(0,0,0,0.06)',
      transition: 'transform var(--dur-quick) var(--ease-pour)',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
      <span className="em-mono" style={{ opacity: 0.7 }}>{role}</span>
      <span style={{ flex: 1 }}></span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em' }}>{name}</span>
      <span className="em-mono" style={{ marginTop: 'var(--s-2)', opacity: 0.7 }}>{copied ? 'COPIED ✓' : hex}</span>
      {note && <span style={{ marginTop: 'var(--s-3)', fontSize: 13, opacity: 0.75, lineHeight: 1.4 }}>{note}</span>}
    </button>
  );
}

function PaletteGrid() {
  const heritage = [
    { name: 'Mushonge',  role: 'Brand · Primary',   hex: '#1E3A2A', fg: '#E9D7B2', note: 'Deep emerald. Karagwe hills. Used for primary surfaces and brand voice.' },
    { name: 'Ember',     role: 'Accent · Heritage', hex: '#A4322A', fg: '#F5EDD9', note: 'Heritage red. Ingoma ribbon, ceremonial moments, single CTAs.' },
    { name: 'Gold',      role: 'Premium',           hex: '#C8A24B', fg: '#14110D', note: 'Muted gold. Chioda Gold, premium markers, never as background.' },
    { name: 'Ink',       role: 'Foreground',        hex: '#14110D', fg: '#F5EDD9', note: 'Almost-black charcoal. Body text, dark hero surfaces.' },
  ];
  const earth = [
    { name: 'Bean',  role: 'Brown · Dark', hex: '#3A2418', fg: '#E9D7B2', note: 'Espresso. Dark packaging fields, product depth.' },
    { name: 'Earth', role: 'Brown · Mid',  hex: '#6B4427', fg: '#F5EDD9', note: 'Coffee soil. Secondary text on cream, dividers.' },
    { name: 'Leaf',  role: 'Green · Mid',  hex: '#3D5C42', fg: '#F5EDD9', note: 'Coffee leaf. Sustainability marks, illustration.' },
  ];
  const cream = [
    { name: 'Cream',     role: 'Cream',        hex: '#E9D7B2', fg: '#3A2418', note: 'Coffee cream. Card surfaces, packaging cream.' },
    { name: 'Bone',      role: 'Page',         hex: '#F5EDD9', fg: '#3A2418', note: 'Warm off-white. Default page background.' },
    { name: 'Paper',     role: 'Surface',      hex: '#FAF6EC', fg: '#3A2418', note: 'Lightest cream. Cards on bone.' },
    { name: 'Gold Soft', role: 'Premium · Soft', hex: '#D9BC78', fg: '#14110D', note: 'Gold tint for backgrounds and washes.' },
  ];

  return (
    <div style={{ display: 'grid', gap: 'var(--s-8)' }}>
      <div>
        <div className="em-mono" style={{ color: 'var(--fg-soft)', marginBottom: 'var(--s-4)' }}>Heritage Core — these four carry the brand</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 'var(--s-3)' }}>
          {heritage.map(s => <Swatch key={s.name} {...s} />)}
        </div>
      </div>
      <div>
        <div className="em-mono" style={{ color: 'var(--fg-soft)', marginBottom: 'var(--s-4)' }}>Earth & Leaf — supporting depth</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--s-3)' }}>
          {earth.map(s => <Swatch key={s.name} {...s} />)}
        </div>
      </div>
      <div>
        <div className="em-mono" style={{ color: 'var(--fg-soft)', marginBottom: 'var(--s-4)' }}>Cream & Paper — surfaces and ground</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 'var(--s-3)' }}>
          {cream.map(s => <Swatch key={s.name} {...s} />)}
        </div>
      </div>
    </div>
  );
}

// ─── PAIRING RULES ────────────────────────────────────────────────
function PairingRules() {
  const pairs = [
    { bg: '#1E3A2A', fg: '#E9D7B2', label: 'Mushonge × Cream', use: 'Hero, brand voice' },
    { bg: '#14110D', fg: '#C8A24B', label: 'Ink × Gold', use: 'Premium / Chioda' },
    { bg: '#A4322A', fg: '#F5EDD9', label: 'Ember × Bone', use: 'Ingoma / ceremonial' },
    { bg: '#F5EDD9', fg: '#3A2418', label: 'Bone × Bean', use: 'Default reading' },
    { bg: '#3A2418', fg: '#D9BC78', label: 'Bean × Gold Soft', use: 'Dark packaging' },
    { bg: '#E9D7B2', fg: '#1E3A2A', label: 'Cream × Mushonge', use: 'Light brand block' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 'var(--s-3)' }}>
      {pairs.map(p => (
        <div key={p.label} style={{ background: p.bg, color: p.fg, padding: 'var(--s-5)', borderRadius: 'var(--r-2)', minHeight: 132, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span className="em-display" style={{ fontSize: 28, lineHeight: 1.05 }}>Aa</span>
          <div>
            <div className="em-mono" style={{ opacity: 0.7 }}>{p.use}</div>
            <div style={{ fontSize: 14, marginTop: 4 }}>{p.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Swatch, PaletteGrid, PairingRules });
