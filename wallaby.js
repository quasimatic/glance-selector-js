var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({});


module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false},
      {pattern: 'node_modules/es6-promise/dist/es6-promise.js', instrument: false},

      {pattern: 'node_modules/chai/chai.js', instrument: false},
      {pattern: 'node_modules/chai-as-promised/lib/chai-as-promised.js', instrument: false},

      {pattern: 'src/**/*.js', load: false},
      {pattern: 'test/**/*.js', load: false},
      {pattern: '!test/**/*-specs.js', load: false}
    ],

    tests: [
      {pattern: 'test/**/*-specs.js', load: false}
    ],

    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
          file.content,
          {sourceMap: true, presets: ['es2015']})
    },

    postprocessor: wallabyPostprocessor,

    testFramework: "mocha",

    bootstrap: function () {
      window.expect = chai.expect;
      var should = chai.should();

      window.__moduleBundler.loadTests();
    }
  };
};
