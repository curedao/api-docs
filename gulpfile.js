var gulp = require('gulp');
var bower = require('bower');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var change = require('gulp-change');
var q = require('q');
var fs = require('fs');
var glob = require('glob');
var zip = require('gulp-zip');
var request = require('request');
var open = require('gulp-open');
var runSequence = require('run-sequence');
var plist = require('plist');
var clean = require('gulp-rimraf');
var replace = require('gulp-string-replace');
var unzip = require('gulp-unzip');
var bump = require('gulp-bump');
var git = require('gulp-git');
var download = require('gulp-download-stream');
var inject = require('gulp-inject');
var jimp = require('gulp-jimp');
var rp = require('request-promise');
var minimatch = require('minimatch');
var ignore = require('gulp-ignore');
var del = require('del');
var logger = require('gulp-logger');
var decompress = require('gulp-decompress');
var bugsnag = require("bugsnag");
bugsnag.register("ae7bc49d1285848342342bb5c321a2cf");
process.on('unhandledRejection', function (err, promise) {
    console.error("Unhandled rejection: " + (err && err.stack || err));
    bugsnag.notify(err);
});
bugsnag.onBeforeNotify(function (notification) {
    var metaData = notification.events[0].metaData;
    // modify meta-data
    metaData.subsystem = { name: "Your subsystem name" };
});
function isTruthy(value) {return (value && value !== "false");}
var buildDebug = isTruthy(process.env.BUILD_DEBUG);
var sdksZippedPath = "./sdks-zipped";
var sdksUnzippedPath = "./sdks-unzipped";
var sdksReposPath = './sdk-repos';
var languages = [
    "akka-scala",
    "android",
    "async-scala",
    "csharp",
    "CsharpDotNet2",
    "dart",
    "dynamic-html",
    "flash",
    "go",
    "html",
    "inflector",
    "java",
    "javascript",
    //"javascript-closure-angular",
    "jaxrs",
    "objc",
    "perl",
    "php",
    "python",
    "qt5cpp",
    "ruby",
    "scala",
    "scalatra",
    "sinatra",
    "swift",
    "tizen",
    "typescript-angular",
    "typescript-angular2",
    //"typescript-fetch",
    "typescript-node"
];
var sdkSwaggerCodegenOptions ={
    "php": {
        "invokerPackage": "QuantiModo\\Client",
        "composerProjectName": "quantimodo-sdk-php",
        "composerVendorName": "quantimodo",
        "modelPackage": "Model",
        "apiPackage": "Api",
        "packagePath": "QuantiModoClient"
    },
    "javascript": {
        //"projectName": "quantimodo",
    },
    "ruby": {
        "gemName": "quantimodoApi",
        "moduleName": "QuantiModoApi",
        "gemVersion": getAppVersionNumber(),
        "gemHomepage": "https://quantimo.do",
        "gemSummary": "A ruby wrapper for the QuantiModo API",
        "gemDescription": "A ruby wrapper for the QuantiModo API",
        "gemAuthor": "Mike P. Sinn",
        "gemAuthorEmail": "mike@quantimo.do"
    }
};
var shell = require('gulp-shell');
var prompt = require('gulp-prompt');
var util = require('util');
var s3 = require('gulp-s3-upload')({accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY});
var majorMinorVersionNumbers = '5.8.';
function getPatchVersionNumber() {
    var date = new Date();
    var monthNumber = (date.getMonth() + 1).toString();
    var dayOfMonth = ('0' + date.getDate()).slice(-2);
    var hourOfDay = ('0' + date.getHours()).slice(-2);
    return monthNumber + dayOfMonth + hourOfDay;
}
var apiVersionNumber = majorMinorVersionNumbers + getPatchVersionNumber();
logInfo("API version is " + apiVersionNumber);
function obfuscateSecrets(object){
    if(typeof object !== 'object'){return object;}
    object = JSON.parse(JSON.stringify(object)); // Decouple so we don't screw up original object
    for (var propertyName in object) {
        if (object.hasOwnProperty(propertyName)) {
            var lowerCaseProperty = propertyName.toLowerCase();
            if(lowerCaseProperty.indexOf('secret') !== -1 || lowerCaseProperty.indexOf('password') !== -1 || lowerCaseProperty.indexOf('token') !== -1){
                object[propertyName] = "HIDDEN";
            } else {
                object[propertyName] = obfuscateSecrets(object[propertyName]);
            }
        }
    }
    return object;
}
function prettyJSONStringify(object) {return JSON.stringify(object, null, 2);}
function obfuscateStringify(message, object) {
    var objectString = '';
    if(object){
        object = obfuscateSecrets(object);
        objectString = ':  ' + prettyJSONStringify(object);
    }
    message += objectString;
    if(process.env.QUANTIMODO_CLIENT_SECRET){message = message.replace(process.env.QUANTIMODO_CLIENT_SECRET, 'HIDDEN');}
    if(process.env.AWS_SECRET_ACCESS_KEY){message = message.replace(process.env.AWS_SECRET_ACCESS_KEY, 'HIDDEN');}
    if(process.env.ENCRYPTION_SECRET){message = message.replace(process.env.ENCRYPTION_SECRET, 'HIDDEN');}
    if(process.env.QUANTIMODO_ACCESS_TOKEN){message = message.replace(process.env.QUANTIMODO_ACCESS_TOKEN, 'HIDDEN');}
    return message;
}
function logDebug(message, object) {if(buildDebug){logInfo(message, object);}}
function logInfo(message, object) {console.log(obfuscateStringify(message, object));}
function logError(message, object) {
    console.error(obfuscateStringify(message, object));
    bugsnag.notify(new Error(obfuscateStringify(message), obfuscateSecrets(object)));
}
function getAppVersionNumber() {
    var date = new Date();
    var longDate = date.getFullYear().toString() + (date.getMonth() + 1).toString() + date.getDate().toString();
    var monthNumber = (date.getMonth() + 1).toString();
    var dayOfMonth = ('0' + date.getDate()).slice(-2);
    var majorMinorVersionNumbers = '5.8.';
    var patchVersionNumber = monthNumber + dayOfMonth;
    return majorMinorVersionNumbers + patchVersionNumber;
}
function executeCommand(command, callback) {
    logInfo(command);
    var exec = require('child_process').exec;
    exec(command, function (err, stdout, stderr) {
        logInfo(stdout);
        if(stderr){logError(stderr);}
        if(callback){callback(err);}
    });
}
var swaggerJsonUrl = 'https://raw.githubusercontent.com/QuantiModo/docs/master/swagger/swagger.json';
function clone(organization, repoName, destinationFolder, callback){
    var repoUrl = 'https://github.com/' + organization + '/' + repoName;
    var repoFolder = destinationFolder + '/' + repoName;
    logInfo("Cloning " + repoUrl + " to " + destinationFolder + '/' + repoName);
    return git.clone(repoUrl, {args: repoFolder}, function (err) {
        if (err) {logError(err);} else {logInfo("Cloned " + repoUrl + " to " + destinationFolder + '/' + repoName);}
        if(callback){callback();}
    });
}
function cleanOneFolderExceptGit(folderToClean) {
    logInfo("cleaning " + folderToClean + ' and ignoring git stuff');
    return del([
        folderToClean + '/**/*',
        // we don't want to clean this file though so we negate the pattern
        '!' + folderToClean + '/.git',
        '!' + folderToClean + '/.git/**/*',
        '!' + folderToClean + '/.git*',
        '!' + folderToClean + '/README.md',
        '!' + folderToClean + '/LICENSE',
        '!' + folderToClean + '/bower.json',
        '!' + folderToClean + '/package.json',
        '!' + folderToClean + '/composer.json',
        '!' + folderToClean + '/quantimodo-api.js'
    ]);
}
function copyOneFoldersContentsToAnotherExceptReadme(sourceFolderPath, destinationFolderPath) {
    logInfo("Copying " + sourceFolderPath + " to " + destinationFolderPath);
    return gulp.src([sourceFolderPath + '/**/*', '!README.md'])
        .pipe(gulp.dest(destinationFolderPath));
}
function copyOneFoldersContentsToAnother(sourceFolderPath, destinationFolderPath) {
    logInfo("Copying " + sourceFolderPath + " to " + destinationFolderPath);
    return gulp.src([sourceFolderPath + '/**/*'])
        .pipe(gulp.dest(destinationFolderPath));
}
function getZipPathForLanguage(language) {
    return sdksZippedPath + '/' + getSdkNameForLanguage(language) + '.zip';
}
function writeToFile(filePath, stringContents, callback) {
    logDebug("Writing to " + filePath);
    if(typeof stringContents !== "string"){stringContents = JSON.stringify(stringContents);}
    return fs.writeFile(filePath, stringContents, {}, callback);
}
function getSdkNameForLanguage(languageName) {
    return 'quantimodo-sdk-' + languageName;
}
function getUnzippedPathForSdkLanguage(languageName) {
    return sdksUnzippedPath + '/' + languageName + '-client';
}
function getRepoPathForSdkLanguage(languageName) {
    return sdksReposPath + '/' + getSdkNameForLanguage(languageName);
}
var pathToIonic = '../../../public.built/ionic/Modo';
function readJsonFile(pathToFile) {
    logInfo("Reading " + pathToFile);
    return JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
}
var pathToSwaggerJson = "swagger/swagger.json";
var swaggerJson = readJsonFile(pathToSwaggerJson);
function unzipFileToFolder(sourceFile, destinationFolder) {
    logInfo('Unzipping files in ' + sourceFile + ' to output path ' + destinationFolder);
    return gulp.src(sourceFile)
        .pipe(decompress())
        .pipe(gulp.dest(destinationFolder));
}
var pathToQmDocker = "../../..";
var pathToSwaggerDocsFolder = pathToQmDocker + "/public.built/api/docs";
var pathToQuantiModoNodeModule = 'node_modules/quantimodo';
var pathToSwaggerQMNodeModule = pathToSwaggerDocsFolder + "/" + pathToQuantiModoNodeModule;

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
gulp.task('browserify', [], function (callback) {
    var sourceFile = 'src/index.js';
    var outputFile = 'quantimodo-web.js';
    executeCommand('cd ' + getUnzippedPathForSdkLanguage('javascript') + ' && npm install -g browserify && browserify ' +
        sourceFile + ' --standalone Quantimodo > ' + outputFile, function () {
        callback();
    });
});
gulp.task('4-build-and-release-javascript', ['get-units'], function (callback) {
    function updateBowerAndPackageJsonVersions(path, callback) {
        var bowerJson = readJsonFile(path + '/bower.json');
        bowerJson.dependencies.quantimodo = apiVersionNumber;
        return writeToFile(path  + '/bower.json', prettyJSONStringify(bowerJson), function () {
            executeCommand("cd " + pathToIonic + " && bower install", function () {
                var packageJson = readJsonFile(path + '/package.json');
                packageJson.dependencies.quantimodo = apiVersionNumber;
                return writeToFile(path  + '/package.json', prettyJSONStringify(packageJson), function () {
                    executeCommand("cd " + pathToIonic + " && npm install", function () {
                        if(callback){callback();}
                    });
                });
            });
        });
    }
    executeCommand("cd " + getRepoPathForSdkLanguage('javascript') +
        ' && npm install' +
        ' && git add .' +
        ' && git commit -m "' + apiVersionNumber + '"' +
        ' && git push' +
        ' && git tag ' + apiVersionNumber +
        ' && git push origin ' + apiVersionNumber +
        ' && bower version ' + apiVersionNumber, function () {
        executeCommand("cd " + getRepoPathForSdkLanguage('javascript') + " && npm version " + apiVersionNumber + ' && npm publish', function () {
            updateBowerAndPackageJsonVersions(pathToQmDocker);
            updateBowerAndPackageJsonVersions(pathToIonic);
            callback();
        });
    });
});
gulp.task('clean-folders', [], function () {
    return del([
        sdksZippedPath + '/**/*',
        sdksUnzippedPath + '/**/*',
        sdksReposPath + '/**/*'
    ]);
});
gulp.task('clone-repos', [], function (callback) {
    for(var i = 0; i < languages.length; i++){
        if(i === languages.length - 1){
            clone('quantimodo', getSdkNameForLanguage(languages[i]), sdksReposPath, callback);
        } else {
            clone('quantimodo', getSdkNameForLanguage(languages[i]), sdksReposPath);
        }
    }
});
gulp.task('clean-folders-and-clone-repos', function (callback) { // Must be run before `gulp updateSdks` because I can't get it to wait for cloning to complete
    runSequence(
        'clean-folders',
        'clone-repos',
        function (error) {
            if (error) {logError(error.message);} else {logInfo('SDK RELEASE FINISHED SUCCESSFULLY');}
            callback(error);
        });
});
gulp.task('clean-repos-except-git', [], function(){
    for(var i = 0; i < languages.length; i++) {
        if(i === languages.length - 1){ return cleanOneFolderExceptGit(getRepoPathForSdkLanguage(languages[i]));}
        cleanOneFolderExceptGit(getRepoPathForSdkLanguage(languages[i]));
    }
});
gulp.task('0-download', ['clean-folders-and-clone-repos'], function () {
    function downloadSdk(language) {
        var requestOptions = {
            method: 'POST',
            uri: 'http://generator.swagger.io/api/gen/clients/' + language,
            body: {
                swaggerUrl: swaggerJsonUrl
            },
            json: true // Automatically stringifies the body to JSON
        };
        if (sdkSwaggerCodegenOptions[language]) {
            requestOptions.body.options = sdkSwaggerCodegenOptions[language];
        } else {
            requestOptions.body.options = {};
            requestOptions.body.options.apiPackage = "QuantiModoApi";
            requestOptions.body.options.artifactId = "quantimodoApi";
            requestOptions.body.options.authorEmail = "mike@quantimo.do";
            requestOptions.body.options.authorName = "Mike P. Sinn";
            requestOptions.body.options.classPrefix = "QM";
            requestOptions.body.options.developerEmail = "mike@quantimo.do";
            requestOptions.body.options.developerName = "Mike P. Sinn";
            requestOptions.body.options.invokerPackage = (sdkSwaggerCodegenOptions[language] && sdkSwaggerCodegenOptions[language].invokerPackage) ? sdkSwaggerCodegenOptions[language].invokerPackage : "quantimodoApi";
            requestOptions.body.options.modelPackage = "quantimodoApi";
            requestOptions.body.options.moduleName = "quantimodoApi";
            requestOptions.body.options.packageName = "quantimodo_api";
            requestOptions.body.options.packagePath = "QuantiModoClient";
            requestOptions.body.options.podName = "QuantiModoApi";
            requestOptions.body.options.podVersion = getAppVersionNumber();
            requestOptions.body.options.projectName = (sdkSwaggerCodegenOptions[language] && sdkSwaggerCodegenOptions[language].projectName) ? sdkSwaggerCodegenOptions[language].projectName : "quantimodoApi";
        }
        requestOptions.body.options.artifactVersion = requestOptions.body.options.projectVersion = requestOptions.body.options.packageVarsion =
            requestOptions.body.options.podVersion = getAppVersionNumber();
        requestOptions.body.options.artifactDescription = requestOptions.body.options.projectDescription = swaggerJson.info.description;
        var sdkName = 'quantimodo-sdk-' + language;
        var getOptionsRequestOptions = JSON.parse(JSON.stringify(requestOptions));
        getOptionsRequestOptions.method = "GET";
        return rp(getOptionsRequestOptions)
            .then(function (parsedBody) {
                logInfo("Generating " + language + " sdk", requestOptions.body.options);
                logInfo("Available options for " + language, parsedBody);
                return rp(requestOptions)
                    .then(function (parsedBody) {
                        return download(parsedBody.link.replace('https', 'http'))
                            .pipe(rename(getSdkNameForLanguage(language) + '.zip'))
                            .pipe(gulp.dest(sdksZippedPath));
                    })
                    .catch(function (err) {
                        logError(err.error.message);
                    });
            })
            .catch(function (err) {
                logError(err.error.message);
            });
    }
    logInfo("Generating sdks with " + swaggerJsonUrl);
    logInfo("See https://github.com/swagger-api/swagger-codegen/tree/master/modules/swagger-codegen/src/main/java/io/swagger/codegen/languages for available clients");
    for(var i = 0; i < languages.length; i++){
        if(i === languages.length - 1){ return downloadSdk(languages[i]);}
        downloadSdk(languages[i]);
    }
});
gulp.task('1-decompress', ['clean-repos-except-git'], function () {
    for(var i = 0; i < languages.length; i++) {
        if(i === languages.length - 1){
            return unzipFileToFolder(getZipPathForLanguage(languages[i]), sdksUnzippedPath);
        }
        unzipFileToFolder(getZipPathForLanguage(languages[i]), sdksUnzippedPath);
    }
});
gulp.task('3-copy-to-repos', ['browserify'], function(){
    try {
        copyOneFoldersContentsToAnother(getUnzippedPathForSdkLanguage('javascript'), pathToQmDocker + '/' + pathToQuantiModoNodeModule);
        copyOneFoldersContentsToAnother(getUnzippedPathForSdkLanguage('javascript'), pathToIonic + '/' + pathToQuantiModoNodeModule);
        copyOneFoldersContentsToAnother(getUnzippedPathForSdkLanguage('javascript'), pathToIonic + '/www/custom-lib/quantimodo');
        gulp.src([getUnzippedPathForSdkLanguage('javascript') + 'quantimodo-web.js']).pipe(gulp.dest('/www/custom-lib/'));
    } catch (error){
        logError(error, error);
    }
    copyOneFoldersContentsToAnother(getUnzippedPathForSdkLanguage('javascript'), pathToSwaggerQMNodeModule);
    for(var i = 0; i < languages.length; i++) {
        if(i === languages.length - 1){
            return copyOneFoldersContentsToAnotherExceptReadme(getUnzippedPathForSdkLanguage(languages[i]), getRepoPathForSdkLanguage(languages[i]));
        }
        copyOneFoldersContentsToAnotherExceptReadme(getUnzippedPathForSdkLanguage(languages[i]), getRepoPathForSdkLanguage(languages[i]));
    }
});
gulp.task('2-copy-qm-web-js', ['browserify'], function(){
    return gulp.src([getUnzippedPathForSdkLanguage('javascript') + '/quantimodo-web.js']).pipe(gulp.dest(pathToIonic + '/www/custom-lib/'));
});
try {
    var Quantimodo = require('quantimodo');
    authenticateQuantiModoSdk();
} catch (error) {
    logError(error);
}
var defaultClient;
function authenticateQuantiModoSdk() {
    defaultClient = Quantimodo.ApiClient.instance;
    if(process.env.APP_HOST_NAME){defaultClient.basePath = process.env.APP_HOST_NAME + '/api';}
    var quantimodo_oauth2 = defaultClient.authentications['quantimodo_oauth2'];
    quantimodo_oauth2.accessToken = process.env.QUANTIMODO_ACCESS_TOKEN;
}
function handleApiResponse(error, data, response) {
    if (error && error.message) {
        logError(response.req.path + "failed: " + error.message, error);
    }
    if(!data || Object.keys(data).length === 0){throw "data not returned from " + response.request.url;}
    logInfo('API returned data', data);
}
gulp.task('get-aggregated-correlations', [], function (callback) {
    var apiInstance = new Quantimodo.AnalyticsApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getAggregatedCorrelations({}, qmApiResponseCallback);
});
gulp.task('get-connectors', [], function (callback) {
    var apiInstance = new Quantimodo.ConnectorsApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getConnectors({}, qmApiResponseCallback);
});
gulp.task('get-measurements', [], function (callback) {
    var apiInstance = new Quantimodo.MeasurementsApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getMeasurements({}, qmApiResponseCallback);
});
gulp.task('get-pairs', [], function (callback) {
    var apiInstance = new Quantimodo.MeasurementsApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getMeasurements({causeVariableName: "Sleep Duration", effectVariableName: "Overall Mood"}, qmApiResponseCallback);
});
gulp.task('get-public-variables', [], function (callback) {
    var apiInstance = new Quantimodo.VariablesApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getPublicVariables({}, qmApiResponseCallback);
});
gulp.task('get-study', [], function (callback) {
    var apiInstance = new Quantimodo.AnalyticsApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getStudy({causeVariableName: "Sleep Duration", effectVariableName: "Overall Mood"}, qmApiResponseCallback);
});
gulp.task('get-tracking-reminder-notifications', [], function (callback) {
    var apiInstance = new Quantimodo.RemindersApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getTrackingReminderNotifications({}, qmApiResponseCallback);
});
gulp.task('get-tracking-reminders', [], function (callback) {
    var apiInstance = new Quantimodo.RemindersApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getTrackingReminders({}, qmApiResponseCallback);
});
gulp.task('get-units', [], function (callback) {
    var apiInstance = new Quantimodo.UnitsApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getUnits(qmApiResponseCallback);
});
gulp.task('get-unit-categories', [], function (callback) {
    var apiInstance = new Quantimodo.UnitsApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getUnitCategories(qmApiResponseCallback);
});
gulp.task('get-user', [], function (callback) {
    var apiInstance = new Quantimodo.UserApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getUser({}, qmApiResponseCallback);
});
gulp.task('get-user-correlations', [], function (callback) {
    var apiInstance = new Quantimodo.AnalyticsApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getUserCorrelations({}, qmApiResponseCallback);
});
gulp.task('get-user-variables', [], function (callback) {
    var apiInstance = new Quantimodo.VariablesApi();
    function qmApiResponseCallback(error, data, response) {
        handleApiResponse(error, data, response);
        callback();
    }
    apiInstance.getUserVariables({}, qmApiResponseCallback);
});
gulp.task('test-endpoints', function (callback) {
    runSequence(
        'get-aggregated-correlations',
        'get-connectors',
        'get-measurements',
        'get-pairs',
        'get-public-variables',
        'get-study',
        'get-tracking-reminder-notifications',
        'get-tracking-reminders',
        'get-unit-categories',
        'get-units',
        'get-user',
        'get-user-correlations',
        'get-user-variables',
        function (error) {
            if (error) {
                logError(error.message);
                throw error.message;
            } else {
                logInfo('SDK RELEASE FINISHED SUCCESSFULLY');
            }
            callback(error);
        });
});
gulp.task('test-javascript-client', [], function (callback) {
    executeCommand('cd ' + getUnzippedPathForSdkLanguage('javascript') + ' && npm install && npm test ', function () {
        callback();
    });
});