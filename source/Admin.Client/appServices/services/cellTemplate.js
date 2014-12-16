(function ($, jQuery) {
    "use strict";

    /**
     * @param $templateCache
     * @constructor
     */
    function CellTemplate($templateCache) {
        var templateFileNames = {
            bool: 'boolCellTemplate.html'
        };

        $templateCache.put(templateFileNames.bool,
            '<div class="ui-grid-cell-contents text-center">' +
            '<i class="fa fa-circle" ng-class="{\'text-success\': COL_FIELD, \'text-danger\': !COL_FIELD}"></i>' +
            '</div>'
        );

        this.templates = templateFileNames;
    }

    app.module.service('cellTemplate', CellTemplate);
})();
