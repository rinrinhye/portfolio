import { flowAnimationArray } from './flow-text.js';

export const projects = gsap.utils.toArray('.section-project .project');

function flowAniReverse() {
  flowAnimationArray.forEach((ani) => {
    ani.reverse();
  });
}

function flowAniPlay() {
  flowAnimationArray.forEach((ani) => {
    ani.play();
  });
}

function textAnimation(index) {
  const textAnimation = gsap.to('.text-line-wrap.diagonal .text-group', {
    yPercent: -100 * index,
    x: (_, self) => {
      const line = self.closest('.text-line-wrap.diagonal');

      if (line.classList.contains('left')) {
        return -50 * index;
      } else if (line.classList.contains('right')) {
        return 50 * index;
      }
    },
    paused: true,
  });

  return textAnimation;
}

function verticalTextAnimation(index) {
  const textAnimation = gsap.to('.text-line-wrap.vertical .text-group', {
    yPercent: -100 * index,
  });

  return textAnimation;
}

gsap.set('.text-line-wrap .text-group', {
  yPercent: 100,
});

ScrollTrigger.create({
  trigger: '.section-project .project-background',
  pin: true,
  pinSpacing: false,
  start: 'top top',
  endTrigger: '.section-project',

  end: 'bottom bottom',
  onLeaveBack: () => {
    textAnimation(-1).play();
    verticalTextAnimation(-1);
  },
  onUpdate: ({ progress, direction }) => {
    if (direction === 1) {
      flowAniPlay();
    } else if (direction === -1) {
      flowAniReverse();
    }

    let index = 0;

    if (0 <= progress && progress < 0.3) {
    } else if (0.3 <= progress && progress < 0.6) {
      index = 1;
    } else if (0.6 <= progress && progress < 0.9) {
      index = 2;
    } else if (0.9 <= progress && progress <= 1) {
      index = 3;
    }

    textAnimation(index).play();
    verticalTextAnimation(index);
  },
});

//projects

projects.forEach((project) => {
  project.addEventListener('mouseenter', () => {
    gsap.to(project, {
      scale: 1.02,
      duration: 0.3,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    });
  });

  project.addEventListener('mouseleave', () => {
    gsap.to(project, {
      scale: 1,
      duration: 0.3,
      boxShadow: 'none',
    });
  });
});
