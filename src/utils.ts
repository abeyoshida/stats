export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
  .split('/')
  .map((value: string) => {
    return parseInt(value);
  });
  /** Convert the date string to a Date object.
   *  dateString = '28/10/2018' = day/month/year
   *  new Date(year, month, day).
   */
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}