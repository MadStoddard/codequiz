var questionsArray = [
    {
        text: "Commonly used data types DO NOT include:",
        choice1: "A. strings",
        choice2: "B. booleans",
        choice3: "C. alerts",
        choice4: "D. numbers",
        correct: "B. booleans"
    },
    {
        text: "The condition in an if/else statement is enclosed with: ",
        choice1: "A. quotes",
        choice2: "B. curly brackets",
        choice3: "C. parenthesis",
        choice4: "D. square brackets",
        correct: "C. parenthesis"
    },
    {
        text: "Arrays in JavaScript can be used to store: ",
        choice1: "A. numbers and strings",
        choice2: "B. other arrays",
        choice3: "C. booleans",
        choice4: "D. all of the above",
        correct: "D. all of the above"
    }
]

var controlNumber = 0;

var questionContainerEl = document.querySelector("#question-container");
var startContainerEl = document.querySelector("#start-container");
var startButtonEl = document.querySelector("#start-button");

function startQuiz () {
   questionContainerEl.style.display = "block";
   startContainerEl.style.display = "none";

   startTimer();

   displayQuestion();
}

function nextQuestion () {


    // check the correct answer
    checkAnswer();


    // controlNumber = controlNumber + 1;
    controlNumber++;
    displayQuestion()
}

function checkAnswer () {

}

function startTimer() {
    var sec = 30;
    var timer = setInterval(function() {
        document.getElementById('timerDisplay').innerHTML='00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
};

function displayQuestion () {
    var questionEl = document.querySelector("#question");
    var button1El = document.querySelector("#button1");
    var button2El = document.querySelector("#button2");
    var button3El = document.querySelector("#button3");
    var button4El = document.querySelector("#button4");

    questionEl.textContent = questionsArray[controlNumber].text;
    button1El.textContent = questionsArray[controlNumber].choice1;
    button2El.textContent = questionsArray[controlNumber].choice2;
    button3El.textContent = questionsArray[controlNumber].choice3;
    button4El.textContent = questionsArray[controlNumber].choice4;

    button1El.addEventListener("click", nextQuestion)
    button2El.addEventListener("click", nextQuestion)
    button3El.addEventListener("click", nextQuestion)
    button4El.addEventListener("click", nextQuestion)
}

startButtonEl.addEventListener("click", startQuiz)