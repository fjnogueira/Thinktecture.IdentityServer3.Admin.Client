window.thinktecture = window.thinktecture || {};
window.thinktecture.translations = {};

window.thinktecture.translations.en = {
    "APP_TITLE": "Thinktecture IdentityServer v3 Admin",

    "MENU": {
        "SCOPES": "Scopes",
        "CLIENTS": "Clients"
    },

    "START": {
        "TITLE": "It works!"
    },

    "SCOPES": {
        "COMMON": {
            "NAME": "Name",
            "DISPLAY_NAME": "Display Name",
            "DESCRIPTION": "Description",
            "ENABLED": "State",
            "REQUIRED": "Required",
            "EMPHASIZE": "Emphasize",
            "TYPE": "Type",
            "CLAIMS": "Claims",
            "INCLUDE_ALL_CLAIMS_FOR_USER": "Include All Claims For User",
            "CLAIMS_RULE": "Claims Rule",
            "SHOW_IN_DISCOVERY_DOCUMENT": "Show In Discovery Document"
        },
        "OVERVIEW": {
            "TITLE": "Scopes"
        },
        "NEW": {
            "TITLE": "Create a new scope",
            "NOTICE": "Additional settings can be provided after creating a new scope.",
            "SUCCESS": "Your new scope has been created."
        },
        "DETAILS": {
            "TITLE": "Scope Details",
            "ALWAYS_INCLUDE_IN_ID_TOKEN": "Always Include In ID Token",
            "NO_CLAIMS": "No claims are associated with this scope.",
            "SETTING": "Setting",
            "VALUE": "Value",
            "UPDATE_SUCCESSFUL": "Scope has been updated successfully."
        },
        "ERRORS": {
            "COULD_NOT_LOAD_DETAILS": "Details could not be loaded for scope with ID “{{scopeId}}”.",
            "COULD_NOT_LOAD_OVERVIEW": "Scopes could not be loaded.",
            "COULD_NOT_CREATE_NEW_SCOPE": "New scope could not be created.",
            "COULD_NOT_UPDATE_SCOPE": "Scope could not be updated."
        }
    },

    "CLIENTS": {
        "COMMON": {
            "ENABLED": "State",
            "CLIENT_ID": "Client ID",
            "CLIENT_SECRET": "Client Secret",
            "CLIENT_NAME": "Client Name",
            "CLIENT_URI": "Client URI",
            "LOGO_URI": "Logo URI",
            "REQUIRE_CONSENT": "Require Consent",
            "ALLOW_REMEMBER_CONSENT": "Allow Remember Consent",
            "FLOW": "Flow",
            "REDIRECT_URIS": "Redirect URIs",
            "POST_LOGOUT_REDIRECT_URIS": "POST Logout Redirect URIs",
            "SCOPE_RESTRICTIONS": "Scope Restrictions",
            "IDENTITY_TOKEN_LIFETIME": "Identity Token Lifetime",
            "ACCESS_TOKEN_LIFETIME": "Access Token Lifetime",
            "AUTHORIZATION_CODE_LIFETIME": "Authorization Code Lifetime",
            "ABSOLUTE_REFRESH_TOKEN_LIFETIME": "Absolute Refresh Token Lifetime",
            "SLIDING_REFRESH_TOKEN_LIFETIME": "Sliding Refresh Token Lifetime",
            "REFRESH_TOKEN_USAGE": "Refresh Token Usage",
            "REFRESH_TOKEN_EXPIRATION": "Refresh Token Expiration",
            "IDENTITY_TOKEN_SIGNING_KEY_TYPE": "Identity Token Signing Key Type",
            "ACCESS_TOKEN_TYPE": "Access Token Type",
            "ALLOW_LOCAL_LOGIN": "Allow Local Login",
            "IDENTITY_PROVIDER_RESTRICTIONS": "Identity Provider Restrictions",
            "INCLUDE_JWT_ID": "Include JWT ID"
        },
        "OVERVIEW": {
            "TITLE": "Clients"
        },
        "DETAILS": {
            "TITLE": "Client Details",
            "SETTING": "Setting",
            "VALUE": "Value",
            "NO_REDIRECT_URIS": "No redirect URIs are associated with this client.",
            "NO_POST_LOGOUT_REDIRECT_URIS": "No POST logout redirect URIs are associated with this client.",
            "NO_SCOPE_RESTRICTIONS": "No scope restrictions are associated with this client.",
            "NO_IDENTITY_PROVIDER_RESTRICTIONS": "No identity provider restrictions are associated with this client."
        },
        "ERRORS": {
            "COULD_NOT_LOAD_DETAILS": "Details could not be loaded for client with ID “{{clientId}}”.",
            "COULD_NOT_LOAD_OVERVIEW": "Clients could not be loaded."
        }
    },

    "COMMON": {
        "TOGGLES": {
            "ON": "On",
            "OFF": "Off",
            "YES": "Yes",
            "NO": "No"
        },
        "NO_DATA": "No data",
        "NEW": "New",
        "OK": "OK",
        "CANCEL": "Cancel",
        "PLEASE_SELECT": "Please select...",
        "EMPTY_FIELD": "empty"
    }
};