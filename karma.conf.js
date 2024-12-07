// Karma configuration
// Generated on Wed Nov 27 2024 16:28:41 GMT-0500 (Eastern Standard Time)

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      '04_Controllers/app.js',
      '04_Controllers/app.spec.js',
      '05_Controllers/app.js',
      '05_Controllers/app.spec.js',
      '06_Controllers/app.js',
      '06_Controllers/app.spec.js',
      '07_Services/script.js',
      '07_Services/script.spec.js',
      '08_Scopes/script.js',
      '08_Scopes/script.spec.js',
      '09_Scopes/script.js',
      '09_Scopes/script.spec.js',
      '11_Expressions/script.js',
      '11_Expressions/script.spec.js',
      '12_Expression_Context/script.js',
      '12_Expression_Context/script.spec.js',
      '13_One_time_binding/script.js',
      '13_One_time_binding/script.spec.js',
      '14_filter/script.js',
      '14_filter/script.spec.js',
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity,
  });
};
