import { ref, watch } from 'vue';
import {
  DEFAULT_VAL,
  WEEK_SEQ,
} from '@/comps/datepicker/src/comps/datePicker/config';
import { getIsDisabled } from '@/comps/datepicker/src/utils/index';
import { isNotUndefined } from '@/utils/type';

export function useData(rangeRf, selectedDateRf) {
  const shownYearRf = ref(-1); // 展示的年份
  const shownMonthRf = ref(-1); // 展示的月份
  const itemArrRf = ref([]); // 内容

  function getIsSelected(year, month, date) {
    const curTime = new Date(year, month, date).getTime();
    const selectedTime = new Date(
      selectedDateRf.value.year,
      selectedDateRf.value.month - 1,
      selectedDateRf.value.date
    ).getTime();
    return curTime === selectedTime;
  }

  function getLastMonthShowDays() {
    let lastMonthDays;

    // 本月第一天是星期几，方便计算展示区域中上个月剩余的天数
    const curMonthFirstDay = new Date(
      shownYearRf.value,
      shownMonthRf.value - 1,
      1
    ).getDay();

    // 显示内容中，需要显示的上个月剩余的天数
    if (curMonthFirstDay === WEEK_SEQ[0].value) {
      lastMonthDays = 7;
    } else {
      lastMonthDays = (curMonthFirstDay === 0 ? 7 : curMonthFirstDay) - 1;
    }
    return lastMonthDays;
  }

  // 本月第一天是星期几，本月有多少天，上个月有多少天，下个月有多少天
  function setContent() {
    const lastMonthShowDays = getLastMonthShowDays();

    itemArrRf.value = [];

    for (let dayIndex = 0; dayIndex < 6 * 7; dayIndex++) {
      const time = new Date(
        shownYearRf.value,
        shownMonthRf.value - 1,
        dayIndex + 1 - lastMonthShowDays
      );

      const year = time.getFullYear();
      const month = time.getMonth();
      const date = time.getDate();

      itemArrRf.value.push({
        year: year,
        month: month,
        date: date,
        isDisabled: getIsDisabled(rangeRf.value, year, month, date),
        isSelected: getIsSelected(year, month, date),
      });
    }
  }

  function resetSetting() {
    shownYearRf.value = selectedDateRf.value.year || DEFAULT_VAL.YEAR;
    shownMonthRf.value = isNotUndefined(selectedDateRf.value.month)
      ? selectedDateRf.value.month
      : DEFAULT_VAL.MONTH + 1;
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
    shownMonthRf,
    itemArrRf,
    setContent,
  };
}
