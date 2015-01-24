(function ($, jQuery) {
    "use strict";

    /**
     * @param $scope
     * @param $modalInstance
     * @param {ClientsWebApi} clientsWebApi
     * @param {SpinnerService} spinnerService
     * @constructor
     */
    function NewClientController($scope, $modalInstance, clientsWebApi, spinnerService) {
        $scope.cancel = function () {
            $modalInstance.dismiss();
        };

        $scope.ok = function () {
            spinnerService.startGlobalSpinner();

            clientsWebApi.add($scope.client)
                .then(function () {
                    $modalInstance.close();
                }, function (err) {
                    $modalInstance.dismiss(err);
                })
                .finally(function () {
                    spinnerService.stopGlobalSpinner();
                });
        };
    }

    app.module.controller('newClientController', NewClientController);
})();
