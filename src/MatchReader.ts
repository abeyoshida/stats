import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

/**
 * This class takes the csv data that has been read and reordered into
 * rows and columns and converts the raw string data into the correct
 * type for each column based on the MatchData interface.
 * i.e. the first column requires a Date object, the second a string, etc.
 */
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename:string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.mapRow);
  }

  mapRow(row: string[]): MatchData {
    /** Convert string data to it's appropriate data type.  */
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      /** 
       * Type assertion to override Typescript default on the type.
       * MatchResult defines not just a string, but a string that 
       * is either a "H", "A", "D".
       */
      row[5] as MatchResult,
      row[6]
    ]
  }
}