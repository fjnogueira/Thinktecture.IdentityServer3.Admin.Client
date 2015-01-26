(function ($, jQuery) {
    "use strict";

    /**
     * @param {WebApi} webApi
     * @constructor
     */
    function DashboardWebApi(webApi) {
        this.totalCounts = function () {
            return webApi.performGetRequest('dashboard/totalCount', null);
        }
    }

    app.module.service('dashboardWebApi', DashboardWebApi);
})();
