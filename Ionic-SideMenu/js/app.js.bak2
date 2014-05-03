// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.music', {
      url: "/music",
      views: {
        'menuContent' :{
          templateUrl: "templates/music.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.video',{
      url: "/video",
      views: {
        'menuContent' :{
          templateUrl: "templates/video.html",
          controller: 'VideoCtrl'
        }
      }
    })

    .state('app.video_detail',{
        url: "/video/:videoId",
        views: {
            'menuContent' :{
                templateUrl: "templates/video_detail.html",
                controller:'VideoCtrl'

            }
        }

    })

    .state('app.thermostat', {
      url: "/thermostat",
      views: {
        'menuContent' :{
          templateUrl: "templates/thermostat.html",
          controller:'ThermostatCtrl'
        }
      }
    })

   
    .state('app.lights', {
      url: "/lights",
      views: {
        'menuContent' :{
          templateUrl: "templates/lights.html"
        }
      }
    })

    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent' :{
          templateUrl: "templates/settings.html"
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

    .state('app.dash', {
      url: '/thermostat/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/thermostat/dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('app.albums', {
      url: "/artists/:albumId",
      views: {
        'menuContent' :{
          templateUrl: "templates/albums.html",
          controller: 'AlbumCtrl'
        }
      }
    });    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

