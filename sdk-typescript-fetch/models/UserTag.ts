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

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface UserTag
 */
export interface UserTag {
    /**
     * Number by which we multiply the tagged variable value to obtain the tag variable (ingredient) value
     * @type {number}
     * @memberof UserTag
     */
    conversionFactor: number;
    /**
     * This is the id of the variable being tagged with an ingredient or something.
     * @type {number}
     * @memberof UserTag
     */
    taggedVariableId: number;
    /**
     * This is the id of the ingredient variable whose value is determined based on the value of the tagged variable.
     * @type {number}
     * @memberof UserTag
     */
    tagVariableId: number;
}

export function UserTagFromJSON(json: any): UserTag {
    return UserTagFromJSONTyped(json, false);
}

export function UserTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'conversionFactor': json['conversionFactor'],
        'taggedVariableId': json['taggedVariableId'],
        'tagVariableId': json['tagVariableId'],
    };
}

export function UserTagToJSON(value?: UserTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'conversionFactor': value.conversionFactor,
        'taggedVariableId': value.taggedVariableId,
        'tagVariableId': value.tagVariableId,
    };
}


