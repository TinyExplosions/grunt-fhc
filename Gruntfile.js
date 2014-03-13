/*
 * grunt-fhc
 * https://github.com/TinyExplosions/grunt-fhc
 *
 * Copyright (c) 2014 Al Graham
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    fhctarget: {
        options: {
          username: "teddy",
          password: "bear"
          domain: "https://feedhenry.com",

        },
        task: {

        }
    },

    fhcpull: {
      task: {
        options: {
          appid: "cCyusU-ruIMAuyWerBMYvv95",
        }
      },
    },

    fhcstage: {
      task: {
        options: {
          appid: "cCyusU-ruIMAuyWerBMYvv95"
        }
      },
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, lint and run all tests.
  // grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('default', ['jshint', 'fhctarget', 'fhcpull', 'fhcstage']);

};
