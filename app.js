'use strict';

var moduleName = 'eef';

angular.module(moduleName, [
  'ngMaterial',
  'ngMessages',
  'ngRoute',
]);

angular.module(moduleName).controller('MainController', [
  '$scope',
  '$location',
  '$anchorScroll',
  '$mdSidenav',
  '$mdMedia',
  function ($scope, $location, $anchorScroll, $mdSidenav, $mdMedia) {
    this.toggle = function () {
      $mdSidenav('left').toggle();
    };

    this.openMenu = function ($mdOpenMenu, event) {
      $mdOpenMenu(event);
    };

    var pageNameMap = {
      '/': '',
      '/contribute': 'Contribute',
      '/documentation': 'Documentation',
      '/download': 'Download',
      '/gallery': 'Gallery',
      '/overview': 'Overview',
      '/support': 'Support'
    };
    this.pageName = '';
    var main = this;
    $scope.$on('$locationChangeSuccess', function () {
      var path = $location.path();
      if ($mdMedia('xs') || $mdMedia('sm') || $mdMedia('md')) {
        main.pageName = 'EEF ' + pageNameMap[path];
      } else {
        main.pageName = pageNameMap[path];
      }

      $anchorScroll('top');
    }
  );
}]);

angular.module(moduleName).config(['$mdThemingProvider', '$routeProvider', '$locationProvider', function ($mdThemingProvider, $routeProvider, $locationProvider) {
    $mdThemingProvider.theme('default').primaryPalette('indigo', {default: '600'}).accentPalette('amber', {default: '500'}).warnPalette('red', {default: '700'});

    $routeProvider.when('/', {
      templateUrl: 'sections/homepage/homepage.html'
    }).when('/contribute', {
      templateUrl: 'sections/contribute/contribute.html'
    }).when('/documentation', {
      templateUrl: 'sections/documentation/documentation.html'
    }).when('/documentation/:version', {
      templateUrl: function (params) {
        return 'sections/documentation/' + params.version + '/index.html';
      }
    }).when('/documentation/:version/:topic*', {
      templateUrl: function (params) {
        return 'sections/documentation/' + params.version +'/' + params.topic + '/index.html';
      }
    }).when('/download', {
      templateUrl: 'sections/download/download.html'
    }).when('/gallery', {
      templateUrl: 'sections/gallery/gallery.html'
    }).when('/overview', {
      templateUrl: 'sections/overview/overview.html'
    }).when('/support', {
      templateUrl: 'sections/support/support.html'
    });

    //$locationProvider.html5Mode(true);
  }
]);
