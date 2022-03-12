var questionsArray = [
    {
        text: "What is 1 + 1?",
        choice1: "5",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correct: "2"
    },
    {
        text: "What is 2 + 1?",
        choice1: "5",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correct: "3"
    },
    {
        text: "What is 4 + 1?",
        choice1: "5",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correct: "5"
    }
]

var controlNumber = 0;

var questionContainerEl = document.querySelector("#question-container");
var startContainerEl = document.querySelector("#start-container");
var startButtonEl = document.querySelector("#start-button");

function startQuiz () {
   questionContainerEl.style.display = "block";
   startContainerEl.style.display = "none";

   // start the timer
   startimer();

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

function startimer() {

}

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