'use strict';

var grunt = require('grunt');
var shell = require('shelljs');

module.exports = function (task, done) {
    var options = task.options({
        appid: '',
        live: false
    });

    var cmd = ['fhc restart'];

    if(options.appid === '') {
        grunt.log.warn('You must specify an App ID');
        return false;
    }
    cmd.push(options.appid);

    if(options.live) {
        cmd.push('--live');
    }

    grunt.log.ok('Restarting App.');
    shell.exec(cmd.join(' '),{silent:true});
    grunt.log.ok('App restarted.');
    done();

};

module.exports.description = 'Restart a FeedHenry App';
