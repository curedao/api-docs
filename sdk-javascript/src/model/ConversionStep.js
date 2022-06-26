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
 * The ConversionStep model module.
 * @module model/ConversionStep
 * @version 0.0.1
 */
class ConversionStep {
    /**
     * Constructs a new <code>ConversionStep</code>.
     * @alias module:model/ConversionStep
     * @param operation {module:model/ConversionStep.OperationEnum} ADD or MULTIPLY
     * @param value {Number} This specifies the order of conversion steps starting with 0
     */
    constructor(operation, value) { 
        
        ConversionStep.initialize(this, operation, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operation, value) { 
        obj['operation'] = operation;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ConversionStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConversionStep} obj Optional instance to populate.
     * @return {module:model/ConversionStep} The populated <code>ConversionStep</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversionStep();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * ADD or MULTIPLY
 * @member {module:model/ConversionStep.OperationEnum} operation
 */
ConversionStep.prototype['operation'] = undefined;

/**
 * This specifies the order of conversion steps starting with 0
 * @member {Number} value
 */
ConversionStep.prototype['value'] = undefined;





/**
 * Allowed values for the <code>operation</code> property.
 * @enum {String}
 * @readonly
 */
ConversionStep['OperationEnum'] = {

    /**
     * value: "ADD"
     * @const
     */
    "ADD": "ADD",

    /**
     * value: "MULTIPLY"
     * @const
     */
    "MULTIPLY": "MULTIPLY"
};



export default ConversionStep;

