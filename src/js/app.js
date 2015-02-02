import {Menu} from './modules/menu/index';

class Man {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return `My name is ${this.name}`;
    }
}

class Programmer extends Man {
    constructor(name, language) {
        super(name);
        this.language = language;
    }

    getProgrammingLanguage() {
        "use strict";
        return this.language;
    }
}

var Semyon = new Programmer("Semyon", "JavaScript");
var mainMenu = new Menu(['index','author','contact']);


console.log(Semyon.getName());
console.log(Semyon.getProgrammingLanguage());
console.log(mainMenu.goTo(1));