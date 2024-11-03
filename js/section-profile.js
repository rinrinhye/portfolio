//profile-introduction

export const profileIntroductionTl = gsap
  .timeline()
  .from('.profile-introduction .title', { opacity: 0, xPercent: -100 });

ScrollTrigger.create({
  trigger: '.profile-introduction',
  start: 'top center',
  end: 'bottom center',
  animation: profileIntroductionTl,
  toggleActions: 'play none play none',
});

//profile-co-work

export const profileCoWorkTl = gsap.timeline().from('.profile-co-work .title', {
  xPercent: 100,
  opacity: 0,
});

ScrollTrigger.create({
  trigger: '.profile-co-work',
  start: 'top center',
  end: 'bottom center',
  animation: profileCoWorkTl,
  toggleActions: 'play none play none',
});

//profile-history

export const profileHistoryTl = gsap
  .timeline()
  .from('.profile-history .title', {
    xPercent: -100,
    opacity: 0,
  })
  .from(
    new SplitType('.profile-history .history-item', { types: 'chars' }).chars,
    { xPercent: -120, opacity: 0, stagger: 0.01 },
    '-=0.3'
  );

ScrollTrigger.create({
  trigger: '.profile-history',
  start: 'top center',
  end: 'bottom center',
  animation: profileHistoryTl,
  toggleActions: 'play none play none',
});
