import dayjs from "dayjs";


export function generateMonth(year,month) {
  const startOfMonth = dayjs(`${year}-${month}-01`);
  const daysInMonth = startOfMonth.daysInMonth();

  const daysArray = [];
  for (let day = 1; day < daysInMonth; day++) {
    daysArray.push(dayjs(`${year}-${month}-01`))
  }
  return daysArray
}

export function getStartOffset(year,month) {
  const startOfMonth = dayjs(`${year}-${month}-01`);
  return startOfMonth.day();
}

export function isToday(date) {
  return date.isSame(dayjs(), "day");
}