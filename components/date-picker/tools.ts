export function isValidDate(date: Date) {
  return date && date.toString().toLowerCase() !== 'invalid date';
}

export class CaDate extends Date {
  year = this.getFullYear();

  month = this.getMonth() + 1;

  day = this.getDate();

  week = this.getDay();

  addYear(number = 1) {
    const { year, month, day } = this;
    const newYear = year + number;
    return new CaDate(newYear, month - 1, day);
  }

  addMonth(number = 1) {
    const { year, month, day } = this;
    const plusYear = Math[number < 0 ? 'ceil' : 'floor'](number / 12);
    const plusMonth = number % 12;
    const newYear = year + plusYear;
    const newMonth = month + plusMonth;
    return new CaDate(newYear, newMonth - 1, day);
  }

  addDay(number = 1) {
    const ts = this.getTime();
    const newTs = ts + (number * 86400000);
    return new CaDate(newTs);
  }

  isSameDay(date: CaDate) {
    return this.year === date.year && this.month === date.month && this.day === date.day;
  }

  isNextSiblings(date: CaDate) {
    return this.isSameDay(date.addDay(-1));
  }

  isPrevSiblings(date: CaDate) {
    return this.isSameDay(date.addDay());
  }
}

export function isSameDay(date?: Date | number, date2?: Date | number) {
  if (!date || !date2) return false;
  if (typeof date === 'number') {
    date = new Date(date);
  }
  if (typeof date2 === 'number') {
    date2 = new Date(date2);
  }
  if (!isValidDate(date) || !isValidDate(date2)) return false;
  const year = date.getFullYear();
  const year2 = date2.getFullYear();
  if (year !== year2) {
    return false;
  }
  const month = date.getMonth();
  const month2 = date2.getMonth();
  if (month !== month2) {
    return false;
  }
  const day = date.getDate();
  const day2 = date2.getDate();
  return day === day2;
}

export function isSameMonth(date: Date, date2: Date) {
  const year = date.getFullYear();
  const year2 = date2.getFullYear();
  if (year !== year2) {
    return false;
  }
  const month = date.getMonth() + 1;
  const month2 = date2.getMonth() + 1;
  return month === month2;
}

export function getFullMonthDate(date: Date) {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const arr = [];
  for (let i = 1; i <= 31; i++) {
    const currentDate = new Date(`${year}-${month}-${i}`);
    const currentMonth = currentDate.getMonth() + 1;
    if (currentMonth !== month) {
      break;
    }
    arr.push(currentDate);
  }
  return arr;
}

export function fillMonthListWithWeek(dateList: Date[]) {
  const [startDate] = dateList;
  const startWeek = startDate.getDay();
  const newDateList = dateList.slice();
  for (let i = 0; i < startWeek; i++) {
    newDateList.unshift(new Date(newDateList[0].getTime() - 86400000));
  }
  const endDate = dateList[dateList.length - 1];
  const endWeek = endDate.getDay();
  for (let i = 0; i < (6 - endWeek); i++) {
    newDateList.push(new Date(newDateList[newDateList.length - 1].getTime() + 86400000));
  }
  return newDateList;
}

export function splitMonthList(dateList: Date[]) {
  let i = 0;
  const newArr = [];
  while (true) {
    if (i > dateList.length) {
      break;
    }
    newArr.push(dateList.slice(i, i + 7));
    i += 7;
  }
  return newArr;
}


export function formatDate(date: Date, format: string) {
  if (date.toString().toLowerCase() === 'invalid date') {
    throw new Error('Invalid Date');
  }
  const dateObj = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  };
  let f = format;
  Object.keys(dateObj).forEach((key) => {
    const reg = new RegExp(`${key}+`, 'g');
    f = f.replace(reg, (par) => {
      const val = String(dateObj[key]);
      if (val.length < par.length) {
        return `${'0'.repeat(par.length - val.length)}${val}`;
      }
      return val;
    });
  });
  return f;
}