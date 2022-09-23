import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReports';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { HtmlReport } from './reportTargets/HtmlReports';

/** 
 * Pass a csv file to be read, parsed into rows and columns
 * and stored in the "data" property of the class.
 */
// const csvFileReader = new CsvFileReader('./resource/football.csv');

// create an instance of MatchReader and pas sin something satisfying the DataReader interface
// const matchReader = new MatchReader(csvFileReader);

/**
 * Refactor using a static method allows us to call the method directly
 * on the class without having to instantiate it.  In this case we 
 * pre-configured it to call CsvFileReader with the filename.
 */
const matchReader = MatchReader.fromCsv('./resource/football.csv');
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
// );

const summary = Summary.winsAnalysisAndHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches)