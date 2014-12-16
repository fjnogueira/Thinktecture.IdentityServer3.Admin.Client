(function ($, jQuery) {
    "use strict";

    app.module.directive('translatedToggle', function () {
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            templateUrl: 'appServices/directives/translatedToggle.html'
        }
    });
})();
