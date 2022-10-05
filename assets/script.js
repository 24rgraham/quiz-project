var timeLeft = 61;
var timerEl = document.getElementById('timeRemaining');
var startEl = document.getElementById('startBtn');
var beginCardEl = document.getElementById('beginCard');

function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining";
    console.log(timeLeft)


    if(timeLeft === 0) {
        clearInterval(timeInterval);
        //end quiz
    }

    }, 1000);
}


function startQuiz() {
    // begin timer
    countdown()
    // hide begin quiz
    beginCardEl.style.display == 'none';

    // unhide quiz card

   

}



startEl.addEventListener("click", function () {
    startQuiz()
})
