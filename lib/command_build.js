// NAME
//        fhc-build -- Build FeedHenry Applications

// SYNOPSIS
//        fhc build app=<appId> destination=<destination> version=<version> config=<config> keypass=<private-key-password> certpass=<certificate-password> download=<true|false>
//          where <destination> is one of: andriod, iphone, ipad, ios(for universal binary), blackberry, windowsphone7
//          where <version> is specific to the destination (e.g. Android version 4.0)
//          where <config> is either 'debug' (default), 'distribution', or 'release'
//          where <provisioning> is the path to the provisioning profile
//          'keypass' and 'certpass' only needed for 'release' builds
//          'provisioning' is only optional for iphone or ipad builds

// DESCRIPTION
//        This command can be used to build your FeedHenry applications.

//        e.g.  fhc build app=mfLkParVTDcr80-uEk8OhEfT destination=iphone config=distribution
//        keypass=password certpass= version=4.0



'use strict';

var grunt = require('grunt');
var shell = require('shelljs');

module.exports = function (task, done) {
    var options = task.options({
        appid: '',
        destination: '',
        version: '',
        config: 'debug',
        keypass: '',
        certpass: '',
        download: false,
        provisioning: ''
    });

    var cmd = [];

    if(options.appid === '') {
        grunt.log.warn('You must specify an App ID');
        return false;
    } else {
        cmd.push(options.appid);
    }

    var validDest = ['andriod', 'iphone', 'ipad', 'ios', 'blackberry', 'windowsphone7'];
    if(validDest.indexOf(options.destination) === -1) {
        grunt.log.warn('You must specify a valid destination, it should be one of');
        grunt.log.warn("'andriod', 'iphone', 'ipad', 'ios', 'blackberry', 'windowsphone7'");
        return false;
    } else {
        cmd.push('destination='+options.destination);
    }

    if(options.version !== '') {
        cmd.push('version='+options.destination);
    }

    cmd.push('config='+options.config);

    if(options.keypass !== '') {
        cmd.push('keypass='+options.keypass);
    }

    if(options.certpass !== '') {
        cmd.push('certpass='+options.certpass);
    }

    cmd.push('download='+options.download);

    if(options.provisioning !== '') {
        cmd.push('provisioning='+options.provisioning);
    }

    shell.exec('fhc build '+cmd.join(' '));
    return done();

};

module.exports.description = 'Request a remote pull of a FeedHenry App';
