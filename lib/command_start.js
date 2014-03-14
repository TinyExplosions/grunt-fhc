'use strict';

var grunt = require('grunt');
var shell = require('shelljs');

module.exports = function (task, done) {
    var options = task.options({
        appid: '',
        live: false
    });

    var cmd = ['fhc start'];

    if(options.appid === '') {
        grunt.log.warn('You must specify an App ID');
        return false;
    }
    cmd.push(options.appid);

    if(options.live) {
        cmd.push('--live');
    }

    grunt.log.ok('Starting App.');
    shell.exec(cmd.join(' '),{silent:true});
    grunt.log.ok('App started.');
    done();

};

module.exports.description = 'Start a FeedHenry App';
