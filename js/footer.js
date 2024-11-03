const tl = gsap
  .timeline()
  .to('.footer', {
    backgroundColor: '#171010',
    color: `rgb(249, 245, 239)`,
    duration: 0.7,
  })
  .to(
    '.nav',
    {
      color: `rgb(249, 245, 239)`,
      borderColor: `rgb(249, 245, 239)`,
    },
    0
  )
  .to('.text', { borderColor: `rgb(249, 245, 239)` }, 0);

ScrollTrigger.create({
  trigger: '.footer',
  start: 'top center',
  animation: tl,
  toggleActions: 'play none none reverse',
});

const text = document.querySelector('.footer .text');
text.addEventListener('mouseenter', () => {
  gsap.to(text, {
    borderRadius: 20,
    duration: 1.5,
  });
});

text.addEventListener('mouseleave', () => {
  gsap.to(text, {
    borderRadius: 180,
    duration: 1.5,
  });
});
