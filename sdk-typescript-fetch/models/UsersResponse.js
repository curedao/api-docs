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
exports.UsersResponseToJSON = exports.UsersResponseFromJSONTyped = exports.UsersResponseFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function UsersResponseFromJSON(json) {
    return UsersResponseFromJSONTyped(json, false);
}
exports.UsersResponseFromJSON = UsersResponseFromJSON;
function UsersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'users': (json['users'].map(_1.UserFromJSON)),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'summary': !(0, runtime_1.exists)(json, 'summary') ? undefined : json['summary'],
        'errors': !(0, runtime_1.exists)(json, 'errors') ? undefined : (json['errors'].map(_1.ErrorResponseFromJSON)),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'success': !(0, runtime_1.exists)(json, 'success') ? undefined : json['success'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : (0, _1.ImageFromJSON)(json['image']),
        'avatar': !(0, runtime_1.exists)(json, 'avatar') ? undefined : json['avatar'],
        'ionIcon': !(0, runtime_1.exists)(json, 'ionIcon') ? undefined : json['ionIcon'],
        'html': !(0, runtime_1.exists)(json, 'html') ? undefined : json['html'],
        'link': !(0, runtime_1.exists)(json, 'link') ? undefined : json['link'],
        'card': !(0, runtime_1.exists)(json, 'card') ? undefined : (0, _1.CardFromJSON)(json['card']),
    };
}
exports.UsersResponseFromJSONTyped = UsersResponseFromJSONTyped;
function UsersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'users': (value.users.map(_1.UserToJSON)),
        'description': value.description,
        'summary': value.summary,
        'errors': value.errors === undefined ? undefined : (value.errors.map(_1.ErrorResponseToJSON)),
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'image': (0, _1.ImageToJSON)(value.image),
        'avatar': value.avatar,
        'ionIcon': value.ionIcon,
        'html': value.html,
        'link': value.link,
        'card': (0, _1.CardToJSON)(value.card),
    };
}
exports.UsersResponseToJSON = UsersResponseToJSON;
//# sourceMappingURL=UsersResponse.js.map