$(function() {
    var app = angular.module('webGallery', []);

    app.controller('GalleryController', ['$http', function($http) {
        var gallery = this;
        gallery.items = [];
        $http.get('/tutorials.json').success(function(data) {
            gallery.items = data;
        });
    }]);

});