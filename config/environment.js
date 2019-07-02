'use strict';

module.exports = function(environment) {
	let ENV = {
		modulePrefix: 'alivefestival',
		environment,
		rootURL: '/',

		// Changed to support ember-router-scroll
		locationType: 'router-scroll',
		historySupportMiddleware: true,

		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		}
	}

	ENV.wordpressHost = 'https://cms.alivefestival.dk'

	ENV['moment'] = {
		includeLocales: ['da'],
		// includeLocales: true,
		// outputFormat: 'DD.MM.YYYY'
		outputFormat: 'DD. MMMM, YYYY' // August 18, 2016
		// outputFormat: 'DD/MM, YYYY' // August 18, 2016
	}

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none'

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false
		ENV.APP.LOG_VIEW_LOOKUPS = false

		ENV.APP.rootElement = '#ember-testing'
		ENV.APP.autoboot = false
	}

	if (environment === 'production') {
		// here you can enable a production-specific feature
		ENV.googleAnalytics = {
			webPropertyId: 'UA-3906535-9'
		}

		// ember-cli-fbq (facebook pixel) addon
		ENV.fbq = {
			enabled: true,
			id: '1140392809413359'
		}
	}

	return ENV
}
