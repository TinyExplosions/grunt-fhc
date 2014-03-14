# grunt-fhc

> Interact with your FeedHenry apps from Grunt.

## Getting Started
This plugin requires Grunt `~0.4.3`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fhc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fhc');
```

## The "fhctarget" task

Targets a given FeedHenry domain

### Overview
In your project's Gruntfile, add a section named `fhctarget` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fhctarget: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.username
Type: `String`
Default value: `''`

A string value is your FeedHenry Username

#### options.password
Type: `String`
Default value: `''`

A string value that is your FeedHenry password.

#### options.domain
Type: `String`
Default value: `''`

A string value that is the FeedHenry domain you wish to target.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  fhctarget: {
    options: {
      username: 'teddy',
      password: 'bear',
      domain: 'https://feedhenry.com'
    },
    task: {
    },
  },
});
```

## The "fhcpull" task

Performs a pull on the specifid remote FeedHenry app. Also will trigger a dev environment deploy

### Overview
In your project's Gruntfile, add a section named `fhcpull` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fhcpull: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.appid
Type: `String`
Default value: `''`

A string value is your FeedHenry App ID

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  fhcpull: {
    options: {
      appid: 'cCyusU-ruIMAuyWerBMYvv95'
    },
    task: {
    },
  },
});
```

## The "fhcstage" task

Deploys the specified remote app on either dev or live environments

### Overview
In your project's Gruntfile, add a section named `fhcstage` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fhcstage: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.appid
Type: `String`
Default value: `''`

A string value is your FeedHenry App ID

#### options.live
Type: `Boolean`
Default value: `false`

A boolean to choose if you want to stage to the Live environment (true), or the Dev one (false)

#### options.clean
Type: `Boolean`
Default value: `false`

A boolean to choose if you want a clean stage

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  fhcstage: {
    options: {
      appid: 'cCyusU-ruIMAuyWerBMYvv95',
      live: true,
      clean: false
    },
    task: {
    },
  },
});
```

## The "fhclocal" task

Creates Local Server For Local Development

### Overview
In your project's Gruntfile, add a section named `fhclocal` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fhclocal: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.appid
Type: `String`
Default value: `''`

A string value is your FeedHenry App ID

#### options.packages
Type: `String`
Default value: ``

A list of comma seperated packages that you want to be applied

#### options.cloudHost
Type: `String`
Default value: `'127.0.0.1'`

Value to report to the client code, as the location of the cloud code.

#### options.cloudPort
Type: `Number`
Default value: `8001`

The port you want to run the local cloud server on.

#### options.port
Type: `Number`
Default value: `8000`

The port you want to run the local client file server on.

#### options.redisHost
Type: `String`
Default value: `'127.0.0.1'`

The host running the local redis server

#### options.redisPort
Type: `Number`
Default value: `6379`

The port for the locally running redis server, default: 6379

#### options.redisPassword
Type: `String`
Default value: `''`

The password for the local redis server.

#### options.startCloud
Type: `Boolean`
Default value: `true`

This  parameter specifies whether or not to run the cloud part of the app.

#### options.localDB
Type: `Boolean`
Default value: `true`

Connect to a local database.

#### options.debug
Type: `Boolean`
Default value: `false`

When set to true, allows connecting a debugger to the node process running the cloud code (passes the `--debug` parameter to node)

#### options.debugBrk
Type: `Boolean`
Default value: `false`

When set to true, allows connecting a debugger to the node process running the cloud code, and waits for the debugger to connect (passes the `--debug-brk` parameter to node)

#### options.decoupled
Type: `Boolean`
Default value: `false`

When set to true, prevents wrapping the contents of index.html

#### options.logPrefix
Type: `Boolean`
Default value: `false`

When set to true, `stdout` and `stderr` messages will  be  prefixed  with  their  file types - `CLOUD stdout:` and `CLOUD stderr:` respectively.

#### options.logHighlight
Type: `Boolean`
Default value: `true`

When set to true, `stdout` and `stderr` messages will be output in green or red text respectively.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  fhclocal: {
    options: {
      appid: 'cCyusU-ruIMAuyWerBMYvv95'
    },
    task: {
    },
  },
});
```

## The "fhcstart" task

Starts a FeedHenry App.

### Overview
In your project's Gruntfile, add a section named `fhcstart` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fhcstart: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.appid
Type: `String`
Default value: `''`

A string value is your FeedHenry App ID

#### options.live
Type: `Boolean`
Default value: `false`

Boolean to define if live environment should be started.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  fhcrestart: {
    options: {
      appid: 'cCyusU-ruIMAuyWerBMYvv95'
    },
    task: {
    },
  },
});
```

## The "fhcstop" task

Stops a FeedHenry App.

### Overview
In your project's Gruntfile, add a section named `fhcstop` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fhcstop: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.appid
Type: `String`
Default value: `''`

A string value is your FeedHenry App ID

#### options.live
Type: `Boolean`
Default value: `false`

Boolean to define if live environment should be stopped.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  fhcstop: {
    options: {
      appid: 'cCyusU-ruIMAuyWerBMYvv95',
      live: true
    },
    task: {
    },
  },
});
```

## The "fhcrestart" task

Restarts a FeedHenry App.

### Overview
In your project's Gruntfile, add a section named `fhcrestart` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fhcrestart: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.appid
Type: `String`
Default value: `''`

A string value is your FeedHenry App ID

#### options.live
Type: `Boolean`
Default value: `false`

Boolean to define if live environment should be restarted.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  fhcrestart: {
    options: {
      appid: 'cCyusU-ruIMAuyWerBMYvv95'
    },
    task: {
    },
  },
});
```

## The "fhcbuild" task

Restarts a FeedHenry App.

### Overview
In your project's Gruntfile, add a section named `fhcbuild` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fhcbuild: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

#### options.destination
Type: `String`
Default value: `''`

Destination is the platform you are building for. It is one of: andriod, iphone, ipad, ios(for universal binary), blackberry, windowsphone7

#### options.version
Type: `String`
Default value: `''`

Version is specific to the destination (e.g. Android version 4.0)

#### options.config
Type: `String`
Default value: `'debug'`

Config is the type of the build, either 'debug', 'distribution', or 'release'


#### options.keypass
Type: `String`
Default value: `''`

only needed for 'release' builds, it's your private key password

#### options.certpass
Type: `String`
Default value: `''`

only needed for 'release' builds, it's your cert password

#### options.download
Type: `Boolean`
Default value: `false`

Flag to choose if you download the built package

#### options.provisioning
Type: `String`
Default value: `''`

this is the path to your provisioning profile

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  fhcbuild: {
    options: {
      appid: 'cCyusU-ruIMAuyWerBMYvv95',
      destination: 'ios'
    },
    task: {
    },
  },
});
```

## The "fhcundeploy" task

Undeploys a FeedHenry App.

### Overview
In your project's Gruntfile, add a section named `fhcundeploy` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fhcundeploy: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.appid
Type: `String`
Default value: `''`

A string value is your FeedHenry App ID

#### options.live
Type: `Boolean`
Default value: `false`

Boolean to define if live environment should be undeployed.

#### options.apptype
Type: `String`
Default value: `'cloud'`

The app type to undeploy, can be 'cloud' or 'embed'

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  fhcundeploy: {
    options: {
      appid: 'cCyusU-ruIMAuyWerBMYvv95'
    },
    task: {
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Lint your code using [Grunt](http://gruntjs.com/).
