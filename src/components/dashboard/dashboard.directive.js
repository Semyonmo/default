export default angular.module('dashboard.directive', [])
    .directive('dashboard', dashboard);

/* @ngInject */
function dashboard() {
    "use strict";

    return {
        transclude: false,
        restrict: 'EA',
        link: link,
        controller: 'Dashboard',
        controllerAs: 'vm',
        templateUrl: 'dashboard/dashboard.html',
        bindToController: true // because the scope is isolated
    };

    function link(scope, el, attr, ctrl) {

    }
}