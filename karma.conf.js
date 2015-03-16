
/**
 * Karma.
 */

module.exports = function(config) {
  config.set({
    basePath: './',
    browsers: ['Chrome'],
    files: [
      'bower_components/angular/angular.js',
      'node_modules/lodash/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'dist/angular-segment.js',
      'test/unit/**/*.spec.js'
    ],
    frameworks: [
      'browserify',
      'mocha',
      'should',
      'sinon'
    ],
    plugins: [
      'karma-browserify',
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-should',
      'karma-sinon'
    ],
    reporters: ['mocha']
  });
};
