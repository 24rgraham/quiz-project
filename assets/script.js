var timeLeft = 61;
var timerEl = document.getElementById('timeRemaining');
var startEl = document.getElementById('startBtn');
var beginCardEl = document.getElementById('beginCard');
var quizCardEl = document.getElementById('quizCard');

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
    beginCardEl.style.display = 'none';
    // unhide quiz card
    quizCardEl.style.display = 'flex';
    //display question 1
    quizCardEl.children[0].textContent = "Question 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
    quizCardEl.children[1].textContent = "Wrong answer"
    quizCardEl.children[2].textContent = "Correct answer"
    quizCardEl.children[3].textContent = "Wrong answer"
    quizCardEl.children[4].textContent = "Wrong answer"


}

function nextQuestion() {
    //record results
    //update question
    
}


startEl.addEventListener("click", function () {
    startQuiz()

})
