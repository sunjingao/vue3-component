import {
  DEFAULT_YEAR,
  RELATE_MONTH,
} from '@/comps/datepicker/src/comps/monthpicker/config';
import { getIsDisabled } from '@/comps/datepicker/src/utils/index';
import { ref, watch } from 'vue';

export function useData(rangeRf, selectedDateRf) {
  const shownYearRf = ref('');
  const itemArrRf = ref([]);

  function getIsSelected(shownYear, monthIndex) {
    return (
      shownYear === selectedDateRf.value.year &&
      monthIndex === selectedDateRf.value.month - 1
    );
  }

  // tip赋值
  function setContent() {
    itemArrRf.value = [];

    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      itemArrRf.value.push({
        monthIndex: monthIndex,
        value: RELATE_MONTH[monthIndex],
        isDisabled: getIsDisabled(rangeRf.value, shownYearRf.value, monthIndex),
        isSelected: getIsSelected(shownYearRf.value, monthIndex),
      });
    }
  }

  function resetSetting() {
    shownYearRf.value = selectedDateRf.value.year || DEFAULT_YEAR;
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
    shownYearRf,
    itemArrRf,
    setContent,
  };
}
