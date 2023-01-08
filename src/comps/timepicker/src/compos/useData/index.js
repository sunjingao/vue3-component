import { computed, getCurrentInstance, reactive, watch } from 'vue';
import { getTwoNumberStr } from '@/utils/string';
import { EMITS, TIME_SEPARATOR } from '@/comps/timepicker/src/config';
import { useValidData } from './useValidData';

export function useData(
  startDefaultTimeRf,
  endDefaultTimeRf,
  startRangeRf,
  endRangeRf,
  showEndTimeRf,
  separatorRf,
  widthRf,
  tipD
) {
  const { emit } = getCurrentInstance();

  const startTimeRt = reactive({
    hour: '',
    minute: '',
    second: '',
  });

  const endTimeRt = reactive({
    hour: '',
    minute: '',
    second: '',
  });

  const { saveLastValidData, getValidData } = useValidData(
    startTimeRt,
    endTimeRt
  );

  const inputValueCp = computed(() => {
    const inputShowTimeArr = [];

    if (Object.values(startTimeRt).every((item) => item !== '')) {
      inputShowTimeArr.push(
        getTwoNumberStr(startTimeRt.hour) +
          separatorRf.value +
          getTwoNumberStr(startTimeRt.minute) +
          separatorRf.value +
          getTwoNumberStr(startTimeRt.second)
      );
    } else {
      inputShowTimeArr.push('');
    }

    if (showEndTimeRf.value) {
      if (Object.values(endTimeRt).every((item) => item !== '')) {
        inputShowTimeArr.push(
          getTwoNumberStr(endTimeRt.hour) +
            separatorRf.value +
            getTwoNumberStr(endTimeRt.minute) +
            separatorRf.value +
            getTwoNumberStr(endTimeRt.second)
        );
      } else {
        inputShowTimeArr.push('');
      }
    }

    return inputShowTimeArr.join(TIME_SEPARATOR);
  });

  const inputWidthCp = computed(() =>
    widthRf.value ? widthRf.value : showEndTimeRf.value ? '200px' : '180px'
  );

  function getIsSelectedDataValid() {
    function getIsClearStatus() {
      const isStartTimeClear = Object.values(startTimeRt).every(
        (val) => val === ''
      );
      const isEndTimeClear = Object.values(endTimeRt).every(
        (val) => val === ''
      );
      if (!showEndTimeRf.value) {
        return isStartTimeClear;
      } else {
        return isEndTimeClear && isEndTimeClear;
      }
    }

    return getIsClearStatus() || !tipD.value.getIsSelectedDisabled();
  }

  function emitSelect() {
    emit(EMITS.SELECT, startTimeRt, showEndTimeRf.value ? endTimeRt : '');
  }

  function setDataDirect(startTime, endTime) {
    startTimeRt.hour = startTime && startTime.hour;
    startTimeRt.minute = startTime && startTime.minute;
    startTimeRt.second = startTime && startTime.second;

    endTimeRt.hour = endTime && endTime.hour;
    endTimeRt.minute = endTime && endTime.minute;
    endTimeRt.second = endTime && endTime.second;
  }

  function setData(startTime, endTime) {
    setDataDirect(startTime, endTime);

    if (getIsSelectedDataValid()) {
      saveLastValidData();
      emitSelect();
    }
  }

  function clearData() {
    const startTimeObj = {
      hour: '',
      minute: '',
      second: '',
    };
    const endTimeObj = {
      hour: '',
      minute: '',
      second: '',
    };
    setData(startTimeObj, endTimeObj);
  }

  function resetDataDefault() {
    const startTimeObj = {
      hour: getTwoNumberStr(
        startDefaultTimeRf.value && startDefaultTimeRf.value.hour,
        ''
      ),
      minute: getTwoNumberStr(
        startDefaultTimeRf.value && startDefaultTimeRf.value.minute,
        ''
      ),
      second: getTwoNumberStr(
        startDefaultTimeRf.value && startDefaultTimeRf.value.second,
        ''
      ),
    };
    const endTimeObj = {
      hour: getTwoNumberStr(
        endDefaultTimeRf.value && endDefaultTimeRf.value.hour,
        ''
      ),
      minute: getTwoNumberStr(
        endDefaultTimeRf.value && endDefaultTimeRf.value.minute,
        ''
      ),
      second: getTwoNumberStr(
        endDefaultTimeRf.value && endDefaultTimeRf.value.second,
        ''
      ),
    };

    setDataDirect(startTimeObj, endTimeObj);

    saveLastValidData();
  }

  watch(
    [
      () => startRangeRf.value,
      () => startDefaultTimeRf.value,
      () => endRangeRf.value,
      () => endDefaultTimeRf.value,
    ],
    () => {
      resetDataDefault();
    },
    {
      deep: true,
      immediate: true,
    }
  );

  // 禁止直接操作数据
  const startTimeCp = computed(() => {
    return startTimeRt;
  });
  // 禁止直接操作数据
  const endTimeCp = computed(() => {
    return endTimeRt;
  });

  function setValidData() {
    if (getIsSelectedDataValid()) {
      return;
    }

    const { validStartTimeRt, validEndTimeRt } = getValidData();

    setData(validStartTimeRt, validEndTimeRt);
  }

  return {
    startTimeCp,
    endTimeCp,
    inputValueCp,
    inputWidthCp,
    setData,
    clearData,
    setValidData,
  };
}
