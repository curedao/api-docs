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
    GetCorrelationsDataResponse,
    GetCorrelationsDataResponseFromJSON,
    GetCorrelationsDataResponseFromJSONTyped,
    GetCorrelationsDataResponseToJSON,
} from './';

/**
 *
 * @export
 * @interface GetCorrelationsResponse
 */
export interface GetCorrelationsResponse {
    /**
     *
     * @type {GetCorrelationsDataResponse}
     * @memberof GetCorrelationsResponse
     */
    data?: GetCorrelationsDataResponse;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof GetCorrelationsResponse
     */
    description: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof GetCorrelationsResponse
     */
    summary: string;
    /**
     * Square icon png url
     * @type {string}
     * @memberof GetCorrelationsResponse
     */
    avatar?: string;
    /**
     * Array of error objects with message property
     * @type {Array<ErrorResponse>}
     * @memberof GetCorrelationsResponse
     */
    errors?: Array<ErrorResponse>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof GetCorrelationsResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof GetCorrelationsResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof GetCorrelationsResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof GetCorrelationsResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof GetCorrelationsResponse
     */
    card?: Card;
}

export function GetCorrelationsResponseFromJSON(json: any): GetCorrelationsResponse {
    return GetCorrelationsResponseFromJSONTyped(json, false);
}

export function GetCorrelationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCorrelationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'data': !exists(json, 'data') ? undefined : GetCorrelationsDataResponseFromJSON(json['data']),
        'description': json['description'],
        'summary': json['summary'],
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorResponseFromJSON)),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
    };
}

export function GetCorrelationsResponseToJSON(value?: GetCorrelationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'data': GetCorrelationsDataResponseToJSON(value.data),
        'description': value.description,
        'summary': value.summary,
        'avatar': value.avatar,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ErrorResponseToJSON)),
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'link': value.link,
        'card': CardToJSON(value.card),
    };
}


