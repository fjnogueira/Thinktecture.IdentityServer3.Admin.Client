(function ($, jQuery) {
    "use strict";

    /**
     * @param {LookupContainer} lookupContainer
     * @constructor
     */
    function AppController(lookupContainer) {
        // TODO: Should the text values be translated
        lookupContainer.addLookup(lookupContainer.keys.scopeTypes, {
            0: {enumValue: 0, text: 'Identity'},
            1: {enumValue: 1, text: 'Resource'}
        });

        lookupContainer.addLookup(lookupContainer.keys.flows, {
            0: {enumValue: 0, text: 'Authorization code'},
            1: {enumValue: 1, text: 'Implicit'},
            2: {enumValue: 2, text: 'Hybrid'},
            3: {enumValue: 3, text: 'Client credentials'},
            4: {enumValue: 4, text: 'Resource owner'},
            5: {enumValue: 5, text: 'Custom'}
        });

        lookupContainer.addLookup(lookupContainer.keys.accessTokenType, {
            0: {enumValue: 0, text: 'Jwt'},
            1: {enumValue: 1, text: 'Reference'}
        });

        lookupContainer.addLookup(lookupContainer.keys.tokenExpiration, {
            0: {enumValue: 0, text: 'Sliding'},
            1: {enumValue: 1, text: 'Absolute'}
        });

        lookupContainer.addLookup(lookupContainer.keys.tokenUsage, {
            0: {enumValue: 0, text: 'Re use'},
            1: {enumValue: 1, text: 'One time only'}
        });
    }

    app.module.controller('appController', AppController);
})();
