/**
 * Created by Eva on 2016/10/6.
 */
angular.module('myApp', [])
    .controller("SignUpController", function ($scope) {
        $scope.userData = {};
        $scope.submitForm = function () {
        };
    })
    .directive("compare", function () {
        var original = {};
        original.strict = "AE";
        original.scope = {
            originalText: "=compare"
        };
        original.require = "ngModel";
        original.link = function (sco, ele, att, con) {
            con.$validators.compare = function (val) {
                return val == sco.originalText;
            };
            sco.$watch("originalText", function () {
                con.$validate();
            })
        };
        return original
    })