(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param {ScopesWebApi} scopesWebApi
     * @param {CellTemplate} cellTemplate
     */
    function ScopeOverviewController($scope, scopesWebApi, cellTemplate) {

        $scope.gridOptions = {
            columnDefs: [
                { field: 'displayName', cellTemplate: cellTemplate.templates.scope },
                { field: 'description' },
                { field: 'required', cellTemplate: cellTemplate.templates.bool },
                { field: 'enabled', cellTemplate: cellTemplate.templates.bool }
            ]
        };

        $scope.model = {
            toggle: true
        };

        var refresh = function () {
            return scopesWebApi.list(0, 10, null, null)
                .then(function (data) {
                   $scope.gridOptions.data = data.items;
                });
        };

        refresh();
    }

    app.module.controller('scopeOverviewController', ScopeOverviewController);
})();
