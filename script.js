// Set variables to access html elements

const timerEl = document.querySelector("#countdown"); // Span where timer counts down:
const buttonEl = document.querySelectorAll(".question-button"); // Select all question buttons
const stepsEl = document.getElementsByClassName("step"); // Select all .step elements as a NodeList
const correctIncorrectEl = document



// On click of start quiz, move to next step and activate timer



// // Function to load the current step
// document.addEventListener("DOMContentLoaded", () => {
//     let currentStep = 0; // Current step is set to be the first step

//     const displayStep = (index) => {
//         const stepsEl = document.getElementsByClassName("step");
//         stepsEl[index].style.display = "block";
//     };

//     displayStep(currentStep); // Display the current step
// });

// // Function to move to the next step

// const nextStep = () => {

// }


// Timer counts down from 60 seconds and jumps down -10 if incorrect question is answered.
// function startTimer() {
//     let secondsLeft = 60;
//     const timerInt = setInterval(function() {
//         // DO I NEED AN EVENT LISTENER FOR CLICK ON INCORRECT BUTTON?
//         if (USER CLICKS ON INCORRECT ANSWER) {
//             secondsLeft = secondsLeft - 10;
//             timerEl.textContent = secondsLeft;
//         } else {
//             secondsLeft--  
//         }
//     })

// }

// When timer = 0, user jumps to final score view

// When user selects an answer, 

// Event listener for buttons
// buttonEl.forEach((item) => {
//     item.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent form submit default
//         let buttonValue = item.value;
//         if (buttonValue == 5) {
            
//         }

//         // MOVE TO NEXT SCREEN
//         // SUBTRACT 10 FROM TIMER
//         // DISPLAY INCORRECT ON NEXT SCREEN
//     })
// });



// What do I need:
// 1. I need a countdown timer that starts at 60 seconds and stops at 0 (don't let it go negative)
// 2. I need the countdown timer to drop 10 seconds if user selects an incorrect answer
// 3. I need the user's final score to be the final number on the countdown timer
// 4. I need the user to be taken to the next step when they click any button
// 5. I need the user to be told whether their previous answer was correct or incorrect on the next step
// 6. I need the user to be able to enter their initials to save their score in local storage
// 7. I need the score in local storage to be added to the High Scores table