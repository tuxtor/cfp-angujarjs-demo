
angular.module('cfp').controller('NewPresentationController', function ($scope, $location, locationParser, PresentationResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.presentation = $scope.presentation || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Presentations/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        PresentationResource.save($scope.presentation, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Presentations");
    };
});