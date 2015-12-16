app.controller('menuCtrl', function($scope, mainService) {

    $scope.assessments =  {
        free: {
            title: 'Readiness to Change',
            selected: false,
            price: 0,
            id: 'rcq'
        },
        eating: {
            title: 'Eating Behaviors / Body Image',
            selected: false,
            price: 7.99,
            id: 'ebi'
        },
        stress: {
            title: 'Stress',
            selected: false,
            price: 7.99,
            id: 'posi'
        },
        depression: {
            title: 'Depression',
            selected: false,
            price: 7.99,
            id: 'bdsi'
        },
        anxiety: {
            title: 'Anxiety',
            selected: false,
            price: 7.99,
            id: 'basi'
        }
    };

    $scope.total = function() {
        var sum = 0;
        for (var id in $scope.assessments) {
            if ($scope.assessments[id].selected) {
                sum = sum + $scope.assessments[id].price;
            }
        };
        return sum;
    };

    $scope.checkout = function(assessments) {
        console.log(assessments);
        mainService.checkout(assessments);

    };

});
