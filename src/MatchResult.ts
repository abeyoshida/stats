/**
 * enum - enumeration
 * Enum is a Typescript object that stores closely related values.
 * The primary goal is to signal to other engineers something about the data.
 * It's used whenever we have a small fixed set5 of values that are all closely
 * related and known at compile time.
 * It also creates a type.
 */

export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}