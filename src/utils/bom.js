const throttle = function (callback, timeout, options = {}) {
  let startTime = '';

  return function () {
    if (!startTime) {
      startTime = new Date().getTime();

      setTimeout(() => {
        startTime = '';
        callback.call(options.context, ...arguments);
      }, timeout);
    }
  };
};

export { throttle };
