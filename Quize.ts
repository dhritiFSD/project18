// quiz.ts

type Question = {
    question: string;
    options: string[];
    answer: number; // index of correct option
};

class Quiz {
    private questions: Question[];
    private score: number = 0;

    constructor(questions: Question[]) {
        this.questions = questions;
    }

    public start(): void {
        console.log("Welcome to the Quiz!\n");

        this.questions.forEach((q, index) => {
            console.log(`Q${index + 1}: ${q.question}`);
            q.options.forEach((opt, i) => {
                console.log(`${i + 1}. ${opt}`);
            });

            const userAnswer = prompt("Enter your answer (1-4):");

            if (userAnswer && parseInt(userAnswer) - 1 === q.answer) {
                console.log("Correct!\n");
                this.score++;
            } else {
                console.log("Wrong!\n");
            }
        });

        console.log(`Quiz finished! Your score: ${this.score}/${this.questions.length}`);
    }
}

// Sample Questions
const questions: Question[] = [
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
const quiz = new Quiz(questions);
quiz.start();