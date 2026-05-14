/* global React, Crest, MushongeBand, WaveRibbon */

// ─── PRODUCT CARD: full range ─────────────────────────────────────
// Each card shows a "package face" — recreated, not the actual artwork.

function PackageFace({ family, line, origin, size, palette }) {
  const { bg, fg, band, bandFg, accent } = palette;
  return (
    <div style={{
      aspectRatio: '3 / 4', background: bg, color: fg,
      borderRadius: 'var(--r-3)', overflow: 'hidden',
      position: 'relative', boxShadow: 'var(--shadow-3)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* top crest band */}
      <div style={{ padding: 'var(--s-5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Crest size={36} color={accent}/>
        <span className="em-mono" style={{ color: accent }}>{size}</span>
      </div>

      {/* family name — display */}
      <div style={{ padding: '0 var(--s-5)', marginTop: 'auto' }}>
        <div className="em-mono" style={{ opacity: 0.7 }}>{line}</div>
        <div className="em-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: 4 }}>
          {family}
        </div>
        <div className="em-display em-italic" style={{ fontSize: 18, color: accent, marginTop: 'var(--s-2)' }}>
          rooted in {origin}
        </div>
      </div>

      {/* signature wave band */}
      <div style={{ marginTop: 'var(--s-5)' }}>
        <svg viewBox="0 0 400 80" preserveAspectRatio="none" style={{ width: '100%', height: 64, display: 'block', color: band }}>
          <path d="M 0 40 C 80 0, 160 80, 240 40 S 360 0, 400 40 L 400 80 L 0 80 Z" fill="currentColor"/>
        </svg>
        <div style={{ background: band, color: bandFg, padding: 'var(--s-3) var(--s-5)', display: 'flex', justifyContent: 'space-between' }}>
          <span className="em-mono">SINGLE ORIGIN</span>
          <span className="em-mono">EMWANI · TZ</span>
        </div>
      </div>
    </div>
  );
}

function ProductGrid() {
  const products = [
    {
      family: 'Chioda',
      sub: 'Gold',
      line: 'VARIETY · O1',
      origin: 'Mbinga',
      tagline: 'The harvest dance. Graceful, grounded, circular.',
      sizes: ['1KG', '500G', '250G'],
      palette: {
        bg: '#14110D', fg: '#E9D7B2',
        band: '#C8A24B', bandFg: '#14110D',
        accent: '#C8A24B',
      },
    },
    {
      family: 'Ingoma',
      sub: 'The Warrior',
      line: 'VARIETY · O2',
      origin: 'Mbozi',
      tagline: 'The warrior dance. Bold, masculine, baobab-grounded.',
      sizes: ['1KG', '500G', '250G'],
      palette: {
        bg: '#3A2418', fg: '#F5EDD9',
        band: '#A4322A', bandFg: '#F5EDD9',
        accent: '#D9BC78',
      },
    },
    {
      family: 'Drip',
      sub: 'Coffee',
      line: 'VARIETY · 02',
      origin: 'highland Arabica',
      tagline: 'Pre-portioned. Pour anywhere. Clean medium-bodied cup.',
      sizes: ['10 PACK', '5 PACK'],
      palette: {
        bg: '#E9D7B2', fg: '#3A2418',
        band: '#1E3A2A', bandFg: '#E9D7B2',
        accent: '#A4322A',
      },
    },
  ];

  return (
    <div style={{ display: 'grid', gap: 'var(--s-8)' }}>
      {products.map(p => (
        <article key={p.family} style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 360px) 1fr', gap: 'var(--s-8)', alignItems: 'center' }}>
          <PackageFace family={p.family} line={p.line} origin={p.origin} size={p.sizes[0]} palette={p.palette}/>
          <div>
            <div className="em-mono" style={{ color: 'var(--ember)' }}>{p.line} · ROOTED IN {p.origin.toUpperCase()}</div>
            <h3 className="em-display" style={{ fontSize: 'clamp(40px, 4.4vw, 64px)', lineHeight: 1, margin: 'var(--s-3) 0 0' }}>
              {p.family} <span className="em-italic" style={{ color: 'var(--ember)' }}>{p.sub}</span>
            </h3>
            <p style={{ fontSize: 19, color: 'var(--fg-muted)', maxWidth: '48ch', marginTop: 'var(--s-4)', lineHeight: 1.55 }}>
              {p.tagline}
            </p>
            <div style={{ display: 'flex', gap: 'var(--s-2)', marginTop: 'var(--s-5)', flexWrap: 'wrap' }}>
              {p.sizes.map(s => (
                <span key={s} className="em-mono" style={{
                  border: '1px solid var(--rule)', borderRadius: 'var(--r-pill)',
                  padding: '6px 14px', background: 'var(--paper)', color: 'var(--bean)',
                }}>{s}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

Object.assign(window, { PackageFace, ProductGrid });
