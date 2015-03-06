angular.module('cfp').factory('PresentationResource', function($resource){
    var resource = $resource('rest/presentations/:PresentationId',{PresentationId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});