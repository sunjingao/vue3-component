import { DATE_TYPES, EMITS } from '@/comps/datepicker/src/config';
import { getIsDisabled } from '@/comps/datepicker/src/utils';
import { computed, getCurrentInstance, nextTick } from 'vue';
import { getTwoNumberStr } from '@/utils/string';

function getIsInputValValid(val, type, separator) {
  const YEAR_REG = new RegExp(`^\\d{4}$`);
  const MONTH_REG = new RegExp(`^\\d{4}${separator}\\d{2}$`);
  const DATE_REG = new RegExp(`^\\d{4}${separator}\\d{2}${separator}\\d{2}$`);
  const TYPE_REG = {
    [DATE_TYPES.YEAR]: YEAR_REG,
    [DATE_TYPES.MONTH]: MONTH_REG,
    [DATE_TYPES.DATE]: DATE_REG,
  };
  return TYPE_REG[type].test(val);
}

export function useInput(
  typeRf,
  separatorRf,
  editableRf,
  rangeRf,
  inputD,
  selectedDateRt,
  hidePopper,
  setSelectedValue
) {
  const { emit } = getCurrentInstance();

  const inputValueCp = computed(() => {
    if (Object.values(selectedDateRt).every((item) => item === '')) {
      return '';
    }
    let tempValue = '';
    if (typeRf.value === DATE_TYPES.YEAR) {
      tempValue = selectedDateRt.year || '';
    } else if (typeRf.value === DATE_TYPES.MONTH) {
      if (!selectedDateRt.year || !selectedDateRt.month) {
        tempValue = '';
      } else {
        tempValue = `${selectedDateRt.year}${
          separatorRf.value
        }${getTwoNumberStr(selectedDateRt.month)}`;
      }
    } else {
      if (
        !selectedDateRt.year ||
        !selectedDateRt.month ||
        !selectedDateRt.date
      ) {
        tempValue = '';
      } else {
        tempValue = `${selectedDateRt.year}${
          separatorRf.value
        }${getTwoNumberStr(selectedDateRt.month)}${
          separatorRf.value
        }${getTwoNumberStr(selectedDateRt.date)}`;
      }
    }
    return tempValue;
  });

  function resetInput() {
    inputD.value.ref.value = inputValueCp.value;
  }

  function setCrtSelectedVal(val) {
    const time = new Date(val.split(separatorRf.value).join('-'));
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();

    const isDisabled = getIsDisabled(rangeRf.value, year, month, date);

    if (val === '') {
      return setSelectedValue();
    }

    if (
      !getIsInputValValid(val, typeRf.value, separatorRf.value) ||
      isDisabled
    ) {
      return;
    }

    const temp = {
      year: year,
      month: month + 1,
      date: date,
    };
    setSelectedValue(temp);
  }

  function handleClear() {
    hidePopper();
    setSelectedValue();
    emit(EMITS.CLEAR, selectedDateRt);
  }

  function handleEnter(event) {
    const val = event.target.value;
    setCrtSelectedVal(val);
    hidePopper();
    emit(EMITS.ENTER, selectedDateRt);
    nextTick(() => resetInput());
  }

  function handleEsc() {
    hidePopper();
  }

  function handleBlur() {
    emit(EMITS.BLUR, selectedDateRt);
    nextTick(() => resetInput());
  }

  return {
    inputValueCp,
    handleClear,
    handleEnter,
    handleEsc,
    handleBlur,
  };
}
