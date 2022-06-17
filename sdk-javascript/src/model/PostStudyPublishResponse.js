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
 * The PostStudyPublishResponse model module.
 * @module model/PostStudyPublishResponse
 * @version 0.0.1
 */
class PostStudyPublishResponse {
    /**
     * Constructs a new <code>PostStudyPublishResponse</code>.
     * @alias module:model/PostStudyPublishResponse
     */
    constructor() { 
        
        PostStudyPublishResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostStudyPublishResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostStudyPublishResponse} obj Optional instance to populate.
     * @return {module:model/PostStudyPublishResponse} The populated <code>PostStudyPublishResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostStudyPublishResponse();

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
 * Can be used as body of help info popup
 * @member {String} description
 */
PostStudyPublishResponse.prototype['description'] = undefined;

/**
 * Can be used as title in help info popup
 * @member {String} summary
 */
PostStudyPublishResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
PostStudyPublishResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
PostStudyPublishResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
PostStudyPublishResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
PostStudyPublishResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
PostStudyPublishResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
PostStudyPublishResponse.prototype['card'] = undefined;






export default PostStudyPublishResponse;

