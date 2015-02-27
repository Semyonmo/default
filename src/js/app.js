//load es6-7 features
require("babelify/polyfill");

//APP
import {Menu} from './modules/menu/index';
import {logger} from './modules/logger/index';
import {helper} from './modules/helper/index';
import {DataService} from './modules/dataService/index';

class Man {
    constructor(name = 'annon') {
        this.name = name;
    }

    getName() {
        return `My name is ${this.name}`;
    }
}

class Programmer extends Man {
    constructor(name, language = 'empty') {
        //man constructor
        super(name);
        this.language = language;
    }

    getProgrammingLanguage() {
        return `Language is ${this.language}`;
    }
}

class Articles {
    constructor(listOfArticles = []) {
        this.list = listOfArticles;
    }

    getArticles() {
        return this.list;
    }
}


var MainMenu = new Menu(['index', 'author', 'contact']);

//---------Logger demo----------
logger.title('Logger demo');
logger.info('info log');
logger.error('error log');
logger.debag('debug log');


//---------Classes es6----------
var Semyon = new Programmer("Semyon", "JavaScript");
var Annon = new Programmer();

logger.title('Classes es6');
logger.info(Semyon.getName());//Semyon
logger.info(Semyon.getProgrammingLanguage());//JS

logger.info(Annon.getName());//annon
logger.info(Annon.getProgrammingLanguage());//empty


//---------Destructuring--------------
var News = new Articles([
    {"title": "title1"},
    {"title": "title2"},
    {"title": "title3"}
]);

var [firstNews, secondNews] = News.getArticles();
var [one, ,three] = News.getArticles();


logger.title('Destructuring');
logger.info(firstNews.title);
logger.info(secondNews.title);

logger.title('Destructuring more');
logger.info(one.title);
logger.info(three.title);

//---------Arguments--------------
logger.title('Arguments');
//Pass each elem of array as argument
var array = [1, 2, 3];
logger.info(helper.calculateThreeValues(...array));//6
logger.info(helper.argsCount(array[0], array[1], array[2]));//3


//---------Map + Set + WeakMap + WeakSet--------------
logger.title('Map + Set + WeakMap + WeakSet');
var s = new Set();
s.add('hi').add('hello');
console.log(s);

var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;
console.log(m);

var wm = new WeakMap();
wm.set(s, { extra: 42 });
console.log(wm);

var ws = new WeakSet();
ws.add({ data: 42 });
ws.add({ long: 43 });
console.log(ws);

//---------Promise--------------
logger.title('Promise');
var connect = DataService.connect();

connect
    .then((resolve) => {
        logger.info(resolve);
        return DataService.getNews();
    }).then((resolve) => {
        logger.info(resolve);
        return 13;
    }).then((resolve) => {
        logger.info(resolve);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('internal promise');
            },300);
        });
    }).then((resolve) => {
        logger.info(resolve);
    });



