myApp.controller("HeaderCtrl", ['$scope', '$location',
  function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    }
  }
]);

myApp.controller("HomeCtrl", ['$scope',
  function($scope) {
    $scope.name = "Home Controller";
  }
]);

myApp.controller("Page1Ctrl", ['$scope',
  function($scope) {
    $scope.name = "Page1 Controller";
  }
]);

myApp.controller("Page2Ctrl", ['$scope',
  function($scope) {
    $scope.name = "Page2 Controller";
    // below data will be used by checkmark filter to show a ✓ or ✘ next to it
    $scope.list = ['yes', 'no', true, false, 1, 0];
  }
]);

myApp.controller("Page3Ctrl", ['$scope', 'todosFactory',
  function($scope, todosFactory) {
    $scope.name = "Page3 Controller";
    $scope.todos = [];

    // Access the factory and get the latest Todos list
    todosFactory.getTodos().then(function(data) {
      $scope.todos = data.data;
    });

  }
]);
