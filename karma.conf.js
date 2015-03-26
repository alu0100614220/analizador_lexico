// Karma configuration
// Generated on Mon Mar 9 2015 16:51:38 GMT+0000 (WET)

module.exports = function(config) {
  var configuration = {

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use
    frameworks: ['mocha', 'chai'],

    client: {
          mocha: {
            ui: 'tdd'
          }
    },

    preprocessors: {
          'tests/index.html': ['html2js']
    },


    // list of files / patterns to load in the browser
    files: [
      //'node_modules/jquery/dist/*.js',
      //'node_modules/jquery/dist/cdn/*.js',
      //'node_modules/underscore/*.js',
      "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js",
      "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",
      'tests/index.html',
      'tests/*.js',
      '*.js'
    ],


    // list of files to exclude
    exclude: [
      'gulpfile.js',
      'app.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
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


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: [
               'Firefox',
               ],


   customLaunchers: {
     Chrome_travis_ci: {
       base: 'Chrome',
       flags: ['--no-sandbox']
     }
   },


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  };

  if(process.env.TRAVIS){
    configuration.browsers = ['Firefox','Chrome_travis_ci'];
   }

   config.set(configuration);

};
