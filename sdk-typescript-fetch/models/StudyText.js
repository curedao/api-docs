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
exports.StudyTextToJSON = exports.StudyTextFromJSONTyped = exports.StudyTextFromJSON = void 0;
var runtime_1 = require("../runtime");
function StudyTextFromJSON(json) {
    return StudyTextFromJSONTyped(json, false);
}
exports.StudyTextFromJSON = StudyTextFromJSON;
function StudyTextFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'averageEffectFollowingHighCauseExplanation': !(0, runtime_1.exists)(json, 'averageEffectFollowingHighCauseExplanation') ? undefined : json['averageEffectFollowingHighCauseExplanation'],
        'averageEffectFollowingLowCauseExplanation': !(0, runtime_1.exists)(json, 'averageEffectFollowingLowCauseExplanation') ? undefined : json['averageEffectFollowingLowCauseExplanation'],
        'valuePredictingHighOutcomeExplanation': !(0, runtime_1.exists)(json, 'valuePredictingHighOutcomeExplanation') ? undefined : json['valuePredictingHighOutcomeExplanation'],
        'valuePredictingLowOutcomeExplanation': !(0, runtime_1.exists)(json, 'valuePredictingLowOutcomeExplanation') ? undefined : json['valuePredictingLowOutcomeExplanation'],
        'dataAnalysis': !(0, runtime_1.exists)(json, 'dataAnalysis') ? undefined : json['dataAnalysis'],
        'dataSources': !(0, runtime_1.exists)(json, 'dataSources') ? undefined : json['dataSources'],
        'dataSourcesParagraphForCause': !(0, runtime_1.exists)(json, 'dataSourcesParagraphForCause') ? undefined : json['dataSourcesParagraphForCause'],
        'dataSourcesParagraphForEffect': !(0, runtime_1.exists)(json, 'dataSourcesParagraphForEffect') ? undefined : json['dataSourcesParagraphForEffect'],
        'lastCauseDailyValueSentenceExtended': !(0, runtime_1.exists)(json, 'lastCauseDailyValueSentenceExtended') ? undefined : json['lastCauseDailyValueSentenceExtended'],
        'lastCauseAndOptimalValueSentence': !(0, runtime_1.exists)(json, 'lastCauseAndOptimalValueSentence') ? undefined : json['lastCauseAndOptimalValueSentence'],
        'lastCauseDailyValueSentence': !(0, runtime_1.exists)(json, 'lastCauseDailyValueSentence') ? undefined : json['lastCauseDailyValueSentence'],
        'optimalDailyValueSentence': !(0, runtime_1.exists)(json, 'optimalDailyValueSentence') ? undefined : json['optimalDailyValueSentence'],
        'participantInstructions': !(0, runtime_1.exists)(json, 'participantInstructions') ? undefined : json['participantInstructions'],
        'predictorExplanation': !(0, runtime_1.exists)(json, 'predictorExplanation') ? undefined : json['predictorExplanation'],
        'significanceExplanation': !(0, runtime_1.exists)(json, 'significanceExplanation') ? undefined : json['significanceExplanation'],
        'studyAbstract': json['studyAbstract'],
        'studyDesign': json['studyDesign'],
        'studyLimitations': json['studyLimitations'],
        'studyObjective': json['studyObjective'],
        'studyResults': json['studyResults'],
        'studyTitle': json['studyTitle'],
        'studyInvitation': !(0, runtime_1.exists)(json, 'studyInvitation') ? undefined : json['studyInvitation'],
        'studyQuestion': !(0, runtime_1.exists)(json, 'studyQuestion') ? undefined : json['studyQuestion'],
        'studyBackground': !(0, runtime_1.exists)(json, 'studyBackground') ? undefined : json['studyBackground'],
    };
}
exports.StudyTextFromJSONTyped = StudyTextFromJSONTyped;
function StudyTextToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'averageEffectFollowingHighCauseExplanation': value.averageEffectFollowingHighCauseExplanation,
        'averageEffectFollowingLowCauseExplanation': value.averageEffectFollowingLowCauseExplanation,
        'valuePredictingHighOutcomeExplanation': value.valuePredictingHighOutcomeExplanation,
        'valuePredictingLowOutcomeExplanation': value.valuePredictingLowOutcomeExplanation,
        'dataAnalysis': value.dataAnalysis,
        'dataSources': value.dataSources,
        'dataSourcesParagraphForCause': value.dataSourcesParagraphForCause,
        'dataSourcesParagraphForEffect': value.dataSourcesParagraphForEffect,
        'lastCauseDailyValueSentenceExtended': value.lastCauseDailyValueSentenceExtended,
        'lastCauseAndOptimalValueSentence': value.lastCauseAndOptimalValueSentence,
        'lastCauseDailyValueSentence': value.lastCauseDailyValueSentence,
        'optimalDailyValueSentence': value.optimalDailyValueSentence,
        'participantInstructions': value.participantInstructions,
        'predictorExplanation': value.predictorExplanation,
        'significanceExplanation': value.significanceExplanation,
        'studyAbstract': value.studyAbstract,
        'studyDesign': value.studyDesign,
        'studyLimitations': value.studyLimitations,
        'studyObjective': value.studyObjective,
        'studyResults': value.studyResults,
        'studyTitle': value.studyTitle,
        'studyInvitation': value.studyInvitation,
        'studyQuestion': value.studyQuestion,
        'studyBackground': value.studyBackground,
    };
}
exports.StudyTextToJSON = StudyTextToJSON;
//# sourceMappingURL=StudyText.js.map