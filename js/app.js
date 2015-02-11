(function(){
    var app = angular.module('tutorialGallery', []);

    app.controller('GallController', ['$http', function($http) {
        var gallery = this;
        gallery.items = [];
        console.log("Gallery Controller was called!");
        $http.get('tutorials.json').success(function(data) {
            gallery.items = data;
            console.log("We attempted to success log the info!");
        });
    }]); 
})();
