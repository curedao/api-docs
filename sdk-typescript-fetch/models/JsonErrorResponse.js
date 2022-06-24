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
exports.JsonErrorResponseToJSON = exports.JsonErrorResponseFromJSONTyped = exports.JsonErrorResponseFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function JsonErrorResponseFromJSON(json) {
    return JsonErrorResponseFromJSONTyped(json, false);
}
exports.JsonErrorResponseFromJSON = JsonErrorResponseFromJSON;
function JsonErrorResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'summary': !(0, runtime_1.exists)(json, 'summary') ? undefined : json['summary'],
        'errors': !(0, runtime_1.exists)(json, 'errors') ? undefined : (json['errors'].map(_1.ErrorResponseFromJSON)),
        'status': json['status'],
        'success': !(0, runtime_1.exists)(json, 'success') ? undefined : json['success'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'link': !(0, runtime_1.exists)(json, 'link') ? undefined : json['link'],
        'card': !(0, runtime_1.exists)(json, 'card') ? undefined : (0, _1.CardFromJSON)(json['card']),
    };
}
exports.JsonErrorResponseFromJSONTyped = JsonErrorResponseFromJSONTyped;
function JsonErrorResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
        'description': value.description,
        'summary': value.summary,
        'errors': value.errors === undefined ? undefined : (value.errors.map(_1.ErrorResponseToJSON)),
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'link': value.link,
        'card': (0, _1.CardToJSON)(value.card),
    };
}
exports.JsonErrorResponseToJSON = JsonErrorResponseToJSON;
//# sourceMappingURL=JsonErrorResponse.js.map