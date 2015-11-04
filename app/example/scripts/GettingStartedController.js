angular
  .module('example')
  .controller('GettingStartedController', function($scope, supersonic) {
    $scope.iterneraries = null;

        supersonic.ui.views.current.whenVisible(function() {

        var Itenary = Parse.Object.extend("Itenary");
        var query = new Parse.Query(Itenary);
        query.find({
            success: function (results) {
            $scope.iterneraries = results; 
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }
        
        });
        
        
 });
    
});
