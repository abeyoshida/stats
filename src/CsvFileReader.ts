import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  
  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      /** Encoding flag tells readFileSync to return a string representing the data in the file. */
      encoding: 'utf-8'
    })
    /** 
     * From the string data create an array of strings with each
     * array element representing a row of data from the csv file.
     */
    .split('\n')
    /** 
     * From the string data for each row create an array of strings
     * that represent each column of data in each row.
     */
    .map((row: string): string[] => {
      /** Return the csv data, an array of arrays to the data property of this class */
      return row.split(',');
    });
  }
}