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
 * The TrackingReminderNotificationTrackAllAction model module.
 * @module model/TrackingReminderNotificationTrackAllAction
 * @version 0.0.1
 */
class TrackingReminderNotificationTrackAllAction {
    /**
     * Constructs a new <code>TrackingReminderNotificationTrackAllAction</code>.
     * @alias module:model/TrackingReminderNotificationTrackAllAction
     * @param action {String} Ex: trackAll
     * @param callback {String} Ex: trackThreeRatingAction
     * @param modifiedValue {Number} Ex: 3
     * @param title {String} Ex: Rate 3/5 for all
     */
    constructor(action, callback, modifiedValue, title) { 
        
        TrackingReminderNotificationTrackAllAction.initialize(this, action, callback, modifiedValue, title);
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
     * Constructs a <code>TrackingReminderNotificationTrackAllAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrackingReminderNotificationTrackAllAction} obj Optional instance to populate.
     * @return {module:model/TrackingReminderNotificationTrackAllAction} The populated <code>TrackingReminderNotificationTrackAllAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrackingReminderNotificationTrackAllAction();

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
        }
        return obj;
    }


}

/**
 * Ex: trackAll
 * @member {String} action
 */
TrackingReminderNotificationTrackAllAction.prototype['action'] = undefined;

/**
 * Ex: trackThreeRatingAction
 * @member {String} callback
 */
TrackingReminderNotificationTrackAllAction.prototype['callback'] = undefined;

/**
 * Ex: 3
 * @member {Number} modifiedValue
 */
TrackingReminderNotificationTrackAllAction.prototype['modifiedValue'] = undefined;

/**
 * Ex: Rate 3/5 for all
 * @member {String} title
 */
TrackingReminderNotificationTrackAllAction.prototype['title'] = undefined;






export default TrackingReminderNotificationTrackAllAction;

