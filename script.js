


let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById ("container");
let nextBtn = document.getElementById("next-button");
let countofQuestion = document.querySelector("number-of-question");
let displayContainer = document.getElementById ("display-container");
let scoreContainer = document.querySelector("score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector("start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

// 3 QUIZ QUESTIONS & ANSWERS //

const quizArray = [
    {
        id: "0",
        question: "What does HTML stand for?",
        options: [
            "HighText Machine Learning",
            "HyperText and links Markup Language",
            "HyperText Markup Language",
            "None of these",
        ],
        correct: "Hypertext Markup Language",
    },

    {
        id: "1",
        question: "Which of the following element if responsible for making the text bold in HTML?",
        options: ["<pre>","<a>","<b>","<br>"],
        correct:"<b>",
    },

    {
        id: "2",
        question: "Which of the below tag is used for inserting the largest heading in HTML?",
        options: ["<h3>","<h1>","<h5>","<h6>"],
        correct: "<h1>",
    },

];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", (displayNext = () => {
    questionCount += 1;

    if(questionCount == quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your Score is " + scoreCount + " out of " + questionCount;
    }

    else{
        countofQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question ";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay ();
    }
    })
);

const timerDisplay = () =>{
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = '${count}s';
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
}

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");

};

function quizCreater() {
    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countofQuestion.innerHTML = 1 + " of " + quizArray.length + " Question ";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" oneclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" oneclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" oneclick="checker(this)">${i.options[2]}</button>
        `;

        quizContainer.appendChild(div);
    }
}

function_checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if(userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");

        options.forEach((element) => {
            if ((element.innerText = quizArray[questionCount].correct)) {
                element.classList.add("correct");
            }
        });
    }

clearInterval(countdown);
options.forEach((element) =>{
    element.disabled = true;
});
}

function intial (){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    intial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};