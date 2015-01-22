(function ($, jQuery) {
    "use strict";

    /**
     * @param $scope
     * @param $modalInstance
     * @param {ClientsWebApi} clientsWebApi
     * @constructor
     */
    function NewClientController($scope, $modalInstance, clientsWebApi) {
        $scope.cancel = function () {
            $modalInstance.dismiss();
        };

        $scope.ok = function () {
            clientsWebApi.add($scope.client)
                .then(function () {
                    $modalInstance.close();
                }, function (err) {
                    $modalInstance.dismiss(err);
                });
        };
    }

    app.module.controller('newClientController', NewClientController);
})();
