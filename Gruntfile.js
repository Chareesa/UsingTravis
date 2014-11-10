'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');
  grunt.initConfig({
    jshint: {
      src: ['object4Travis.js']
    },
    jscs: {
      all: {
        options: {
          'standard': 'airbnb'
        },
        files: {
          src: []
        }
      }
    },
    simplemocha: {
      src: ['test/test.js']
    }
  });

  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
