import { computed, ref, watch } from 'vue';

export function usePoints(modelValueRf, minRf, maxRf, stepRf) {
  const pointValRf = ref(0);

  const pointValArrCp = computed(() => {
    const rgsArray = [];
    for (let index = minRf.value; index <= maxRf.value; index += stepRf.value) {
      rgsArray.push(index);
    }
    return rgsArray;
  });
  const pointPositionArrCp = computed(() => {
    const arr = [];
    for (const item of Object.values(pointValArrCp.value.slice(1, -1))) {
      arr.push(
        `${((item - minRf.value) / (maxRf.value - minRf.value)) * 100}%`
      );
    }
    return arr;
  });

  const pointPercentCp = computed(() => {
    return `${
      ((pointValRf.value - minRf.value) / (maxRf.value - minRf.value)) * 100
    }%`;
  });

  function getPointVal(val) {
    let emitValue = (maxRf.value - minRf.value) * val + minRf.value;

    if (!pointValArrCp.value.includes(emitValue)) {
      pointValArrCp.value.every((value, index) => {
        if (index === 0 && emitValue <= value) {
          emitValue = value;
          return false;
        } else if (
          index === pointValArrCp.value.length - 1 &&
          emitValue >= value
        ) {
          emitValue = value;
          return false;
        } else if (
          emitValue > value &&
          emitValue < pointValArrCp.value[index + 1]
        ) {
          emitValue =
            emitValue - value >= pointValArrCp.value[index + 1] - emitValue
              ? pointValArrCp.value[index + 1]
              : value;
          return false;
        }
        return true;
      });
    }

    return emitValue;
  }

  watch(
    () => modelValueRf,
    () => {
      pointValRf.value = modelValueRf.value;
    },
    {
      immediate: true,
    }
  );

  return {
    pointValRf,
    pointPositionArrCp,
    pointPercentCp,
    getPointVal,
  };
}
