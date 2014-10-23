define(function() {
    'use strict';

    var init = function(App) {
        var AppRouter = Backbone.Router.extend({
            routes: {
                'home': 'home',

                // default
                '*actions': 'home'
            },

            home: function() {
                App.Controller.get('modules/example-module/main', 'init');
            },

            initialize: function() {
                var enablePushState = false;

                // Disable for older browsers
                var pushState = !!(enablePushState && window.history && window.history.pushState);
                Backbone.history.start({ pushState: pushState });

                this.reportCurrentRoute();
                this.bindEvents();
            },

            reportCurrentRoute: function() {
                var hash = window.location.hash,
                    route;

                route = hash.split('/')[0];

                route = route.substr(1);
                this.triggerRouteChange(route);
            },

            bindEvents: function() {
                this.on('route', this.routeHandler.bind(this));
            },

            routeHandler: function(route) {
                this.triggerRouteChange(route);
            },

            triggerRouteChange: function(route) {
                if (!route) route = 'default';
                App.Events.trigger('app.route.change', { route: route });
            }
        });

        App.Router = new AppRouter;
    };

    return { init: init };
});
