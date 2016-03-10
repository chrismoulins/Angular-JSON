/**
 * Created by inet2005 on 11/3/15.
 */
angular.module('myApp',[]).controller('customerController', function($http, $scope){

    //put all controller code here
    //$scope.usernames=[
    //    {Name : "Alfreds Futterkiste", City : "Berlin", Country : "Germany"},
    //    {Name : "Berglunds snabbköp", City : "Luleå", Country : "Sweden"}
    //];

    $http.get("customers.json")
        .success(function(response) {
            $scope.usernames = response.records;});
});