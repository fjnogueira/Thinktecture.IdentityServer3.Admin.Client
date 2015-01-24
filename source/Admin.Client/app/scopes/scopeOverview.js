(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param $modal
     * @param $translate
     * @param {ScopesWebApi} scopesWebApi
     * @param {CellTemplate} cellTemplate
     * @param {UiHelper} uiHelper
     * @param {SpinnerService} spinnerService
     */
    function ScopeOverviewController($scope, $modal, $translate, scopesWebApi, cellTemplate, uiHelper, spinnerService) {
        $scope.columns = [
            {field: 'displayName', cellTemplate: cellTemplate.templates.scope},
            {field: 'description'},
            {field: 'required', cellTemplate: cellTemplate.templates.bool},
            {field: 'enabled', cellTemplate: cellTemplate.templates.bool}
        ];

        var refresh = function (pagingInformation) {
            spinnerService.startGlobalSpinner();

            return scopesWebApi.list((pagingInformation.currentPage - 1) * pagingInformation.itemsPerPage, pagingInformation.itemsPerPage, null, pagingInformation.sortColumns)
                .then(function (data) {
                    return data;
                }, function (err) {
                    uiHelper.showErrorMessage(err, $translate.instant('SCOPES.ERRORS.COULD_NOT_LOAD_OVERVIEW'))
                })
                .finally(function () {
                    spinnerService.stopGlobalSpinner();
                });
        };

        $scope.newScope = function () {
            var modal = $modal.open({
                templateUrl: 'app/scopes/newScope.html',
                controller: 'newScopeController',
                backdrop: 'static'
            });

            modal.result
                .then(function () {
                    uiHelper.success($translate.instant('SCOPES.NEW.SUCCESS'));
                    // ToDo: Refresh
                }, function (err) {
                    if (err) {
                        uiHelper.showErrorMessage(err, $translate.instant('SCOPES.ERRORS.COULD_NOT_CREATE_NEW_SCOPE'))
                    }
                });
        };

        $scope.refresh = refresh;
    }

    app.module.controller('scopeOverviewController', ScopeOverviewController);
})
();
