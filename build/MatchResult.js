"use strict";
/**
 * enum - enumeration
 * Enum is a Typescript object that stores closely related values.
 * The primary goal is to signal to other engineers something about the data.
 * It's used whenever we have a small fixed set5 of values that are all closely
 * related and known at compile time.
 * It also creates a type.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
