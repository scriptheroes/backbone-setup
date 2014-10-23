define([
    'baseview',
    'text!templates/content/example-module.html',
    'i18n!nls/translations',
    'widgets/example-widget/main'
], function(BaseView, tmpl, translations, ExampleWidget) {
    'use strict';

    return BaseView.extend({
        template: tmpl,

        className: 'example-module-container',

        serialize: function() {
            return {
                translations: translations
            };
        },

        postPlaceAt: function() {
            this.createExampleWidget();
        },

        createExampleWidget: function() {
            this.exampleWidget1 = new ExampleWidget({});
            this.exampleWidget1.render().placeAt('#example-widget-container1', 'only');

            this.exampleWidget2 = new ExampleWidget({});
            this.exampleWidget2.render().placeAt('#example-widget-container2', 'only');

            this.exampleWidget3 = new ExampleWidget({});
            this.exampleWidget3.render().placeAt('#example-widget-container3', 'only');
        }
    });
});
