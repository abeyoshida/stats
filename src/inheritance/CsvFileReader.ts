import fs from 'fs';

/**
 * The generic <T> assigned to this abstract class allows us to 
 * pass in data and access the generic within our class.
 */
export abstract class CsvFileReader<T> {
  data: T[] = [];
  
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      /** Encoding flag tells readFileSync to return a string representing the data in the file. */
      encoding: 'utf-8'
    })
    /** Split each row of data into an array of strings. */
    .split('\n')
    /** Split each array element which represents a row of data into
     *  an array of strings.  Each array element would represent a column of data.
     */
    .map((row: string): string[] => {
      return row.split(',');
    })
    /** Convert string data to it's appropriate data type.  */
    .map(this.mapRow);
  }

  
}