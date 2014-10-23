define([
    'router',
    'controller',
    'config',
    'modules/page-structure/main'
], function(Router, Controller, config, MainView) {
    'use strict';

    var init = function() {

        var App = {

            Events: { },

            start: function() {
                // create a global event aggregator
                this.Events = _.extend(this.Events, Backbone.Events);
                Controller.init(this);
                MainView.init(this);
                Router.init(this);
            }
        };

        // expose app to the global object
        window.App = App;

        // start app now
        App.start();
    };

    return { init: init };
});
