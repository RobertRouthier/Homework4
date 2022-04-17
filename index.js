var questionIndex = 0;
var time = quesitons.length * 15;
var timerId;

var questionsEl = document.getElementById('questions')
var timeEl = document.getElementById('timer')
var optionsEl = document.getElementById('options')
var submitBtn = document.getElementById('submit-btn')
var startBtn = document.getElementById('quiz-begin')
var nameEl = document.getElementById('name')
var gradeEl = document.getElementById('grade')

function startQuiz(){
    var mainScreen = document.getElementById('quiz-begin');
    mainScreen.setAttribute('class', 'hidden')

    questionsEl.removeAttribute('class')

    timerId = setInterval(clock, 1000)
    timeEl.textContent = time;

    startQuestions();
}

function startQuestions(){
    var currentQuestion = questionStrings[questionIndex];
    var questionTitle = document.getElementById('question-name')
    questionTitle.textContent = currentQuestion.name
    
    optionsEl.innerHTML = "";
    
    currentQuestion.options.forEach(function(choice, i){
        var select = document.createElement('button');
        select.setAttribute('class', 'selection');
        select.setAttribute('value', selection);
        
        select.textContent = i + 1 + selection;
        select.onclick = answerClick;
        optionsEl.appendChild(select);
    } )
}

function answerClick(){
    if (this.value !==questions[questionIndex].answer){
        time -= 15;
        if (time <0){
            time = 0;
        }
        timeEl.textContent = time;
        gradeEl.textContent = "Incorrect";
    } else{
        gradeEl.textContent = "Correct";
    }
    gradeEl.setAttribute('class', 'grade');
    setTimeout(function(){
        gradeEl.setAttribute('class', 'grade hidden')
    }, 1000);
    questionIndex++;
    if (questionIndex === questions.length){
        quizEnd()
    } else{
        startQuestions()
    }
}

function quizEnd(){
    clearInterval(timerId);
    var finish = document.getElementById('finish')
    finish.removeAttribute('class');

    var score = document.getElementById('score')
    score.textContent = time;
    
    questionsEl.setAttribute('class', 'hidden')
}

function clock(){
    time--;
    timeEl.textContent = time;

    if (time <= 0){
        quizEnd()
    }
}

function saveScore(){
    var name = name.value.trim()

    if (name !== ""){
        var highscore = JSON.parse(window.localStorage.getItem('highscore')) || [];

        var newScore = {
            score: time,
            name: name
        };
        highscore.push(newScore);
        window.localStorage.setItem('highscore', JSON.stringify(highscore));
        window.location.href = "score.html";
    }
}