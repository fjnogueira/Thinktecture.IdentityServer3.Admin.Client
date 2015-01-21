(function ($, jQuery) {
    "use strict";

    app.module.directive('defaultGrid', function () {
        return {
            restrict: 'E',
            scope: {
                onRefresh: '&',
                columns: '='
            },
            templateUrl: 'appServices/directives/defaultGrid.html',
            link: function (scope, element, attrs) {
                var pagingInformation = {
                    itemsPerPage: 10,
                    currentPage: 1,
                    totalItems: 0
                };

                scope.paging = pagingInformation;

                function refresh() {
                    var onRefreshHandler = scope.onRefresh();

                    if (angular.isDefined(onRefreshHandler)) {
                        onRefreshHandler(scope.paging)
                            .then(function (result) {
                                scope.gridOptions.data = result.items;
                                scope.paging.totalItems = result.totalCount;
                            });
                    }
                }

                scope.refresh = refresh;

                scope.gridOptions = {
                    useExternalSorting: true,
                    columnDefs: scope.columns,
                    minRowsToShow: scope.paging.itemsPerPage
                };

                refresh();
            }
        }
    });
})();
