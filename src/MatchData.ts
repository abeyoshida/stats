import { MatchResult } from './MatchResult';

/** 
 * Use a tuple type to define the row of data.  Define each type in the 
 * correct order that corresponds to the columns of data in each row.
  */
export type MatchData =  [
  Date, 
  string, 
  string, 
  number, 
  number, 
  MatchResult, 
  string
];