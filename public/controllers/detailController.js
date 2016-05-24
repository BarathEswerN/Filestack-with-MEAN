angular.module('superheroApp')
.controller('detailController', function($scope, $http, $routeParams){
    $scope.superhero = {};
    //get the id to query the db and retrieve the correct superhero
    var id = $routeParams.id;
    console.log(id);
    $http.get('/superhero/' + id)
        .success(function(data){
            console.log(JSON.stringify(data));
            $scope.superhero = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });     
});
