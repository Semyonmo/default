import {$} from "jquery";
import "angular";


import dropdown from "application/components/dropdown";
import AppController from "application/controller/app.controller"

angular
    .module('demoApp',
    [
        dropdown.name
    ])
    .controller('AppController', AppController);

