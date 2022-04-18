//This is setting up the javascript logic
var questionIndex = 0;



var questionsEl = document.getElementById("questions")

var timerEl = document.getElementById("timer")
var timer = 60
var timerId;


var optionsEl = document.getElementById("options")

var submitBtn = document.getElementById("submit-btn")

var startBtn = document.getElementById("quiz-begin")

var nameEl = document.getElementById("name")

var gradeEl = document.getElementById("grade")

var buttonEl = document.getElementById("start-btn")

//Click event
buttonEl.addEventListener('click', function(){
   console.log("We are starting")
    questionsEl.classList.remove("hidden")
    startBtn.classList.add("hidden") 
    createQuestionEl()
    startGame()
})


//Starting function, removing and adding the hide class to objects
function startGame(){
    var quizBegin = document.getElementById("quiz-begin");
    quizBegin.setAttribute("class", "hidden")
    optionsEl.removeAttribute("class")
    
    
    timerId = setInterval(clockTick, 1000)
    timerEl.textContent = timer;
    createQuestionEl()
}

function clockTick() {
    // update time
    timer--;
    timerEl.textContent = timer;
  
    // check if user ran out of time
    if (timer <= 0) {
      quizEnd();
    }
  }

//Setting up questions for quiz
var questionStrings = [
    {
        questionName: "What is my favorite food?",
        questionOptions: ["Thai", "Chinese", "Burger", "Sushi"],
        answer: "Thai"
    },
    {
        questionName:"What kind of car do I drive?",
        questionOptions:["Civic", "Camry", "Motorcycle", "4Runner"],
        answer:"4Runner"
    },
    {
        questionName:"What is my current job?",
        questionOptions:["Operations", "Marketing", "Sales", "Administration"],
        answer:"Operations"
    }
];


//setting logic for questions to run
function createQuestionEl(){
    var currentQuestion = questionStrings[questionIndex]
    var divEl = document.createElement("div")
    var h3El = document.createElement("h3")
    h3El.textContent = currentQuestion.questionName
    divEl.setAttribute("id", "questions")
    divEl.appendChild(h3El)
    
    for(var i = 0; i < currentQuestion.questionOptions.length; i++ ){
        var questionAnswer = currentQuestion.questionOptions[i]
        var buttonEl = document.createElement("button")
        buttonEl.textContent = questionAnswer
        buttonEl.onclick = function(){
            questionIndex++
            
            //check for answer
            //if answer correct move on to next question
            var wrongAnswer = ""
            if(this.value !== questionStrings.answer ){
                timer -= 15
                window.alert('Incorrect')
            } else{
                window.alert('Correct')
            }
            timerEl.textContent = timer
            var userSelectingEl = this
            console.log(userSelectingEl.innerHTML)

            if (questionIndex === questionStrings.length){
                quizEnd();
            } else {
                createQuestionEl()}
        }
        divEl.appendChild(buttonEl)
    
    }
    console.log(divEl)
    questionsEl.innerHTML = ''
    questionsEl.appendChild(divEl)
   
  
    

}


function quizEnd(){
clearInterval(timerId)
var endScreenEl = document.getElementById('finish')
endScreenEl.removeAttribute('class')

questionsEl.setAttribute('class', 'hidden')

clearInterval(timerId)

var finalScoreEl = document.getElementById('score')
    finalScoreEl.innerHTML = " " + timer + "!"
}

function saveScore(){
    var name = nameEl.value.trim();

    if (name !== ""){

        
        var currentScore = JSON.parse(window.localStorage.getItem('currentScore')) || [];

        var newScore = {
            scores: timer,
            names: name,
        };

        currentScore.push(newScore);
        window.localStorage.setItem('currentScore', JSON.stringify(currentScore));

        window.location.href = "score.html";

    }
}

function enterCheck(event){

    if(event.key === 'click'){
        saveScore()
    }
}

submitBtn.onclick = saveScore;
nameEl.onkeyup = enterCheck;

function postScores(){
    var highscore = JSON.parse(window.localStorage.getItem('currentScore')) || [];

   // score.sort(function(a, b){
     //return b.score - a.score;
   //})

    highscore.forEach(function(score){
        var list = document.createElement('li');
        list.textContent = score.name + " - " + score.score

        var olEl = document.getElementById('highscore')
        olEl.appendChild(list);
    })
}

var clear = document.getElementById('clear')

function clearScore() {

    window.localStorage.removeItem('currentScore');
    window.location.reload()
}

//clear.addEventListener('click', clearScore())

postScores()
