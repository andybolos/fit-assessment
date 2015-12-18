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
            scope.paidSubmitPending = false;
            scope.y = active.questions.length;
            scope.assessment = active.title;
            console.log(active)

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
                    if (!$window.sessionStorage.user) {
                        scope.userInfo = true;
                    } else {
                        var user = JSON.parse($window.sessionStorage.user);
                        scope.user = user;
                        scope.userId = user._id;
                        scope.paidSubmitPending = true;
                    }
                }
                // scope.getQuestion(quiz);
                myScore.push(val);
                console.log(myScore);
                scope.scale = false;
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
                userObj.assessment.assessment_name = active.quiz_id;
                userObj.assessment.assessment_id = active._id;
                userObj.assessment.scores = myScore;
                mainService.freeSubmit(userObj)
                    .then(function () {
                        scope.userInfo = false;
                        scope.success = true;
                    })
                    .catch(function (err) {
                        alert("Something went wrong, please try again in a little while.")
                    })
            }

            scope.paidSubmit = function () {
                var userObj = {};
                userObj.assessment = {};
                userObj.userId = scope.userId;
                userObj.email = scope.user.email;
                userObj.assessment.assessment_name = active.quiz_id;
                userObj.assessment.assessment_id = active._id;
                userObj.assessment.scores = myScore;
                console.log(userObj);
                mainService.paidSubmit(userObj)
                    .then(function () {
                        scope.paidSubmitPending = false;
                        scope.paidResults = true;
                    })
                    .catch(function (err) {
                        scope.errorMessage = 'There was a problem processing your request.';
                        console.log(scope.errorMessage);
                    })
            }

        }
    }

});
