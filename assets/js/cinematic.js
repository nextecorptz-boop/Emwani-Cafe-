/* ============================================================
   EMWANI COFFEE — CINEMATIC LOGIC
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Intersection Observer for varied reveal pacing ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    // Observe all variants
    document.querySelectorAll('.reveal, .reveal-slow, .reveal-stagger').forEach(el => {
        if (reduce) {
            el.classList.add('in');
        } else {
            revealObserver.observe(el);
        }
    });

    // --- Cinematic Video Control ---
    const videos = document.querySelectorAll('.cinematic-video');
    if (videos.length > 0) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (reduce) return; // Respect reduced motion

                if (entry.isIntersecting) {
                    entry.target.play().catch(() => {
                        // Quietly fail if autoplay is blocked
                    });
                } else {
                    entry.target.pause();
                }
            });
        }, { threshold: 0.25 });

        videos.forEach(v => videoObserver.observe(v));
    }
});
