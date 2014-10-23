define([
    'common/view-handler/content-view-handler',
    'modules/example-module/views/example-module'
], function(ViewHandler, DashboardView) {

    'use strict';

    var controller = new ViewHandler();
    controller.viewController = DashboardView;

    return controller;
});
