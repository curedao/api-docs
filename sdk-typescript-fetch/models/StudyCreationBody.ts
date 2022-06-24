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
 * @interface StudyCreationBody
 */
export interface StudyCreationBody {
    /**
     * Name of predictor variable
     * @type {string}
     * @memberof StudyCreationBody
     */
    causeVariableName: string;
    /**
     * Name of the outcome variable
     * @type {string}
     * @memberof StudyCreationBody
     */
    effectVariableName: string;
    /**
     * Title of your study (optional)
     * @type {string}
     * @memberof StudyCreationBody
     */
    studyTitle?: string;
    /**
     * Individual studies are based on data of a single user. Group studies are based on data from a specific group of individuals who have joined.  Global studies are based on aggregated and anonymously shared data from all users.
     * @type {string}
     * @memberof StudyCreationBody
     */
    type: StudyCreationBodyTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum StudyCreationBodyTypeEnum {
    Individual = 'individual',
    Group = 'group',
    Global = 'global'
}

export function StudyCreationBodyFromJSON(json: any): StudyCreationBody {
    return StudyCreationBodyFromJSONTyped(json, false);
}

export function StudyCreationBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudyCreationBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'causeVariableName': json['causeVariableName'],
        'effectVariableName': json['effectVariableName'],
        'studyTitle': !exists(json, 'studyTitle') ? undefined : json['studyTitle'],
        'type': json['type'],
    };
}

export function StudyCreationBodyToJSON(value?: StudyCreationBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'causeVariableName': value.causeVariableName,
        'effectVariableName': value.effectVariableName,
        'studyTitle': value.studyTitle,
        'type': value.type,
    };
}

