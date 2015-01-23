(function ($, jQuery) {

    /**
     * @constructor
     * @param $scope
     * @param $stateParams
     * @param $translate
     * @param {ClientsWebApi} clientsWebApi
     * @param {UiHelper} uiHelper
     * @param {LookupContainer} lookupContainer
     */
    "use strict";
    function ClientDetailsController($scope, $stateParams, $translate, clientsWebApi, uiHelper, lookupContainer) {
        loadData();

        $scope.flows = lookupContainer.getLookupList(lookupContainer.keys.flows);
        $scope.tokenUsage = lookupContainer.getLookupList(lookupContainer.keys.tokenUsage);
        $scope.tokenExpiration = lookupContainer.getLookupList(lookupContainer.keys.tokenExpiration);
        $scope.accessTokenType = lookupContainer.getLookupList(lookupContainer.keys.accessTokenType);

        $scope.showFlows = function () {
            return $scope.flows[$scope.client.flow].value.text;
        };

        $scope.showTokenUsage = function () {
            return $scope.tokenUsage[$scope.client.refreshTokenUsage].value.text;
        };

        $scope.showTokenExpiration = function () {
            return $scope.tokenExpiration[$scope.client.refreshTokenExpiration].value.text;
        };

        $scope.showAccessTokenType = function () {
            return $scope.accessTokenType[$scope.client.accessTokenType].value.text;
        };

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

        function save() {
            clientsWebApi.update($scope.client)
                .then(function () {
                    uiHelper.success($translate.instant('CLIENTS.DETAILS.UPDATE_SUCCESSFUL'));
                }, function (err) {
                    uiHelper.showErrorMessage(err, $translate.instant('CLIENTS.ERRORS.COULD_NOT_UPDATE'));
                });
        }

        $scope.save = save;
    }

    app.module.controller('clientDetailsController', ClientDetailsController);
})();
