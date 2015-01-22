(function ($, jQuery) {

    /**
     * @constructor
     * @param $scope
     * @param $translate
     * @param $modal
     * @param {ClientsWebApi} clientsWebApi
     * @param {CellTemplate} cellTemplate
     * @param {UiHelper} uiHelper
     */
    "use strict";
    function ClientOverviewController($scope, $translate, $modal, clientsWebApi, cellTemplate, uiHelper) {
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

        $scope.newClient = function () {
            var modal = $modal.open({
                templateUrl: 'app/clients/newClient.html',
                controller: 'newClientController',
                backdrop: 'static'
            });

            modal.result
                .then(function () {
                    uiHelper.success($translate.instant('CLIENTS.NEW.SUCCESS'));
                    // ToDo: Refresh
                }, function (err) {
                    if (err) {
                        uiHelper.showErrorMessage(err, $translate.instant('CLIENTS.ERRORS.COULD_NOT_CREATE_NEW_CLIENT'))
                    }
                });
        };

        $scope.refresh = refresh;
    }

    app.module.controller('clientOverviewController', ClientOverviewController);
})();
