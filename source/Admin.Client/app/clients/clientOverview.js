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
        $scope.columns = [
            {field: 'clientId', cellTemplate: cellTemplate.templates.client},
            {field: 'clientName'},
            {field: 'clientUri'},
            {field: 'enabled', cellTemplate: cellTemplate.templates.bool}
        ];

        var refresh = function (pagingInformation) {
            return clientsWebApi.list((pagingInformation.currentPage - 1) * pagingInformation.itemsPerPage, pagingInformation.itemsPerPage, null, null)
                .then(function (data) {
                    return data;
                }, function (err) {
                    uiHelper.showErrorMessage(err, $translate.instant('CLIENTS.ERRORS.COULD_NOT_LOAD_OVERVIEW'))
                });
        };

        $scope.refresh = refresh;
    }

    app.module.controller('clientOverviewController', ClientOverviewController);
})();
