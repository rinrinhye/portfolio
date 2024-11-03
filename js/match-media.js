import { profileCoWorkTl, profileIntroductionTl } from './section-profile.js';
import { scrollbar } from './smooth-scrollbar.js';
import { projects } from './section-project.js';

const mm = gsap.matchMedia();

const options = {
  xs: `(max-width:479px)`,
  sm: `(min-width : 480px) and (max-width:767px)`,
  md: `(min-width : 768px) and (max-width:1023px)`,
  lg: `(min-width : 1024px) and (max-width:1279px)`,
  xl: `(min-width: 1280px)`,
  xxl: `(min-width:1800px)`,
};

const templetes = {
  introduction: {
    textEn: {
      xs: `I'm rinrinhye. <br />
      Gaining new knowledge <br />
      brings me happiness, <br />
      and I always aim to see things <br />
      from a broader perspective.`,

      else: `I'm rinrinhye. Gaining new <br />knowledge brings me happiness,
      <br />
      and I always aim to see things <br />
      from a broader perspective.`,
    },

    textKo: {
      xs: `웹 표준을 준수한 깔끔한 마크업과 <br />
                CSS 작성을 추구합니다.<br />
                또한 웹 접근성을 고려하여<br />
                모든 사용자가 평등하게 정보를 이용할 수 있는<br />
                환경을 만드는 데 기여하고자 합니다. <br />현재 JavaScript와
                GSAP에<br />
                관심을 가지고 공부하고 있으며,<br />
                웹 퍼블리싱 기술뿐만 아니라<br />
                컴퓨터, 개발 언어, 사용자 경험 등<br />
                웹 분야에 대한 폭넓은 이해를 갖춘<br />
                웹 퍼블리셔가 되고 싶습니다.`,
      sm: `웹 표준을 준수한 깔끔한 마크업과 CSS 작성을 추구합니다.
                <br />
                또한 웹 접근성을 고려하여 모든 사용자가 평등하게 정보를<br />
                이용할 수 있는 환경을 만드는 데 기여하고자 합니다.<br />
                현재 JavaScript와 GSAP에 관심을 가지고 공부하고 있으며,<br />
                웹 퍼블리싱 기술뿐만 아니라 컴퓨터, 개발 언어, 사용자 경험 등
                <br />웹 분야에 대한 폭넓은 이해를 갖춘 웹 퍼블리셔가 되고
                싶습니다.`,
      md: `웹 표준을 준수한 깔끔한 마크업과 CSS 작성을 추구합니다.
                <br />
                또한 웹 접근성을 고려하여 모든 사용자가 평등하게 정보를<br />
                이용할 수 있는 환경을 만드는 데 기여하고자 합니다.<br />
                현재 JavaScript와 GSAP에 관심을 가지고 공부하고 있으며,<br />
                웹 퍼블리싱 기술뿐만 아니라 컴퓨터, 개발 언어, 사용자 경험 등
                <br />웹 분야에 대한 폭넓은 이해를 갖춘 웹 퍼블리셔가 되고
                싶습니다.`,
      else: `웹 표준을 준수한 깔끔한 마크업과 CSS 작성을 추구합니다.
                <br />
                또한 웹 접근성을 고려하여 모든 사용자가 평등하게 정보를 이용할
                수 있는 환경을 만드는 데 기여하고자 합니다.<br />
                현재 JavaScript와 GSAP에 관심을 가지고 공부하고 있으며,<br />
                웹 퍼블리싱 기술뿐만 아니라 컴퓨터, 개발 언어, 사용자 경험 등 웹
                분야에 대한 폭넓은 이해를 갖춘 웹 퍼블리셔가 되고 싶습니다.`,
    },
  },
  cowork: {
    textKo: {
      xs: ` 파리바게뜨와 컴포즈커피에서 <br />
                각 1년 이상 아르바이트를 하며,<br />
                인수인계 10회 이상 진행하고<br />
                다양한 동료와 손님을 만났습니다.<br />
                이 경험을 통해 업무의 큰 목적과 <br />
                '대인 관계'의 중요성에 대해<br />
                깊이 생각하게 되었습니다.`,
      else: `파리바게뜨와 컴포즈커피에서 각 1년 이상 아르바이트를 하며,<br />
                인수인계 10회 이상 진행하고 다양한 동료와 손님을 만났습니다.<br />
                이 경험을 통해 업무의 큰 목적과 '대인 관계'의 중요성에 대해 깊이
                생각하게 되었습니다.`,
    },
  },
};

mm.add(options, (context) => {
  const { xs, sm, md, xxl } = context.conditions;

  if (xs) {
    insertText('.profile-introduction .text-en', 'xs');
    insertText('.profile-introduction .text-ko', 'xs');

    insertText('.profile-co-work .text-ko', 'xs');
  } else {
    insertText('.profile-introduction .text-en');
    insertText('.profile-co-work .text-ko');
  }

  if (sm) {
    insertText('.profile-introduction .text-ko', 'sm');
  }

  if (md) {
    insertText('.profile-introduction .text-ko', 'md');
  } else {
    if (!xs && !sm) {
      insertText('.profile-introduction .text-ko');
    }
  }

  // project 지그재그 배치
  if (xxl) {
    gsap.set(projects, { x: gsap.utils.wrap([-300, 300]) });
  } else {
    gsap.set(projects, { x: 0 });
  }

  profileIntroductionTl
    .from(
      new SplitType('.profile-introduction .text-en', {
        types: 'chars,word',
      }).chars,
      {
        y: 10,
        opacity: 0,
        stagger: 0.01,
      },
      '-=0.4'
    )
    .from(
      new SplitType('.profile-introduction .text-ko', {
        types: 'chars, line',
      }).chars,
      {
        xPercent: -120,
        opacity: 0,
        stagger: 0.01,
      },
      '-=0.3'
    );

  profileCoWorkTl.from(
    new SplitType('.profile-co-work .text-ko').chars,
    {
      xPercent: 120,
      opacity: 0,
      stagger: 0.01,
    },
    '-=0.3'
  );

  // resize 되었을 때 텍스트 보이게
  if (scrollbar.offset.y !== 0) {
    profileIntroductionTl.progress(1);
    profileCoWorkTl.progress(1);
  }
});

function insertText(target, size = 'else') {
  const htmlTarget = document.querySelector(target);
  let container = target.includes('introduction')
    ? 'introduction'
    : target.includes('co-work')
    ? 'cowork'
    : '';
  let element = target.includes('text-en')
    ? 'textEn'
    : target.includes('text-ko')
    ? 'textKo'
    : '';

  if (target.includes('introduction')) {
    container = 'introduction';
  } else if (target.includes('co-work')) {
    container = 'cowork';
  }

  htmlTarget.innerHTML = templetes[container][element][size];
}
