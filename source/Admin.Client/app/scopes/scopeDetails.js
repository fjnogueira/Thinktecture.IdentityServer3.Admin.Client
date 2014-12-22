(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param $translate
     * @param $stateParams
     * @param {ScopesWebApi} scopesWebApi
     * @param {UiHelper} uiHelper
     * @param {LookupContainer} lookupContainer
     */
    function ScopeDetailsController($scope, $stateParams, $translate, scopesWebApi, uiHelper, lookupContainer) {
        loadData();

        $scope.scopeTypes = lookupContainer.getLookupList(lookupContainer.keys.scopeTypes);

        function loadData () {
            var scopeId = $stateParams.scopeId;

            scopesWebApi.get(scopeId)
                .then(function (scope) {
                    $scope.scope = scope;
                }, function (err) {
                    uiHelper.showErrorMessage(err, $translate.instant('SCOPES.ERRORS.COULD_NOT_LOAD_DETAILS', {
                        scopeId: scopeId
                    }));
                });
        }

        $scope.showScopeType = function() {
            return $scope.scopeTypes[$scope.scope.type].value.text;
        };

        $scope.save = function () {
            // TODO: Implement save function
        };

    }

    app.module.controller('scopeDetailsController', ScopeDetailsController);
})();
