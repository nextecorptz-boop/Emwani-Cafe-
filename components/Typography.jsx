/* global React */

// ─── TYPE SPECIMEN ────────────────────────────────────────────────
function TypeSpecimen() {
  return (
    <div style={{ display: 'grid', gap: 'var(--s-7)' }}>
      <div style={{ background: 'var(--paper)', padding: 'var(--s-7)', borderRadius: 'var(--r-3)', border: '1px solid var(--rule)' }}>
        <div className="em-mono" style={{ color: 'var(--ember)', marginBottom: 'var(--s-4)' }}>Display · Cormorant Garamond</div>
        <div className="em-display" style={{ fontSize: 'clamp(56px, 7vw, 112px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
          Our ancestors planted pride.
        </div>
        <div className="em-display em-italic" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.05, color: 'var(--ember)', marginTop: 'var(--s-4)' }}>
          We roast their legacy.
        </div>
        <div style={{ marginTop: 'var(--s-6)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--s-4)', borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-5)' }}>
          {[
            ['Cinema title', '160 / 0.95 / -0.02em'],
            ['Section title', '88 / 1.02 / -0.015em'],
            ['Pull quote (italic)', '40 / 1.2 / 0'],
            ['H1', '56 / 1.05 / -0.01em'],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="em-mono" style={{ color: 'var(--fg-soft)' }}>{k}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, marginTop: 2, color: 'var(--fg-muted)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--paper)', padding: 'var(--s-7)', borderRadius: 'var(--r-3)', border: '1px solid var(--rule)' }}>
        <div className="em-mono" style={{ color: 'var(--ember)', marginBottom: 'var(--s-4)' }}>Body · Manrope</div>
        <p style={{ fontSize: 22, lineHeight: 1.5, maxWidth: '60ch', margin: 0, color: 'var(--bean)' }}>
          Emwani Coffee Limited was born from Leodger's bold vision to elevate Tanzanian
          coffee farmers onto the global stage. Every bean we roast carries the wisdom of
          soil, the rhythm of tradition, and the pride of our people.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: '60ch', marginTop: 'var(--s-5)', color: 'var(--fg-muted)' }}>
          Body copy at default size — 17px on the page, 16px on dense surfaces. Lines hold to
          a 60-character measure for readability. Tracking sits at zero; the warmth of
          Manrope's open counters carries the weight.
        </p>
        <div style={{ marginTop: 'var(--s-6)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--s-4)', borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-5)' }}>
          {[
            ['Body large', '22 / 1.5 / 0 · 500'],
            ['Body', '17 / 1.55 / 0 · 400'],
            ['Body small', '14 / 1.6 / 0 · 400'],
            ['UI / button', '14 / 1.2 / 0.02em · 600'],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="em-mono" style={{ color: 'var(--fg-soft)' }}>{k}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, marginTop: 2, color: 'var(--fg-muted)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: 'var(--s-7)', borderRadius: 'var(--r-3)' }}>
        <div className="em-mono" style={{ color: 'var(--gold-soft)', marginBottom: 'var(--s-4)' }}>Label · JetBrains Mono</div>
        <div style={{ display: 'flex', gap: 'var(--s-5)', flexWrap: 'wrap', alignItems: 'baseline' }}>
          <span className="em-mono" style={{ color: 'var(--gold)' }}>ROOTED IN KARAGWE</span>
          <span className="em-mono" style={{ color: 'var(--ember)' }}>VARIETY 02 · DRIP</span>
          <span className="em-mono" style={{ color: 'var(--cream)' }}>SINGLE ORIGIN · MBOZI</span>
          <span className="em-mono" style={{ color: 'var(--bone)' }}>EST · 2025</span>
        </div>
        <p style={{ marginTop: 'var(--s-5)', color: 'rgba(245,237,217,0.7)', fontSize: 14, maxWidth: '60ch' }}>
          All-caps mono labels act as a quiet structural language: section eyebrows, product
          variety markers, packaging metadata. Tracking 0.18em. Weight 500. Never below 11px,
          never above 16px.
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { TypeSpecimen });
