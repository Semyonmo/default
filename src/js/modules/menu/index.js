module.exports =  function(selector) {
    "use strict";
    return new Menu(selector);
};

class Menu {
    constructor(selector) {
        "use strict";
        this.$element =  $(selector);
        this.init();
    }

    reduce() {
        "use strict";
        this.$element.addClass('small');
    }

    increase() {
        "use strict";
        this.$element.removeClass('small');
    }

    init() {
        var that = this;
        "use strict";
        $(window).scroll(function() {
            "use strict";

            if($(window).scrollTop() > 0)
                that.reduce();
            else
                that.increase();
        });
    }
}