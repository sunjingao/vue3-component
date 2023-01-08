import { addClass, getStyle, setStyle } from '@/utils/dom';
import { onMounted, reactive, watch } from 'vue';
import { CLS_PRE } from '@/comps/textarea/src/config';

export function useResize(textareaD, modelValueRf, width, autosize) {
  const styles = reactive({
    width: width.value,
    height: 'auto',
    minHeight: 'auto',
  });

  function setElementStyles(attrsObj) {
    for (const [key, value] of Object.entries(attrsObj)) {
      styles[key] = value;
    }
  }

  function operateVisualDoms() {
    const hiddenClass = {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -9900,
      visibility: 'hidden',
    };

    const virtualDom = document.createElement('textarea');

    addClass(virtualDom, [
      `${CLS_PRE}-hidden-scrollbar`,
      `${CLS_PRE}-textarea-content`,
    ]);
    setStyle(virtualDom, hiddenClass);
    // 影响展示的特殊样式处理
    setStyle(virtualDom, {
      width: getStyle(textareaD.value, 'width'),
    });
    virtualDom.value = modelValueRf.value;

    document.documentElement.appendChild(virtualDom);

    return {
      setAttr(name, val) {
        virtualDom[name] = val;
      },

      removeDom() {
        document.documentElement.removeChild(virtualDom);
      },

      getStyles() {
        const styles = getComputedStyle(virtualDom);
        const clientHeight = virtualDom.clientHeight;
        const scrollHeight = virtualDom.scrollHeight;
        const lineHeight = parseFloat(styles.getPropertyValue('line-height'));
        const padding =
          parseFloat(styles.getPropertyValue('padding-top')) +
          parseFloat(styles.getPropertyValue('padding-bottom'));
        const border =
          parseFloat(styles.getPropertyValue('border-top')) +
          parseFloat(styles.getPropertyValue('border-bottom'));

        return {
          border,
          padding,
          lineHeight,
          clientHeight,
          scrollHeight,
        };
      },
    };
  }

  function handleAdaption() {
    const visualDom = operateVisualDoms();
    const styles = visualDom.getStyles();

    setElementStyles({
      height: `${styles.scrollHeight + styles.border}px`,
    });

    visualDom.removeDom();
  }

  function handleRange() {
    const visualDom = operateVisualDoms();
    let styles = visualDom.getStyles();

    if (
      styles.scrollHeight <=
      styles.padding + autosize.value.maxRows * styles.lineHeight
    ) {
      setElementStyles({
        height: `${styles.scrollHeight + styles.border}px`,
        minHeight: `${
          styles.lineHeight * autosize.value.minRows +
          styles.padding +
          styles.border
        }px`,
      });
    } else {
      visualDom.setAttr('rows', autosize.value.maxRows);
      styles = visualDom.getStyles();
      setElementStyles({
        height: `${styles.clientHeight + styles.border}px`,
        minHeight: `${
          styles.lineHeight * autosize.value.minRows +
          styles.padding +
          styles.border
        }px`,
      });
    }
    visualDom.removeDom();
  }

  function processAutoSize() {
    if (!autosize.value) {
      return;
    }

    autosize.value === true ? handleAdaption() : handleRange();
  }

  onMounted(() => {
    processAutoSize();
  });

  watch(modelValueRf, () => {
    processAutoSize();
  });

  return {
    styles,
  };
}
