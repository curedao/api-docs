"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * CureDAO Unified Health API
 * A community-owned platform for crowdsourced clinical research
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTrackingReminderNotificationsResponseToJSON = exports.GetTrackingReminderNotificationsResponseFromJSONTyped = exports.GetTrackingReminderNotificationsResponseFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function GetTrackingReminderNotificationsResponseFromJSON(json) {
    return GetTrackingReminderNotificationsResponseFromJSONTyped(json, false);
}
exports.GetTrackingReminderNotificationsResponseFromJSON = GetTrackingReminderNotificationsResponseFromJSON;
function GetTrackingReminderNotificationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(_1.TrackingReminderNotificationFromJSON)),
        'description': json['description'],
        'summary': json['summary'],
        'errors': !(0, runtime_1.exists)(json, 'errors') ? undefined : (json['errors'].map(_1.ErrorResponseFromJSON)),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'success': !(0, runtime_1.exists)(json, 'success') ? undefined : json['success'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'link': !(0, runtime_1.exists)(json, 'link') ? undefined : json['link'],
        'card': !(0, runtime_1.exists)(json, 'card') ? undefined : (0, _1.CardFromJSON)(json['card']),
    };
}
exports.GetTrackingReminderNotificationsResponseFromJSONTyped = GetTrackingReminderNotificationsResponseFromJSONTyped;
function GetTrackingReminderNotificationsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': value.data === undefined ? undefined : (value.data.map(_1.TrackingReminderNotificationToJSON)),
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
exports.GetTrackingReminderNotificationsResponseToJSON = GetTrackingReminderNotificationsResponseToJSON;
//# sourceMappingURL=GetTrackingReminderNotificationsResponse.js.map
