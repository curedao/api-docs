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
exports.CardToJSON = exports.CardFromJSONTyped = exports.CardFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function CardFromJSON(json) {
    return CardFromJSONTyped(json, false);
}
exports.CardFromJSON = CardFromJSON;
function CardFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actionSheetButtons': !(0, runtime_1.exists)(json, 'actionSheetButtons') ? undefined : (json['actionSheetButtons'].map(_1.ButtonFromJSON)),
        'avatar': !(0, runtime_1.exists)(json, 'avatar') ? undefined : json['avatar'],
        'avatarCircular': !(0, runtime_1.exists)(json, 'avatarCircular') ? undefined : json['avatarCircular'],
        'backgroundColor': !(0, runtime_1.exists)(json, 'backgroundColor') ? undefined : json['backgroundColor'],
        'buttons': !(0, runtime_1.exists)(json, 'buttons') ? undefined : (json['buttons'].map(_1.ButtonFromJSON)),
        'buttonsSecondary': !(0, runtime_1.exists)(json, 'buttonsSecondary') ? undefined : (json['buttonsSecondary'].map(_1.ButtonFromJSON)),
        'content': !(0, runtime_1.exists)(json, 'content') ? undefined : json['content'],
        'headerTitle': !(0, runtime_1.exists)(json, 'headerTitle') ? undefined : json['headerTitle'],
        'html': !(0, runtime_1.exists)(json, 'html') ? undefined : json['html'],
        'htmlContent': !(0, runtime_1.exists)(json, 'htmlContent') ? undefined : json['htmlContent'],
        'id': json['id'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : json['image'],
        'inputFields': !(0, runtime_1.exists)(json, 'inputFields') ? undefined : (json['inputFields'].map(_1.InputFieldFromJSON)),
        'ionIcon': !(0, runtime_1.exists)(json, 'ionIcon') ? undefined : json['ionIcon'],
        'link': !(0, runtime_1.exists)(json, 'link') ? undefined : json['link'],
        'parameters': !(0, runtime_1.exists)(json, 'parameters') ? undefined : json['parameters'],
        'relatedCards': !(0, runtime_1.exists)(json, 'relatedCards') ? undefined : (json['relatedCards'].map(CardFromJSON)),
        'selectedButton': !(0, runtime_1.exists)(json, 'selectedButton') ? undefined : (0, _1.ButtonFromJSON)(json['selectedButton']),
        'sharingBody': !(0, runtime_1.exists)(json, 'sharingBody') ? undefined : json['sharingBody'],
        'sharingButtons': !(0, runtime_1.exists)(json, 'sharingButtons') ? undefined : (json['sharingButtons'].map(_1.ButtonFromJSON)),
        'sharingTitle': !(0, runtime_1.exists)(json, 'sharingTitle') ? undefined : json['sharingTitle'],
        'subHeader': !(0, runtime_1.exists)(json, 'subHeader') ? undefined : json['subHeader'],
        'subTitle': !(0, runtime_1.exists)(json, 'subTitle') ? undefined : json['subTitle'],
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
    };
}
exports.CardFromJSONTyped = CardFromJSONTyped;
function CardToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actionSheetButtons': value.actionSheetButtons === undefined ? undefined : (value.actionSheetButtons.map(_1.ButtonToJSON)),
        'avatar': value.avatar,
        'avatarCircular': value.avatarCircular,
        'backgroundColor': value.backgroundColor,
        'buttons': value.buttons === undefined ? undefined : (value.buttons.map(_1.ButtonToJSON)),
        'buttonsSecondary': value.buttonsSecondary === undefined ? undefined : (value.buttonsSecondary.map(_1.ButtonToJSON)),
        'content': value.content,
        'headerTitle': value.headerTitle,
        'html': value.html,
        'htmlContent': value.htmlContent,
        'id': value.id,
        'image': value.image,
        'inputFields': value.inputFields === undefined ? undefined : (value.inputFields.map(_1.InputFieldToJSON)),
        'ionIcon': value.ionIcon,
        'link': value.link,
        'parameters': value.parameters,
        'relatedCards': value.relatedCards === undefined ? undefined : (value.relatedCards.map(CardToJSON)),
        'selectedButton': (0, _1.ButtonToJSON)(value.selectedButton),
        'sharingBody': value.sharingBody,
        'sharingButtons': value.sharingButtons === undefined ? undefined : (value.sharingButtons.map(_1.ButtonToJSON)),
        'sharingTitle': value.sharingTitle,
        'subHeader': value.subHeader,
        'subTitle': value.subTitle,
        'title': value.title,
    };
}
exports.CardToJSON = CardToJSON;
//# sourceMappingURL=Card.js.map