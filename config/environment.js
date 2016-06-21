/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'alivefestival',
    // podModulePrefix: 'alive/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    pace: {
      theme: 'minimal',
      color: 'white'
    },
    moment: {
      includeLocales: ['da'],
      includeLocales: true,
      // outputFormat: 'DD.MM.YYYY'
      outputFormat: 'DD. MMMM, YYYY' // August 18, 2016
      // outputFormat: 'DD/MM, YYYY' // August 18, 2016
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: 'UA-3906535-9'
    };
  }

  return ENV;
};
