require("./api.js");
require("./configuration.css");
require("./cookies.js");

const cookies = require("./cookies.js");
const api = require("./api.js");

// Get the element with id "quiz-content"
const quizContent = document.getElementById("quiz-content");

// Require the quiz.html file
const quizHTML = require("./configuration.html");

// Inject the HTML into the quiz-content element
quizContent.innerHTML = quizHTML.default;

const addToCartHTML = document.getElementById("new-add-to-cart-container");
const addToCartTarget = document.getElementById("phase-step-new-fit-container");
//Now actual quiz-code

//Get all HTML elements

const loadingScreen = document.querySelector(".loading-screen");
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

const addToCartButton = document.getElementById("add-to-cart-button");

const personaliType = document.getElementById("personality-type");
const personalityName = document.getElementById("personality-name");
const extrovesionText = document.getElementById("extroversion-text");
const extroversionBar = document.getElementById("extroversion-bar");
const sensingText = document.getElementById("sensing-text");
const sensingBar = document.getElementById("sensing-bar");
const feelingText = document.getElementById("feeling-text");
const feelingBar = document.getElementById("feeling-bar");
const prospectingText = document.getElementById("prospecting-text");
const prospectingBar = document.getElementById("prospecting-bar");
//Other variables

//Functions

//handle overlay & quiz opening
const setInitialProperties = () => {
    quizOverlay.style.opacity = "1";
    quizOverlay.style.display = "flex";
    quizContainer.style.right = "0";
    // quizOverlay.style.opacity = "0";
    // quizOverlay.style.display = "none";
    // quizContainer.style.right = "-125vw";
    createYoursButton.addEventListener("click", openQuizOverlay);
    quizCloseButton.addEventListener("click", closeQuizOverlay);
    addToCartTarget.appendChild(addToCartHTML);
    const cartOuterDiv = addToCartHTML.querySelector(".w-commerce-commercecartwrapper");
    cartOuterDiv.setAttribute("id", "cart-outer-div");
    console.log("add-to-cart-element", addToCartTarget);
};

//update cookies and frontend based on cookies on page load
function setConfiguration() {
    cookies.initialCookiesSetup(allPhases);
    updateProgressBar();
    if (cookies.designsFetched()) {
        updatePersonality();
        updateDesigns();
    }
}

//function to open the quiz overlay
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

//function to close the quiz overlay§
function closeQuizOverlay() {
    const body = document.querySelector("body");
    body.style.overflow = "auto"; // Prevent scrolling when overlay is open
    quizOverlay.style.opacity = "0"; // Set opacity to 0 when closing
    setTimeout(() => {
        quizOverlay.style.display = "none";
    }, 300); // Set timeout to match the transition duration
    quizContainer.style.right = "-125vh";
}

//update quiz progress bar
const updateProgressBar = () => {
    cookies.updateTotalProgress();
    progressBar.style.width = `${
        cookies.getConfigurationStatus().totalProgress
    }%`;
    progressText.innerHTML = `${
        cookies.getConfigurationStatus().totalProgress
    }%`;
};

//function to check if name is filled and enable start quiz button
function checknameFilled() {
    cookies.updateName(inputElement.value);
    cookies.updateNameDone();
    if (cookies.getConfigurationStatus().nameDone) {
        startQuizButton.classList.remove("disabled");
    } else {
        startQuizButton.classList.add("disabled");
    }
}

//used to change phases with delay and smooth opacity change
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

//function to scroll to the question currently being answered
function scrollToQuestion(quizPhase, questionRect, containerRect) {
    const scrollTop =
        quizPhase.scrollTop ||
        quizPhase.pageYOffset ||
        document.documentElement.scrollTop;
    const targetPosition =
        questionRect.top +
        scrollTop -
        containerRect.top -
        (containerRect.height - questionRect.height) / 2;

    quizPhase.scrollTo({
        top: targetPosition,
        behavior: "smooth",
    });
}

//function to update the state of the questions – active, answered, etc.
function updateQuestionState(currentQuestion, nextQuestion, phase) {
    const phaseDone = cookies.getConfigurationStatus().phases[phase].completed;
    const quizPhase = allPhases[phase];
    currentQuestion.classList.remove("active");
    quizPhase.style.overflow = "scroll";
    if (nextQuestion) {
        nextQuestion.classList.add("active");
    }

    if (!phaseDone) {
        const rect = nextQuestion.getBoundingClientRect();
        const containerRect = quizPhase.getBoundingClientRect();
        scrollToQuestion(quizPhase, rect, containerRect);
    } else {
        setTimeout(() => {
            quizPhase.style.overflow = "scroll";
            quizPhase.classList.add("answered");
            currentQuestion.classList.remove("active");
            allPhases[phase]
                .querySelectorAll(".radio-question")
                .forEach((question) => {
                    question.classList.add("answered");
                });
        }, 300);
    }
}

