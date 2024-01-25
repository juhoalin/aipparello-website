require("./api.js");
require("./configuration.css");

console.log("Hello from configuration.js!");

// Get the element with id "quiz-content"
const quizContent = document.getElementById("quiz-content");

// Require the quiz.html file
const quizHTML = require("./configuration.html");

// Inject the HTML into the quiz-content element
quizContent.innerHTML = quizHTML.default;

// animate the configuration overlay
document.addEventListener("DOMContentLoaded", function () {
    // Function to set initial properties on window load
    function setInitialProperties() {
        const quizOverlay = document.querySelector(".quiz-overlay");
        const quizContainer = document.querySelector(".quiz-container");

        quizOverlay.style.opacity = "0";
        quizOverlay.style.display = "none";
        quizContainer.style.right = "-125vw";
    }

    // Call the function on window load
    window.addEventListener("load", setInitialProperties);

    const createYoursButton = document.querySelector(".create-yours");
    const quizOverlay = document.querySelector(".quiz-overlay");
    const quizContainer = document.querySelector(".quiz-container");

    function openQuizOverlay() {
        quizOverlay.style.display = "flex";

        // Set opacity to 1 after a short delay to allow for the transition
        setTimeout(() => {
            quizOverlay.style.opacity = "1";
        }, 10);

        quizContainer.style.right = "0";
    }

    createYoursButton.addEventListener("click", openQuizOverlay);

    const quizCloseButton = document.querySelector(".quiz-close");

    function closeQuizOverlay() {
        quizOverlay.style.opacity = "0"; // Set opacity to 0 when closing
        setTimeout(() => {
            quizOverlay.style.display = "none";
        }, 300); // Set timeout to match the transition duration
        quizContainer.style.right = "-125vh";
    }

    quizCloseButton.addEventListener("click", closeQuizOverlay);
});
