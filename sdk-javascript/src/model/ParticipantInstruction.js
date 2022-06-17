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
 * The ParticipantInstruction model module.
 * @module model/ParticipantInstruction
 * @version 0.0.1
 */
class ParticipantInstruction {
    /**
     * Constructs a new <code>ParticipantInstruction</code>.
     * @alias module:model/ParticipantInstruction
     */
    constructor() { 
        
        ParticipantInstruction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantInstruction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParticipantInstruction} obj Optional instance to populate.
     * @return {module:model/ParticipantInstruction} The populated <code>ParticipantInstruction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantInstruction();

            if (data.hasOwnProperty('instructionsForCauseVariable')) {
                obj['instructionsForCauseVariable'] = ApiClient.convertToType(data['instructionsForCauseVariable'], 'String');
            }
            if (data.hasOwnProperty('instructionsForEffectVariable')) {
                obj['instructionsForEffectVariable'] = ApiClient.convertToType(data['instructionsForEffectVariable'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Ex: <a href=\"https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/dp/B01K9S260E/ref=as_li_ss_tl?ie=UTF8&qid=1493518902&sr=8-3&keywords=fitbit&th=1&linkCode=ll1&tag=quant08-20&linkId=b357b0833de73b0c4e935fd7c13a079e\">Obtain Fitbit</a> and use it to record your Sleep Duration. Once you have a <a href=\"https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/dp/B01K9S260E/ref=as_li_ss_tl?ie=UTF8&qid=1493518902&sr=8-3&keywords=fitbit&th=1&linkCode=ll1&tag=quant08-20&linkId=b357b0833de73b0c4e935fd7c13a079e\">Fitbit</a> account, <a href=\"https://web.quantimo.do/#/app/import\">connect your  Fitbit account at CureDAO</a> to automatically import and analyze your data.
 * @member {String} instructionsForCauseVariable
 */
ParticipantInstruction.prototype['instructionsForCauseVariable'] = undefined;

/**
 * Ex: <a href=\"https://curedao.org\">Obtain CureDAO</a> and use it to record your Overall Mood. Once you have a <a href=\"https://curedao.org\">CureDAO</a> account, <a href=\"https://web.quantimo.do/#/app/import\">connect your  CureDAO account at CureDAO</a> to automatically import and analyze your data.
 * @member {String} instructionsForEffectVariable
 */
ParticipantInstruction.prototype['instructionsForEffectVariable'] = undefined;






export default ParticipantInstruction;