//function to update the whole configuration interface  based on the current phase. Called when moving forward in the process
function updateConfiguration(direction) {
    let oldPhase = null;
    let newPhase = null;
    allPhases.forEach((phase, index) => {
        if (
            index === cookies.getConfigurationStatus().currentPhase &&
            direction === "forward"
        ) {
            newPhase = phase;
        } else if (
            index === cookies.getConfigurationStatus().currentPhase - 1 &&
            direction === "forward"
        ) {
            oldPhase = phase;
        } else if (
            index === cookies.getConfigurationStatus().currentPhase &&
            direction === "backward"
        ) {
            newPhase = phase;
        } else if (
            index === cookies.getConfigurationStatus().currentPhase + 1 &&
            direction === "backward"
        ) {
            oldPhase = phase;
        }
    });

    changePhasesWithDelay(newPhase, oldPhase, 300);

    if (cookies.getConfigurationStatus().nameDone) {
        startQuizButtonContainer.classList.add("hidden");
        quizButtonContainer.classList.remove("hidden");
        progressContainer.classList.add("active");
        showDesignsButtonContainer.classList.add("hidden");
        selectDesignButtonContainer.classList.add("hidden");
    }

    if (
        cookies.getConfigurationStatus().quizDone &&
        cookies.getConfigurationStatus().currentPhase === 2
    ) {
        showDesignsButtonContainer.classList.remove("hidden");
        quizButtonContainer.classList.add("hidden");
        progressContainer.classList.remove("active");
    }
    if (cookies.getConfigurationStatus().currentPhase === 3) {
        showDesignsButtonContainer.classList.add("hidden");
        quizButtonContainer.classList.add("hidden");
        progressContainer.classList.remove("active");
        selectDesignButtonContainer.classList.remove("hidden");
        selectSizeButtonContainer.classList.add("hidden");
    }

    if (cookies.getConfigurationStatus().designDone && cookies.getConfigurationStatus().currentPhase === 4) {
        showDesignsButtonContainer.classList.add("hidden");
        quizButtonContainer.classList.add("hidden");
        progressContainer.classList.remove("active");
        selectDesignButtonContainer.classList.add("hidden");
        selectSizeButtonContainer.classList.remove("hidden");
    }

    if (cookies.getConfigurationStatus().currentPhase === 0) {
        progressContainer.classList.remove("active");
        quizButtonContainer.classList.add("hidden");
        startQuizButtonContainer.classList.remove("hidden");
        checknameFilled();
    }

    if (cookies.phaseDone()) {
        quizNextButton.classList.remove("disabled");
    } else {
        quizNextButton.classList.add("disabled");
    }
}

//function to update the state of the radio buttons based on the cookies. Called on page load and when moving forward in the process
function updateQuestionButtons() {
    //On load, calculate current progress in quiz
    let totalprogress = 0;
    cookies
        .getConfigurationStatus()
        .phases.filter((phase) => {
            return phase.questions > 0;
        })
        .forEach((phase) => {
            if (phase.completed) {
                totalprogress += phase.questions;
            }
        });
    // Loop through all questions and update their state
    radioQuestions.forEach((question, questionIndex) => {
        const parentPhase = question.parentNode;
        const parentPhaseIndex = Array.from(allPhases).indexOf(parentPhase);
        const parentPhaseStatus =
            cookies.getConfigurationStatus().phases[parentPhaseIndex];

        if (
            questionIndex - totalprogress === parentPhaseStatus.progress &&
            !parentPhaseStatus.completed
        ) {
            question.classList.add("active");
        } else if (!parentPhaseStatus.completed) {
            question.classList.remove("active");
        } else {
            parentPhase.classList.add("answered");
            question.classList.add("answered");
        }
        // if the question is the one currently being answered, scroll to it
        if (
            cookies.getConfigurationStatus().phases[parentPhaseIndex]
                .progress === questionIndex
        ) {
            scrollToQuestion(
                parentPhase,
                question.getBoundingClientRect(),
                parentPhase.getBoundingClientRect()
            );
        }
        // Loop through all radio buttons and update their state and add click event listeners
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
                const wasAnswered =
                    cookies.getOrder().personalities[
                        cookies.getCurrentPersonality()
                    ].quiz[questionNo];
                cookies.updateQuiz(
                    cookies.getCurrentPersonality(),
                    questionNo,
                    buttonIndex
                );
                const isLastQuestion =
                    questionIndex === radioQuestions.length - 1;
                const currentPhase =
                    cookies.getConfigurationStatus().currentPhase;
                const currentQuestion = question;
                const nextQuestion = radioQuestions[questionIndex + 1];
                if (
                    !cookies.phaseDone() &&
                    wasAnswered == undefined &&
                    !isLastQuestion
                ) {
                    move("forward");
                    updateQuestionState(
                        currentQuestion,
                        nextQuestion,
                        currentPhase
                    );
                } else if (wasAnswered == undefined && isLastQuestion) {
                    move("forward");
                }
            });
        });
    });
}

//function to move forward or backward in the process. Updates cookies and frontend based on cookies
const move = (direction) => {
    if (direction == "forward") {
        cookies.moveForward();
        cookies.updateQuizDone();
        updateProgressBar();
        updateConfiguration("forward");
    } else if (direction === "backward") {
        cookies.moveBackward();
        updateProgressBar();
        updateConfiguration("backward");
    } else if ("forward-skip") {
        cookies.skipPhases();
        updateProgressBar();
        updateConfiguration("forward");
    }
};

