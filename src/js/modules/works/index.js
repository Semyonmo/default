var dataService = require('../services/data.service');


module.exports =
    angular
        .module('app.works', [
            dataService.name
        ])
        .controller('WorksController', WorksController);

WorksController.$inject = ['$log', 'dataService'];
/**
 * Список работ и взаимодействие с ними
 * @constructor
 */
function WorksController($log, dataService) {
    "use strict";
    var vm = this;

    vm.title = "List of my works";
    vm.list = [];
    vm.page = {};

    init();

    function init() {
        return getPage()
            .then(function () {
                $log.info('page loaded');
            });

    }

    function getPage() {
        return dataService.getPage('pages/index')
            .then(function (data) {
                vm.works = data.works;
            });
    }
}