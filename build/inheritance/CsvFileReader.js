"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * The generic <T> assigned to this abstract class allows us to
 * pass in data and access the generic within our class.
 */
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
            /** Split each row of data into an array of strings. */
            .split('\n')
            /** Split each array element which represents a row of data into
             *  an array of strings.  Each array element would represent a column of data.
             */
            .map((row) => {
            return row.split(',');
        })
            /** Convert string data to it's appropriate data type.  */
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
