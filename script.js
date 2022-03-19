var sec = 30;
var timer;
var scoreSubmitEl = document.querySelector("#score-submit");
var userScoreEl = document.querySelector("#user-score");
var saveScoreEl = document.querySelector("#save-btn");
var displayScreen = document.querySelector("#display-screen");

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
    },
    {
        text: "Values must be enclosed within ______ when being assigned to variables.",
        choice1: "A. commas",
        choice2: "B. curly brackets",
        choice3: "C. quotes",
        choice4: "D. parenthesis",
        correct: "B. curly brackets"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "A. JavaScript",
        choice2: "B. terminal/bash",
        choice3: "C. for loops",
        choice4: "D. console.log",
        correct: "C. for loops"
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

function showScores () {
    questionContainerEl.style.display = "none";
    startContainerEl.style.display = "none";
}

  
function displayScore () {
    
    // var displayScreen = document.querySelector("#past-score");
    displayScreen.style.display = "block";
};


function endQuiz() {
    saveScoreEl.addEventListener("click", saveScore)
    userScoreEl.textContent = sec;
    scoreSubmitEl.style.display = "block";
    questionContainerEl.style.display = "none";

    displayScore();
};

var allScores = JSON.parse(localStorage.getItem("allScores") || "[]");

function saveScore () {
    var userNameEl = document.querySelector("#user-name");

    // localStorage.setItem(userNameEl.value, sec);

    // localStorage.getItem(userNameEl.value, sec);
    
    allScores.push(
        {
            name:userNameEl.value,
            score:sec
        }
    );

    localStorage.setItem("allScores", JSON.stringify(allScores));

    viewHighScores();
   
};



var scoreContainer = document.querySelector("#past-scores-container");
var listOfScores = document.querySelector("#scores-list");

function viewHighScores () {
    
    for (var i=0; i < allScores.length; i++) {
        var thisScore = document.createElement("li");
        thisScore.textContent = `${allScores[i].name}: ${allScores[i].score}`
        listOfScores.appendChild(thisScore);
    };

    // tryAgainBtn.addEventListener("click", reset);

};

var fullReset = document.getElementById('fullReset');

fullReset.addEventListener('click', function(e) {
    location.reload();
}, false);


function nextQuestion (event) {
    checkAnswer(event);
   
    console.log(controlNumber)
    if (controlNumber < questionsArray.length-1) {
       // check the correct answe

    // controlNumber = controlNumber + 1;
    controlNumber++;
    displayQuestion() 
    } else {
        clearInterval(timer);
        endQuiz();
    }
    
}

function checkAnswer (event) {
    var userAnswer = event.target.textContent;
    var correctAnswer = questionsArray[controlNumber].correct
    console.log(userAnswer +" vs " + correctAnswer)
    var messageEl = document.querySelector("#message");

    if (userAnswer === correctAnswer) {
        messageEl.textContent = "Correct! You are a master coder!";
    } else {
        sec = sec-3;
        messageEl.textContent = "Wrong! Three Seconds deducted.";
    }
}

function startTimer() {
    timer = setInterval(function() {
        document.getElementById('timerDisplay').innerHTML='Timer: ' + sec;
        sec--;
        if (sec < 0) {
            sec = 0;
            document.getElementById('timerDisplay').innerHTML='Timer: ' + sec;
            clearInterval(timer);
        }
    }, 1000);
};

function displayHighScores () {
    highScores.addEventListener("click", viewHighScores);
}

displayHighScores();

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



