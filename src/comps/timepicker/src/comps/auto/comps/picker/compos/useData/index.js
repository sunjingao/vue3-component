import { computed } from 'vue';
import { START_TIME } from '@/comps/timepicker/src/comps/auto/comps/picker/config';
import { getTwoNumberStr } from '@/utils/string';

const EMPTY_POINT = {
  value: null,
  isDisabled: true,
  isSelected: false,
};

export function useData(modelValueRf, rangeRf) {
  const currentTimeCp = computed(() => {
    return {
      hour: modelValueRf.value.hour || START_TIME.HOUR,
      minute: modelValueRf.value.minute || START_TIME.MINUTE,
      second: modelValueRf.value.second || START_TIME.SECOND,
    };
  });

  const contentCp = computed(() => {
    const contentTime = {
      hour: [],
      minute: [],
      second: [],
    };

    for (const hMsTag of Object.keys(currentTimeCp.value)) {
      const maxIndex = hMsTag === 'hour' ? 24 : 60;

      const timeArr = [];

      // 时间段的开头和结尾的展示都有两个空
      timeArr.unshift(EMPTY_POINT, EMPTY_POINT);

      for (let index = 0; index < maxIndex; index++) {
        timeArr.push({
          value: getTwoNumberStr(index),
          isDisabled: getIsDisabled(hMsTag, index),
          isSelected: getIsSelected(hMsTag, index),
        });
      }

      // 时间段的开头和结尾的展示都有两个空
      timeArr.push(EMPTY_POINT, EMPTY_POINT);

      contentTime[hMsTag] = timeArr;
    }

    return contentTime;
  });

  function getIsDisabled(hMsTag, index) {
    if (!rangeRf.value || rangeRf.value.length <= 0) {
      return false;
    }

    return !rangeRf.value[hMsTag].some((x) => {
      if (!x.start) {
        return index <= x.end;
      } else if (!x.end) {
        return index >= x.start;
      }
      return index >= x.start && index <= x.end;
    });
  }

  function getIsSelected(hMsTag, index) {
    return parseFloat(currentTimeCp.value[hMsTag]) === parseFloat(index);
  }

  return {
    contentCp,
  };
}
