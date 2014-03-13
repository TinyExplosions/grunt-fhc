'use strict';

var grunt = require('grunt');
var shell = require('shelljs');

module.exports = function (task, done) {
    var options = task.options({
        appid: ''
    });

    if(options.appid === '') {
        grunt.log.warn('You must specify an App ID');
        return false;
    }
    grunt.log.ok('Starting remote git pull of app');
    shell.exec('fhc git pull '+options.appid,{silent:true});
    grunt.log.ok('App pull complete');
    done();

};

module.exports.description = 'Request a remote pull of a FeedHenry App';
