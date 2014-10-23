define([
    'baseview',
    'text!templates/footer.html',
    'i18n!nls/translations'
], function(BaseView, tmpl, translations) {
    'use strict';

    return BaseView.extend({
        template: tmpl,

        className: 'main-footer',

        serialize: function() {
            return {
                translations: translations
            };
        }
    });
});
