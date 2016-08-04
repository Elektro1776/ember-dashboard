/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        SRI: {
            enabled: false
        },
        fingerprint: {
            enabled: false
        },
        minifyJS: {
            enabled: false
        },
        minifyCSS: {
            enabled: false
        },
        'ember-bootstrap': {
            'importBootstrapTheme': false,
            'importBootstrapCSS': true,
            'importBootstrapFont': true
        },
        'ember-cli-flot': {
            plugins: ['resize', 'pie', 'time', 'categories', 'symbol', 'stack', 'threshold']
        },
        'ember-power-select': {
            theme: 'bootstrap'
        },
        'ember-cli-summernote': {
            "importBootstrapCSS": false,
            "importBootstrapJS": true,
            "importFontawesomeCSS": false
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

    //
    // Bootstrap imports when not using ember-bootstrap addon
    //
    // app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    // app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
    // app.import('bower_components/bootstrap/dist/css/bootstrap-theme.min.css');
    // app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    //   destDir: 'fonts'
    // });
    //

    app.import(app.bowerDirectory + '/flot.curvedlines/curvedLines.js');
    app.import(app.bowerDirectory + '/peity/jquery.peity.min.js');
    app.import(app.bowerDirectory + '/morris.js/morris.css');
    app.import(app.bowerDirectory + '/morris.js/morris.min.js');
    app.import(app.bowerDirectory + '/raphael/raphael.min.js');
    app.import(app.bowerDirectory + '/slick-carousel/slick/slick.js');
    app.import(app.bowerDirectory + '/slick-carousel/slick/slick.css');
    app.import(app.bowerDirectory + '/slick-carousel/slick/slick-theme.css');
    app.import(app.bowerDirectory + '/slick-carousel/slick/ajax-loader.gif', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.eot', { destDir: 'assets/fonts' });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.svg', { destDir: 'assets/fonts' });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.ttf', { destDir: 'assets/fonts' });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.woff', { destDir: 'assets/fonts' });

    return app.toTree();
};
