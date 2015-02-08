var app = (function (win) {
    'use strict';

    

    // Initialize Backend Services SDK
    var el = new Everlive({
        apiKey: appSettings.everlive.apiKey,
        scheme: appSettings.everlive.scheme
    });

    

    // Initialize KendoUI mobile application
    var mobileApp = new kendo.mobile.Application(document.body, {
        transition: 'slide',
        layout: 'mobile-tabstrip',
        skin: 'flat'
    });

    var getYear = (function () {
        var currentTime = new Date();
        return currentTime.getFullYear();
    }());

    return {
        everlive: el,
        getYear: getYear
    };

}(window));
