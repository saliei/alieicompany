document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.lazy-section');
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  sections.forEach(section => {
    section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
    sectionObserver.observe(section);
  });
});
