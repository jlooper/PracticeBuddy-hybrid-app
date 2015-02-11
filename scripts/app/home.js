/**
 * Home view model
 */

var app = app || {};

app.Home = (function () {
    'use strict';

    var homeViewModel = (function () {

        var getNumPractices = function () {
            var num = 0;
            var data = app.everlive.data('PracticeSessions');
            data.count()
            .then(function(data){
                console.log(data.result)
                return data.result;
            },
            function(error){
                return 1;
            });         
        };

        
        return {
            getYear: app.getYear,
            getNumPractices: getNumPractices
        };

    }());

    return homeViewModel;

}());

