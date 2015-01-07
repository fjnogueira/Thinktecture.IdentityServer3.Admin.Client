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
     */
    function ScopeOverviewController($scope, $modal, $translate, scopesWebApi, cellTemplate, uiHelper) {
        $scope.paging = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
        };

        $scope.gridOptions = {
            columnDefs: [
                {field: 'displayName', cellTemplate: cellTemplate.templates.scope},
                {field: 'description'},
                {field: 'required', cellTemplate: cellTemplate.templates.bool},
                {field: 'enabled', cellTemplate: cellTemplate.templates.bool}
            ],
            minRowsToShow: $scope.paging.itemsPerPage
        };

        $scope.model = {
            toggle: true
        };

        var refresh = function () {
            return scopesWebApi.list(($scope.paging.currentPage - 1) * $scope.paging.itemsPerPage, $scope.paging.itemsPerPage, null, null)
                .then(function (data) {
                    $scope.gridOptions.data = data.items;

                    $scope.paging.totalItems = data.totalCount;
                }, function (err) {
                    uiHelper.showErrorMessage(err, $translate.instant('SCOPES.ERRORS.COULD_NOT_LOAD_OVERVIEW'))
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
                    refresh();
                }, function (err) {
                    if (err) {
                        uiHelper.showErrorMessage(err, $translate.instant('SCOPES.ERRORS.COULD_NOT_CREATE_NEW_SCOPE'))
                    }
                });
        };

        $scope.refresh = refresh;

        refresh();
    }

    app.module.controller('scopeOverviewController', ScopeOverviewController);
})
();
