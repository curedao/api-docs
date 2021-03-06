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
exports.StudyVotesToJSON = exports.StudyVotesFromJSONTyped = exports.StudyVotesFromJSON = void 0;
function StudyVotesFromJSON(json) {
    return StudyVotesFromJSONTyped(json, false);
}
exports.StudyVotesFromJSON = StudyVotesFromJSON;
function StudyVotesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'averageVote': json['averageVote'],
        'userVote': json['userVote'],
    };
}
exports.StudyVotesFromJSONTyped = StudyVotesFromJSONTyped;
function StudyVotesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'averageVote': value.averageVote,
        'userVote': value.userVote,
    };
}
exports.StudyVotesToJSON = StudyVotesToJSON;
//# sourceMappingURL=StudyVotes.js.map
