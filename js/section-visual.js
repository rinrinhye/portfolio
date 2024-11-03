gsap.set('.top', { xPercent: -100, opacity: 0 });
gsap.set('.bottom', { xPercent: -100, opacity: 0 });

const sectionVisaul = gsap
  .timeline()
  .to('.top', {
    xPercent: -10,
    opacity: 1,
    ease: 'power2.inOut',
    duration: 0.7,
  })
  .to(
    '.bottom',
    { xPercent: 10, opacity: 1, ease: 'power2.inOut', duration: 0.7 },
    '-=0.6'
  )
  .to('.spin', {
    rotation: 45,
    yoyo: true,
    repeat: 5,
    ease: 'power3.inOut',
    duration: 2,
  });
