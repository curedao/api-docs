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
 * @interface TrackingReminderNotificationAction
 */
export interface TrackingReminderNotificationAction {
    /**
     * Ex: track
     * @type {string}
     * @memberof TrackingReminderNotificationAction
     */
    action: string;
    /**
     * Ex: trackThreeRatingAction
     * @type {string}
     * @memberof TrackingReminderNotificationAction
     */
    callback: string;
    /**
     * Ex: 3
     * @type {number}
     * @memberof TrackingReminderNotificationAction
     */
    modifiedValue: number;
    /**
     * Ex: 3/5
     * @type {string}
     * @memberof TrackingReminderNotificationAction
     */
    title: string;
    /**
     * Ex: Rate 3/5
     * @type {string}
     * @memberof TrackingReminderNotificationAction
     */
    longTitle?: string;
    /**
     * Ex: 3
     * @type {string}
     * @memberof TrackingReminderNotificationAction
     */
    shortTitle?: string;
}

export function TrackingReminderNotificationActionFromJSON(json: any): TrackingReminderNotificationAction {
    return TrackingReminderNotificationActionFromJSONTyped(json, false);
}

export function TrackingReminderNotificationActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackingReminderNotificationAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'callback': json['callback'],
        'modifiedValue': json['modifiedValue'],
        'title': json['title'],
        'longTitle': !exists(json, 'longTitle') ? undefined : json['longTitle'],
        'shortTitle': !exists(json, 'shortTitle') ? undefined : json['shortTitle'],
    };
}

export function TrackingReminderNotificationActionToJSON(value?: TrackingReminderNotificationAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'callback': value.callback,
        'modifiedValue': value.modifiedValue,
        'title': value.title,
        'longTitle': value.longTitle,
        'shortTitle': value.shortTitle,
    };
}


