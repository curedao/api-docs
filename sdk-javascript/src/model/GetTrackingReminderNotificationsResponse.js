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
 *
 */

import ApiClient from '../ApiClient';
import Card from './Card';
import Error from './Error';
import TrackingReminderNotification from './TrackingReminderNotification';

/**
 * The GetTrackingReminderNotificationsResponse model module.
 * @module model/GetTrackingReminderNotificationsResponse
 * @version 0.0.1
 */
class GetTrackingReminderNotificationsResponse {
    /**
     * Constructs a new <code>GetTrackingReminderNotificationsResponse</code>.
     * @alias module:model/GetTrackingReminderNotificationsResponse
     * @param description {String} Can be used as body of help info popup
     * @param summary {String} Can be used as title in help info popup
     */
    constructor(description, summary) { 
        
        GetTrackingReminderNotificationsResponse.initialize(this, description, summary);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, summary) { 
        obj['description'] = description;
        obj['summary'] = summary;
    }

    /**
     * Constructs a <code>GetTrackingReminderNotificationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTrackingReminderNotificationsResponse} obj Optional instance to populate.
     * @return {module:model/GetTrackingReminderNotificationsResponse} The populated <code>GetTrackingReminderNotificationsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTrackingReminderNotificationsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [TrackingReminderNotification]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('card')) {
                obj['card'] = Card.constructFromObject(data['card']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TrackingReminderNotification>} data
 */
GetTrackingReminderNotificationsResponse.prototype['data'] = undefined;

/**
 * Can be used as body of help info popup
 * @member {String} description
 */
GetTrackingReminderNotificationsResponse.prototype['description'] = undefined;

/**
 * Can be used as title in help info popup
 * @member {String} summary
 */
GetTrackingReminderNotificationsResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
GetTrackingReminderNotificationsResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
GetTrackingReminderNotificationsResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
GetTrackingReminderNotificationsResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
GetTrackingReminderNotificationsResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
GetTrackingReminderNotificationsResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
GetTrackingReminderNotificationsResponse.prototype['card'] = undefined;






export default GetTrackingReminderNotificationsResponse;
