app.directive('showAssesment', function (mainService, assessments, $window) {

    return {
        restrict: 'E',
        scope: {}, // isolate scope
        templateUrl: '../../views/assesmentbox.html',
        link: function (scope, elem, attrs) {
            var myScore = [];
            var test = 1;
            var active = mainService.activeAssessment();
            var hasUser = !!$window.sessionStorage.user;
            console.log(hasUser);
            var quiz = {};
            scope.validEmail = false;
            scope.y = active.questions.length;
            scope.assessment = active.title;

            scope.start = function () {
                scope.id = 0;
                scope.x = 1;
                // quiz = active.questions[scope.id];
                // quiz = assessments.getAssessment(active.id);
                // scope.getQuestion(quiz);
                scope.question = active.questions[scope.id];
                scope.inProgress = true;
                scope.start = false;
            };



            // scope.getQuestion = function (quiz) {
            //     var q = assessments.getQuestion(quiz, scope.id);
            //     if (q) {
            //         scope.question = q.q;
            //         scope.y = q.l;
            //     } else {
            //         // scope.results = true;
            //         scope.inProgress = false;
            //         scope.userInfo = true;
            //     }
            // }

            scope.next = function (val) {
                scope.id++;
                scope.x++;
                if (scope.id < active.questions.length) {
                    scope.question = active.questions[scope.id];
                } else {
                    scope.inProgress = false;
                    scope.userInfo = true;
                }
                // scope.getQuestion(quiz);
                myScore.push(val);
                console.log(myScore);
                scope.scale = false;
            }

            scope.showScore = function () {
                //TODO (jcd 12/15) Is this where the results get called?
                scope.score = myScore;
            }

            scope.checkEmail = function () {
                mainService.checkEmail(scope.email)
                    .then(function () {
                        scope.validEmail = true;
                        scope.emailMessage = '';
                    })
                    .catch(function () {
                        scope.validEmail = false;
                        scope.emailMessage = 'Email in use, please try a different email.'
                    })
            }

            scope.freeSubmit = function (email) {
                var userObj = {};
                userObj.assessment = {};
                userObj.email = email;
                userObj["assessment"].assessement_id = quiz.id;
                userObj["assessment"].scores = myScore;
                mainService.freeSubmit(userObj)
                    .then(function () {
                        scope.userInfo = false;
                        scope.success = true;
                    })
                    .catch(function (err) {
                        alert("Something went wrong, Please try again in a little while.")
                    })
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
