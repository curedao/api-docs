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
 * @interface DeviceToken
 */
export interface DeviceToken {
    /**
     * Client id
     * @type {string}
     * @memberof DeviceToken
     */
    clientId?: string;
    /**
     * ios, android, or web
     * @type {string}
     * @memberof DeviceToken
     */
    platform: string;
    /**
     * The device token
     * @type {string}
     * @memberof DeviceToken
     */
    deviceToken: string;
}

export function DeviceTokenFromJSON(json: any): DeviceToken {
    return DeviceTokenFromJSONTyped(json, false);
}

export function DeviceTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'platform': json['platform'],
        'deviceToken': json['deviceToken'],
    };
}

export function DeviceTokenToJSON(value?: DeviceToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientId': value.clientId,
        'platform': value.platform,
        'deviceToken': value.deviceToken,
    };
}

