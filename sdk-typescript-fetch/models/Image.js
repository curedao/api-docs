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
exports.ImageToJSON = exports.ImageFromJSONTyped = exports.ImageFromJSON = void 0;
function ImageFromJSON(json) {
    return ImageFromJSONTyped(json, false);
}
exports.ImageFromJSON = ImageFromJSON;
function ImageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'height': json['height'],
        'imageUrl': json['imageUrl'],
        'width': json['width'],
    };
}
exports.ImageFromJSONTyped = ImageFromJSONTyped;
function ImageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'height': value.height,
        'imageUrl': value.imageUrl,
        'width': value.width,
    };
}
exports.ImageToJSON = ImageToJSON;
//# sourceMappingURL=Image.js.map
