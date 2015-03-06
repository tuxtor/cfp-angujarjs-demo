

angular.module('cfp').controller('EditPresentationController', function($scope, $routeParams, $location, PresentationResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.presentation = new PresentationResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Presentations");
        };
        PresentationResource.get({PresentationId:$routeParams.PresentationId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.presentation);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.presentation.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Presentations");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Presentations");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.presentation.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});