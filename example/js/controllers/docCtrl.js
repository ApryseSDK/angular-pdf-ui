app.controller('DocCtrl', function($scope) {

  $scope.pdfName = 'Relativity: The Special and General Theory by Albert Einstein';
  $scope.pdfUrl = 'pdf/relativity.pdf';
  $scope.pdfPassword = 'test';
  $scope.scroll = 0;
  $scope.loading = 'loading';

  $scope.getNavStyle = function(scroll) {
    if(scroll > 100) return 'pdf-controls fixed';
    else return 'pdf-controls';
  }

  $scope.onError = function(error) {
    console.log(error);
  }

  $scope.onLoad = function() {
    $scope.loading = '';
  }

  $scope.onProgress = function (progressData) {
    console.log(progressData);
  };

  $scope.onPassword = function (updatePasswordFn, passwordResponse) {
    if (passwordResponse === PDFJS.PasswordResponses.NEED_PASSWORD) {
        updatePasswordFn($scope.pdfPassword);
    } else if (passwordResponse === PDFJS.PasswordResponses.INCORRECT_PASSWORD) {
        console.log('Incorrect password')
    }
  };

});
