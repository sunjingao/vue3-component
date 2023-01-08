// 将一位长度的字符串转为两位长度
export function getTwoNumberStr(value, defaultVal = '') {
  if (value === null || value === undefined || value === '') {
    return defaultVal;
  } else {
    return value.toString().length < 2 ? `0${value}` : value;
  }
}
