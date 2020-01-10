export default function() {
  const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 1000,
    desktop: true,
    mobile: true
  };

  /* Section Title */
  ScrollReveal().reveal('.section-title', {
    ...defaultProps,
    delay: 300,
    distance: '0px',
    origin: 'bottom'
  });

  /* Hero Section */
  ScrollReveal().reveal('.hero-title', {
    ...defaultProps,
    delay: 400,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });
  ScrollReveal().reveal('.hero-cta', {
    ...defaultProps,
    delay: 800,
    origin: window.innerWidth > 768 ? 'left' : 'right'
  });


  /* Intro Section */
  ScrollReveal().reveal('.intro-wrapper', {
    ...defaultProps,
    delay: 800,
    origin: 'bottom'
  });

    /* Github Section */
    ScrollReveal().reveal('.github-wrapper', {
      ...defaultProps,
      delay: 1200,
      origin: 'bottom'
    });
}
