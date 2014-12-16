(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param $stateParams
     * @param {ClientsWebApi} clientsWebApi
     * @param {UiHelper} uiHelper
     * @param $translate
     */
    function ClientDetailsController($scope, $stateParams, clientsWebApi, uiHelper, $translate) {

        loadData();

        function loadData () {
            var clientId = $stateParams.clientId;

            clientsWebApi.get(clientId)
                .then(function (client) {
                    $scope.client = client;
                }, function (err) {
                    uiHelper.showErrorMessage(err, $translate.instant('CLIENTS.ERRORS.COULD_NOT_LOAD_DETAILS', {
                        clientId: clientId
                    }));
                });
        }

    }

    app.module.controller('clientDetailsController', ClientDetailsController);
})();
