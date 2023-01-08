export function useExpose(textareaRef, modelValueRf) {
  function clear() {
    modelValueRf = ''; // sja 这里赋值为空的时候有问题
    textareaRef.value.querySelector('textarea').focus();
  }

  function select() {
    textareaRef.value.querySelector('textarea').select();
  }

  function focus() {
    textareaRef.value.querySelector('textarea').focus();
  }

  function blur() {
    textareaRef.value.querySelector('textarea').blur();
  }

  return {
    clear,
    select,
    focus,
    blur,
  };
}
