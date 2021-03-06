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
exports.ParticipantInstructionToJSON = exports.ParticipantInstructionFromJSONTyped = exports.ParticipantInstructionFromJSON = void 0;
var runtime_1 = require("../runtime");
function ParticipantInstructionFromJSON(json) {
    return ParticipantInstructionFromJSONTyped(json, false);
}
exports.ParticipantInstructionFromJSON = ParticipantInstructionFromJSON;
function ParticipantInstructionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'instructionsForCauseVariable': !(0, runtime_1.exists)(json, 'instructionsForCauseVariable') ? undefined : json['instructionsForCauseVariable'],
        'instructionsForEffectVariable': !(0, runtime_1.exists)(json, 'instructionsForEffectVariable') ? undefined : json['instructionsForEffectVariable'],
    };
}
exports.ParticipantInstructionFromJSONTyped = ParticipantInstructionFromJSONTyped;
function ParticipantInstructionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'instructionsForCauseVariable': value.instructionsForCauseVariable,
        'instructionsForEffectVariable': value.instructionsForEffectVariable,
    };
}
exports.ParticipantInstructionToJSON = ParticipantInstructionToJSON;
//# sourceMappingURL=ParticipantInstruction.js.map
