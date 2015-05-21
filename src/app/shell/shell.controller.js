export default angular.module('app.shell.controller', [])
    .controller('Shell', Shell);

/* @ngInject */
function Shell() {
    "use strict";
    var vm = this;

    vm.appName = "Application";
}