angular.module('WebScanning')
.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config(
    {
      events: true
    })
}])
.controller('myModalController', ['$scope', '$uibModalInstance', '$ocLazyLoad', '$timeout',  function ($scope, $uibModalInstance, $ocLazyLoad, $timeout) {

  //$scope.dynamsoftLoaded = false;
  //$scope.firstFileLoaded = false;
  $scope.selected = {sImageIndex: 0, top: -1, left: 0, right: 0, bottom: 0};
  $scope.loadCount = 0;

  $scope.$uibModalInstance = $uibModalInstance;

  $scope.hello = () => {
    console.log('hello');
    var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    console.log("Version info" + DWObject.VersionInfo);
    alert('Dynamsoft version: ' + DWObject.VersionInfo);
  };

  $scope.cancel = () => {
    console.log('Please Cancelling');
    $scope.$uibModalInstance.close('cancel');
    console.log('Thanks Cancelled');
    Dynamsoft.WebTwainEnv.Unload();
    //$scope.dynamsoftLoaded = false;
  };

  $scope.setupDynamsoft = function() {
    Dynamsoft.WebTwainEnv.Containers = [{ContainerId:'dwtcontrolContainer',Width:600,Height:350}];
    Dynamsoft.WebTwainEnv.Load();

    Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', function () {
      //alert('OnWebTwain Ready');

      var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');

      // Save selected area
      DWObject.RegisterEvent('OnImageAreaSelected',
         function (sImageIndex, left, top, right, bottom) {
           $scope.$apply(function () {
             $scope.selected.sImageIndex = sImageIndex;
             $scope.selected.left = left;
             $scope.selected.top = top;
             $scope.selected.right = right;
             $scope.selected.bottom = bottom;
           });
         });

      // Deselect area
      DWObject.RegisterEvent('OnImageAreaDeSelected',
         function (sImageIndex) {
           $scope.$apply(function () {
             var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
             $scope.selected.top = -1;
           });
         });
    });
  }

  // If Dynamsoft libraries loaded initialise Dynamsoft immediately
  if (typeof Dynamsoft != 'undefined') {
    $scope.setupDynamsoft();
  }

  // Wait for both files to be loaded then setup Dynamsoft
  $scope.$on('ocLazyLoad.fileLoaded', function(e, file) {
    $scope.loadCount++;

    if (typeof Dynamsoft != 'undefined'  && $scope.loadCount == 2) {
      $scope.setupDynamsoft();
    }
  });

  // Maully load an image into dynamsoft
  $scope.loadImage = function () {
    var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    DWObject.IfShowFileDialog = true;
    DWObject.LoadImageEx("",
                         EnumDWT_ImageType.IT_ALL,
                         function () {}, // Success
                         function (errorCode, errorString) { }); // Failure
  };

  // Crop the selected image
  $scope.cropImage = function () {
    if ($scope.selected.top != -1) {
      var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
      DWObject.Crop($scope.selected.sImageIndex,
                    $scope.selected.left,
                    $scope.selected.top,
                    $scope.selected.right,
                    $scope.selected.bottom);
    }
  };

}]);
