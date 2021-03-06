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
 * @interface MeasurementUpdate
 */
export interface MeasurementUpdate {
    /**
     * Variable id of the measurement to be updated
     * @type {number}
     * @memberof MeasurementUpdate
     */
    id: number;
    /**
     * The new note for the measurement (optional)
     * @type {string}
     * @memberof MeasurementUpdate
     */
    note?: string;
    /**
     * The new timestamp for the the event in epoch seconds (optional)
     * @type {number}
     * @memberof MeasurementUpdate
     */
    startTime?: number;
    /**
     * The new value of for the measurement (optional)
     * @type {number}
     * @memberof MeasurementUpdate
     */
    value?: number;
}

export function MeasurementUpdateFromJSON(json: any): MeasurementUpdate {
    return MeasurementUpdateFromJSONTyped(json, false);
}

export function MeasurementUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeasurementUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'id': json['id'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'startTime': !exists(json, 'startTime') ? undefined : json['startTime'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function MeasurementUpdateToJSON(value?: MeasurementUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'id': value.id,
        'note': value.note,
        'startTime': value.startTime,
        'value': value.value,
    };
}


