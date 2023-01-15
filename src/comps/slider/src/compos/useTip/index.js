import { computed, ref, watch } from 'vue';

export function useTip(
  formatTooltipRf,
  showTooltipRf,
  pointValRf,
  isHoverRf,
  isMovingRf
) {
  const tooltipD = ref(null);

  const tipContentCp = computed(() => {
    let content = '';
    if (formatTooltipRf.value) {
      content = String(formatTooltipRf.value(pointValRf.value));
    } else {
      content = String(pointValRf.value);
    }
    return content;
  });

  const isShowToolTipCp = computed(() => {
    return showTooltipRf.value && (isHoverRf.value || isMovingRf.value);
  });

  watch(
    [() => showTooltipRf.value, () => isHoverRf.value, () => isMovingRf.value],
    () => {
      if (showTooltipRf.value && (isHoverRf.value || isMovingRf.value)) {
        tooltipD.value.showPopper();
      } else {
        tooltipD.value && tooltipD.value.hidePopper();
      }
    }
  );

  return {
    tooltipD,
    tipContentCp,
    isShowToolTipCp,
  };
}
