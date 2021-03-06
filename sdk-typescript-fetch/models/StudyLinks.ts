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
 * @interface StudyLinks
 */
export interface StudyLinks {
    /**
     * Share this link with potential study participants
     * @type {string}
     * @memberof StudyLinks
     */
    studyJoinLink?: string;
    /**
     * Ex: mailto:?subject=N1%20Study%3A%20Sleep%20Quality%20Predicts%20Higher%20Overall%20Mood&body=Check%20out%20my%20study%20at%20https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230%0A%0AHave%20a%20great%20day!
     * @type {string}
     * @memberof StudyLinks
     */
    studyLinkEmail: string;
    /**
     * Ex: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230
     * @type {string}
     * @memberof StudyLinks
     */
    studyLinkFacebook: string;
    /**
     * Ex: https://plus.google.com/share?url=https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230
     * @type {string}
     * @memberof StudyLinks
     */
    studyLinkGoogle: string;
    /**
     * Ex: https://local.curedao.org/api/v2/study?causeVariableName=Sleep%20Quality&effectVariableName=Overall%20Mood&userId=230
     * @type {string}
     * @memberof StudyLinks
     */
    studyLinkStatic: string;
    /**
     * Ex: https://local.curedao.org/ionic/Modo/www/index.html#/app/study?causeVariableName=Sleep%20Quality&effectVariableName=Overall%20Mood&userId=230
     * @type {string}
     * @memberof StudyLinks
     */
    studyLinkDynamic: string;
    /**
     * Ex: https://twitter.com/home?status=Sleep%20Quality%20Predicts%20Higher%20Overall%20Mood%20https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230%20%40curedao
     * @type {string}
     * @memberof StudyLinks
     */
    studyLinkTwitter: string;
}

export function StudyLinksFromJSON(json: any): StudyLinks {
    return StudyLinksFromJSONTyped(json, false);
}

export function StudyLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudyLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'studyJoinLink': !exists(json, 'studyJoinLink') ? undefined : json['studyJoinLink'],
        'studyLinkEmail': json['studyLinkEmail'],
        'studyLinkFacebook': json['studyLinkFacebook'],
        'studyLinkGoogle': json['studyLinkGoogle'],
        'studyLinkStatic': json['studyLinkStatic'],
        'studyLinkDynamic': json['studyLinkDynamic'],
        'studyLinkTwitter': json['studyLinkTwitter'],
    };
}

export function StudyLinksToJSON(value?: StudyLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'studyJoinLink': value.studyJoinLink,
        'studyLinkEmail': value.studyLinkEmail,
        'studyLinkFacebook': value.studyLinkFacebook,
        'studyLinkGoogle': value.studyLinkGoogle,
        'studyLinkStatic': value.studyLinkStatic,
        'studyLinkDynamic': value.studyLinkDynamic,
        'studyLinkTwitter': value.studyLinkTwitter,
    };
}


