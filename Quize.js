// quiz.ts
var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.score = 0;
        this.questions = questions;
    }
    Quiz.prototype.start = function () {
        var _this = this;
        console.log("Welcome to the Quiz!\n");
        this.questions.forEach(function (q, index) {
            console.log("Q".concat(index + 1, ": ").concat(q.question));
            q.options.forEach(function (opt, i) {
                console.log("".concat(i + 1, ". ").concat(opt));
            });
            var userAnswer = prompt("Enter your answer (1-4):");
            if (userAnswer && parseInt(userAnswer) - 1 === q.answer) {
                console.log("Correct!\n");
                _this.score++;
            }
            else {
                console.log("Wrong!\n");
            }
        });
        console.log("Quiz finished! Your score: ".concat(this.score, "/").concat(this.questions.length));
    };
    return Quiz;
}());
// Sample Questions
var questions = [
    {
        question: "What is TypeScript?",
        options: ["Language", "Framework", "Library", "Database"],
        answer: 0
    },
    {
        question: "Which company developed TypeScript?",
        options: ["Google", "Microsoft", "Facebook", "Amazon"],
        answer: 1
    },
    {
        question: "Which keyword is used for defining types?",
        options: ["let", "var", "type", "const"],
        answer: 2
    }
];
// Start Quiz
var quiz = new Quiz(questions);
quiz.start();
