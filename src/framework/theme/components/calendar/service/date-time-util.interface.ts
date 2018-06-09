
export abstract class NbDateTimeUtil<D> {
  abstract getNumberOfDaysInMonth(date: D): number;
  abstract getStartOfWeekDay(): number;

  abstract getDate(date: D): number;
  abstract getMonth(date: D): number;
  abstract getYear(date: D): number;
  abstract getDayOfWeek(date: D): number;

  abstract createDate(year: number, month: number, date: number);
  abstract createNowDate(): D;
  abstract add(date: D, num: number, type: string): D;
  abstract clone(date: D): D;

  abstract getWeekStart(date: D): D;
  abstract getWeekStartDiff(date: D): number;
  abstract getMonthStart(date: D): D;

}
