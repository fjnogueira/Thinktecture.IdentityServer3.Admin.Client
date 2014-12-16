(function ($, jQuery) {
    "use strict";

    app.module.directive('yesNoToggle', function () {
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            templateUrl: 'appServices/directives/yesNoToggle.html'
        }
    });
})();
