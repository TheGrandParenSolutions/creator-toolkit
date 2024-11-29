export const smoothScrollToTop = (duration: number = 600) => {
  const start = window.scrollY;
  const end = 0;
  const startTime = performance.now();

  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animateScroll = (currentTime: number) => {
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, start, end - start, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};
