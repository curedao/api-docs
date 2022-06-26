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
exports.UnitCategoryToJSON = exports.UnitCategoryFromJSONTyped = exports.UnitCategoryFromJSON = void 0;
var runtime_1 = require("../runtime");
function UnitCategoryFromJSON(json) {
    return UnitCategoryFromJSONTyped(json, false);
}
exports.UnitCategoryFromJSON = UnitCategoryFromJSON;
function UnitCategoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'standardUnitAbbreviatedName': !(0, runtime_1.exists)(json, 'standardUnitAbbreviatedName') ? undefined : json['standardUnitAbbreviatedName'],
    };
}
exports.UnitCategoryFromJSONTyped = UnitCategoryFromJSONTyped;
function UnitCategoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'standardUnitAbbreviatedName': value.standardUnitAbbreviatedName,
    };
}
exports.UnitCategoryToJSON = UnitCategoryToJSON;
//# sourceMappingURL=UnitCategory.js.map