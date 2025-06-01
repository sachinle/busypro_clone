document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkScroll() {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const delay = parseInt(element.dataset.delay) || 0;
      
      if (elementTop < windowHeight - 100 && !element.classList.contains('animated')) {
        setTimeout(() => {
          element.classList.add('animated');
        }, delay);
      }
    });
  }

  // Initial check
  checkScroll();

  // Check on scroll
  window.addEventListener('scroll', checkScroll);
});