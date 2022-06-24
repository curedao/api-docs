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
exports.StudyHtmlToJSON = exports.StudyHtmlFromJSONTyped = exports.StudyHtmlFromJSON = void 0;
var runtime_1 = require("../runtime");
function StudyHtmlFromJSON(json) {
    return StudyHtmlFromJSONTyped(json, false);
}
exports.StudyHtmlFromJSON = StudyHtmlFromJSON;
function StudyHtmlFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chartHtml': json['chartHtml'],
        'downloadButtonsHtml': !(0, runtime_1.exists)(json, 'downloadButtonsHtml') ? undefined : json['downloadButtonsHtml'],
        'fullPageWithHead': !(0, runtime_1.exists)(json, 'fullPageWithHead') ? undefined : json['fullPageWithHead'],
        'fullStudyHtml': json['fullStudyHtml'],
        'fullStudyHtmlWithCssStyles': !(0, runtime_1.exists)(json, 'fullStudyHtmlWithCssStyles') ? undefined : json['fullStudyHtmlWithCssStyles'],
        'participantInstructionsHtml': !(0, runtime_1.exists)(json, 'participantInstructionsHtml') ? undefined : json['participantInstructionsHtml'],
        'statisticsTableHtml': !(0, runtime_1.exists)(json, 'statisticsTableHtml') ? undefined : json['statisticsTableHtml'],
        'studyAbstractHtml': !(0, runtime_1.exists)(json, 'studyAbstractHtml') ? undefined : json['studyAbstractHtml'],
        'studyHeaderHtml': !(0, runtime_1.exists)(json, 'studyHeaderHtml') ? undefined : json['studyHeaderHtml'],
        'studyImageHtml': !(0, runtime_1.exists)(json, 'studyImageHtml') ? undefined : json['studyImageHtml'],
        'studyMetaHtml': !(0, runtime_1.exists)(json, 'studyMetaHtml') ? undefined : json['studyMetaHtml'],
        'studyTextHtml': !(0, runtime_1.exists)(json, 'studyTextHtml') ? undefined : json['studyTextHtml'],
        'socialSharingButtonHtml': !(0, runtime_1.exists)(json, 'socialSharingButtonHtml') ? undefined : json['socialSharingButtonHtml'],
        'studySummaryBoxHtml': !(0, runtime_1.exists)(json, 'studySummaryBoxHtml') ? undefined : json['studySummaryBoxHtml'],
    };
}
exports.StudyHtmlFromJSONTyped = StudyHtmlFromJSONTyped;
function StudyHtmlToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chartHtml': value.chartHtml,
        'downloadButtonsHtml': value.downloadButtonsHtml,
        'fullPageWithHead': value.fullPageWithHead,
        'fullStudyHtml': value.fullStudyHtml,
        'fullStudyHtmlWithCssStyles': value.fullStudyHtmlWithCssStyles,
        'participantInstructionsHtml': value.participantInstructionsHtml,
        'statisticsTableHtml': value.statisticsTableHtml,
        'studyAbstractHtml': value.studyAbstractHtml,
        'studyHeaderHtml': value.studyHeaderHtml,
        'studyImageHtml': value.studyImageHtml,
        'studyMetaHtml': value.studyMetaHtml,
        'studyTextHtml': value.studyTextHtml,
        'socialSharingButtonHtml': value.socialSharingButtonHtml,
        'studySummaryBoxHtml': value.studySummaryBoxHtml,
    };
}
exports.StudyHtmlToJSON = StudyHtmlToJSON;
//# sourceMappingURL=StudyHtml.js.map