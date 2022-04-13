//This is setting up the javascript logic
var questionIndex = 0;
var time = questions.lenth * 10;
var timeEl;

var questionsEl = document.getElementById("questions")

var timerEl = document.getElementById("timer")

var optionsEl = document.getElementById("options")

var submitBtn = document.getElementById("submit-btn")

var startBtn = document.getElementById("begin")

var nameEl = document.getElementById("name")

var gradeEl = document.getElementById("grade")






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