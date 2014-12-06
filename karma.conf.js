module.exports = function(config){
    config.set({
    basePath : './',
    files : [
        'static/libs/angular/angular.js',
        'static/libs/angular-mocks/angular-mocks.js',
        'static/libs/angular-resource/angular-resource.js',
        'static/libs/angular-route/angular-route.js',
        'client/**/*.js',
        'client/js/**/*.js',
        'test/client/**/*.js'
    ],
    autoWatch : false,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],
    junitReporter : {
      outputFile: 'test/unit.xml',
      suite: 'unit'
    }

})}
