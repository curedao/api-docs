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
exports.PostTrackingRemindersResponseToJSON = exports.PostTrackingRemindersResponseFromJSONTyped = exports.PostTrackingRemindersResponseFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function PostTrackingRemindersResponseFromJSON(json) {
    return PostTrackingRemindersResponseFromJSONTyped(json, false);
}
exports.PostTrackingRemindersResponseFromJSON = PostTrackingRemindersResponseFromJSON;
function PostTrackingRemindersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, _1.PostTrackingRemindersDataResponseFromJSON)(json['data']),
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'summary': !(0, runtime_1.exists)(json, 'summary') ? undefined : json['summary'],
        'errors': !(0, runtime_1.exists)(json, 'errors') ? undefined : (json['errors'].map(_1.ErrorResponseFromJSON)),
        'status': json['status'],
        'success': json['success'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'link': !(0, runtime_1.exists)(json, 'link') ? undefined : json['link'],
        'card': !(0, runtime_1.exists)(json, 'card') ? undefined : (0, _1.CardFromJSON)(json['card']),
    };
}
exports.PostTrackingRemindersResponseFromJSONTyped = PostTrackingRemindersResponseFromJSONTyped;
function PostTrackingRemindersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, _1.PostTrackingRemindersDataResponseToJSON)(value.data),
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
exports.PostTrackingRemindersResponseToJSON = PostTrackingRemindersResponseToJSON;
//# sourceMappingURL=PostTrackingRemindersResponse.js.map