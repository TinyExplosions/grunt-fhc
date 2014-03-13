'use strict';

var grunt = require('grunt');
var shell = require('shelljs');

module.exports = function (task, done) {
    var options = task.options({
        appid: '',
        requestor: '',
        comment: '',
        live: false,
        clean: false
    });

    if(options.appid === '') {
        grunt.log.warn('You must specify an App ID');
        return false;
    }

    var target = options.live ? " --live" : " --dev";


    var clean = options.clean ? " --clean" : "";

    grunt.log.ok('Staging',options.appid+target+clean);
    shell.exec('fhc stage '+options.appid+target+clean,{silent:true});
    grunt.log.ok('Stage Completed');
    return done();

};

module.exports.description = 'Stage a FeedHenry app.';
