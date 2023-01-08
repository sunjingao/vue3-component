import { getCurrentInstance, reactive, watch } from 'vue';
import { EMITS, DATE_TYPES } from '@/comps/datepicker/src/config';

export function useSelectedData(defaultTimeRf, rangeRf, typeRf) {
  const selectedDateRt = reactive({}); // 传递给子组件的时间内容

  const { emit } = getCurrentInstance();

  function getNumber(val) {
    return parseInt(val);
  }

  function setTime(obj = {}) {
    if (typeRf.value === DATE_TYPES.YEAR) {
      selectedDateRt.year = obj.year;
      selectedDateRt.month = '';
      selectedDateRt.date = '';
    } else if (typeRf.value === DATE_TYPES.MONTH) {
      selectedDateRt.year = obj.year;
      selectedDateRt.month = obj.month;
      selectedDateRt.date = '';
    } else {
      selectedDateRt.year = obj.year;
      selectedDateRt.month = obj.month;
      selectedDateRt.date = obj.date;
    }
  }

  // 设置 被选中的日期
  function setSelectedValue(obj = {}) {
    if (
      typeRf.value === DATE_TYPES.YEAR &&
      getNumber(selectedDateRt.year) !== getNumber(obj.year)
    ) {
      emit(EMITS.CHANGE, obj);
      setTime(obj);
    } else if (
      typeRf.value === DATE_TYPES.MONTH &&
      (getNumber(selectedDateRt.year) !== getNumber(obj.year) ||
        getNumber(selectedDateRt.month) !== getNumber(obj.month))
    ) {
      emit(EMITS.CHANGE, obj);
      setTime(obj);
    } else if (
      getNumber(selectedDateRt.year) !== getNumber(obj.year) ||
      getNumber(selectedDateRt.month) !== getNumber(obj.month) ||
      getNumber(selectedDateRt.date) !== getNumber(obj.date)
    ) {
      emit(EMITS.CHANGE, obj);
      setTime(obj);
    }
  }

  watch(
    [() => defaultTimeRf.value, () => rangeRf.value],
    () => {
      setTime(defaultTimeRf.value);
    },
    {
      immediate: true,
      deep: true,
    }
  );

  return {
    selectedDateRt,
    setSelectedValue,
  };
}
