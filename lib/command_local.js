'use strict';

var grunt = require('grunt');
var shell = require('shelljs');

module.exports = function (task, done) {
    var options = task.options({
        appid: '',
        packages: '',
        cloudHost: '127.0.0.1',
        cloudPort: '8001',
        port: '8000',
        redisHost: '127.0.0.1',
        redisPort: 6379,
        redisPassword: '',
        startCloud: true,
        localDB: true,
        debug: false,
        debugBrk: false,
        decoupled: false,
        logPrefix: false,
        logHighlight: true
    });

    var cmd = [];

    if(options.appid === '') {
        grunt.log.warn('You must specify an App ID');
        return false;
    } else {
        cmd.push(options.appid);
    }

    if(options.packages !== '') {
        cmd.push('packages='+options.packages);
    }

    if(options.cloudHost !== '') {
        cmd.push('cloudHost='+options.cloudHost);
    }

    if(options.cloudPort !== '') {
        cmd.push('cloudPort='+options.cloudPort);
    }

    if(options.port !== '') {
        cmd.push('port='+options.port);
    }

    cmd.push('redisHost='+options.redisHost);
    cmd.push('redisPort='+options.redisPort);
    cmd.push('redisPassword='+options.redisPassword);
    cmd.push('startCloud='+options.startCloud);
    cmd.push('localDB='+options.localDB);
    cmd.push('debug='+options.debug);
    cmd.push('debugBrk='+options.debugBrk);
    cmd.push('decoupled='+options.decoupled);
    cmd.push('logPrefix='+options.logPrefix);
    cmd.push('logHighlight='+options.logHighlight);

    process.on('exit', function(){
        return done();
    }.bind(this));
    shell.exec('fhc local '+cmd.join(' '));

};

module.exports.description = 'Creates Local Server For Local Development.';
