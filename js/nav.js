import { scrollbar } from './smooth-scrollbar.js';

const links = document.querySelectorAll('.nav .link');

//클릭 시 스크롤
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    if (link.classList.contains('link-home')) {
      scrollbar.scrollTo(0, 0, 200);
    }

    if (link.classList.contains('link-profile')) {
      const sectionProfile = document.querySelector('.section-profile');

      scrollbar.scrollIntoView(sectionProfile, {
        alignToTop: true,
        offsetTop: 0,
      });
    }

    if (link.classList.contains('link-project')) {
      const sectionProject = document.querySelector('.section-project');

      scrollbar.scrollIntoView(sectionProject, {
        alignToTop: true,
        offsetTop: -(innerHeight / 2),
      });
    }
  });
});

///// hover 효과

gsap.utils.toArray('.nav div').forEach((div) => {
  if (div.classList.contains('home')) return;

  div.addEventListener('mouseenter', () => {
    gsap.to(div.querySelector('.line'), {
      scaleX: 1,
      transformOrigin: 'left',
      duration: 0.3,
    });
  });

  div.addEventListener('mouseleave', () => {
    gsap.to(div.querySelector('.line'), {
      scaleX: 0,
      transformOrigin: 'right',
      duration: 0.3,
    });
  });
});
