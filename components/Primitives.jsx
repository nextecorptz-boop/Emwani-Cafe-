/* global React */
const { useState, useEffect, useRef } = React;

// ─── Brand crest (inline SVG so it inherits currentColor) ─────────
function Crest({ size = 64, color = "currentColor", style }) {
  return (
    <svg width={size} height={size * (280/240)} viewBox="0 0 240 280" fill="none"
         style={{ color, display: "block", ...style }} aria-label="Emwani crest">
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 60 58 L 70 24 L 84 50"/>
        <path d="M 84 50 L 102 18 L 120 50"/>
        <path d="M 120 50 L 138 18 L 156 50"/>
        <path d="M 156 50 L 170 24 L 180 58"/>
        <path d="M 56 58 L 184 58"/>
        <circle cx="70" cy="24" r="2.4" fill="currentColor"/>
        <circle cx="102" cy="18" r="2.4" fill="currentColor"/>
        <circle cx="138" cy="18" r="2.4" fill="currentColor"/>
        <circle cx="170" cy="24" r="2.4" fill="currentColor"/>
        <path d="M 56 90 C 32 100, 22 130, 36 160 C 56 150, 70 130, 68 102 Z"/>
        <path d="M 50 102 L 60 152"/>
        <path d="M 184 90 C 208 100, 218 130, 204 160 C 184 150, 170 130, 172 102 Z"/>
        <path d="M 190 102 L 180 152"/>
        <ellipse cx="120" cy="138" rx="28" ry="44"/>
        <path d="M 120 96 C 112 116, 112 160, 120 180"/>
        <path d="M 40 210 C 60 188, 180 188, 200 210"/>
        <path d="M 56 220 C 76 200, 164 200, 184 220"/>
        <path d="M 72 230 C 90 214, 150 214, 168 230"/>
        <path d="M 40 244 L 200 244"/>
        <g opacity="0.55">
          <path d="M 108 124 L 132 124"/>
          <path d="M 106 140 L 134 140"/>
          <path d="M 108 156 L 132 156"/>
        </g>
      </g>
    </svg>
  );
}

// ─── Wordmark — type-only lockup ──────────────────────────────────
function Wordmark({ size = 28, color = "currentColor", style }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: size,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color, lineHeight: 1, display: 'inline-block', ...style,
    }}>EMWANI</span>
  );
}

// ─── Section primitive ────────────────────────────────────────────
function Section({ id, eyebrow, title, lede, dark, children, style }) {
  return (
    <section id={id} data-section-label={eyebrow} style={{
      background: dark ? 'var(--bg-deep)' : 'transparent',
      color: dark ? 'var(--bone)' : 'var(--ink)',
      padding: 'var(--s-10) var(--gutter)',
      ...style,
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <header style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)', gap: 'var(--s-7)', marginBottom: 'var(--s-9)', alignItems: 'end' }}>
          <div className="em-mono" style={{ color: dark ? 'var(--gold-soft)' : 'var(--ember)', display: 'flex', alignItems: 'center', gap: 'var(--s-3)' }}>
            <span style={{ width: 24, height: 1, background: 'currentColor', display: 'inline-block' }}></span>
            <span>{eyebrow}</span>
          </div>
          <div>
            <h2 className="em-display" style={{ fontSize: 'var(--t-title)', margin: 0, lineHeight: 'var(--lh-tight)' }}>{title}</h2>
            {lede && <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-h3)', lineHeight: 1.5, color: dark ? 'rgba(245,237,217,0.72)' : 'var(--fg-muted)', maxWidth: '52ch' }}>{lede}</p>}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}

// ─── Subsection ───────────────────────────────────────────────────
function SubBlock({ label, children, style }) {
  return (
    <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-6)', marginTop: 'var(--s-8)', ...style }}>
      <div className="em-mono" style={{ color: 'var(--fg-soft)', marginBottom: 'var(--s-6)' }}>{label}</div>
      {children}
    </div>
  );
}

Object.assign(window, { Crest, Wordmark, Section, SubBlock });
