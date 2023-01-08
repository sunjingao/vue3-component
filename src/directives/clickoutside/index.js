const cbArr = [];

document.addEventListener('click', function (event) {
  cbArr.forEach((item) => {
    item.handleClick(event, item.el);
  });
});

export default {
  beforeMount(el, binding) {
    if (typeof binding.value !== 'function') {
      console.error('clickoutside parameter is not a function in component');
      return;
    }

    const handleClick = (event, el) => {
      binding.value(!el.contains(event.target), event);
    };

    cbArr.push({
      handleClick,
      el,
    });
  },
  beforeUnmount(el, binding) {
    const index = cbArr.findIndex((item) => item.el === el);
    cbArr.splice(index, 1);
  },
};
