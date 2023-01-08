export function getIsDisabled(range, year, monthIndex = 0, date = 1) {
  // 没有range，则均可操作
  if (!range || range.length === 0) {
    return false;
  }

  // 判断当range中的end存在而start不存在的情况
  return !range.some((x) => {
    const startYear = (x.start && x.start.year) || 1970;
    const startMonth = (x.start && x.start.month && x.start.month - 1) || 0;
    const startDate = (x.start && x.start.date) || 1;
    const startTime = new Date(startYear, startMonth, startDate);

    const endYear = (x.end && x.end.year) || 1970;
    const endMonth = (x.end && x.end.month && x.end.month - 1) || 11;
    const endDate =
      (x.end && x.end.date) || new Date(endYear, endMonth + 1, 0).getDate();
    const endTime = new Date(endYear, endMonth, endDate);

    const curTime = new Date(year, monthIndex, date);

    if (!x.start && !!x.end) {
      return curTime <= endTime;
    } else if (!!x.start && !x.end) {
      return curTime >= startTime;
    } else if (!!x.start && !!x.end) {
      return curTime >= startTime && curTime <= endTime;
    }

    return false;
  });
}
