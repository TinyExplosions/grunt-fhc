/*
 * grunt-fhc
 * https://github.com/TinyExplosions/grunt-fhc
 *
 * Copyright (c) 2014 Al Graham
 * Licensed under the MIT license.
 */
'use strict';

var commands = require('../lib/commands');

module.exports = function (grunt) {

    function wrapCommand(fn) {
        return function () {
            var done = this.async();
            fn(this, done);
        };
    }

    for (var command in commands) {
        var fn = commands[command];
        grunt.registerMultiTask("fhc" + command, fn.description || "", wrapCommand(fn));
    }
};