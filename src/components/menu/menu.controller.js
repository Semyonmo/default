export default angular.module('menu.controller', [])
    .controller('Menu', Menu);

/* @ngInject */
function Menu($scope ,$rootScope) {
    "use strict";
    var vm = this;

    vm.isShow = false;

    vm.setActiveItem = function (el) {
        vm.activeElement = el;
    };

    vm.getActiveElement = function () {
        return vm.activeElement;
    };

    vm.hideMenu = function () {

    };

    vm.setRoute = function (route) {
        $rootScope.$broadcast('menu-item-selected-event', {
            route: route
        });
    };

    $scope.$on('menu-toggle', function () {
        vm.isShow = !vm.isShow;
    });
}