// function to fetch designs from the API
async function fetchDesigns() {
    loadingScreen.classList.add("active");
    loadingScreen.style.opacity = "1";

    if (!cookies.designsFetched()) {
        try {
            const quizData =
                cookies.getOrder().personalities[
                    cookies.getCurrentPersonality()
                ].quiz;
            const responseData = await api.getDesigns(quizData);
            cookies.updateGetDesigns(responseData);
            updatePersonality();
            updateDesigns();
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            loadingScreen.style.opacity = "0";
            setTimeout(() => {
                loadingScreen.classList.remove("active");
            }, 300);
        }, 3000);
    }
}

const updatePersonality = () => {
    const order = cookies.getOrder();
    const personality = order.personalities[cookies.getCurrentPersonality()];
    const personalityData = personality.personality;

        personaliType.innerHTML = personalityData.personalityRole;
        extrovesionText.innerHTML = personalityData.extroversionScore * 100 + "%";
        extroversionBar.style.width = `${personalityData.extroversionScore * 100}%`;
        sensingText.innerHTML = personalityData.sensingScore * 100 + "%";
        sensingBar.style.width = `${personalityData.sensingScore * 100}%`;
        feelingText.innerHTML = personalityData.feelingScore * 100 + "%";
        feelingBar.style.width = `${personalityData.feelingScore * 100}%`;
        prospectingText.innerHTML = personalityData.prospectingScore * 100 + "%";
        prospectingBar.style.width = `${personalityData.prospectingScore * 100}%`;

};

const updateDesigns = () => {
    if (cookies.designsFetched()) {
        const designContainers = document.querySelectorAll(".design-container");
        const designs = cookies.getOptions();

        designContainers.forEach((container, index) => {
            const designImageElement = container.querySelector(".design-image");
            const designNameElement = container.querySelector(".design-name");
            const buttonElement = container.querySelector(".design-button");
            const design = designs[index].url;
            const prompt = designs[index].prompt;
            const token = designs[index].token;
            designImageElement.src = design;
            designNameElement.innerHTML = prompt;
            buttonElement.value = token;

            buttonElement.addEventListener("click", () => {
                cookies.updateSelectedDesign(token);
                selectDesignButton.classList.remove("disabled");
                const allButtons = document.querySelectorAll(".design-button");
                allButtons.forEach((button) => {
                    button.classList.remove("selected");
                    button.innerHTML = "SELECT";
                    const nearestDesignContainer = button.closest('.design-container')
                    nearestDesignContainer.classList.remove("selected");
                });
                buttonElement.classList.add("selected");
                buttonElement.innerHTML = "SELECTED";
                const nearestDesignContainer = buttonElement.closest('.design-container')
                nearestDesignContainer.classList.add("selected");
            });
        });

        if (cookies.getSelectedDesign()) {
            updateSelectedDesign();
        }
    }
};

const updateSelectedDesign = () => {
    const selectedDesign = cookies.getSelectedDesign();
    const allDesignButtons = document.querySelectorAll(".design-button");

    if (selectedDesign) {
        allDesignButtons.forEach((button) => {
            if (button.value === selectedDesign) {
                button.classList.add("selected");
                button.innerHTML = "SELECTED";
                const nearestDesignContainer = button.closest('.design-container')
                nearestDesignContainer.classList.add("selected");
            }
        });
        selectDesignButton.classList.remove("disabled");
    }
};

//Event listeners
document.addEventListener("DOMContentLoaded", function () {
    setInitialProperties();
    setConfiguration();
    inputElement.value =
        cookies.getOrder().personalities[cookies.getCurrentPersonality()].name;
    inputElement.addEventListener("input", checknameFilled);
    startQuizButton.addEventListener("click", () => {
        if (!cookies.getConfigurationStatus().nameDone) {
            move("forward");
        } else {
            move("forward-skip");
        }
    });
    updateConfiguration("forward");
    updateQuestionButtons();
    quizPreviousButton.addEventListener("click", () => {
        move("backward");
    });
    quizNextButton.addEventListener("click", () => {
        move("forward");
        if (!cookies.designsFetched()) {
            fetchDesigns();
        } else {
            updatePersonality();
        }
    });

    showDesignsBackButton.addEventListener("click", () => {
        move("backward");
    });

    showDesignsButton.addEventListener("click", () => {
        console.log("show designs");
        move("forward-skip");
        // updateDesigns();
    });

    selectDesignBackButton.addEventListener("click", () => {
        move("backward");
    });

    selectDesignButton.addEventListener("click", () => {
        move("forward");
        
    });

    selectSizeBackButton.addEventListener("click", () => {
        move("backward");
    });

    selectSizeButton.addEventListener("click", () => {
        addToCartButton.click();
    });
});

window.addEventListener("unload", function () {});

// When the page loads (e.g., in the load event)
window.addEventListener("load", function () {});

//Debug
