angular.module('WebScanning')
.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config(
    {
      events: true
    })
}])
.controller('myModalController', ['$scope', '$uibModalInstance', '$ocLazyLoad', '$timeout',  function ($scope, $uibModalInstance, $ocLazyLoad, $timeout) {

  $scope.dynamsoftLoaded = false;
  $scope.firstFileLoaded = false;
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
    $scope.dynamsoftLoaded = false;
  };

  $scope.registerDynamsoftEvents = function () {
    var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');

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

    DWObject.RegisterEvent('OnImageAreaDeSelected',
       function (sImageIndex) {
         $scope.$apply(function () {
           var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
           $scope.selected.top = -1;
         });
     });
  };

  $scope.setupDynamsoft = function() {
    Dynamsoft.WebTwainEnv.Containers = [{ContainerId:'dwtcontrolContainer',Width:600,Height:350}];
    Dynamsoft.WebTwainEnv.Load();
    $scope.dynamsoftLoaded = true;

    Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', function () {
      alert('OnWebTwain Ready');
      $scope.registerDynamsoftEvents();
    });
  }

  if (typeof Dynamsoft != 'undefined') {
    alert('Dynamsoft is already defined, so Loading');
    $scope.setupDynamsoft();

    //Dynamsoft.WebTwainEnv.Load();
    //$scope.registerDynamsoftEvents();
    //$scope.dynamsoftLoaded = true;
  }

  $scope.$on('ocLazyLoad.fileLoaded', function(e, file) {
    console.log('file loaded', file);

    $scope.loadCount++;

    if (typeof Dynamsoft != 'undefined'  && $scope.loadCount == 2) {
      alert('Both files for Dynamsoft has been loaded and initialized');
      $scope.setupDynamsoft();

      // $scope.firstFileLoaded = true;
      //$scope.librariesLoaded = true;
      //Dynamsoft.WebTwainEnv.Containers = [{ContainerId:'dwtcontrolContainer',Width:600,Height:350}];

      // Timeout is not ideal, but the OnWebTwainready is missed due to
      // the timing of the ocLazyLoading
      //Dynamsoft.WebTwainEnv.Load() ;
      //$scope.registerDynamsoftEvents();

      //Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', function () {
      //  alert('OnWebTwain Ready');
      //});

      $timeout(function() {
        // alert('timeout');

        //Dynamsoft.WebTwainEnv.Load() ;
        //$scope.dynamsoftLoaded = true;
        //$scope.registerDynamsoftEvents();

        //var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
        //
        //DWObject.RegisterEvent('OnImageAreaSelected',
        //                       function (sImageIndex, left, top, right, bottom) {
        //                         $scope.$apply(function () {
        //                           $scope.selected.sImageIndex = sImageIndex;
        //                           $scope.selected.left = left;
        //                           $scope.selected.top = top;
        //                           $scope.selected.right = right;
        //                           $scope.selected.bottom = bottom;
        //                         });
        //                       });
        //
        //DWObject.RegisterEvent('OnImageAreaDeSelected',
        //                       function (sImageIndex) {
        //                         $scope.$apply(function () {
        //                           var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain(
        //                             'dwtcontrolContainer');
        //                           $scope.selected.top = -1;
        //                         });
        //                       });
      }, 10000);
      //    }
      // );
    }
  });

  $scope.loadImage = function () {
    var OnSuccess = function () {
    };
    var OnFailure = function (errorCode, errorString) {
    };

    var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer'); // Get the Dynamic Web TWAIN object that is embeded in the div with id 'dwtcontrolContainer'.
    DWObject.IfShowFileDialog = true;
    DWObject.LoadImageEx("", EnumDWT_ImageType.IT_ALL, OnSuccess, OnFailure);
  };

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
