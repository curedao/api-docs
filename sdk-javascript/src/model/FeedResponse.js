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
 * The FeedResponse model module.
 * @module model/FeedResponse
 * @version 0.0.1
 */
class FeedResponse {
    /**
     * Constructs a new <code>FeedResponse</code>.
     * @alias module:model/FeedResponse
     * @param cards {Array.<module:model/Card>} 
     * @param description {String} Tracking reminder notifications, messages, and study result cards that can be displayed in user feed or stream
     * @param summary {String} Tracking reminder notifications, messages, and study results
     */
    constructor(cards, description, summary) { 
        
        FeedResponse.initialize(this, cards, description, summary);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cards, description, summary) { 
        obj['cards'] = cards;
        obj['description'] = description;
        obj['summary'] = summary;
    }

    /**
     * Constructs a <code>FeedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeedResponse} obj Optional instance to populate.
     * @return {module:model/FeedResponse} The populated <code>FeedResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeedResponse();

            if (data.hasOwnProperty('cards')) {
                obj['cards'] = ApiClient.convertToType(data['cards'], [Card]);
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
 * @member {Array.<module:model/Card>} cards
 */
FeedResponse.prototype['cards'] = undefined;

/**
 * Tracking reminder notifications, messages, and study result cards that can be displayed in user feed or stream
 * @member {String} description
 */
FeedResponse.prototype['description'] = undefined;

/**
 * Tracking reminder notifications, messages, and study results
 * @member {String} summary
 */
FeedResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
FeedResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
FeedResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
FeedResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
FeedResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
FeedResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
FeedResponse.prototype['card'] = undefined;






export default FeedResponse;

