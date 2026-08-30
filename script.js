document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const header = document.querySelector('.site-header');
  const bgScene = document.querySelector('.bg-3d');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px'
    }
  );

  reveals.forEach((item) => observer.observe(item));

  if (header) {
    const updateHeader = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 15);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  if (bgScene) {
    const objects = bgScene.querySelectorAll('.orb, .ring');

    window.addEventListener('pointermove', (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;

      objects.forEach((item, index) => {
        const depth = (index + 1) * 1.4;
        item.style.transform += ` translate3d(${x * depth}px, ${y * depth}px, 0px)`;
      });
    });
  }

  const yearNode = document.querySelector('[data-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
});
