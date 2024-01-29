require("./api.js");
require("./configuration.css");
require("./cookies.js");

const cookies = require("./cookies.js");
const api = require("./api.js");

console.log("Hello from configuration.js!");

// Get the element with id "quiz-content"
const quizContent = document.getElementById("quiz-content");

// Require the quiz.html file
const quizHTML = require("./configuration.html");

// Inject the HTML into the quiz-content element
quizContent.innerHTML = quizHTML.default;

//Now actual quiz-code

//Get all HTML elements

const allPhases = document.querySelectorAll(".quiz-phase");
const createYoursButton = document.querySelector(".create-yours");
const quizOverlay = document.querySelector(".quiz-overlay");
const quizContainer = document.querySelector(".quiz-container");
const quizCloseButton = document.querySelector(".quiz-close");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const radioQuestions = document.querySelectorAll(".radio-question");
const radioButtons = document.querySelectorAll(".radio-input");
const getDesignsButton = document.getElementById("get-designs-button");
const inputElement = document.getElementById("nickname");
const startQuizButtonContainer = document.getElementById(
    "start-quiz-button-container"
);
const startQuizButton = document.getElementById("start-quiz-button");
const quizButtonContainer = document.getElementById("quiz-button-container");
const quizNextButton = document.getElementById("quiz-next-button");
const quizPreviousButton = document.getElementById("quiz-previous-button");
const showDesignsButtonContainer = document.getElementById(
    "show-designs-button-container"
);
const showDesignsButton = document.getElementById("show-designs-button");
const showDesignsBackButton = document.getElementById(
    "show-designs-back-button"
);
const selectDesignButtonContainer = document.getElementById(
    "select-design-button-container"
);
const selectDesignButton = document.getElementById("select-design-button");
const selectDesignBackButton = document.getElementById(
    "select-design-back-button"
);
const selectSizeButtonContainer = document.getElementById(
    "select-size-button-container"
);
const selectSizeButton = document.getElementById("select-size-button");
const selectSizeBackButton = document.getElementById("select-size-back-button");
//Other variables

//Functions

//handle overlay
const setInitialProperties = () => {
    quizOverlay.style.opacity = "0";
    quizOverlay.style.display = "none";
    quizContainer.style.right = "-125vw";
    createYoursButton.addEventListener("click", openQuizOverlay);
    quizCloseButton.addEventListener("click", closeQuizOverlay);
};

const setConfiguration = () => {
    cookies.initialCookiesSetup(allPhases);
    updateProgressBar();
};

const openQuizOverlay = () => {
    quizOverlay.style.display = "flex";
    const body = document.querySelector("body");
    body.style.overflow = "hidden"; // Prevent scrolling when overlay is open

    // Set opacity to 1 after a short delay to allow for the transition
    setTimeout(() => {
        quizOverlay.style.opacity = "1";
    }, 10);

    quizContainer.style.right = "0";
};

function closeQuizOverlay() {
    const body = document.querySelector("body");
    body.style.overflow = "auto"; // Prevent scrolling when overlay is open
    quizOverlay.style.opacity = "0"; // Set opacity to 0 when closing
    setTimeout(() => {
        quizOverlay.style.display = "none";
    }, 300); // Set timeout to match the transition duration
    quizContainer.style.right = "-125vh";
}

// used to update the progress of the quiz
const updatePhaseProgress = () => {};

const updatePhaseStyles = (currentPhase, phaseProgress) => {};

const updateProgressBar = () => {
    cookies.updateTotalProgress();
    progressBar.style.width = `${cookies.getConfigurationStatus().totalProgress}%`;
    progressText.innerHTML = `${cookies.getConfigurationStatus().totalProgress}%`;
};


function checknameFilled() {
    cookies.updateName(inputElement.value);
    cookies.updateNameDone();
    if (cookies.getConfigurationStatus().nameDone) {
        startQuizButton.classList.remove("disabled");
    } else {
        startQuizButton.classList.add("disabled");
    }
}

function startQuiz() {
    const currentPhase = cookies.getConfigurationStatus().currentPhase;
    allPhases[currentPhase].classList.remove("active");
    startQuizButtonContainer.classList.add("hidden");
    cookies.moveForward();
    updateProgressBar();
    const nextPhase = cookies.getConfigurationStatus().currentPhase;
    allPhases[1].classList.add("active");
    quizButtonContainer.classList.remove("hidden");
}

const handleNextButton = () => {};

const handlePrevious = () => {};

//Event listeners
document.addEventListener("DOMContentLoaded", function () {
    setInitialProperties();
    setConfiguration();
    inputElement.addEventListener("input", checknameFilled);
    startQuizButton.addEventListener("click", startQuiz);
});

window.addEventListener("load", () => {});

//Debug
