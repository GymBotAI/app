export function debounce(fn: Function, delay: number) {
  let timer: number | null = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = (setTimeout as Window["setTimeout"])(() => {
      timer = null;
      fn.apply(this, arguments);
    }, delay);
  };
}
