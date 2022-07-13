const app = angular
                .module("myModule",['ui.bootstrap'])
                .controller("myController",function($scope){
                    let employees = [
                        {No : 1 , Obj : "item"},
                        {No : 2 , Obj : "item"},
                        {No : 3 , Obj : "item"},
                        {No : 4 , Obj : "item"},
                        {No : 5 , Obj : "item"},
                        {No : 6 , Obj : "item"},
                        {No : 7 , Obj : "item"},
                        {No : 8 , Obj : "item"},
                        {No : 9 , Obj : "item"},
                        {No : 10 , Obj : "item"},
                        {No : 11 , Obj : "item"},
                        {No : 12 , Obj : "item"},
                        {No : 13 , Obj : "item"},
                        {No : 14 , Obj : "item"},
                        {No : 15 , Obj : "item"},
                        {No : 16 , Obj : "item"},
                        {No : 17 , Obj : "item"},
                        {No : 18 , Obj : "item"},
                        {No : 19 , Obj : "item"},
                        {No : 20 , Obj : "item"},
                        {No : 21 , Obj : "item"},
                        {No : 22 , Obj : "item"},
                        {No : 23 , Obj : "item"},
                        {No : 24 , Obj : "item"},
                        {No : 25 , Obj : "item"},
                    ];
                    $scope.curPage = 1,
                    $scope.itemsPerPage = 5,
                    $scope.numPerPage = 4;
                    $scope.filteredItems = [];
                    this.items = employees;
                    $scope.numOfPages = function () {
                        return Math.ceil(employees.length / $scope.itemsPerPage);
                      };
                 $scope.$watch('curPage + numPerPage', function() {
                        let begin = (($scope.curPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;
                      $scope.filteredItems = employees.slice(begin, end);
                    });
                });