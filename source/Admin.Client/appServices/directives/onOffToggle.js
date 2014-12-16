(function ($, jQuery) {
    "use strict";

    app.module.directive('onOffToggle', function () {
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            templateUrl: 'appServices/directives/onOffToggle.html'
        }
    });
})();
