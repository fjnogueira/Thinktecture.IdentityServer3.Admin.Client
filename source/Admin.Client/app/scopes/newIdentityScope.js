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
    function NewIdentityScopeController($scope, $modalInstance, lookupContainer, scopesWebApi, spinnerService) {
        $scope.oidcScopes = lookupContainer.getData(lookupContainer.keys.oidcScopes);
        $scope.scope = {};
        $scope.scope.type = lookupContainer.getData(lookupContainer.keys.scopeTypes).identity.enumValue;

        $scope.oidcScopeChanged = function () {
            if (!$scope.selectedOidcScope) {
                return;
            }

            $scope.scope.name = $scope.selectedOidcScope.value;
            $scope.scope.displayName = $scope.selectedOidcScope.text;
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

    app.module.controller('newIdentityScopeController', NewIdentityScopeController);
})();
