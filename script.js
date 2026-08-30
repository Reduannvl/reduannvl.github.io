document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const header = document.querySelector('.site-header');
  const interactiveItems = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-pills span');

  if (cursor) {
    window.addEventListener('pointermove', (event) => {
      cursor.classList.add('is-visible');
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });

    window.addEventListener('pointerdown', () => cursor.classList.add('is-active'));
    window.addEventListener('pointerup', () => cursor.classList.remove('is-active'));

    interactiveItems.forEach((item) => {
      item.addEventListener('pointerenter', () => cursor.classList.add('is-active'));
      item.addEventListener('pointerleave', () => cursor.classList.remove('is-active'));
    });
  }

  if (header) {
    const updateHeaderState = () => {
      const scrolled = window.scrollY > 20;
      header.classList.toggle('scrolled', scrolled);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    const revealItems = document.querySelectorAll('.reveal-up');
    revealItems.forEach((item) => {
      gsap.fromTo(
        item,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTimeline
      .from('.hero h1', { y: 42, opacity: 0, duration: 1.2 })
      .from('.lead', { y: 28, opacity: 0, duration: 1 }, '-=0.7')
      .from('.hero-actions', { y: 20, opacity: 0, duration: 0.8 }, '-=0.7')
      .from('.hero-stats div', { y: 24, opacity: 0, stagger: 0.12, duration: 0.6 }, '-=0.45');

    gsap.to('.sun-moon', {
      y: -70,
      scale: 1.08,
      opacity: 0.96,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.8,
      },
    });

    gsap.to('.glow-1', {
      y: 70,
      x: 30,
      opacity: 0.42,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2.1,
      },
    });

    gsap.to('.glow-2', {
      y: 90,
      x: -26,
      opacity: 0.38,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2.3,
      },
    });

    gsap.to('.mountain-back', {
      y: 110,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    gsap.to('.mountain-mid', {
      y: 190,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.9,
      },
    });

    gsap.to('.mountain-front', {
      y: 260,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2.2,
      },
    });

    gsap.to('.mist-1', {
      y: 50,
      opacity: 0.16,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2.1,
      },
    });

    gsap.to('.mist-2', {
      y: 120,
      opacity: 0.12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2.5,
      },
    });

    gsap.to('.mist-3', {
      y: 180,
      opacity: 0.06,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2.8,
      },
    });

    gsap.to('.stars', {
      opacity: 0.45,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.7,
      },
    });

    gsap.utils.toArray('.value-card, .project-card').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(126,216,255,0.18), rgba(15,21,33,0.42) 28%, rgba(15,21,33,0.52) 100%)`;
      });

      card.addEventListener('pointerleave', () => {
        card.style.background = '';
      });
    });
  }
});
