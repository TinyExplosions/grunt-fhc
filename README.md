# grunt-fhc

> Interect with your FeedHenry apps from Grunt.

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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Lint your code using [Grunt](http://gruntjs.com/).
