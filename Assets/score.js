function postScores(){
    var highscore = JSON.parse(window.localStorage.getItem('currentScore')) || [];

   // score.sort(function(a, b){
     //return b.score - a.score;
   //})

    highscore.forEach(function(score){
        var list = document.createElement('li');
        list.textContent = score.names + " - " + score.scores

        var olEl = document.getElementById('highscore')
        olEl.appendChild(list);
    })
}

var clear = document.getElementById('clear')

function clearScore() {

    window.localStorage.removeItem('currentScore');
    window.location.reload()
}
document.getElementById('clear').onclick = clearScore;

//clear.addEventListener('click', clearScore())

postScores()
