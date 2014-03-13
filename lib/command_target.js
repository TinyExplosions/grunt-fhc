'use strict';

var grunt = require('grunt');
var shell = require('shelljs');

module.exports = function (task, done) {
    var options = task.options({
        username: '',
        domain: '',
        password: ''
    });

    var domainRegex=/(http|ftp|https):\/\/([\w\-_]+(?:(?:\.[\w\-_]+)+))([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;

    function login() {
        if(options.username === ''||options.password === '') {
            grunt.log.warn('You must specify a username and password');
            return false;
        }
        var user = shell.exec('fhc login '+options.username+' '+options.password,{silent:true}).output;
        if(user.indexOf("ERR!") !==-1) {
            grunt.log.error('Failed to log in to',options.domain);
            return false;
        }
        grunt.log.ok(options.username,'logged in successfully');
        grunt.log.ok('Target is',domainRegex.exec(user)[0]);
        return true;
    }

    // first check if we're already targetting the correct domain
    var target = shell.exec('fhc target',{silent:true}).output;
    if(domainRegex.exec(target)[0] === options.domain) {
        //check to see if you are logged in
        var user = shell.exec('fhc user',{silent:true}).output;
        if (user.toString().indexOf(options.username) !==-1) {
            // grunt.log.ok(options.username+' is already logged in.');
            done();
        } else {
            var loggedin = login();
            if(!loggedin) {
                return false;
            }
        }
        grunt.log.ok(options.username,'logged in successfully');
        grunt.log.ok('Target is',options.domain);
        return done();
    } else {
        shell.exec('fhc logout',{silent:true});
        shell.exec('fhc target '+options.domain,{silent:true});
        login();
    }
};

module.exports.description = 'Target a FeedHenry domain.';
