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

/**
 * The TrackingReminderNotificationAction model module.
 * @module model/TrackingReminderNotificationAction
 * @version 0.0.1
 */
class TrackingReminderNotificationAction {
    /**
     * Constructs a new <code>TrackingReminderNotificationAction</code>.
     * @alias module:model/TrackingReminderNotificationAction
     * @param action {String} Ex: track
     * @param callback {String} Ex: trackThreeRatingAction
     * @param modifiedValue {Number} Ex: 3
     * @param title {String} Ex: 3/5
     */
    constructor(action, callback, modifiedValue, title) { 
        
        TrackingReminderNotificationAction.initialize(this, action, callback, modifiedValue, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, callback, modifiedValue, title) { 
        obj['action'] = action;
        obj['callback'] = callback;
        obj['modifiedValue'] = modifiedValue;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>TrackingReminderNotificationAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrackingReminderNotificationAction} obj Optional instance to populate.
     * @return {module:model/TrackingReminderNotificationAction} The populated <code>TrackingReminderNotificationAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrackingReminderNotificationAction();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('callback')) {
                obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
            }
            if (data.hasOwnProperty('modifiedValue')) {
                obj['modifiedValue'] = ApiClient.convertToType(data['modifiedValue'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('longTitle')) {
                obj['longTitle'] = ApiClient.convertToType(data['longTitle'], 'String');
            }
            if (data.hasOwnProperty('shortTitle')) {
                obj['shortTitle'] = ApiClient.convertToType(data['shortTitle'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Ex: track
 * @member {String} action
 */
TrackingReminderNotificationAction.prototype['action'] = undefined;

/**
 * Ex: trackThreeRatingAction
 * @member {String} callback
 */
TrackingReminderNotificationAction.prototype['callback'] = undefined;

/**
 * Ex: 3
 * @member {Number} modifiedValue
 */
TrackingReminderNotificationAction.prototype['modifiedValue'] = undefined;

/**
 * Ex: 3/5
 * @member {String} title
 */
TrackingReminderNotificationAction.prototype['title'] = undefined;

/**
 * Ex: Rate 3/5
 * @member {String} longTitle
 */
TrackingReminderNotificationAction.prototype['longTitle'] = undefined;

/**
 * Ex: 3
 * @member {String} shortTitle
 */
TrackingReminderNotificationAction.prototype['shortTitle'] = undefined;






export default TrackingReminderNotificationAction;

