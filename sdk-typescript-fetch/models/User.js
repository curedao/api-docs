"use strict";
/* tslint:disable */
/* eslint-disable */
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
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserToJSON = exports.UserFromJSONTyped = exports.UserFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function UserFromJSON(json) {
    return UserFromJSONTyped(json, false);
}
exports.UserFromJSON = UserFromJSON;
function UserFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessToken': json['accessToken'],
        'accessTokenExpires': !(0, runtime_1.exists)(json, 'accessTokenExpires') ? undefined : json['accessTokenExpires'],
        'accessTokenExpiresAtMilliseconds': !(0, runtime_1.exists)(json, 'accessTokenExpiresAtMilliseconds') ? undefined : json['accessTokenExpiresAtMilliseconds'],
        'administrator': json['administrator'],
        'authorizedClients': !(0, runtime_1.exists)(json, 'authorizedClients') ? undefined : (0, _1.AuthorizedClientsFromJSON)(json['authorizedClients']),
        'avatar': !(0, runtime_1.exists)(json, 'avatar') ? undefined : json['avatar'],
        'avatarImage': !(0, runtime_1.exists)(json, 'avatarImage') ? undefined : json['avatarImage'],
        'capabilities': !(0, runtime_1.exists)(json, 'capabilities') ? undefined : json['capabilities'],
        'card': !(0, runtime_1.exists)(json, 'card') ? undefined : (0, _1.CardFromJSON)(json['card']),
        'clientId': !(0, runtime_1.exists)(json, 'clientId') ? undefined : json['clientId'],
        'clientUserId': !(0, runtime_1.exists)(json, 'clientUserId') ? undefined : json['clientUserId'],
        'combineNotifications': !(0, runtime_1.exists)(json, 'combineNotifications') ? undefined : json['combineNotifications'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'displayName': json['displayName'],
        'earliestReminderTime': !(0, runtime_1.exists)(json, 'earliestReminderTime') ? undefined : json['earliestReminderTime'],
        'email': json['email'],
        'firstName': !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        'getPreviewBuilds': !(0, runtime_1.exists)(json, 'getPreviewBuilds') ? undefined : json['getPreviewBuilds'],
        'hasAndroidApp': !(0, runtime_1.exists)(json, 'hasAndroidApp') ? undefined : json['hasAndroidApp'],
        'hasChromeExtension': !(0, runtime_1.exists)(json, 'hasChromeExtension') ? undefined : json['hasChromeExtension'],
        'hasIosApp': !(0, runtime_1.exists)(json, 'hasIosApp') ? undefined : json['hasIosApp'],
        'id': json['id'],
        'lastActive': !(0, runtime_1.exists)(json, 'lastActive') ? undefined : json['lastActive'],
        'lastFour': !(0, runtime_1.exists)(json, 'lastFour') ? undefined : json['lastFour'],
        'lastName': !(0, runtime_1.exists)(json, 'lastName') ? undefined : json['lastName'],
        'lastSmsTrackingReminderNotificationId': !(0, runtime_1.exists)(json, 'lastSmsTrackingReminderNotificationId') ? undefined : json['lastSmsTrackingReminderNotificationId'],
        'latestReminderTime': !(0, runtime_1.exists)(json, 'latestReminderTime') ? undefined : json['latestReminderTime'],
        'loginName': json['loginName'],
        'password': !(0, runtime_1.exists)(json, 'password') ? undefined : json['password'],
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'phoneVerificationCode': !(0, runtime_1.exists)(json, 'phoneVerificationCode') ? undefined : json['phoneVerificationCode'],
        'primaryOutcomeVariableId': !(0, runtime_1.exists)(json, 'primaryOutcomeVariableId') ? undefined : json['primaryOutcomeVariableId'],
        'primaryOutcomeVariableName': !(0, runtime_1.exists)(json, 'primaryOutcomeVariableName') ? undefined : json['primaryOutcomeVariableName'],
        'pushNotificationsEnabled': !(0, runtime_1.exists)(json, 'pushNotificationsEnabled') ? undefined : json['pushNotificationsEnabled'],
        'refreshToken': !(0, runtime_1.exists)(json, 'refreshToken') ? undefined : json['refreshToken'],
        'roles': !(0, runtime_1.exists)(json, 'roles') ? undefined : json['roles'],
        'sendPredictorEmails': !(0, runtime_1.exists)(json, 'sendPredictorEmails') ? undefined : json['sendPredictorEmails'],
        'sendReminderNotificationEmails': !(0, runtime_1.exists)(json, 'sendReminderNotificationEmails') ? undefined : json['sendReminderNotificationEmails'],
        'shareAllData': !(0, runtime_1.exists)(json, 'shareAllData') ? undefined : json['shareAllData'],
        'smsNotificationsEnabled': !(0, runtime_1.exists)(json, 'smsNotificationsEnabled') ? undefined : json['smsNotificationsEnabled'],
        'stripeActive': !(0, runtime_1.exists)(json, 'stripeActive') ? undefined : json['stripeActive'],
        'stripeId': !(0, runtime_1.exists)(json, 'stripeId') ? undefined : json['stripeId'],
        'stripePlan': !(0, runtime_1.exists)(json, 'stripePlan') ? undefined : json['stripePlan'],
        'stripeSubscription': !(0, runtime_1.exists)(json, 'stripeSubscription') ? undefined : json['stripeSubscription'],
        'subscriptionEndsAt': !(0, runtime_1.exists)(json, 'subscriptionEndsAt') ? undefined : json['subscriptionEndsAt'],
        'subscriptionProvider': !(0, runtime_1.exists)(json, 'subscriptionProvider') ? undefined : json['subscriptionProvider'],
        'timeZoneOffset': !(0, runtime_1.exists)(json, 'timeZoneOffset') ? undefined : json['timeZoneOffset'],
        'trackLocation': !(0, runtime_1.exists)(json, 'trackLocation') ? undefined : json['trackLocation'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'userRegistered': !(0, runtime_1.exists)(json, 'userRegistered') ? undefined : json['userRegistered'],
        'userUrl': !(0, runtime_1.exists)(json, 'userUrl') ? undefined : json['userUrl'],
    };
}
exports.UserFromJSONTyped = UserFromJSONTyped;
function UserToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessToken': value.accessToken,
        'accessTokenExpires': value.accessTokenExpires,
        'accessTokenExpiresAtMilliseconds': value.accessTokenExpiresAtMilliseconds,
        'administrator': value.administrator,
        'authorizedClients': (0, _1.AuthorizedClientsToJSON)(value.authorizedClients),
        'avatar': value.avatar,
        'avatarImage': value.avatarImage,
        'capabilities': value.capabilities,
        'card': (0, _1.CardToJSON)(value.card),
        'clientId': value.clientId,
        'clientUserId': value.clientUserId,
        'combineNotifications': value.combineNotifications,
        'createdAt': value.createdAt,
        'description': value.description,
        'displayName': value.displayName,
        'earliestReminderTime': value.earliestReminderTime,
        'email': value.email,
        'firstName': value.firstName,
        'getPreviewBuilds': value.getPreviewBuilds,
        'hasAndroidApp': value.hasAndroidApp,
        'hasChromeExtension': value.hasChromeExtension,
        'hasIosApp': value.hasIosApp,
        'id': value.id,
        'lastActive': value.lastActive,
        'lastFour': value.lastFour,
        'lastName': value.lastName,
        'lastSmsTrackingReminderNotificationId': value.lastSmsTrackingReminderNotificationId,
        'latestReminderTime': value.latestReminderTime,
        'loginName': value.loginName,
        'password': value.password,
        'phoneNumber': value.phoneNumber,
        'phoneVerificationCode': value.phoneVerificationCode,
        'primaryOutcomeVariableId': value.primaryOutcomeVariableId,
        'primaryOutcomeVariableName': value.primaryOutcomeVariableName,
        'pushNotificationsEnabled': value.pushNotificationsEnabled,
        'refreshToken': value.refreshToken,
        'roles': value.roles,
        'sendPredictorEmails': value.sendPredictorEmails,
        'sendReminderNotificationEmails': value.sendReminderNotificationEmails,
        'shareAllData': value.shareAllData,
        'smsNotificationsEnabled': value.smsNotificationsEnabled,
        'stripeActive': value.stripeActive,
        'stripeId': value.stripeId,
        'stripePlan': value.stripePlan,
        'stripeSubscription': value.stripeSubscription,
        'subscriptionEndsAt': value.subscriptionEndsAt,
        'subscriptionProvider': value.subscriptionProvider,
        'timeZoneOffset': value.timeZoneOffset,
        'trackLocation': value.trackLocation,
        'updatedAt': value.updatedAt,
        'userRegistered': value.userRegistered,
        'userUrl': value.userUrl,
    };
}
exports.UserToJSON = UserToJSON;
//# sourceMappingURL=User.js.map