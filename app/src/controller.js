define(function() {
    'use strict';

    var init = function(App) {
        App.Controller = {
            get: function(controllerPath, action, params) {
                require([controllerPath], function(controller) {
                    var tmpParams = {};
                    if (!!params) {
                        tmpParams = params;
                    }
                    controller[action].apply(controller, [tmpParams]);
                });
            }
        };
    };

    return { init: init };
});
