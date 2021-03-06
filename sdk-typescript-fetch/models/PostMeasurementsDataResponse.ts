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
import {
    Card,
    CardFromJSON,
    CardFromJSONTyped,
    CardToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseFromJSONTyped,
    ErrorResponseToJSON,
    Variable,
    VariableFromJSON,
    VariableFromJSONTyped,
    VariableToJSON,
} from './';

/**
 * 
 * @export
 * @interface PostMeasurementsDataResponse
 */
export interface PostMeasurementsDataResponse {
    /**
     * 
     * @type {Array<Variable>}
     * @memberof PostMeasurementsDataResponse
     */
    userVariables?: Array<Variable>;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof PostMeasurementsDataResponse
     */
    description?: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof PostMeasurementsDataResponse
     */
    summary?: string;
    /**
     * Array of error objects with message property
     * @type {Array<ErrorResponse>}
     * @memberof PostMeasurementsDataResponse
     */
    errors?: Array<ErrorResponse>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof PostMeasurementsDataResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof PostMeasurementsDataResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof PostMeasurementsDataResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof PostMeasurementsDataResponse
     */
    link?: string;
    /**
     * 
     * @type {Card}
     * @memberof PostMeasurementsDataResponse
     */
    card?: Card;
}

export function PostMeasurementsDataResponseFromJSON(json: any): PostMeasurementsDataResponse {
    return PostMeasurementsDataResponseFromJSONTyped(json, false);
}

export function PostMeasurementsDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostMeasurementsDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userVariables': !exists(json, 'userVariables') ? undefined : ((json['userVariables'] as Array<any>).map(VariableFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorResponseFromJSON)),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
    };
}

export function PostMeasurementsDataResponseToJSON(value?: PostMeasurementsDataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userVariables': value.userVariables === undefined ? undefined : ((value.userVariables as Array<any>).map(VariableToJSON)),
        'description': value.description,
        'summary': value.summary,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ErrorResponseToJSON)),
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'link': value.link,
        'card': CardToJSON(value.card),
    };
}


