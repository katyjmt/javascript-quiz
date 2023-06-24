// Set variables to access html elements using jQuery

const startButtonEl = $("#startBtn"); //Select start button on first screen
const timerEl = $("#countdown"); // Select span where timer counts down:
const buttonEl = $(".next"); // Select all next buttons
const correctEl = $(".correct"); // Select all correct buttons 
const incorrectEl = $(".incorrect"); // Select all incorrect buttons
const stepsEl = $(".step"); // Select all .step elements;
const finalScoreEl = $("#final-score"); // Select final score span
const finalScoreStepEl = $("#final-score-step"); // Select final score step div
const finalQuestionButtonsEl = $('.step:nth-last-of-type(2) button'); // Select all buttons within the last question
const correctIncorrectEl = $('.correctIncorrect'); // Select all <h3>s where 'Correct!' and 'Incorrect!' messages are displayed
const submitScoreEl = $('#submitScore'); // Select submit button for user to save their score
const initialsEl = $('#initials'); // Select initials input field
const highScoresEl = $('#high-scores-list'); // Select container where high scores will be added
const clearScoresEl = $('#clear-high-scores'); // Select clear high scores button


// Start timer when 'Start Quiz' button is clicked
let secondsLeft = 60; // Timer counts down from 60 seconds 
startButtonEl.on("click", e => {
    timerEl.text(secondsLeft);
    function startTimer() {
        timerInt = setInterval(() => {
            secondsLeft--;
            if (secondsLeft <= 0) {
                secondsLeft = 0; // Set secondsLeft to zero when it reaches or goes below zero
                clearInterval(timerInt);
                stepsEl[currentStep].style.display = "none";
                currentStep = stepsEl.length - 1;
                displayStep(currentStep);                
            } else {
                timerEl.text(secondsLeft);
            }
        }, 1000);
    }
    startTimer();
}
);

// Event listener - when content loaded, display the start quiz page
let currentStep = 0; 

const displayStep = (index) => {
    stepsEl[index].style.display = "block";
};

$(document).on("DOMContentLoaded", () => {
    displayStep(currentStep); 
});

// Event listener with function to move to the next step when a button is clicked
buttonEl.on("click", () => {
    // Hide the previous step content:
    stepsEl[currentStep].style.display = "none";
    // Increase the current step by 1:
    currentStep = currentStep + 1;
    // Show the new step
    displayStep(currentStep);
});


// Event listener to subtract 10 from the timer and display incorrect message on next screen if an incorrect button is clicked
incorrectEl.on("click", () => {
    secondsLeft = secondsLeft - 10;
    correctIncorrectEl.text('Incorrect!');
});

// Event listener to display correct message on next screen if a correct button is clicked
correctEl.on("click", () => {
    correctIncorrectEl.text('Correct!');
});

// Event listener for when user clicks a button on the last question screen. Store remaining time in a new variable. Set timer to zero.
// NOTE: This needs to be after -10 event listener so timer can lose 10 seconds first then score is recorded
finalQuestionButtonsEl.on("click", () => {
    const finalScore = secondsLeft;
    finalScoreEl.text(finalScore);
    if (secondsLeft >= 0) {
        clearInterval(timerInt); 
        return;
    } else {
        secondsLeft = 0;
        timerEl.text(secondsLeft);
    }
})

// Create variable to store list of scores
let scoreList; 

if (localStorage.getItem("scores")) {
    scoreList = JSON.parse(localStorage.getItem("scores"));
} else {
    scoreList = [];
}

// Event listener for when user clicks on [Submit] button to save their score
submitScoreEl.on("click", () => {
    if (initialsEl.val() == "") {
        window.alert("Please enter your initials to save your score.")
        return; // FIX THIS
    } else {
        let playerInitials = initialsEl.val();
        let finalUserScore = finalScoreEl.text();
        scoreList.push({initials: playerInitials, score: finalUserScore});
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
})

// Add sorted local storage items to high score page 
let sortedHighScoreList = (JSON.parse(localStorage.getItem("scores"))).sort((a,b) => {
    return b.score - a.score;
});

for (let i = 0; i < sortedHighScoreList.length; i++) {
    let userScore = $('<p>').text(`${[i+1]}.  ${sortedHighScoreList[i].initials} - ${sortedHighScoreList[i].score}`).addClass('scoreboard');
    highScoresEl.append(userScore);
}

// Clear high scores
clearScoresEl.on("click", () => {
    localStorage.clear();
    location.reload();
});
