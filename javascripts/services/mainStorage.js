/*
 * Services
 */
app.service('mainService', function($http){
    var fields = [];
     return {
     fetchProjects: function(callback) {
       $http.get('data/works.json?v=3').success(callback);
     }
   }
});