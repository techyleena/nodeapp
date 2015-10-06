'use strict';

module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

grunt.initConfig({

  mochacov: {
    default: {
      src: ['test/*.js'],
      options: {
        reporter: 'spec'
      }
    },
  },
  mocha_istanbul: {
    options: {
      check: {
        /*branches : 3,
        functions : 10,
        lines : 60*/
      }
    },
    coverage: {
        src: 'test/*.js', // a folder works nicely
    }
  }
});

grunt.registerTask('test', ['mocha_istanbul', 'mochacov']);

};