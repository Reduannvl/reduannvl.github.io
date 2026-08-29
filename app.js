document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const currentYear = new Date().getFullYear();
  const footerText = document.querySelector('.site-footer p');
  if (footerText) {
    footerText.textContent = `Diseño digital con enfoque premium y claro. © ${currentYear} Reduannvl.`;
  }
});
