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
exports.UnitToJSON = exports.UnitFromJSONTyped = exports.UnitFromJSON = exports.UnitCategoryEnum = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
/**
* @export
* @enum {string}
*/
var UnitCategoryEnum;
(function (UnitCategoryEnum) {
    UnitCategoryEnum["Distance"] = "Distance";
    UnitCategoryEnum["Duration"] = "Duration";
    UnitCategoryEnum["Energy"] = "Energy";
    UnitCategoryEnum["Frequency"] = "Frequency";
    UnitCategoryEnum["Miscellany"] = "Miscellany";
    UnitCategoryEnum["Pressure"] = "Pressure";
    UnitCategoryEnum["Proportion"] = "Proportion";
    UnitCategoryEnum["Rating"] = "Rating";
    UnitCategoryEnum["Temperature"] = "Temperature";
    UnitCategoryEnum["Volume"] = "Volume";
    UnitCategoryEnum["Weight"] = "Weight";
    UnitCategoryEnum["Count"] = "Count";
})(UnitCategoryEnum = exports.UnitCategoryEnum || (exports.UnitCategoryEnum = {}));
function UnitFromJSON(json) {
    return UnitFromJSONTyped(json, false);
}
exports.UnitFromJSON = UnitFromJSON;
function UnitFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'abbreviatedName': json['abbreviatedName'],
        'advanced': !(0, runtime_1.exists)(json, 'advanced') ? undefined : json['advanced'],
        'category': json['category'],
        'categoryId': !(0, runtime_1.exists)(json, 'categoryId') ? undefined : json['categoryId'],
        'categoryName': !(0, runtime_1.exists)(json, 'categoryName') ? undefined : json['categoryName'],
        'conversionSteps': (json['conversionSteps'].map(_1.ConversionStepFromJSON)),
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'manualTracking': !(0, runtime_1.exists)(json, 'manualTracking') ? undefined : json['manualTracking'],
        'maximumAllowedValue': !(0, runtime_1.exists)(json, 'maximumAllowedValue') ? undefined : json['maximumAllowedValue'],
        'maximumValue': json['maximumValue'],
        'minimumAllowedValue': !(0, runtime_1.exists)(json, 'minimumAllowedValue') ? undefined : json['minimumAllowedValue'],
        'minimumValue': !(0, runtime_1.exists)(json, 'minimumValue') ? undefined : json['minimumValue'],
        'name': json['name'],
        'unitCategory': (0, _1.UnitCategoryFromJSON)(json['unitCategory']),
    };
}
exports.UnitFromJSONTyped = UnitFromJSONTyped;
function UnitToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'abbreviatedName': value.abbreviatedName,
        'advanced': value.advanced,
        'category': value.category,
        'categoryId': value.categoryId,
        'categoryName': value.categoryName,
        'conversionSteps': (value.conversionSteps.map(_1.ConversionStepToJSON)),
        'id': value.id,
        'manualTracking': value.manualTracking,
        'maximumAllowedValue': value.maximumAllowedValue,
        'maximumValue': value.maximumValue,
        'minimumAllowedValue': value.minimumAllowedValue,
        'minimumValue': value.minimumValue,
        'name': value.name,
        'unitCategory': (0, _1.UnitCategoryToJSON)(value.unitCategory),
    };
}
exports.UnitToJSON = UnitToJSON;
//# sourceMappingURL=Unit.js.map