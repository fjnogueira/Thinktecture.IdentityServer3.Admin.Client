(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param {ScopesWebApi} scopesWebApi
     */
    function ScopeOverviewController($scope, scopesWebApi) {

        $scope.gridData = {};

        $scope.model = {
            toggle: true
        };

    }

    app.module.controller('scopeOverviewController', ScopeOverviewController);
})();
