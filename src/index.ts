import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReports';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReports';

/** 
 * Pass a csv file to be read, parsed into rows and columns
 * and stored in the "data" property of the class.
 */
const csvFileReader = new CsvFileReader('./resource/football.csv');

// create an instance of MatchReader and pas sin something satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
);

// const summary = Summary.winsAnalysisAndHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches)