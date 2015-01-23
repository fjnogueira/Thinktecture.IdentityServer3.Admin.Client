(function ($, jQuery) {
    "use strict";

    // TODO: Merge with yesNoToggle
    app.module.directive('onOffToggle', function () {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                toggle: '&'
            },
            templateUrl: 'appServices/directives/onOffToggle.html',
            link: function (scope) {
                scope.$watch('ngModel', function (newVal, oldVal) {
                    if (angular.isDefined(oldVal) && newVal !== oldVal && angular.isDefined(scope.toggle)) {
                        scope.toggle();
                    }
                });
            }
        }
    });
})();
