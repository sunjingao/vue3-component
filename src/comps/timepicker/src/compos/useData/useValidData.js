import { reactive } from 'vue';

export function useValidData(startTimeRt, endTimeRt) {
  const validStartTimeRt = reactive({
    hour: '',
    minute: '',
    second: '',
  });

  const validEndTimeRt = reactive({
    hour: '',
    minute: '',
    second: '',
  });

  function saveLastValidData() {
    validStartTimeRt.hour = startTimeRt.hour;
    validStartTimeRt.minute = startTimeRt.minute;
    validStartTimeRt.second = startTimeRt.second;

    validEndTimeRt.hour = endTimeRt.hour;
    validEndTimeRt.minute = endTimeRt.minute;
    validEndTimeRt.second = endTimeRt.second;
  }

  function getValidData() {
    return {
      validStartTimeRt,
      validEndTimeRt,
    };
  }

  return {
    saveLastValidData,
    getValidData,
  };
}
