var timerEl = document.getElementById('timeRemaining');
var startEl = document.getElementById('startBtn');
var beginCardEl = document.getElementById('beginCard');
var quizCardEl = document.getElementById('quizCard');
var nextBtnEl = document.getElementById('nextBtn');
var items = [JSON.parse(localStorage.getItem('itemsy'))]
var headers = ['player', 'score']
var questionNum = 0;
var wrong = false;
var win = false;

document.getElementById('highscores').addEventListener("click", function () {
    beginCardEl.style.display = 'none';
    quizCardEl.style.display = 'none';
    nextBtnEl.style.display = 'none';
    timerEl.style.display = 'none';
    document.getElementById('highscoresList').style.display = 'flex';
    // displayScores()
})

document.getElementById('reset').addEventListener("click", function () {
    location.reload();
})

function countdown() {
    var timeLeft = 6050;


    var timeInterval = setInterval(function () {
        if (wrong===true) {
            timeLeft -= 1000;
            wrong=false;
        }
        if (win===true) {
            console.log(timeLeft)
            userScore = timeLeft
            document.getElementById('userScore').textContent="Your score is " + userScore + '!'
            return userScore;
            
        }
        timeLeft--;
        timerEl.textContent = Math.floor(timeLeft*0.01) + " seconds remaining";


        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Times up loser!";
            quizCardEl.style.display = 'none';
            nextBtnEl.style.display = 'none';
            document.getElementById('highscoresList').style.display = 'flex';

            //end quiz
        }

    }, 10);
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
    if (questionNum === 1) {
        quizCardEl.children[0].textContent = "Question 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
        quizCardEl.children[1].textContent = "Wrong answer"
        quizCardEl.children[2].textContent = "Wrong answer"
        quizCardEl.children[3].textContent = "Wrong answer"
        quizCardEl.children[4].textContent = "Correct answer"
    } else if (questionNum === 2) {
        quizCardEl.children[0].textContent = "Question 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
        quizCardEl.children[1].textContent = "Wrong answer"
        quizCardEl.children[2].textContent = "Wrong answer"
        quizCardEl.children[3].textContent = "Correct answer"
        quizCardEl.children[4].textContent = "Wrong answer"
    } else if (questionNum === 3) {
        quizCardEl.children[0].textContent = "Question 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
        quizCardEl.children[1].textContent = "Wrong answer"
        quizCardEl.children[2].textContent = "Correct answer"
        quizCardEl.children[3].textContent = "Wrong answer"
        quizCardEl.children[4].textContent = "Wrong answer"
    } else if (questionNum === 4) {
        quizCardEl.children[0].textContent = "Question 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
        quizCardEl.children[1].textContent = "Correct answer"
        quizCardEl.children[2].textContent = "Wrong answer"
        quizCardEl.children[3].textContent = "Wrong answer"
        quizCardEl.children[4].textContent = "Wrong answer"
    } else if (questionNum === 5) {
        quizCardEl.children[0].textContent = "Question 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et. Dolor, repellendus praesentium, deleniti eaque repudiandae veniam, distinctio et dignissimos quod voluptatibus dolorum? Reiciendis minima molestias voluptate iste ipsum."
        quizCardEl.children[1].textContent = "Wrong answer"
        quizCardEl.children[2].textContent = "Wrong answer"
        quizCardEl.children[3].textContent = "Correct answer"
        quizCardEl.children[4].textContent = "Wrong answer"
    } else {
        quizCardEl.style.display = 'none';
        nextBtnEl.style.display = 'none';
        document.getElementById('highscoresList').style.display = 'flex';
        document.getElementById('userScoreInput').style.display = 'flex';
        win = true;
    }
    return win;

}

// function displayScores() {
//     items = [JSON.parse(localStorage.getItem('itemsy'))];
//     items.sort(function(a, b){return a.score - b.score});
//     for (i = items.length; i >= 0; i--) {
//         var node=document.createElement('li');
//         node.appendChild(document.createTextNode(items[i].player + " " + items[i].score))
//         document.getElementById('highscoresList').appendChild(node);
//     }

    
// }


startEl.addEventListener("click", function () {
    startQuiz()
})

nextBtnEl.addEventListener("click", function () {
    questionNum++;
    nextQuestion();
    if (questionNum == 1 && userAnswer == "answer2" || questionNum == 2 && userAnswer == "answer4" || questionNum == 3 && userAnswer == "answer3" || questionNum == 4 && userAnswer == "answer2" || questionNum == 5 && userAnswer == "answer1" || questionNum == 6 && userAnswer == "answer3") { 
    } else {wrong=true};
    return wrong;
    
})

quizCardEl.addEventListener("click", function (event) {
    nextBtnEl.style.display = 'flex';
    userAnswer = event.target.id;
    return userAnswer;
})

document.getElementById('submitScoreBtn').addEventListener("click", function (event) {
    //save user name and score to local storage
    event.preventDefault();
    userName = document.getElementById('userName').value
    var item = {player: userName, score: userScore}
    items.push(item)
    localStorage.setItem("itemsy", JSON.stringify(items))
    // displayScores()

    
})