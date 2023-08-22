// Smooth scroll functionality for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    for (const link of navLinks) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        const headerHeight = document.querySelector('header').offsetHeight;
        const scrollOptions = {
          top: targetSection.offsetTop - headerHeight,
          behavior: 'smooth'
        };
        window.scrollTo(scrollOptions);
      });
    }
  });
  