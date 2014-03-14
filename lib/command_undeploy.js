'use strict';

var grunt = require('grunt');
var shell = require('shelljs');

module.exports = function (task, done) {
    var options = task.options({
        appid: '',
        live: false,
        apptype: 'cloud'
    });

    var cmd = ['fhc undeploy'];

    if(options.appid === '') {
        grunt.log.warn('You must specify an App ID');
        return false;
    }
    cmd.push(options.appid);

    if(options.live) {
        cmd.push('--live');
    }

    cmd.push(options.apptype);

    grunt.log.ok('Undeploying App.');
    shell.exec(cmd.join(' '),{silent:true});
    grunt.log.ok('App undeployed.');
    done();

};

module.exports.description = 'Undeploy a FeedHenry App';
