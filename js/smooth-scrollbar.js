gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('#container');

export const scrollbar = Scrollbar.init(container, { damping: 0.2 });

ScrollTrigger.scrollerProxy(container, {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value;
      scrollbar.pinType = 'transform';
    }

    return scrollbar.scrollTop;
  },
});

scrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: container });
