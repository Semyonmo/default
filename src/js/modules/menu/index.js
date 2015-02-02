export class Menu {
    constructor(items) {
        "use strict";
        this.items = items;
    }

    goTo(index) {
        "use strict";
        return this.items[index];
    }
}