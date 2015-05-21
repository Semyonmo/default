export default angular.module('shell.directive', [])
    .directive('shell', shell);

/* @ngInject */
function shell() {
    "use strict";

    return {
        transclude: true,
        restrict: 'EA',
        scope: {

        },
        link: link,
        controller: 'Shell',
        controllerAs: 'vm',
        templateUrl: 'shell/shell.html',
        bindToController: true
    };

    function link(scope, el, attr, ctrl) {

    }
}
