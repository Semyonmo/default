export default angular.module('app.dashboard.controller', [])
    .controller('AppDashboard', AppDashboard);

/* @ngInject */
function AppDashboard() {
    "use strict";
    var vm = this;

    vm.widgets = [
        {
            sizeX: 4,
            sizeY: 3,
            row: 1,
            col: 0
        },
        {
            sizeX: 8,
            sizeY: 3,
            row: 1,
            col: 4
        }, {
            sizeX: 8,
            sizeY: 3,
            row: 2,
            col: 0
        },
        {
            sizeX: 4,
            sizeY: 3,
            row: 2,
            col: 8
        },
        {
            sizeX: 12,
            sizeY: 3,
            row: 3,
            col: 1
        }
    ];
}