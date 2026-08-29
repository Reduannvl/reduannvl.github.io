document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btnMain');

  if (button) {
    button.addEventListener('click', () => {
      const target = document.getElementById('sobre');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});
