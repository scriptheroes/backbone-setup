define([
    'baseview',
    'config',
    'text!templates/header.html',
    'i18n!nls/translations'
], function(BaseView, config, tmpl, translations) {
    'use strict';


    return BaseView.extend({
        template: tmpl,

        className: 'main-header',

        serialize: function() {
            return {
                translations: translations
            };
        }
    });
});
