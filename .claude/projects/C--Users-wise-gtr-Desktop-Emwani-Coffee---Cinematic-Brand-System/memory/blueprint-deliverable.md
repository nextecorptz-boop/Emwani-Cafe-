---
name: blueprint-deliverable
description: Animation blueprint v1.0 completed and saved as standalone HTML documentation file
metadata:
  type: project
---

Animation blueprint v1.0 was produced in Blueprint Mode (no files edited) on 2026-05-12.

**Why:** User requested production-grade scroll animation plan before implementation phase begins.

**How to apply:** The blueprint is the reference document for all next-phase implementation work on website.html.

Documentation file: `EMWANI_BLUEPRINT.html` in project root (106KB, 9 sections, 34 tables, 58 sub-headings).

Open in any browser → print/save as PDF (File → Print → Save as PDF).

Covers:
1. Current Website Audit (section order, broken paths, fake logo risks, performance risks)
2. 13-Chapter Scroll Architecture (Ch00 Hero → Ch12 Contact)
3. Scroll Timing Blueprint (viewport heights, GSAP pin values, mobile fallbacks)
4. Asset Creation Blueprint (15 assets: A through O)
5. 8-Second Product Assembly Storyboard (beat by beat, 0.0–8.0s)
6. Tool Recommendations per asset (best / acceptable / avoid + rationale)
7. Ready-to-Use Generation Prompts (Midjourney, Runway, AE settings, inline SVG)
8. Gemini CLI Implementation Prompt (Phase 0–8, immovable rules)
9. Final QA Checklist (desktop, mobile, reduced-motion, logos, performance, disclaimer)

Key rules embedded in blueprint:
- website.html is the only file to edit
- real-emwani-logo.jpg must never be replaced with SVG or generated crest
- real-emwani-cafe-logo.png used only in #cafe section
- Footer disclaimer must remain verbatim: "Unofficial demo concept prepared by Nextec Corp..."
- No fake logo from prototype.html #crest symbol may enter website.html
