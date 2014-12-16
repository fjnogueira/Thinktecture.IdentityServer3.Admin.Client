(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param {ClientsWebApi} clientsWebApi
     * @param {CellTemplate} cellTemplate
     * @param {UiHelper} uiHelper
     * @param $translate
     */
    function ClientOverviewController($scope, clientsWebApi, cellTemplate, uiHelper, $translate) {

        $scope.gridOptions = {
            columnDefs: [
                { field: 'clientId', cellTemplate: cellTemplate.templates.client },
                { field: 'clientName' },
                { field: 'clientUri' },
                { field: 'enabled', cellTemplate: cellTemplate.templates.bool }
            ]
        };

        $scope.model = {
            toggle: true
        };

        var refresh = function () {
            return clientsWebApi.list(0, 10, null, null)
                .then(function (data) {
                    $scope.gridOptions.data = data.items;
                }, function (err) {
                    uiHelper.showErrorMessage(err, $translate.instant('CLIENTS.ERRORS.COULD_NOT_LOAD_OVERVIEW'))
                });
        };

        refresh();
    }

    app.module.controller('clientOverviewController', ClientOverviewController);
})();
