"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommonResponse = _interopRequireDefault(require("../model/CommonResponse"));

var _GetStudiesResponse = _interopRequireDefault(require("../model/GetStudiesResponse"));

var _JsonErrorResponse = _interopRequireDefault(require("../model/JsonErrorResponse"));

var _PostStudyCreateResponse = _interopRequireDefault(require("../model/PostStudyCreateResponse"));

var _PostStudyPublishResponse = _interopRequireDefault(require("../model/PostStudyPublishResponse"));

var _Study = _interopRequireDefault(require("../model/Study"));

var _StudyCreationBody = _interopRequireDefault(require("../model/StudyCreationBody"));

var _StudyJoinResponse = _interopRequireDefault(require("../model/StudyJoinResponse"));

var _Vote = _interopRequireDefault(require("../model/Vote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Studies service.
* @module api/StudiesApi
* @version 0.0.1
*/
var StudiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StudiesApi. 
  * @alias module:api/StudiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StudiesApi(apiClient) {
    _classCallCheck(this, StudiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createStudy operation.
   * @callback module:api/StudiesApi~createStudyCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PostStudyCreateResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Study
   * Create an individual, group, or population study examining the relationship between a predictor and outcome variable. You will be given a study id which you can invite participants to join and share their measurements for the specified variables.
   * @param {module:model/StudyCreationBody} body Details about the study you want to create
   * @param {Object} opts Optional parameters
   * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.quantimo.do
   * @param {module:api/StudiesApi~createStudyCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PostStudyCreateResponse}
   */


  _createClass(StudiesApi, [{
    key: "createStudy",
    value: function createStudy(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createStudy");
      }

      var pathParams = {};
      var queryParams = {
        'clientId': opts['clientId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PostStudyCreateResponse["default"];
      return this.apiClient.callApi('/v3/study/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteVote operation.
     * @callback module:api/StudiesApi~deleteVoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommonResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete vote
     * Delete previously posted vote
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {module:api/StudiesApi~deleteVoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommonResponse}
     */

  }, {
    key: "deleteVote",
    value: function deleteVote(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'userId': opts['userId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CommonResponse["default"];
      return this.apiClient.callApi('/v3/votes/delete', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOpenStudies operation.
     * @callback module:api/StudiesApi~getOpenStudiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStudiesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * These are open studies that anyone can join
     * These are studies that anyone can join and share their data for the predictor and outcome variables of interest.
     * @param {Object} opts Optional parameters
     * @param {String} opts.causeVariableName Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.effectVariableName Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.causeVariableId Variable id of the hypothetical predictor variable.  Ex: 1398
     * @param {Number} opts.effectVariableId Variable id of the outcome variable of interest.  Ex: 1398
     * @param {String} opts.predictorVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.outcomeVariableName Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.userId User's id
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.quantimo.do
     * @param {Boolean} opts.includeCharts Highcharts configs that can be used if you have highcharts.js included on the page.  This only works if the id or name query parameter is also provided.
     * @param {Boolean} opts.recalculate Recalculate instead of using cached analysis
     * @param {String} opts.studyId Client id for the study you want
     * @param {module:api/StudiesApi~getOpenStudiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStudiesResponse}
     */

  }, {
    key: "getOpenStudies",
    value: function getOpenStudies(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'causeVariableName': opts['causeVariableName'],
        'effectVariableName': opts['effectVariableName'],
        'causeVariableId': opts['causeVariableId'],
        'effectVariableId': opts['effectVariableId'],
        'predictorVariableName': opts['predictorVariableName'],
        'outcomeVariableName': opts['outcomeVariableName'],
        'userId': opts['userId'],
        'clientId': opts['clientId'],
        'includeCharts': opts['includeCharts'],
        'recalculate': opts['recalculate'],
        'studyId': opts['studyId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetStudiesResponse["default"];
      return this.apiClient.callApi('/v3/studies/open', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getStudies operation.
     * @callback module:api/StudiesApi~getStudiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStudiesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Personal or Population Studies
     * If you have enough data, this will be a list of your personal studies, otherwise it will consist of aggregated population studies.
     * @param {Object} opts Optional parameters
     * @param {String} opts.causeVariableName Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.effectVariableName Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.causeVariableId Variable id of the hypothetical predictor variable.  Ex: 1398
     * @param {Number} opts.effectVariableId Variable id of the outcome variable of interest.  Ex: 1398
     * @param {String} opts.predictorVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.outcomeVariableName Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.userId User's id
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.quantimo.do
     * @param {Boolean} opts.includeCharts Highcharts configs that can be used if you have highcharts.js included on the page.  This only works if the id or name query parameter is also provided.
     * @param {Boolean} opts.recalculate Recalculate instead of using cached analysis
     * @param {String} opts.studyId Client id for the study you want
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {String} opts.correlationCoefficient Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Boolean} opts.outcomesOfInterest Only include correlations for which the effect is an outcome of interest for the user
     * @param {Number} opts.principalInvestigatorUserId These are studies created by a specific principal investigator
     * @param {Boolean} opts.open These are studies that anyone can join
     * @param {Boolean} opts.joined These are studies that you have joined
     * @param {Boolean} opts.created These are studies that you have created
     * @param {Boolean} opts.aggregated These are aggregated n=1 studies based on the entire population of users that have shared their data
     * @param {Boolean} opts.downvoted These are studies that you have down-voted
     * @param {module:api/StudiesApi~getStudiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStudiesResponse}
     */

  }, {
    key: "getStudies",
    value: function getStudies(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'causeVariableName': opts['causeVariableName'],
        'effectVariableName': opts['effectVariableName'],
        'causeVariableId': opts['causeVariableId'],
        'effectVariableId': opts['effectVariableId'],
        'predictorVariableName': opts['predictorVariableName'],
        'outcomeVariableName': opts['outcomeVariableName'],
        'userId': opts['userId'],
        'clientId': opts['clientId'],
        'includeCharts': opts['includeCharts'],
        'recalculate': opts['recalculate'],
        'studyId': opts['studyId'],
        'sort': opts['sort'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'correlationCoefficient': opts['correlationCoefficient'],
        'updatedAt': opts['updatedAt'],
        'outcomesOfInterest': opts['outcomesOfInterest'],
        'principalInvestigatorUserId': opts['principalInvestigatorUserId'],
        'open': opts['open'],
        'joined': opts['joined'],
        'created': opts['created'],
        'aggregated': opts['aggregated'],
        'downvoted': opts['downvoted']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetStudiesResponse["default"];
      return this.apiClient.callApi('/v3/studies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getStudiesCreated operation.
     * @callback module:api/StudiesApi~getStudiesCreatedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStudiesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get studies you have created
     * These are studies that you have created.
     * @param {Object} opts Optional parameters
     * @param {String} opts.causeVariableName Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.effectVariableName Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.causeVariableId Variable id of the hypothetical predictor variable.  Ex: 1398
     * @param {Number} opts.effectVariableId Variable id of the outcome variable of interest.  Ex: 1398
     * @param {String} opts.predictorVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.outcomeVariableName Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {Number} opts.userId User's id
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.quantimo.do
     * @param {module:api/StudiesApi~getStudiesCreatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStudiesResponse}
     */

  }, {
    key: "getStudiesCreated",
    value: function getStudiesCreated(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'causeVariableName': opts['causeVariableName'],
        'effectVariableName': opts['effectVariableName'],
        'causeVariableId': opts['causeVariableId'],
        'effectVariableId': opts['effectVariableId'],
        'predictorVariableName': opts['predictorVariableName'],
        'outcomeVariableName': opts['outcomeVariableName'],
        'sort': opts['sort'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'userId': opts['userId'],
        'updatedAt': opts['updatedAt'],
        'clientId': opts['clientId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetStudiesResponse["default"];
      return this.apiClient.callApi('/v3/studies/created', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getStudiesJoined operation.
     * @callback module:api/StudiesApi~getStudiesJoinedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStudiesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Studies You Have Joined
     * These are studies that you are currently sharing your data with.
     * @param {Object} opts Optional parameters
     * @param {String} opts.causeVariableName Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.effectVariableName Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.causeVariableId Variable id of the hypothetical predictor variable.  Ex: 1398
     * @param {Number} opts.effectVariableId Variable id of the outcome variable of interest.  Ex: 1398
     * @param {String} opts.predictorVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.outcomeVariableName Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {Number} opts.userId User's id
     * @param {String} opts.correlationCoefficient Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Boolean} opts.outcomesOfInterest Only include correlations for which the effect is an outcome of interest for the user
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.quantimo.do
     * @param {module:api/StudiesApi~getStudiesJoinedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStudiesResponse}
     */

  }, {
    key: "getStudiesJoined",
    value: function getStudiesJoined(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'causeVariableName': opts['causeVariableName'],
        'effectVariableName': opts['effectVariableName'],
        'causeVariableId': opts['causeVariableId'],
        'effectVariableId': opts['effectVariableId'],
        'predictorVariableName': opts['predictorVariableName'],
        'outcomeVariableName': opts['outcomeVariableName'],
        'sort': opts['sort'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'userId': opts['userId'],
        'correlationCoefficient': opts['correlationCoefficient'],
        'updatedAt': opts['updatedAt'],
        'outcomesOfInterest': opts['outcomesOfInterest'],
        'clientId': opts['clientId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetStudiesResponse["default"];
      return this.apiClient.callApi('/v3/studies/joined', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getStudy operation.
     * @callback module:api/StudiesApi~getStudyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Study} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Study
     * Get Study
     * @param {Object} opts Optional parameters
     * @param {String} opts.causeVariableName Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.effectVariableName Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.causeVariableId Variable id of the hypothetical predictor variable.  Ex: 1398
     * @param {Number} opts.effectVariableId Variable id of the outcome variable of interest.  Ex: 1398
     * @param {String} opts.predictorVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.outcomeVariableName Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.userId User's id
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.quantimo.do
     * @param {Boolean} opts.includeCharts Highcharts configs that can be used if you have highcharts.js included on the page.  This only works if the id or name query parameter is also provided.
     * @param {Boolean} opts.recalculate Recalculate instead of using cached analysis
     * @param {String} opts.studyId Client id for the study you want
     * @param {module:api/StudiesApi~getStudyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Study}
     */

  }, {
    key: "getStudy",
    value: function getStudy(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'causeVariableName': opts['causeVariableName'],
        'effectVariableName': opts['effectVariableName'],
        'causeVariableId': opts['causeVariableId'],
        'effectVariableId': opts['effectVariableId'],
        'predictorVariableName': opts['predictorVariableName'],
        'outcomeVariableName': opts['outcomeVariableName'],
        'userId': opts['userId'],
        'clientId': opts['clientId'],
        'includeCharts': opts['includeCharts'],
        'recalculate': opts['recalculate'],
        'studyId': opts['studyId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Study["default"];
      return this.apiClient.callApi('/v4/study', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the joinStudy operation.
     * @callback module:api/StudiesApi~joinStudyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StudyJoinResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Join a Study
     * Anonymously share measurements for specified variables
     * @param {Object} opts Optional parameters
     * @param {String} opts.studyId Client id for the study you want
     * @param {String} opts.causeVariableName Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.effectVariableName Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.causeVariableId Variable id of the hypothetical predictor variable.  Ex: 1398
     * @param {Number} opts.effectVariableId Variable id of the outcome variable of interest.  Ex: 1398
     * @param {String} opts.predictorVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.outcomeVariableName Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.userId User's id
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.quantimo.do
     * @param {module:api/StudiesApi~joinStudyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StudyJoinResponse}
     */

  }, {
    key: "joinStudy",
    value: function joinStudy(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'studyId': opts['studyId'],
        'causeVariableName': opts['causeVariableName'],
        'effectVariableName': opts['effectVariableName'],
        'causeVariableId': opts['causeVariableId'],
        'effectVariableId': opts['effectVariableId'],
        'predictorVariableName': opts['predictorVariableName'],
        'outcomeVariableName': opts['outcomeVariableName'],
        'userId': opts['userId'],
        'clientId': opts['clientId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StudyJoinResponse["default"];
      return this.apiClient.callApi('/v3/study/join', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postVote operation.
     * @callback module:api/StudiesApi~postVoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommonResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post or update vote
     * I am really good at finding correlations and even compensating for various onset delays and durations of action. However, you are much better than me at knowing if there's a way that a given factor could plausibly influence an outcome. You can help me learn and get better at my predictions by pressing the thumbs down button for relationships that you think are coincidences and thumbs up once that make logic sense.
     * @param {module:model/Vote} body Contains the cause variable, effect variable, and vote value.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {module:api/StudiesApi~postVoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommonResponse}
     */

  }, {
    key: "postVote",
    value: function postVote(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postVote");
      }

      var pathParams = {};
      var queryParams = {
        'userId': opts['userId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CommonResponse["default"];
      return this.apiClient.callApi('/v3/votes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the publishStudy operation.
     * @callback module:api/StudiesApi~publishStudyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostStudyPublishResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Publish Your Study
     * Make a study and all related measurements publicly visible by anyone
     * @param {Object} opts Optional parameters
     * @param {String} opts.causeVariableName Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.effectVariableName Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.causeVariableId Variable id of the hypothetical predictor variable.  Ex: 1398
     * @param {Number} opts.effectVariableId Variable id of the outcome variable of interest.  Ex: 1398
     * @param {String} opts.predictorVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.outcomeVariableName Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.userId User's id
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.quantimo.do
     * @param {Boolean} opts.includeCharts Highcharts configs that can be used if you have highcharts.js included on the page.  This only works if the id or name query parameter is also provided.
     * @param {Boolean} opts.recalculate Recalculate instead of using cached analysis
     * @param {String} opts.studyId Client id for the study you want
     * @param {module:api/StudiesApi~publishStudyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostStudyPublishResponse}
     */

  }, {
    key: "publishStudy",
    value: function publishStudy(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'causeVariableName': opts['causeVariableName'],
        'effectVariableName': opts['effectVariableName'],
        'causeVariableId': opts['causeVariableId'],
        'effectVariableId': opts['effectVariableId'],
        'predictorVariableName': opts['predictorVariableName'],
        'outcomeVariableName': opts['outcomeVariableName'],
        'userId': opts['userId'],
        'clientId': opts['clientId'],
        'includeCharts': opts['includeCharts'],
        'recalculate': opts['recalculate'],
        'studyId': opts['studyId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PostStudyPublishResponse["default"];
      return this.apiClient.callApi('/v3/study/publish', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return StudiesApi;
}();

exports["default"] = StudiesApi;