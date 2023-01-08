import { TIME_SEPARATOR } from '@/comps/timepicker/src/config';

function getIsStrCorrect(str, separatorRf, showEndTimeRf) {
  const START_REG = new RegExp(
    `^\\d{2}${separatorRf.value}\\d{2}${separatorRf.value}\\d{2}$`
  );
  const END_REG = new RegExp(
    `^\\d{2}${separatorRf.value}\\d{2}${separatorRf.value}\\d{2}${TIME_SEPARATOR}\\d{2}${separatorRf.value}\\d{2}${separatorRf.value}\\d{2}$`
  );
  if (!showEndTimeRf.value) {
    return START_REG.test(str);
  } else {
    return END_REG.test(str);
  }
}

function getIsInTimeRange(str, separatorRf, showEndTimeRf) {
  const timeArr = str.split(TIME_SEPARATOR);

  const startArr = timeArr[0].split(separatorRf.value);
  const startObj = {
    hour: startArr[0],
    minute: startArr[1],
    second: startArr[2],
  };

  let endObj = {};
  if (showEndTimeRf.value) {
    const endArr = timeArr[1].split(separatorRf.value);
    endObj = {
      hour: endArr[0],
      minute: endArr[1],
      second: endArr[2],
    };
  }

  function getIsInRange(obj) {
    const TIME_RANGE = {
      hour: {
        min: 0,
        max: 23,
      },
      minute: {
        min: 0,
        max: 59,
      },
      second: {
        min: 0,
        max: 59,
      },
    };

    return Object.entries(TIME_RANGE).every((item) => {
      const type = item[0];
      const rangeItem = item[1];
      return obj[type] >= rangeItem.min && obj[type] <= rangeItem.max;
    });
  }

  if (!showEndTimeRf.value) {
    return getIsInRange(startObj);
  } else {
    return getIsInRange(startObj) && getIsInRange(endObj);
  }
}

export function useUtils(separatorRf, showEndTimeRf, inputD, inputValueCp) {
  function getIsNotInputStrValid(str) {
    return (
      !getIsStrCorrect(str, separatorRf, showEndTimeRf) ||
      !getIsInTimeRange(str, separatorRf, showEndTimeRf)
    );
  }

  function resetInput() {
    inputD.value.ref.value = inputValueCp.value;
  }

  function getInputValue() {
    return inputD.value.ref.value;
  }

  return {
    getIsNotInputStrValid,
    resetInput,
    getInputValue,
  };
}
