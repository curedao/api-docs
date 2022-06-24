"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * CureDAO Unified Health API
 * A platform for participant-centered research and personal data exploration
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableChartsToJSON = exports.VariableChartsFromJSONTyped = exports.VariableChartsFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function VariableChartsFromJSON(json) {
    return VariableChartsFromJSONTyped(json, false);
}
exports.VariableChartsFromJSON = VariableChartsFromJSON;
function VariableChartsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hourlyColumnChart': !(0, runtime_1.exists)(json, 'hourlyColumnChart') ? undefined : (0, _1.ChartFromJSON)(json['hourlyColumnChart']),
        'monthlyColumnChart': !(0, runtime_1.exists)(json, 'monthlyColumnChart') ? undefined : (0, _1.ChartFromJSON)(json['monthlyColumnChart']),
        'distributionColumnChart': !(0, runtime_1.exists)(json, 'distributionColumnChart') ? undefined : (0, _1.ChartFromJSON)(json['distributionColumnChart']),
        'weekdayColumnChart': !(0, runtime_1.exists)(json, 'weekdayColumnChart') ? undefined : (0, _1.ChartFromJSON)(json['weekdayColumnChart']),
        'lineChartWithoutSmoothing': !(0, runtime_1.exists)(json, 'lineChartWithoutSmoothing') ? undefined : (0, _1.ChartFromJSON)(json['lineChartWithoutSmoothing']),
        'lineChartWithSmoothing': !(0, runtime_1.exists)(json, 'lineChartWithSmoothing') ? undefined : (0, _1.ChartFromJSON)(json['lineChartWithSmoothing']),
    };
}
exports.VariableChartsFromJSONTyped = VariableChartsFromJSONTyped;
function VariableChartsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hourlyColumnChart': (0, _1.ChartToJSON)(value.hourlyColumnChart),
        'monthlyColumnChart': (0, _1.ChartToJSON)(value.monthlyColumnChart),
        'distributionColumnChart': (0, _1.ChartToJSON)(value.distributionColumnChart),
        'weekdayColumnChart': (0, _1.ChartToJSON)(value.weekdayColumnChart),
        'lineChartWithoutSmoothing': (0, _1.ChartToJSON)(value.lineChartWithoutSmoothing),
        'lineChartWithSmoothing': (0, _1.ChartToJSON)(value.lineChartWithSmoothing),
    };
}
exports.VariableChartsToJSON = VariableChartsToJSON;
//# sourceMappingURL=VariableCharts.js.map