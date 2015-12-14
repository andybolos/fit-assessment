app.service('testQuiz', function() {

    /**
     *   InteraFit Item Content
     *   Copyright InteraSolutions, Inc.
     */

    this.questions = function(id) {
        var leng = quiz.questions.length;

        if (id < quiz.questions.length) {
            return {
                q: quiz.questions[id],
                l: leng
            }
        } else {
            return false;
        }
    }



})
