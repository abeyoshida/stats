"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map(this.mapRow);
    }
    mapRow(row) {
        /** Convert string data to it's appropriate data type.  */
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            /**
             * Type assertion to override Typescript default on the type.
             * MatchResult defines not just a string, but a string that
             * is either a "H", "A", "D".
             */
            row[5],
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;
