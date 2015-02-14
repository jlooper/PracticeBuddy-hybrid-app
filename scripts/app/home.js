/**
 * Home view model
 */

var app = app || {};

app.Home = (function () {
    'use strict';

    var homeViewModel = (function () {

        
        return {
            getYear: app.getYear,
            getPractices: app.getPractices
        };

    }());

    return homeViewModel;

}());

