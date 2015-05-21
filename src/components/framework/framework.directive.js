export default angular.module('framework.directive', [])
    .directive('framework', framework);

/* @ngInject */
function framework() {
    "use strict";

    return {
        transclude: true,
        restrict: 'EA',
        scope: {
            title: '@',
            subtitle: '@'
        },
        link: link,
        controller: 'Framework',
        controllerAs: 'vm',
        templateUrl: 'framework/framework.html',
        bindToController: true // because the scope is isolated
    };

    function link(scope, el, attr, ctrl) {

    }
}