define([
    'baseview',
    'text!widgets/example-widget/example-widget.html',
    'i18n!nls/translations'
], function(BaseView, tmpl, translations) {
    'use strict';

    return BaseView.extend({
        template: tmpl,

        className: 'example-widget',

        initialize: function(options) {
            this.options = options;
        },

        serialize: function() {
            return {
                data: this.options.data,
                translations: translations
            };
        }
    });
});
