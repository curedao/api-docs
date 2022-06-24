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
exports.ExplanationStartTrackingToJSON = exports.ExplanationStartTrackingFromJSONTyped = exports.ExplanationStartTrackingFromJSON = void 0;
var _1 = require("./");
function ExplanationStartTrackingFromJSON(json) {
    return ExplanationStartTrackingFromJSONTyped(json, false);
}
exports.ExplanationStartTrackingFromJSON = ExplanationStartTrackingFromJSON;
function ExplanationStartTrackingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'button': (0, _1.ButtonFromJSON)(json['button']),
        'description': json['description'],
        'title': json['title'],
    };
}
exports.ExplanationStartTrackingFromJSONTyped = ExplanationStartTrackingFromJSONTyped;
function ExplanationStartTrackingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'button': (0, _1.ButtonToJSON)(value.button),
        'description': value.description,
        'title': value.title,
    };
}
exports.ExplanationStartTrackingToJSON = ExplanationStartTrackingToJSON;
//# sourceMappingURL=ExplanationStartTracking.js.map