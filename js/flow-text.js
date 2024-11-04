const diagonalTextLineWrap = document.querySelectorAll(
  '.text-line-wrap.diagonal'
);

const diagonalTextGroup = document.querySelectorAll(
  '.text-line-wrap.diagonal .text-group'
);

diagonalTextGroup.forEach((group) => {
  const flowWrap = group.querySelector('.flow-wrap');
  const cloneFlowWrap = flowWrap.cloneNode(true);
  cloneFlowWrap.classList.add('clone');
  group.appendChild(cloneFlowWrap);
});

const options = {
  repeat: -1,
  defaults: {
    ease: 'none',
  },
};

const rightFlowAnimation = gsap.timeline(options);
const cloneRightFlowAnimation = gsap.timeline(options);
const leftFlowAnimation = gsap.timeline(options);
const cloneLeftFlowAnimation = gsap.timeline(options);

diagonalTextLineWrap.forEach((line) => {
  if (line.classList.contains('left')) {
    const flowWrap = line.querySelectorAll('.flow-wrap:not(.clone)');
    const cloneFlowWrap = line.querySelectorAll('.flow-wrap.clone');

    cloneLeftFlowAnimation.fromTo(
      cloneFlowWrap,
      { xPercent: 0 },
      {
        xPercent: -200,
        duration: 60,
      }
    );

    leftFlowAnimation
      .fromTo(
        flowWrap,
        { xPercent: 0 },
        {
          xPercent: -100,
          duration: 30,
        }
      )
      .fromTo(flowWrap, { xPercent: 100 }, { xPercent: 0, duration: 30 });
  } else if (line.classList.contains('right')) {
    const flowWrap = line.querySelectorAll('.flow-wrap:not(.clone)');
    const cloneFlowWrap = line.querySelectorAll('.flow-wrap.clone');

    rightFlowAnimation.to(flowWrap, {
      xPercent: 200,
      duration: 60,
    });

    cloneRightFlowAnimation
      .fromTo(
        cloneFlowWrap,
        { xPercent: 0 },
        {
          xPercent: 100,
          duration: 30,
        }
      )
      .fromTo(cloneFlowWrap, { xPercent: -100 }, { xPercent: 0, duration: 30 });
  }
});

export const flowAnimationArray = [
  leftFlowAnimation,
  cloneLeftFlowAnimation,
  rightFlowAnimation,
  cloneRightFlowAnimation,
];
