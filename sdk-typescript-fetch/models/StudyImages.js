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
exports.StudyImagesToJSON = exports.StudyImagesFromJSONTyped = exports.StudyImagesFromJSON = void 0;
var runtime_1 = require("../runtime");
function StudyImagesFromJSON(json) {
    return StudyImagesFromJSONTyped(json, false);
}
exports.StudyImagesFromJSON = StudyImagesFromJSON;
function StudyImagesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'causeVariableImageUrl': !(0, runtime_1.exists)(json, 'causeVariableImageUrl') ? undefined : json['causeVariableImageUrl'],
        'causeVariableIonIcon': !(0, runtime_1.exists)(json, 'causeVariableIonIcon') ? undefined : json['causeVariableIonIcon'],
        'effectVariableImageUrl': !(0, runtime_1.exists)(json, 'effectVariableImageUrl') ? undefined : json['effectVariableImageUrl'],
        'effectVariableIonIcon': !(0, runtime_1.exists)(json, 'effectVariableIonIcon') ? undefined : json['effectVariableIonIcon'],
        'gaugeImage': json['gaugeImage'],
        'gaugeImageSquare': json['gaugeImageSquare'],
        'gaugeSharingImageUrl': !(0, runtime_1.exists)(json, 'gaugeSharingImageUrl') ? undefined : json['gaugeSharingImageUrl'],
        'imageUrl': json['imageUrl'],
        'robotSharingImageUrl': !(0, runtime_1.exists)(json, 'robotSharingImageUrl') ? undefined : json['robotSharingImageUrl'],
        'avatar': !(0, runtime_1.exists)(json, 'avatar') ? undefined : json['avatar'],
    };
}
exports.StudyImagesFromJSONTyped = StudyImagesFromJSONTyped;
function StudyImagesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'causeVariableImageUrl': value.causeVariableImageUrl,
        'causeVariableIonIcon': value.causeVariableIonIcon,
        'effectVariableImageUrl': value.effectVariableImageUrl,
        'effectVariableIonIcon': value.effectVariableIonIcon,
        'gaugeImage': value.gaugeImage,
        'gaugeImageSquare': value.gaugeImageSquare,
        'gaugeSharingImageUrl': value.gaugeSharingImageUrl,
        'imageUrl': value.imageUrl,
        'robotSharingImageUrl': value.robotSharingImageUrl,
        'avatar': value.avatar,
    };
}
exports.StudyImagesToJSON = StudyImagesToJSON;
//# sourceMappingURL=StudyImages.js.map