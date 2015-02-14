var app = (function (win) {
    'use strict';

    

    // Initialize Backend Services SDK
    var el = new Everlive({
        apiKey: appSettings.everlive.apiKey,
        scheme: appSettings.everlive.scheme
    });

    var total = 0;



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

    var getPractices = (function () {


        var data = el.data('PracticeSessions');
            data.count()
            .then(function(data){
                console.log("practices "+data.result)
                //return data.result;
                total = data.result;
                $('.getPractices').text(337+total)
            },
            function(error){
                total = 337;
            }); 

       
    }());

    

    return {
        getYear: getYear,
        getPractices:getPractices
    };

}(window));
