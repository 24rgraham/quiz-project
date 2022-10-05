var timerEl = document.getElementById('timeRemaining');
var startEl = document.getElementById('startBtn');
var beginCardEl = document.getElementById('beginCard');
var quizCardEl = document.getElementById('quizCard');
var nextBtnEl = document.getElementById('nextBtn');
var questionNum = 0

document.getElementById('highscores').addEventListener("click", function() {
    beginCardEl.style.display = 'none';
    quizCardEl.style.display = 'none';
    nextBtnEl.style.display = 'none';
    timerEl.style.display = 'none';
    document.getElementById('highscoresList').style.display = 'flex';
})

document.getElementById('reset').addEventListener("click", function() {
    location.reload();
})

function countdown() {
    var timeLeft = 61;
    var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining";


    if(timeLeft === 0) {
        clearInterval(timeInterval);
        timerEl.textContent = "Times up!"
        //end quiz
    }

    }, 1000);
}


function startQuiz() {
    // show and begin timer
    timerEl.style.display = 'flex';
    countdown()
    // hide begin quiz
    beginCardEl.style.display = 'none';
    // unhide quiz card
    quizCardEl.style.display = 'flex';
    //hide next btn
    nextBtnEl.style.display = 'none';
    //display question 1
    quizCardEl.children[0].textContent = "Question 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
    quizCardEl.children[1].textContent = "Wrong answer"
    quizCardEl.children[2].textContent = "Correct answer"
    quizCardEl.children[3].textContent = "Wrong answer"
    quizCardEl.children[4].textContent = "Wrong answer"


}

function nextQuestion() {
    //for loop to cycle through questions
    //record results
    //hide next btn
    nextBtnEl.style.display = 'none';
    //update question
    if (questionNum===0) {
        quizCardEl.children[0].textContent = "Question 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
        quizCardEl.children[1].textContent = "Wrong answer"
        quizCardEl.children[2].textContent = "Wrong answer"
        quizCardEl.children[3].textContent = "Wrong answer"
        quizCardEl.children[4].textContent = "Correct answer"
    } else if (questionNum===1) {
        quizCardEl.children[0].textContent = "Question 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
        quizCardEl.children[1].textContent = "Wrong answer"
        quizCardEl.children[2].textContent = "Wrong answer"
        quizCardEl.children[3].textContent = "Correct answer"
        quizCardEl.children[4].textContent = "Wrong answer"
    } else if (questionNum===2) {
        quizCardEl.children[0].textContent = "Question 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
        quizCardEl.children[1].textContent = "Wrong answer"
        quizCardEl.children[2].textContent = "Correct answer"
        quizCardEl.children[3].textContent = "Wrong answer"
        quizCardEl.children[4].textContent = "Wrong answer"
    }  else if (questionNum===3) {
        quizCardEl.children[0].textContent = "Question 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
        quizCardEl.children[1].textContent = "Correct answer"
        quizCardEl.children[2].textContent = "Wrong answer"
        quizCardEl.children[3].textContent = "Wrong answer"
        quizCardEl.children[4].textContent = "Wrong answer"
    } else if (questionNum===4) {
        quizCardEl.children[0].textContent = "Question 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
        quizCardEl.children[1].textContent = "Wrong answer"
        quizCardEl.children[2].textContent = "Wrong answer"
        quizCardEl.children[3].textContent = "Correct answer"
        quizCardEl.children[4].textContent = "Wrong answer"
    } else {
        quizCardEl.style.display = 'none';
        nextBtnEl.style.display = 'none';
        timerEl.style.display = 'none';
        document.getElementById('highscoresList').style.display = 'flex';
    }

}


startEl.addEventListener("click", function () {
    startQuiz()
})

nextBtnEl.addEventListener("click", function () {
    nextQuestion()
    questionNum ++
    console.log(questionNum)
})

quizCardEl.addEventListener("click", function() {
    nextBtnEl.style.display = 'flex';
    //record answer selected
})