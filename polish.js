(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reduce.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('waiting');
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('.terms,.sectionhead,.tablewrap,.cols,.faq,.ending').forEach(el => {
      // Never hide initially visible content or sections taller than a viewport.
      if (el.getBoundingClientRect().top < innerHeight) return;
      el.classList.add('reveal', 'waiting');
      observer.observe(el);
    });
    reduce.addEventListener('change', () => {
      if (reduce.matches) {
        observer.disconnect();
        document.querySelectorAll('.waiting').forEach(el => el.classList.remove('waiting'));
      }
    });
    window.addEventListener('beforeprint', () => {
      document.querySelectorAll('.waiting').forEach(el => el.classList.remove('waiting'));
    });
  }
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    document.getElementById('cards').addEventListener('pointermove', event => {
      if (reduce.matches) return;
      const card = event.target.closest('.card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--px', (event.clientX - rect.left) + 'px');
      card.style.setProperty('--py', (event.clientY - rect.top) + 'px');
    }, { passive: true });
  }
})();
