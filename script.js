// Scroll Animation Trigger
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkScroll() {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 1.95;
    
    animateElements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const delay = parseInt(element.dataset.delay) || 0;
      
      if (elementPosition < triggerPoint) {
        setTimeout(() => {
          element.classList.add('animated');
        }, delay * (index + 1));
      }
    });
  }
  
  // Initial check
  checkScroll();
  
  // Check on scroll with throttle
  let isScrolling;
  window.addEventListener('scroll', function() {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(checkScroll, 5);
  }, { passive: true });
});