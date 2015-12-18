app.controller('previewCtrl', function($rootScope, $scope, mainService, freeResults, $state) {

	$scope.results = freeResults;
	
	console.log($scope.results);
    
   var handler = StripeCheckout.configure({
    key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
    // image: '/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
      console.log(token);
      mainService.handleStripeRCQPayment(token)
        .then(function() {
            $state.go('paymentSuccess');
        })
        .catch(function(err) {
            $state.go('paymentError');
        })
    }
  });
    
    $scope.pay = function(e) {
        e.preventDefault();
     handler.open({
      name: 'FitLife',
      description: 'Readiness to Change full report',
      amount: 1000
    });
    }
    
    $rootScope.$on('$stateChangeStart', function() {
        handler.close();
    })
	
	var data = {
        labels: ['Precontemplation', 'Contemplation', 'Preparation', 'Action', 'Maintenance'],
        datasets: [
            {
                label: "Readiness to Change",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [	
                        $scope.results.pre_score, 
                        $scope.results.con_score, 
                        $scope.results.prep_score, 
                        $scope.results.act_score, 
                        $scope.results.maint_score
                    ]
            }
        ]
    };
    
    var options = {
    //Boolean - Whether to show lines for each scale point
    scaleShowLine : true,

    //Boolean - Whether we show the angle lines out of the radar
    angleShowLineOut : true,

    //Boolean - Whether to show labels on the scale
    scaleShowLabels : false,

    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : true,

    //String - Colour of the angle line
    angleLineColor : "rgba(0,0,0,.1)",

    //Number - Pixel width of the angle line
    angleLineWidth : 1,

    //String - Point label font declaration
    pointLabelFontFamily : "'Arial'",

    //String - Point label font weight
    pointLabelFontStyle : "normal",

    //Number - Point label font size in pixels
    pointLabelFontSize : 10,

    //String - Point label font colour
    pointLabelFontColor : "#666",

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    }
    
    var ctx = document.getElementById("myChart").getContext("2d");
	var myRadarChart = new Chart(ctx).Radar(data, options);

});
