define([], function() {
    'use strict';

    var viewHandler = function() {
        return {
            viewController: function() {},

            viewHtmlContainer: '#content-container',

            viewAppendMethod: 'only',

            init: function() {
                this.removeView(function() {
                    this.contentView = new this.viewController();
                    this.contentView.render().placeAt(this.viewHtmlContainer, this.viewAppendMethod);
                    this.contentView.$el.hide().fadeIn(200);
                }.bind(this));
            },

            removeView: function(fn) {
                if (!!this.contentView) {
                    this.contentView.$el.fadeOut(100, function() {
                        this.contentView.destroy();
                        this.contentView = null;
                        fn();
                    }.bind(this));
                } else {
                    fn();
                }
            }
        };
    };
    return viewHandler;
});
