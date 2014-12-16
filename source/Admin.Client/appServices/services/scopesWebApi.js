(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @param {WebApi} webApi
     */
    function ScopesWebApi(webApi) {

        this.list = function (skip, take, searchTerm, sortColumns) {
            return webApi.performGetRequest('scope/list', {
                skip: skip,
                take: take,
                searchTerm: searchTerm,
                sortColumns: sortColumns
            });
        };

        this.get = function (key) {
            return webApi.performGetRequest('scope/get', {
                key: key
            });
        };

        this.add = function (client) {
            return webApi.performPutRequest('scope/add', client);
        };

        this.update = function (client) {
            return webApi.performPostRequest('scope/update', client);
        };

        this.remove = function (key) {
            return webApi.performDeleteRequest('scope/delete', key);
        };

    }

    app.module.service('scopesWebApi', ScopesWebApi);
})();
