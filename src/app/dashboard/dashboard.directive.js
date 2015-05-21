export default angular.module('app.dashboard.directive', [])
    .directive('appDashboard', appDashboard);

/* @ngInject */
function appDashboard() {
    "use strict";

    return {
        restrict: 'EA',
        scope: {},
        link: link,
        controller: 'AppDashboard',
        template: '<dashboard></dashboard>',
        bindToController: true // because the scope is isolated
    };

    function link(scope, el, attr, ctrl) {
        scope.gridsterOpts = {
            columns: 12,
            isMobile: true,
            margins: [10, 10],
            outerMargin: false,
            mobileBreakPoint: 0
        };

        scope.widgets = ctrl.widgets;
    }
}