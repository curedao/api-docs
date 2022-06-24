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

/**
 * The PostUserSettingsDataResponse model module.
 * @module model/PostUserSettingsDataResponse
 * @version 0.0.1
 */
class PostUserSettingsDataResponse {
    /**
     * Constructs a new <code>PostUserSettingsDataResponse</code>.
     * @alias module:model/PostUserSettingsDataResponse
     */
    constructor() { 
        
        PostUserSettingsDataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostUserSettingsDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUserSettingsDataResponse} obj Optional instance to populate.
     * @return {module:model/PostUserSettingsDataResponse} The populated <code>PostUserSettingsDataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUserSettingsDataResponse();

            if (data.hasOwnProperty('purchaseId')) {
                obj['purchaseId'] = ApiClient.convertToType(data['purchaseId'], 'Number');
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
 * Ex: 1
 * @member {Number} purchaseId
 */
PostUserSettingsDataResponse.prototype['purchaseId'] = undefined;

/**
 * Can be used as body of help info popup
 * @member {String} description
 */
PostUserSettingsDataResponse.prototype['description'] = undefined;

/**
 * Can be used as title in help info popup
 * @member {String} summary
 */
PostUserSettingsDataResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
PostUserSettingsDataResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
PostUserSettingsDataResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
PostUserSettingsDataResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
PostUserSettingsDataResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
PostUserSettingsDataResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
PostUserSettingsDataResponse.prototype['card'] = undefined;






export default PostUserSettingsDataResponse;
