define([
    'modules/page-structure/views/header',
    'modules/page-structure/views/content',
    'modules/page-structure/views/footer'
], function(Header, Content, Footer) {
    'use strict';

    var init = function(App) {
        var Main = function() {
            this.mainView = new Content({
                el: '#main'
            });
        };

        this.header = new Header();
        this.header.render().placeAt('#header-container', 'only');

        this.navigation = new Footer();
        this.navigation.render().placeAt('#footer-container', 'only');

        App.Main = new Main();
    };

    return { init: init };
});
