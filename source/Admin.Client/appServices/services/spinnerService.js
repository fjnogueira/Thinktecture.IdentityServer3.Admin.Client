(function ($, jQuery) {
    "use strict";

    /**
     * @param usSpinnerService
     * @constructor
     */
    function SpinnerService(usSpinnerService) {
        var globalSpinnerKey = 'globalSpinner';

        this.startGlobalSpinner = function () {
            usSpinnerService.spin(globalSpinnerKey);
        };

        this.stopGlobalSpinner = function () {
            usSpinnerService.stop(globalSpinnerKey);
        }
    }

    app.module.service('spinnerService', SpinnerService);
})();
