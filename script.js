const quizData = [
    {
        question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
        a: "Noir",
        b: "Bleu",
        c: "Blanc",
        d: "Rouge",
        correct: "c",
    },
    {
        question: "Dans quel pays recense-t'on le plus de pyramides ?",
        a: "Soudan",
        b: "France",
        c: "Egypte",
        d: "Mexique",
        correct: "a",
    },
    {
        question: "Quel animal possède le plus de dents",
        a: "Le crocodile",
        b: "Le grand requin blanc",
        c: "Le dauphin",
        d: "Le poisson chat",
        correct: "d",
    },

    {
        question: "Quel est le plus petit pays du monde",
        a: "Monaco",
        b: "Malte",
        c: "Le Vatican",
        d: "Les Maldives",
        correct: "c",
    },

    {
        question: "Cette application web mérite une bonne note ?",
        a: "Oui !",
        b: "Regardez au dessus",
        c: "Vous ne devez pas choisir cette réponse",
        d: "Mauvaise réponse",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");


let score = 0;
let currentQuiz = 0;


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

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
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
            quiz.innerHTML = `
                <h2>Vous avez répondu correctement à ${score} question(s) sur ${quizData.length} </h2>
                
                <button onclick="location.reload()">Relancer</button>
            `;
        }
    }
});
