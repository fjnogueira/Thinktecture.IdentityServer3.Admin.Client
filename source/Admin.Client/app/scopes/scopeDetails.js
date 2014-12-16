(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param $stateParams
     * @param {ScopesWebApi} scopesWebApi
     * @param {UiHelper} uiHelper
     * @param $translate
     */
    function ScopeDetailsController($scope, $stateParams, scopesWebApi, uiHelper, $translate) {

        loadData();

        function loadData () {
            var scopeId = $stateParams.scopeId;

            scopesWebApi.get(scopeId)
                .then(function (scope) {
                    $scope.scope = scope;
                }, function (err) {
                    uiHelper.showErrorMessage(err, $translate.instant('SCOPES.ERRORS.COULD_NOT_LOAD_DETAILS', {
                        scopeId: scopeId
                    }));
                })
        }

    }

    app.module.controller('scopeDetailsController', ScopeDetailsController);
})();
