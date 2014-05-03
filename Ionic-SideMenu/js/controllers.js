// http://codepen.io/anon/pen/nFmuc
//http://jsfiddle.net/sander_van_dam/m5YJu/ - Angular JS knob.js full example
//http://plnkr.co/edit/ULmvU0nJeQpChyEU02a3?p=preview
angular.module('starter.controllers', [])


.controller('AppCtrl', ['$scope','$http','$location', function($scope,$http,$location) {
	var current_page = $location.url()
	
	  $scope.goTo = function(path_variable){
			switch(path_variable){
				case "music":
					$scope.lists = [
						{ item :'test' }
					]		
				break;
				case "video":

                    $scope.lists = [
                        {item : 'All movies'},
                        {item : 'Recently Released'},
                        {item : 'Recently Added'},
                        {item : 'Recently Viewed'},
                        {item : 'On Deck'},
                        {item : 'By Rating'},
                        {item : 'By Folder'},
                        {item : 'Genre'}
                    ]				
                break;
			}
			// $scope.lists = [
			// 	{ item :'test' }
			// ]		

	        $location.path("/app/"+path_variable); // path not hash
	    }



	// console.log(current_page)
	// switch(current_page){
	// 	case "/app/video":
	// 		$scope.lists = [
	// 			{ item :'test' }
	// 		]		
	// 	break;
	// 	case "/app/music":
	// 		$scope.lists = [
	// 			{ item : 'test2' }
	// 		]
	// 	break;
	// }
	
	

}])

.directive('knob', function() {
    return {
        require: 'ngModel',
        scope: { model: '=ngModel' },
        controller: function($scope, $element, $timeout) {
            var el = $($element);
            $scope.$watch('model', function(v) {
                var el = $($element);
                el.val(v).trigger('change');
                console.log(v)
            });
        },

        link: function($scope, $element, $attrs,$ngModel) {
            var el = $($element);
            el.val($scope.value).knob(
                {
                    'change' : function (v) {
                        $scope.$apply(function () {
                          $ngModel.$setViewValue(v);
                    });
                }
                }
            );
        }
    }

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }

  ];
})

.controller('VideoCtrl', function($scope) {
	
	//$scope.loadMenu('home');
	$scope.myData = {};
	$scope.myData.showVideo = true;

	$scope.videos = [
        { title: '500 Days of Summer', id: 1 },
        { title: '2 Days in New York', id: 2 },
        { title: '2 Fast 2 Furious', id: 3 },
        { title: '2 Guns', id: 4 },
        { title: '3 Musketeers', id: 5 },
        { title: '12 Years A Slave', id: 6 }

    ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.artists = [
    { name: 'AZ', id: 1 },
    { name: 'A+', id: 2 },
    { name: '50 Cent', id: 3 },
    { name: 'A Tribe Called Quest', id: 4 },
    { name: 'Afu Ra', id: 5 },
    { name: 'Ali Vegas', id: 6 }
    
  ];	
})


.controller('AlbumCtrl', function($scope, $stateParams) {
  $scope.albums = [
    { name: 'Do or Die', id: 1 },
    { name: 'Blah or Boo', id: 2 },
    { name: 'Crippin', id: 3 },
    { name: 'Crippin Long Stocking', id: 4 }
    
  ];	
})


.controller('ThermostatCtrl', function($scope,$stateParams) {

    $scope.slider = {};
    $scope.slider.rangeValue = 0;
    $scope.text = 22;
    $scope.number = 24;

    $scope.dialval2 = 44

    // $scope.$watch('text', function(val,old) {
    //     $scope.text = parseInt(val);
    //     console.log("temp" + $scope.text)
    // });

    // $scope.$watch('slider.rangeValue', function(val,old) {
    //     $scope.slider.rangeValue = parseInt(val);
    //     console.log('range=' + $scope.slider.rangeValue)
    // });
})