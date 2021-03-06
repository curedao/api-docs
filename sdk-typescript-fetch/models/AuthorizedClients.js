"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizedClientsToJSON = exports.AuthorizedClientsFromJSONTyped = exports.AuthorizedClientsFromJSON = void 0;
var _1 = require("./");
function AuthorizedClientsFromJSON(json) {
    return AuthorizedClientsFromJSONTyped(json, false);
}
exports.AuthorizedClientsFromJSON = AuthorizedClientsFromJSON;
function AuthorizedClientsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apps': (json['apps'].map(_1.AppSettingsFromJSON)),
        'individuals': (json['individuals'].map(_1.AppSettingsFromJSON)),
        'studies': (json['studies'].map(_1.AppSettingsFromJSON)),
    };
}
exports.AuthorizedClientsFromJSONTyped = AuthorizedClientsFromJSONTyped;
function AuthorizedClientsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apps': (value.apps.map(_1.AppSettingsToJSON)),
        'individuals': (value.individuals.map(_1.AppSettingsToJSON)),
        'studies': (value.studies.map(_1.AppSettingsToJSON)),
    };
}
exports.AuthorizedClientsToJSON = AuthorizedClientsToJSON;
//# sourceMappingURL=AuthorizedClients.js.map
