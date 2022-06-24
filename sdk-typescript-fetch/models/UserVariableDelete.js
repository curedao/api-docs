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
exports.UserVariableDeleteToJSON = exports.UserVariableDeleteFromJSONTyped = exports.UserVariableDeleteFromJSON = void 0;
function UserVariableDeleteFromJSON(json) {
    return UserVariableDeleteFromJSONTyped(json, false);
}
exports.UserVariableDeleteFromJSON = UserVariableDeleteFromJSON;
function UserVariableDeleteFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'variableId': json['variableId'],
    };
}
exports.UserVariableDeleteFromJSONTyped = UserVariableDeleteFromJSONTyped;
function UserVariableDeleteToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'variableId': value.variableId,
    };
}
exports.UserVariableDeleteToJSON = UserVariableDeleteToJSON;
//# sourceMappingURL=UserVariableDelete.js.map