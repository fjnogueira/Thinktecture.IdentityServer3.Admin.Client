(function ($, jQuery) {
    "use strict";

    /**
     * @param $scope
     * @param $modalInstance
     * @param {LookupContainer} lookupContainer
     * @param {ScopesWebApi} scopesWebApi
     * @param {SpinnerService} spinnerService
     * @constructor
     */
    function NewScopeController($scope, $modalInstance, lookupContainer, scopesWebApi, spinnerService) {
        $scope.scopeTypes = lookupContainer.getLookupList(lookupContainer.keys.scopeTypes);
        $scope.oidcScopes = lookupContainer.getLookupList(lookupContainer.keys.oidcScopes);
        $scope.scope = {};

        $scope.oidcScopeChanged = function () {
            if (!$scope.selectedOidcScope) {
                return;
            }

            var oidcScope = lookupContainer.getLookup(lookupContainer.keys.oidcScopes, $scope.selectedOidcScope);

            $scope.scope.name = oidcScope.value;
            $scope.scope.displayName = oidcScope.text;
        };

        $scope.cancel = function () {
            $modalInstance.dismiss();
        };

        $scope.ok = function () {
            spinnerService.startGlobalSpinner();

            scopesWebApi.add($scope.scope)
                .then(function () {
                    $modalInstance.close();
                }, function (err) {
                    $modalInstance.dismiss(err);
                })
                .finally(function () {
                    spinnerService.stopGlobalSpinner();
                });
        };
    }

    app.module.controller('newScopeController', NewScopeController);
})();
