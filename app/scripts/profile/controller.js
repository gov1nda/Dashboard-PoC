'use strict';
var mod = angular.module('Profile');

mod.controller('ProfileCtrl', ['$scope', 'profileService',
    function ($scope, profileService) {
        $scope.profileService = new profileService();

    }
]);


mod.controller('tpl1_ctrl', [
    '$scope',
    '$timeout',
    function($scope, $timeout) {
        $scope.data = {};
        $scope.datasource().getDemographics().then(function(results) {
            $scope.data = results.data;
        });


    }
]);

mod.controller('tpl2_ctrl', [
    '$scope',
    '$timeout',
    'permissions_manager',
    function($scope, $timeout, permissions_manager) {
        $scope.data = {};
        $scope.tracker = $scope.datasource().trackers.sampleArray;

        $scope.datasource().getSampleArray().then(function(results) {
            $scope.data = results.data;
        });

        $scope.contentTpl = "templates/tpl2_content.html";

    }
]);
