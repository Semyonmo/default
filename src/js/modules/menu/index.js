module.exports = function (selector) {
    "use strict";
    return new Menu(selector);
};

function Menu(selector) {
    "use strict";
    var that = this;
    that.$element = $(selector);
    init();

    that.reduce = function () {
        "use strict";
        that.$element.addClass('small');
    };

    that.increase = function () {

        "use strict";
        that.$element.removeClass('small');
    };

    function init() {
        "use strict";
        $(window).scroll(function () {
            "use strict";

            if ($(window).scrollTop() > 0)
                that.reduce();
            else
                that.increase();
        });
    }
}