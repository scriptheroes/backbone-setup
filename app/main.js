require.config({
    paths: {
        // vendors
        jquery: 'bower_components/jquery/dist/jquery',
        underscore: 'bower_components/underscore/underscore',
        backbone: 'bower_components/backbone/backbone',
        i18n: 'bower_components/requirejs-i18n/i18n',
        text: 'bower_components/requirejs-text/text',
        baseview: 'src/vendors/baseview/baseview',

        // app specific modules
        app: 'src/app',
        controller: 'src/controller',
        router: 'src/router',
        common: 'src/common',
        util: 'src/util',
        modules: 'src/modules',
        widgets: 'src/widgets',
        templates: 'templates',
        config: 'src/config'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        baseview: {
            deps: ['backbone']
        }
    }
});

require(['underscore', 'backbone', 'app', 'util'], function(_, Backbone, app) {
    'use strict';
    $(document).ready(function() {
        app.init();
    });
});
