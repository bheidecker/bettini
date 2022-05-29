export default class Breakpoint {
  get() {
    let breakpoint;

    document.
      getElementById('breakpoint').
      querySelectorAll('[data-breakpoint]').
      forEach(x => {
        if (x.offsetParent !== null) {
          breakpoint = x.dataset.breakpoint
        }
      });

    return breakpoint;
  }
}