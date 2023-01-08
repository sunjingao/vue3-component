const spaceTime = 200;

export default {
  mounted(el, binding) {
    let interVal = null;
    let startTime = null;
    const handle = binding.value;

    el.addEventListener('mousedown', function () {
      startTime = new Date();

      interVal = setInterval(() => {
        startTime = new Date();
        handle();
      }, spaceTime);

      document.addEventListener(
        'mouseup',
        function () {
          if (new Date() - startTime > 0) {
            handle();
          }
          clearInterval(interVal);
          interVal = null;
        },
        {
          once: true,
        }
      );
    });
  },
};
