//describe("PasswordController", function () {
//    "use strict";
//    beforeEach(module('app'));
//
//    var $controller,
//        $compile,
//        $rootScope;
//
//    beforeEach(inject(function (_$controller_,_$compile_, _$rootScope_) {
//        $controller = _$controller_;
//        $compile = _$compile_;
//        $rootScope = _$rootScope_;
//    }));
//
//
//    describe('$scope.grade()', function () {
//        var $scope,
//            controller;
//
//        beforeEach(function() {
//            $scope = {};
//            $controller('PasswordController', {$scope: $scope});
//        });
//
//        it('set "Strong if password more then 8 symbols"', function () {
//            $scope.password = "amazingreallongpassword";
//            $scope.grade();
//            expect($scope.strength).toEqual('strong');
//        });
//
//        it('set "Weak if password lower 3 symbols"', function () {
//            $scope.password = "pas";
//            $scope.grade();
//            expect($scope.strength).toEqual('weak');
//        });
//
//    });
//});
//
