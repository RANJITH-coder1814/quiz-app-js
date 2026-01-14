const quizData = [
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "C++",
        correct: "c"
    },
    {
        question: "HTML stands for?",
        a: "Hyper Trainer Marking Language",
        b: "Hyper Text Markup Language",
        c: "High Text Markup Language",
        d: "Hyper Text Marketing Language",
        correct: "b"
    },
    {
        question: "Which one is a JavaScript framework?",
        a: "Django",
        b: "Flask",
        c: "React",
        d: "Laravel",
        correct: "c"
    }
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answer => answer.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.querySelector(".quiz-container").innerHTML = `
                <h2>You scored ${score}/${quizData.length}</h2>
                <button onclick="location.reload()">Reload Quiz</button>
            `;
        }
    }
});
