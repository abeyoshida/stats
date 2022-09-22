"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
    /** Convert the date string to a Date object.
     *  dateString = '28/10/2018' = day/month/year
     *  new Date(year, month, day).
     */
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
