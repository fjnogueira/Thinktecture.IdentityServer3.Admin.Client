$(function () {
    FastClick.attach(document.body);
});

(function () {
    "use strict";

    window.app = window.app || { resolver: {} };
    app.module = angular.module('ttIdentityAdmin', ['ui.router', 'ui.notify', 'ui.grid', 'pascalprecht.translate', 'toggle-switch', 'xeditable']);
})();