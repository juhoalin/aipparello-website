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
const progressContainer = document.getElementById("progress-container");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const radioQuestions = document.querySelectorAll(".radio-question");
const radioButtons = document.querySelectorAll(".radio-input");
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
    progressBar.style.width = `${
        cookies.getConfigurationStatus().totalProgress
    }%`;
    progressText.innerHTML = `${
        cookies.getConfigurationStatus().totalProgress
    }%`;
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

function changePhasesWithDelay(newPhase, oldPhase, delay) {
    if (oldPhase) {
        oldPhase.style.opacity = "0";
    }
    setTimeout(() => {
        if (oldPhase) {
            oldPhase.classList.remove("active");
        }
        newPhase.classList.add("active");
    }, delay);

    setTimeout(() => {
        newPhase.style.opacity = "1";
    }, delay * 2);
}

function updateQuestionState(currentQuestion, nextQuestion, phase) {
    const phaseDone = cookies.getConfigurationStatus().phases[phase].completed;
    currentQuestion.classList.remove("active");
    if (nextQuestion) {
        nextQuestion.classList.add("active");
    }

    if (!phaseDone) {
        
    } else {
        setTimeout(() => {
            currentQuestion.classList.remove("active");
            console.log(allPhases[phase].querySelectorAll(".radio-question"));
            allPhases[phase]
                .querySelectorAll(".radio-question")
                .forEach((question) => {
                    question.classList.add("answered");
                });
        }, 300);
    }
}

function updateConfiguration() {
    let oldPhase = null;
    let newPhase = null;
    allPhases.forEach((phase, index) => {
        if (index === cookies.getConfigurationStatus().currentPhase) {
            newPhase = phase;
        } else if (
            index ===
            cookies.getConfigurationStatus().currentPhase - 1
        ) {
            oldPhase = phase;
        }
    });

    changePhasesWithDelay(newPhase, oldPhase, 300);

    if (cookies.getConfigurationStatus().nameDone) {
        startQuizButtonContainer.classList.add("hidden");
        quizButtonContainer.classList.remove("hidden");
        progressContainer.classList.add("active");
    } else if (cookies.getConfigurationStatus().quizDone) {
        progressContainer.classList.remove("active");
    } else if (cookies.getConfigurationStatus().designDone) {
    } else if (cookies.getConfigurationStatus().sizeDone) {
    }
}

function updateQuestionButtons() {
    let totalprogress = 0;
    cookies.getConfigurationStatus().phases.filter( phase => {return phase.questions > 0}).forEach((phase) => {
        console.log(totalprogress);
        if (phase.completed) {
            totalprogress += phase.questions;
        }
    });
    radioQuestions.forEach((question, questionIndex) => {

        const parentPhase = question.parentNode;
        const parentPhaseIndex = Array.from(allPhases).indexOf(parentPhase);
        const parentPhaseStatus = cookies.getConfigurationStatus().phases[parentPhaseIndex];
  
            if ((questionIndex - totalprogress) === parentPhaseStatus.progress && !parentPhaseStatus.completed) {
                question.classList.add("active");

            } else if (!parentPhaseStatus.completed) {
                question.classList.remove("active");
            } else {
                question.classList.add("answered");
            }
        
    

        const buttons = question.querySelectorAll(".radio-input");
        const questionNo = questionIndex;
        buttons.forEach((button, buttonIndex) => {
            const isAnswered =
                cookies.getOrder().personalities[
                    cookies.getCurrentPersonality()
                ].quiz[questionNo];
            if (buttonIndex === isAnswered) {
                button.checked = true;
            }

            button.addEventListener("click", () => {
                cookies.updateQuiz(
                    cookies.getCurrentPersonality(),
                    questionNo,
                    buttonIndex
                );
                const currentPhase =
                    cookies.getConfigurationStatus().currentPhase;
                const currentQuestion = question;
                const nextQuestion = radioQuestions[questionIndex + 1];
                console.log("radio-clicked");
                move("forward");
                updateQuestionState(
                    currentQuestion,
                    nextQuestion,
                    currentPhase
                );
            });
        });
    });
}

function updateQuiz() {
    radioQuestions.forEach((question, index) => {
        const buttons = question.querySelectorAll(".radio-input");
        const questionNo = index;
        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                cookies.updateQuiz(
                    cookies.getCurrentPersonality(),
                    questionNo,
                    index
                );
            });
        });
    });
}

const move = (direction) => {
    if (direction == "forward") {
        cookies.moveForward();
        updateProgressBar();
        updateConfiguration();
    } else if (direction === "backward") {
        cookies.moveBackward();
    }
};

const handleNextButton = () => {};

const handlePrevious = () => {};

//Event listeners
document.addEventListener("DOMContentLoaded", function () {
    setInitialProperties();
    setConfiguration();
    inputElement.addEventListener("input", checknameFilled);
    startQuizButton.addEventListener("click", () => {
        move("forward");
    });
    updateConfiguration();
    updateQuestionButtons();
});

window.addEventListener("load", () => {});

//Debug
