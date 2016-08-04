/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-dashboard',
    podModulePrefix: 'ember-dashboard/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
        FEATURES: {
            // Here you can enable experimental features on an ember canary build
            // e.g. 'with-controller': true
        }
    },

    'ember-cli-toggle': {
      includedThemes: ['light', 'default', 'flip'],
      excludedThemes: ['flip'],
      defaultShowLabels: false, // defaults to false
      defaultTheme: 'light',   // defaults to 'default'
      defaultSize: 'small',    // defaults to 'medium'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
        'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
        'style-src': "'self' 'unsafe-inline'",
        'img-src': "'self' data:"
    },
    'ember-toastr': {
        toastrOptions: {
            progressBar: false,
            showDuration: '500',
            timeOut: '1500',
            positionClass: 'toast-top-center toast-options ember-dashboard-toast-long',
        }
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

  }

  return ENV;
};
