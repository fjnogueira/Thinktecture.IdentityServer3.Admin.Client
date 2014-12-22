(function ($, jQuery) {
    "use strict";

    /**
     * @param {LookupContainer} lookupContainer
     * @constructor
     */
    function AppController(lookupContainer) {
        lookupContainer.addLookup(lookupContainer.keys.scopeTypes, {
            0: {enumValue: 0, text: 'Identity'},
            1: {enumValue: 1, text: 'Resource'}
        });
    }

    app.module.controller('appController', AppController);
})();
