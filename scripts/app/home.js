/**
 * Home view model
 */

var app = app || {};

app.Home = (function () {
    'use strict';

    var homeViewModel = (function () {

        var getYear = function () {
            var currentTime = new Date();
            return currentTime.getFullYear();
        };

        return {
            getYear: app.getYear
        };

    }());

    return homeViewModel;

}());

