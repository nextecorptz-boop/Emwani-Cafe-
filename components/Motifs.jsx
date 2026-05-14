/* global React */

// ─── MOTIF: MUSHONGE ARC PATTERN ──────────────────────────────────
function MushongeBand({ color = 'var(--mushonge)', bg = 'var(--cream)', density = 6, height = 140 }) {
  // Programmatic Mushonge arcs across the band
  const arcs = [];
  const w = 220;
  const step = w / density;
  for (let row = 0; row < 3; row++) {
    for (let i = -1; i < density + 1; i++) {
      const x = i * step + (row % 2 ? step / 2 : 0);
      const yBase = 30 + row * 12;
      arcs.push({ d: `M ${x} ${yBase + 50} C ${x + step*0.2} ${yBase}, ${x + step*0.8} ${yBase}, ${x + step} ${yBase + 50}`, opacity: 1 - row * 0.22 });
    }
  }
  return (
    <div style={{ background: bg, color, borderRadius: 'var(--r-3)', overflow: 'hidden', height, position: 'relative' }}>
      <svg viewBox="0 0 220 140" preserveAspectRatio="xMidYMax slice" style={{ width: '100%', height: '100%' }}>
        {arcs.map((a, i) => (
          <path key={i} d={a.d} fill="none" stroke="currentColor" strokeWidth="1.1" opacity={a.opacity}/>
        ))}
      </svg>
    </div>
  );
}

// ─── MOTIF: WAVE / RIBBON ─────────────────────────────────────────
function WaveRibbon({ color = 'var(--ember)', bg = 'transparent', height = 120 }) {
  return (
    <div style={{ background: bg, height, position: 'relative', borderRadius: 'var(--r-3)', overflow: 'hidden' }}>
      <svg viewBox="0 0 800 120" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block', color }}>
        <path d="M 0 70 C 100 10, 220 130, 360 70 S 600 10, 720 70 S 800 100, 800 70 L 800 120 L 0 120 Z" fill="currentColor"/>
        <path d="M 0 90 C 100 30, 220 150, 360 90 S 600 30, 720 90 S 800 120, 800 90 L 800 120 L 0 120 Z" fill="currentColor" opacity="0.4"/>
      </svg>
    </div>
  );
}

// ─── MOTIF: BEAN ORBIT ────────────────────────────────────────────
function BeanOrbit({ size = 220, color = 'var(--gold)' }) {
  const beans = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    const r = 88;
    return { x: 110 + Math.cos(a) * r, y: 110 + Math.sin(a) * r, rot: (a * 180/Math.PI) + 90 };
  });
  return (
    <svg viewBox="0 0 220 220" style={{ width: size, height: size, color }}>
      <circle cx="110" cy="110" r="92" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4"/>
      <g style={{ transformOrigin: '110px 110px', animation: 'em-orbit 28s linear infinite' }}>
        {beans.map((b, i) => (
          <g key={i} transform={`translate(${b.x} ${b.y}) rotate(${b.rot})`}>
            <ellipse cx="0" cy="0" rx="6" ry="10" fill="currentColor"/>
            <path d="M 0 -9 C -2 -3, -2 3, 0 9" stroke="var(--ink)" strokeWidth="0.6" fill="none" opacity="0.6"/>
          </g>
        ))}
      </g>
      <ellipse cx="110" cy="110" rx="18" ry="28" fill="currentColor" opacity="0.95"/>
      <path d="M 110 84 C 102 96, 102 124, 110 136" stroke="var(--ink)" strokeWidth="0.8" fill="none" opacity="0.55"/>
    </svg>
  );
}

// ─── MOTIF: STEAM ─────────────────────────────────────────────────
function Steam({ color = 'var(--cream)', height = 200 }) {
  return (
    <svg viewBox="0 0 220 220" style={{ width: '100%', height, color }}>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M 90 200 C 70 160, 130 140, 100 100 S 80 60, 110 20">
          <animate attributeName="d" dur="6s" repeatCount="indefinite"
            values="M 90 200 C 70 160, 130 140, 100 100 S 80 60, 110 20;
                    M 90 200 C 110 160, 70 140, 100 100 S 130 60, 110 20;
                    M 90 200 C 70 160, 130 140, 100 100 S 80 60, 110 20"/>
        </path>
        <path d="M 130 200 C 150 160, 100 140, 130 100 S 150 60, 120 20" opacity="0.5">
          <animate attributeName="d" dur="7s" repeatCount="indefinite"
            values="M 130 200 C 150 160, 100 140, 130 100 S 150 60, 120 20;
                    M 130 200 C 110 160, 160 140, 130 100 S 100 60, 120 20;
                    M 130 200 C 150 160, 100 140, 130 100 S 150 60, 120 20"/>
        </path>
      </g>
    </svg>
  );
}

// ─── MOTIF GRID ───────────────────────────────────────────────────
function MotifGrid() {
  const items = [
    { name: 'Mushonge band', use: 'Section header, footer cap, packaging band',
      el: <MushongeBand color="var(--mushonge)" bg="var(--cream)" /> },
    { name: 'Heritage ribbon', use: 'Ingoma · ceremonial banner · CTA underline',
      el: <WaveRibbon color="var(--ember)" bg="var(--bone)" /> },
    { name: 'Cream wave', use: 'Chioda · soft transitions',
      el: <WaveRibbon color="var(--gold-soft)" bg="var(--bean)" /> },
    { name: 'Bean orbit', use: 'Hero device · loading state',
      el: <div style={{ background: 'var(--ink)', height: 240, borderRadius: 'var(--r-3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BeanOrbit size={200} color="var(--gold)" /></div> },
    { name: 'Steam',         use: 'Hero exhale · café transition',
      el: <div style={{ background: 'var(--bean)', height: 240, borderRadius: 'var(--r-3)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}><Steam color="var(--cream)" /></div> },
    { name: 'Crest watermark', use: 'Full-bleed background · low-opacity ground',
      el: <div style={{ background: 'var(--mushonge)', height: 240, borderRadius: 'var(--r-3)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'var(--cream)', opacity: 0.18, transform: 'scale(2.4)' }}><Crest size={120} color="currentColor" /></div>
      </div> },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--s-4)' }}>
      {items.map(it => (
        <figure key={it.name} style={{ margin: 0 }}>
          {it.el}
          <figcaption style={{ marginTop: 'var(--s-3)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--s-4)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500 }}>{it.name}</span>
            <span className="em-mono" style={{ color: 'var(--fg-soft)', textAlign: 'right' }}>{it.use}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

Object.assign(window, { MushongeBand, WaveRibbon, BeanOrbit, Steam, MotifGrid });
