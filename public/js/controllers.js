/*
 * runrightfast-osm-ui-hapi-plugin: controllers.js
 * AngularJS controllers for the RunRightFast OSM UI
 *
 * Copyright [2013] [runrightfast.co]
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
(function() {
  'use strict';

  var controllers = angular.module('app.controllers', []);

  controllers.controller('PageCtrl', function($scope) {

    var openAboutDialog = function() {
      console.log('openAboutDialog - called');
    };

  	$scope.items = {
      left: [
        { name: 'File' },
        { name: 'Edit' },
        { name: 'View' }
      ],
      right: [
        { name: 'About', action: openAboutDialog }
      ]
  	};


    // $scope.openAboutDialog = function() {
    //   var d = $dialog.dialog({
    //     backdrop: true,
    //     keyboard: true,
    //     backdropClick: true,
    //     templateUrl: '/view/about'
    //   });
    //   d.open();
    // };

  });

}());