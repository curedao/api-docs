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
} from './';

/**
 *
 * @export
 * @interface PostUserSettingsDataResponse
 */
export interface PostUserSettingsDataResponse {
    /**
     * Ex: 1
     * @type {number}
     * @memberof PostUserSettingsDataResponse
     */
    purchaseId?: number;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof PostUserSettingsDataResponse
     */
    description?: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof PostUserSettingsDataResponse
     */
    summary?: string;
    /**
     * Array of error objects with message property
     * @type {Array<ErrorResponse>}
     * @memberof PostUserSettingsDataResponse
     */
    errors?: Array<ErrorResponse>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof PostUserSettingsDataResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof PostUserSettingsDataResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof PostUserSettingsDataResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof PostUserSettingsDataResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof PostUserSettingsDataResponse
     */
    card?: Card;
}

export function PostUserSettingsDataResponseFromJSON(json: any): PostUserSettingsDataResponse {
    return PostUserSettingsDataResponseFromJSONTyped(json, false);
}

export function PostUserSettingsDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUserSettingsDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'purchaseId': !exists(json, 'purchaseId') ? undefined : json['purchaseId'],
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

export function PostUserSettingsDataResponseToJSON(value?: PostUserSettingsDataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'purchaseId': value.purchaseId,
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


