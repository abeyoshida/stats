"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReports_1 = require("./reportTargets/HtmlReports");
/**
 * Pass a csv file to be read, parsed into rows and columns
 * and stored in the "data" property of the class.
 */
const csvFileReader = new CsvFileReader_1.CsvFileReader('./resource/football.csv');
// create an instance of MatchReader and pas sin something satisfying the DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReports_1.HtmlReport());
// const summary = Summary.winsAnalysisAndHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
