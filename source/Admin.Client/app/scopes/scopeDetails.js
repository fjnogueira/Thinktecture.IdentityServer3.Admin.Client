(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param $translate
     * @param $state
     * @param $stateParams
     * @param {ScopesWebApi} scopesWebApi
     * @param {UiHelper} uiHelper
     * @param {LookupContainer} lookupContainer
     * @param {ConfirmDialog} confirmDialog
     */
    function ScopeDetailsController($scope, $state, $stateParams, $translate, scopesWebApi, uiHelper, lookupContainer, confirmDialog) {
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
            scopesWebApi.update($scope.scope)
                .then (function () {
                uiHelper.success($translate.instant('SCOPES.DETAILS.UPDATE_SUCCESSFUL'));
            }, function (err) {
                uiHelper.showErrorMessage(err, $translate.instant('SCOPES.ERRORS.COULD_NOT_UPDATE'));
            });
        };

        $scope.delete = function () {
            confirmDialog.confirmTranslated('SCOPES.OVERVIEW.CONFIRM_DELETE')
                .then(function () {
                    return scopesWebApi.remove($scope.scope.id);
                })
                .then(function () {
                    $state.go('^');
                }, function (err) {
                    if (angular.isDefined(err)) {
                        uiHelper.showErrorMessage(err, $translate.instant('SCOPES.ERRORS.COULD_NOT_DELETE'));
                    }
                });
        }
    }

    app.module.controller('scopeDetailsController', ScopeDetailsController);
})();
