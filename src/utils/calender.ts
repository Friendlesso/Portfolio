import dayjs, { Dayjs } from "dayjs";


export function generateMonth(year:number,month:number) {
  const startOfMonth = dayjs(`${year}-${month}-01`);
  const daysInMonth = startOfMonth.daysInMonth();

  const daysArray = [];
  for (let day = 1; day < daysInMonth; day++) {
    daysArray.push(dayjs(`${year}-${month}-01`))
  }
  return daysArray
}

export function getStartOffset(year:number,month:number) {
  const startOfMonth = dayjs(`${year}-${month}-01`);
  return startOfMonth.day();
}

export function isToday(date: Dayjs) {
  return date.isSame(dayjs(), "day");
}