import { ref, watch } from 'vue';
import { DEFAULT_YEAR } from '@/comps/datepicker/src/comps/yearpicker/config';
import { getIsDisabled } from '@/comps/datepicker/src/utils/index';

export function useData(rangeRf, selectedDateRf) {
  const startYearRf = ref('');
  const endYearRf = ref('');
  const itemArrRf = ref([]);

  function getIsSelected(titleYear) {
    return titleYear === selectedDateRf.value.year;
  }

  function setContent() {
    itemArrRf.value = [];

    for (
      let yearIndex = startYearRf.value;
      yearIndex <= endYearRf.value;
      yearIndex++
    ) {
      itemArrRf.value.push({
        value: yearIndex,
        isSelected: getIsSelected(yearIndex),
        isDisabled: getIsDisabled(rangeRf.value, yearIndex),
      });
    }
  }

  function resetSetting() {
    const year = selectedDateRf.value.year || DEFAULT_YEAR;
    startYearRf.value = parseFloat(`${String(year).slice(0, -1)}0`);
    endYearRf.value = parseFloat(`${String(year).slice(0, -1)}9`);

    setContent();
  }

  watch(
    [() => rangeRf.value, () => selectedDateRf.value],
    () => {
      resetSetting();
    },
    {
      immediate: true,
      deep: true,
    }
  );

  return {
    startYearRf,
    endYearRf,
    itemArrRf,
    setContent,
  };
}
