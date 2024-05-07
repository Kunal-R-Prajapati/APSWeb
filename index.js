  // JavaScript for scaling icons on hover
  document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.querySelector('i').style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseleave', () => {
      link.querySelector('i').style.transform = 'scale(1)';
    });
  });