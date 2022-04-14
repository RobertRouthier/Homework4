//This is setting up the javascript logic
var questionIndex = 0;
var time = questions.lenth * 10;
var timeEl;

var questionsEl = document.getElementById("questions")

var timerEl = document.getElementById("timer")

var optionsEl = document.getElementById("options")

var submitBtn = document.getElementById("submit-btn")

var startBtn = document.getElementById("quiz-begin")

var nameEl = document.getElementById("name")

var gradeEl = document.getElementById("grade")

var buttonEl = document.getElementById("start-btn")

buttonEl.onclick = function(){
    console.log("We are starting")
    questionsEl.classList.remove("hidden")
    startBtn.classList.add("hidden")
    createQuestionEl()
    
}




//Starting function, removing and adding the hide class to objects
function startGame(){
    var quizBegin = document.getElementById("quiz-begin");
    quizBegin.setAttribute("class", "hidden")
    optionsEl.removeAttribute("class")
    timerEl.textContent = time;
    timeEl = setInterval(clock, 1000)
    
    
nextQuestion()
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

// <div id="questions" class="hidden">
//<h2 id="question-name"></h2>
/*<div id="options" class="options"></div>
<h3>What is my favorite food</h3>
<button>Thai</button>
<button>Chinese</button>
<button>Pizza</button>
<button>Burger</button>

</div>//*/

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
            createQuestionEl()
            //check for answer
            //if answer correct move on to next question
            var wrongAnswer = ""
            if(wrongAnswer ){
                time -= 15
            }
            var userSelectingEl = this
            console.log(userSelectingEl.innerHTML)
        }
        divEl.appendChild(buttonEl)
    
    }
    console.log(divEl)
    questionsEl.innerHTML = ''
    questionsEl.appendChild(divEl)

}

//switching question logiv
function nextQuestion(){
var currentQuestion = questions[questionIndex]
var questionName = document.getElementById("question-name")
nameEl.textContent = currentQuestion.name;

optionsEl.innerHTML = "";

currentQuestion.options.foreach(function(choice, i) {
    var choice = document.createElement("button");
    choice.setAttribute("class", "choice");
    choice.setAttribute("value", choice);
    choice.textContent = i + 1 + choice;

    choice.onclick = optionSelect;
    
    optionsEl.appendChild(choice)

})
}

function selectAnswer(){

    
}