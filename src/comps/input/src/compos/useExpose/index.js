export function useExpose(inputD) {
  function select() {
    inputD.value.select();
  }

  function focus() {
    inputD.value.focus();
  }

  function blur() {
    inputD.value.blur();
  }

  return {
    select,
    focus,
    blur,
  };
}
