(function ($, jQuery) {
    "use strict";

    /**
     * @param $scope
     * @param $modalInstance
     * @param {LookupContainer} lookupContainer
     * @param {ScopesWebApi} scopesWebApi
     * @constructor
     */
    function NewScopeController($scope, $modalInstance, lookupContainer, scopesWebApi) {
        $scope.scopeTypes = lookupContainer.getLookupList(lookupContainer.keys.scopeTypes);

        $scope.cancel = function () {
            $modalInstance.dismiss();
        };

        $scope.ok = function () {
            scopesWebApi.add($scope.scope)
                .then(function () {
                    $modalInstance.close();
                }, function (err) {
                    $modalInstance.dismiss(err);
                });
        };
    }

    app.module.controller('newScopeController', NewScopeController);
})();
