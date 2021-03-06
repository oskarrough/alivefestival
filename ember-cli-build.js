'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const {browsers} = require('./config/targets')

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here

    // Don't pollute our index.html with meta data.
    storeConfigInMeta: false,

    // Don't fingerprint favicons as browsers expect standard names.
    fingerprint: {
      exclude: ['images/', 'apple-touch-icon', 'favicon', 'mstile', '.png']
    },

    // Very verbose but this adds autoprefixer and atImport.
    styleProcessorOptions: {
      processors: [
        {
          type: 'node-sass',
          sourcemaps: true
        },
        {
          type: 'postcss',
          plugins: [
            {
              module: require('postcss-import')
            },
            {
              module: require('autoprefixer'),
              options: {browsers}
            }
          ]
        }
      ],
      extension: 'scss'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('vendor/modernizr-custom.js');
  // app.import('bower_components/video.js/dist/video.js');
  // app.import('bower_components/BigVideo/lib/bigvideo.js');

  return app.toTree();
}
