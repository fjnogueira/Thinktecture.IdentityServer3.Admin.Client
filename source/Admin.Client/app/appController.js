(function ($, jQuery) {
    "use strict";

    /**
     * @param {LookupContainer} lookupContainer
     * @constructor
     */
    function AppController(lookupContainer) {
        var oidcScopes = {
            openId: {value: 'openid', text: 'Open ID'},
            profile: {value: 'profile', text: 'Profile'},
            email: {value: 'email', text: 'E-Mail'},
            address: {value: 'address', text: 'Address'},
            phone: {value: 'phone', text: 'Phone'},
            offlineAccess: {value: 'offline_access', text: 'Offline Access'}
        };

        // TODO: Should the text values be translated
        lookupContainer.addLookup(lookupContainer.keys.scopeTypes, {
            identity: {enumValue: 0, text: 'Identity'},
            resource: {enumValue: 1, text: 'Resource'}
        });

        lookupContainer.addLookup(lookupContainer.keys.flows, {
            authorizationCode: {enumValue: 0, text: 'Authorization code'},
            implicit: {enumValue: 1, text: 'Implicit'},
            hybrid: {enumValue: 2, text: 'Hybrid'},
            clientCredentials: {enumValue: 3, text: 'Client credentials'},
            resourceOwner: {enumValue: 4, text: 'Resource owner'},
            custom: {enumValue: 5, text: 'Custom'}
        });

        lookupContainer.addLookup(lookupContainer.keys.accessTokenType, {
            jwt: {enumValue: 0, text: 'Jwt'},
            reference: {enumValue: 1, text: 'Reference'}
        });

        lookupContainer.addLookup(lookupContainer.keys.tokenExpiration, {
            sliding: {enumValue: 0, text: 'Sliding'},
            absolute: {enumValue: 1, text: 'Absolute'}
        });

        lookupContainer.addLookup(lookupContainer.keys.tokenUsage, {
            reUse: {enumValue: 0, text: 'Re use'},
            oneTimeOnly: {enumValue: 1, text: 'One time only'}
        });

        lookupContainer.addLookup(lookupContainer.keys.oidcScopes, oidcScopes);
    }

    app.module.controller('appController', AppController);
})();