gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('#container');

export const scrollbar = Scrollbar.init(container, { damping: 0.2 });

class DisableScrollX extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'DisableScrollX';

  transformDelta(delta) {
    delta.x = 0;

    return delta;
  }
}

Scrollbar.use(DisableScrollX);

ScrollTrigger.scrollerProxy(container, {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value;
      scrollbar.pinType = 'transform';
    }

    return scrollbar.scrollTop;
  },
});

scrollbar.track.xAxis.element.remove();

scrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: container });
