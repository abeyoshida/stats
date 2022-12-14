"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
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
            .map((row) => {
            /** Return the csv data, an array of arrays to the data property of this class */
            return row.split(',');
        });
    }
}
exports.CsvFileReader = CsvFileReader;
