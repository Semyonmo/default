import {Menu} from './modules/menu';
import {App} from './app/app';

if(!$) {
	throw new Error('jQuery not load');
}

if(!angular) {
	throw new Error('AngularJS not load');
}

//imported from ./modules/menu
//init menu
var menu = new Menu('nav.menu');



