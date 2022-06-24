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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ParticipantInstruction
 */
export interface ParticipantInstruction {
    /**
     * Ex: <a href="https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/dp/B01K9S260E/ref=as_li_ss_tl?ie=UTF8&qid=1493518902&sr=8-3&keywords=fitbit&th=1&linkCode=ll1&tag=quant08-20&linkId=b357b0833de73b0c4e935fd7c13a079e">Obtain Fitbit</a> and use it to record your Sleep Duration. Once you have a <a href="https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/dp/B01K9S260E/ref=as_li_ss_tl?ie=UTF8&qid=1493518902&sr=8-3&keywords=fitbit&th=1&linkCode=ll1&tag=quant08-20&linkId=b357b0833de73b0c4e935fd7c13a079e">Fitbit</a> account, <a href="https://app.curedao.org/#/app/import">connect your  Fitbit account at CureDAO</a> to automatically import and analyze your data.
     * @type {string}
     * @memberof ParticipantInstruction
     */
    instructionsForCauseVariable?: string;
    /**
     * Ex: <a href="https://curedao.org">Obtain CureDAO</a> and use it to record your Overall Mood. Once you have a <a href="https://curedao.org">CureDAO</a> account, <a href="https://app.curedao.org/#/app/import">connect your  CureDAO account at CureDAO</a> to automatically import and analyze your data.
     * @type {string}
     * @memberof ParticipantInstruction
     */
    instructionsForEffectVariable?: string;
}

export function ParticipantInstructionFromJSON(json: any): ParticipantInstruction {
    return ParticipantInstructionFromJSONTyped(json, false);
}

export function ParticipantInstructionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParticipantInstruction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'instructionsForCauseVariable': !exists(json, 'instructionsForCauseVariable') ? undefined : json['instructionsForCauseVariable'],
        'instructionsForEffectVariable': !exists(json, 'instructionsForEffectVariable') ? undefined : json['instructionsForEffectVariable'],
    };
}

export function ParticipantInstructionToJSON(value?: ParticipantInstruction | null): any {
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

