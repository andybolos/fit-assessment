app.directive('showAssesment', function(mainService, assessments) {

    return {
        restrict: 'E',
        scope: {}, // isolate scope
        templateUrl: '../../views/assesmentbox.html',
        link: function(scope, elem, attrs) {
            var myScore = [];
            var test = 1;
            var active = mainService.activeAssessment();
            var quiz = {};

            scope.assessment = active.title;

            scope.start = function() {
                scope.id = 0;
                scope.x = 1;
                quiz = assessments.getAssessment(active.id);
                scope.getQuestion(quiz);
                scope.inProgress = true;
                scope.start = false;
            };



            scope.getQuestion = function(quiz) {
                var q = assessments.getQuestion(quiz, scope.id);
                if (q) {
                    scope.question = q.q;
                    scope.y = q.l;
                } else {
                    // scope.results = true;
                    scope.inProgress = false;
                    scope.userInfo = true;
                }
            }

            scope.next = function(val) {
                scope.id++;
                scope.x++;
                scope.getQuestion(quiz);
                myScore.push(val);
                scope.scale = false;
            }

            scope.showScore = function () {
                //TODO (jcd 12/15) Is this where the results get called?
                scope.score = myScore;
            }

            scope.freeSubmit = function(email) {
                var userObj = {};
                userObj.assessment = {};
                userObj.email = email;
                userObj["assessment"].assessement_id = quiz.id;
                userObj["assessment"].scores = myScore;
                mainService.freeSubmit(userObj);
            }



            // WORKING
            // scope.start = function() {
            //     scope.id = 0;
            //     scope.x = 1;
            //     scope.getQuestion();
            //     scope.inProgress = true;
            //     scope.start = false;
            // };
            //
            // scope.getQuestion = function() {
            //     var q = testQuiz.questions(assesment, scope.id);
            //     if (q) {
            //         scope.question = q.q;
            //         scope.y = q.l;
            //     }
            //     else {
            //         scope.results = true;
            //         scope.inProgress = false;
            //     }
            // }
            //
            // scope.next = function(val) {
            //     scope.id++;
            //     scope.x++;
            //     scope.getQuestion();
            //     myScore.push(val);
            //     scope.scale = false;
            // }
            // scope.showScore = function() {
            //     scope.score = myScore;
            // }
        }
    }

});
