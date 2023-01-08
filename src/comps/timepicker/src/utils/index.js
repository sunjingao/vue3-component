export function getDom(domD) {
  return Array.isArray(domD.value) ? domD.value[0] : domD.value;
}

export function getDomByType(type, hourD, minuteD, secondD) {
  let domD = '';
  if (type === 'hour') {
    domD = hourD;
  } else if (type === 'minute') {
    domD = minuteD;
  } else {
    domD = secondD;
  }
  return getDom(domD);
}
