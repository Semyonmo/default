export default angular.module('framework.controller', [])
    .controller('Framework', Framework);

/* @ngInject */
function Framework($scope, $rootScope, $location) {
    "use strict";

    var vm = this;

    $scope.$on('menu-item-selected-event', function (e, data) {
        $location.path(data.route);
    });

    vm.menuToggle = function () {
        $rootScope.$broadcast('menu-toggle');
    }
}