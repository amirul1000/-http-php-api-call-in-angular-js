    // create the module and name it spaApp
    // also include ngRoute for all our routing needs //,'ngTouch','ngAnimate','ui.bootstrap'
   var spaApp = angular.module('spaApp', ['ngRoute','ngTouch','ngAnimate']);

    // configure our routes
    spaApp.config(function($routeProvider) {
              $routeProvider
              // route for the home page
              .when('/', {
                  templateUrl : 'home.html',
                  controller  : 'mainController'
              })
			  .when('/about', {
                  templateUrl : 'about.html',
                  controller  : 'aboutController'
              })
			   .when('/contact', {
                  templateUrl : 'contact.html',
                  controller  : 'contactController'
              })
    });



// create the controller and inject Angular's $scope
spaApp.controller('mainController', function($scope,$http,$routeParams,$http){
	         
		$scope.loadUser = function(){	
		        // Simple GET request example:
				$http({
				  method: 'POST',
				  data:{cmd:'load_data'},
				  url: 'http://localhost/tutorial/api_call_angular/api/api.php'
				}).then(function successCallback(response) {
					
					  $scope.users = response.data;
					  
					// this callback will be called asynchronously
					// when the response is available
				  }, function errorCallback(response) {
					    alert(response.data);
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				  });
		}
			
	});
	
// create the controller and inject Angular's $scope
spaApp.controller('aboutController', function($scope,$routeParams){
	   
	});
spaApp.controller('contactController', function($scope,$routeParams){
	    
	});	
	
	

