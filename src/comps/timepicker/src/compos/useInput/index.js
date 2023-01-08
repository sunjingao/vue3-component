import { TIME_SEPARATOR } from '@/comps/timepicker/src/config';
import { useUtils } from '@/comps/timepicker/src/compos/useInput/useUtils';

export function useInput(
  separatorRf,
  showEndTimeRf,
  inputD,
  tipD,
  isShowPopperRf,
  inputValueCp,
  showPopper,
  hidePopper,
  clearData,
  setData,
  setValidData
) {
  const { getIsNotInputStrValid, resetInput, getInputValue } = useUtils(
    separatorRf,
    showEndTimeRf,
    inputD,
    inputValueCp
  );

  function setDataByStr() {
    const str = getInputValue();

    const startTime = {
      hour: '',
      minute: '',
      second: '',
    };
    const endTime = {
      hour: '',
      minute: '',
      second: '',
    };

    const timeArr = str.split(TIME_SEPARATOR);
    startTime.hour = timeArr[0].split(separatorRf.value)[0];
    startTime.minute = timeArr[0].split(separatorRf.value)[1];
    startTime.second = timeArr[0].split(separatorRf.value)[2];

    if (showEndTimeRf.value) {
      endTime.hour = timeArr[1].split(separatorRf.value)[0];
      endTime.minute = timeArr[1].split(separatorRf.value)[1];
      endTime.second = timeArr[1].split(separatorRf.value)[2];
    }
    setData(startTime, endTime);
  }

  function processInputData() {
    const str = getInputValue();

    if (getIsNotInputStrValid(str)) {
      resetInput();
      return;
    }

    setDataByStr();
  }

  function precessBlur() {
    processInputData();
    hidePopper();

    // 处理输入的数据不在用户传入的range范围内的情况
    setTimeout(() => {
      setValidData();
    });
  }

  function handleClear() {
    hidePopper();
    clearData();
  }

  function handleEnter() {
    processInputData();
    if (!isShowPopperRf.value) {
      showPopper();
    } else {
      setTimeout(() => {
        tipD.value.handleConfirm();
      });
    }
  }

  function handleEsc() {
    precessBlur();
  }

  function handleTab() {
    precessBlur();
  }

  function handleClickOutside(sign) {
    if (sign) {
      if (!isShowPopperRf.value) {
        return;
      }
      precessBlur();
    } else {
      showPopper();
    }
  }

  return {
    handleEnter,
    handleEsc,
    handleClear,
    handleTab,
    handleClickOutside,
  };
}
