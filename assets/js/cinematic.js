/* ============================================================
   EMWANI COFFEE — CINEMATIC LOGIC
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // --- GSAP Fallback Guard ---
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
        return;
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // --- GSAP ScrollTrigger ---
    if (!reduce && !isMobile) {
        gsap.registerPlugin(ScrollTrigger);

        // Pinning Sections
        ["#harvest", "#roasting", "#brewing"].forEach(id => {
            ScrollTrigger.create({
                trigger: id,
                start: "top top",
                end: "+=120%",
                pin: true,
                anticipatePin: 1
            });
        });

        // Background Tween Brewing
        gsap.to("#brewing", {
            backgroundColor: "#F6EFDD", 
            scrollTrigger: {
                trigger: "#brewing",
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });

        // Horizontal Pan Processing
        gsap.to("#processing .pan-img", {
            xPercent: -10,
            ease: "none",
            scrollTrigger: {
                trigger: "#processing",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Product stagger
        gsap.from("#products .pack", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            scrollTrigger: {
                trigger: "#products",
                start: "top 85%"
            }
        });
    }

    // --- Intersection Observer ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

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
