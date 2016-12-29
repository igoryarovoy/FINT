;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS для Browserify
        module.exports = factory;
    } else {
        // Используя глобальные переменные браузера
        factory(jQuery);
    }
}(function ($) {
    'use script';

    var MenuJS = function (elm, option) {

        var $this = $(elm),
            dataTarget = $this.attr('data-target-menu'),
            helpBlock = $(dataTarget);

        var backDrop = $(option.backDrop);

        var self,
            timeHovOut,
            hov = function () {
                $this.removeClass(option.btnClosed);
                helpBlock.addClass(option.menuOpen);
                backDrop.show();
            },
            unHov = function () {
                $this.addClass(option.btnClosed);
                helpBlock.removeClass(option.menuOpen);
                backDrop.hide();
            },
            init = function () {  

                $this.hover(function() {
                    timeHovOut = setTimeout(function() {
                        hov();
                    }, option.pauseShow * 1000);
                }, function() {
                    clearTimeout(timeHovOut);
                });

                helpBlock.hover(function() {
                    // hov();
                }, function() {
                    unHov();
                });
                
            };
        self = {
            init: init
        };
        return self;
    };

    $.fn.menuJS = function (opt) {
        return this.each(function () {
            var menuJS;
            if (!$(this).data('menuJS')) {
                menuJS = new MenuJS(this, $.extend(true, {
                    btnClosed: 'closed',
                    menuOpen: 'in',
                    pauseShow: .5,
                    backDrop: '.js-menu-backdrop'
                }, opt));
                menuJS.init();
                $(this).data('menuJS', menuJS);
            }
        });
    };

}));