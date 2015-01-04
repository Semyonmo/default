module.exports =
    angular.module('app.works', [])
        .controller('WorksCtrl', WorksCtrl);

WorksCtrl.$inject = ['$scope'];

function WorksCtrl() {
    "use strict";
    var vm = this;

    vm.title = "List of my works";
    vm.goToWork = goToWork;
    vm.works = [];

    function goToWork() {
        console.log('go to work');
    }
}