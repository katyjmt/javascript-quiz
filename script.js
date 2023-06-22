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

// Keys for local storage:
const LOCAL_STORAGE_INITIALS_KEY = "initials";
const LOCAL_STORAGE_SCORE_KEY = "score";


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
    secondsLeft = 0;
    timerEl.text(secondsLeft);
})

// Event listener for when user clicks on [Submit] button to save their score



// // What do I need:
// // 1. I need a countdown timer that starts at 60 seconds and stops at 0 (don't let it go negative) - DONE
// // 2. I need the countdown timer to drop 10 seconds if user selects an incorrect answer - DONE
// // 3. I need the user's final score to be the final number on the countdown timer - DONE
// // 4. I need the user to be taken to the next step when they click any button - DONE
// // 5. I need the user to be told whether their previous answer was correct or incorrect on the next step - DONE
// // 6. I need the user to be able to enter their initials to save their score in local storage
// // 7. I need the score in local storage to be added to the High Scores table