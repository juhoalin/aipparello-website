require("./api.js");
require("./configuration.css");
require("./cookies.js");

const cookies = require("./cookies.js");
const api = require("./api.js");

// Get the element with id "quiz-content"
const quizContent = document.getElementById("quiz-content");

// Require the quiz.html file
const quizHTML = require("./configuration.html");
const { getEventListeners } = require("events");

// Inject the HTML into the quiz-content element
quizContent.innerHTML = quizHTML.default;

const addToCartHTML = document.getElementById("new-add-to-cart-container");
const addToCartTarget = document.getElementById("phase-step-new-fit-container");
const sizeSelect = addToCartHTML.querySelector(".w-select");
//Now actual quiz-code

//Get all HTML elements

const loadingScreen = document.getElementById("loading-screen-personality");
const confirmDesignButton = document.getElementById("confirm-design-button");
const confirmDesignButtonError = document.getElementById(
    "confirm-design-button-error"
);
const editDesignButton = document.getElementById("edit-design-button");
const editDesignButtonError = document.getElementById(
    "edit-design-button-error"
);
const lowModalReserveDesign = document.getElementById(
    "loading-screen-reserve-design"
);
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

const currentProductButton = document.getElementById("current-product-button");
const fitDoneLoadingScreen = document.getElementById("loading-screen-fit-done");
//Other variables

//Functions

//handle overlay & quiz opening
const setInitialProperties = () => {
    // quizOverlay.style.opacity = "1";
    // quizOverlay.style.display = "flex";
    // quizContainer.style.right = "0";
    quizOverlay.style.opacity = "0";
    quizOverlay.style.display = "none";
    quizContainer.style.right = "-125vw";
    createYoursButton.addEventListener("click", openQuizOverlay);
    quizCloseButton.addEventListener("click", closeQuizOverlay);
    addToCartTarget.appendChild(addToCartHTML);
    const cartOuterDiv = addToCartHTML.querySelector(
        ".w-commerce-commercecartwrapper"
    );
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
    updateConfiguration("forward");
    scrollToActiveQuestion();
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

function updateActiveProductState() {
    const product =
        cookies.getOrder().personalities[cookies.getCurrentPersonality()]
            .products[0];
    const name = product.product;
    const collection = product.collection;
    const price = product.price;
    const image = product.image;
    const description = product.description;
    const size = product.selectedSize;
    const personalityRole =
        cookies.getOrder().personalities[cookies.getCurrentPersonality()]
            .personality.personalityRole;
    const personalityName =
        cookies.getOrder().personalities[cookies.getCurrentPersonality()].name;
    const designName = cookies.getSelectedDesign().prompt;

    const apName = document.getElementById("ap-name");
    const apCollection = document.getElementById("ap-collection");
    const apPrice = document.getElementById("ap-price");
    const apImage = document.getElementById("ap-image");
    const apDescription = document.getElementById("ap-desc");
    const apPersonalityStatus = document.getElementById(
        "ap-personality-status"
    );
    const apDesignStatus = document.getElementById("ap-design-status");
    const apFitStatus = document.getElementById("ap-fit-status");

    const quizDone = cookies.getConfigurationStatus().quizDone;
    const sizeDone = cookies.getConfigurationStatus().sizeDone;

    const apStatus1 = document.getElementById("ap-status-1");
    const apStatus2 = document.getElementById("ap-status-2");
    const apStatus3 = document.getElementById("ap-status-3");

    apName.innerHTML = name;
    apCollection.innerHTML = collection;
    apPrice.innerHTML = price;
    apImage.src = image;
    apDescription.innerHTML = description;

    if (
        cookies.getConfigurationStatus().quizDone &&
        cookies.getConfigurationStatus().personalityDone &&
        !cookies.getConfigurationStatus().designDone &&
        !cookies.getConfigurationStatus().sizeDone
    ) {
        apStatus1.classList.add("active");
        apPersonalityStatus.innerHTML =
            personalityName + " / " + personalityRole;
        apStatus2.classList.add("active");
        apDesignStatus.innerHTML = "Selecting...";
        apStatus3.classList.remove("active");
        apFitStatus.innerHTML = "Unselected";
    } else if (
        cookies.getConfigurationStatus().designDone &&
        !cookies.getConfigurationStatus().sizeDone
    ) {
        apStatus1.classList.add("active");
        apPersonalityStatus.innerHTML =
            personalityName + " / " + personalityRole;
        apStatus2.classList.add("active");
        apDesignStatus.innerHTML = designName;
        apStatus3.classList.add("active");
        apFitStatus.innerHTML = "Selecting...";
    } else if (cookies.getConfigurationStatus().sizeDone) {
        apStatus1.classList.add("active");
        apPersonalityStatus.innerHTML =
            personalityName + " / " + personalityRole;
        apStatus2.classList.add("active");
        apDesignStatus.innerHTML = designName;
        apStatus3.classList.add("active");
        apFitStatus.innerHTML = size;
    }
}

function updateAddToCartState() {
    const sizeDone =
        cookies.getOrder().personalities[cookies.getCurrentPersonality()]
            .products[0].selectedSize;

    if (sizeDone !== "") {
        selectSizeButton.classList.remove("disabled");
    } else {
        selectSizeButton.classList.add("disabled");
    }
}

function openHighModal(outerID, innerID, state) {
    const outer = document.getElementById(outerID);
    const inner = document.getElementById(innerID);

    outer.classList.add("active");
    inner.classList.add("active");

    setTimeout(() => {
        outer.style.opacity = "1";
        inner.style.marginTop = "0";
    }, 10);

    setTimeout(() => {}, 600);

    const standard = inner.querySelector(".standard");

    if (state === "standard") {
        standard.classList.add("active");
    }
}

function closeHighModal(outerID, innerID) {
    const outer = document.getElementById(outerID);
    const inner = document.getElementById(innerID);

    inner.style.marginTop = "-100vh";
    outer.style.opacity = "0";

    setTimeout(() => {
        outer.classList.remove("active");
        inner.classList.remove("active");
    }, 300);
}

function openLowModal(outerID, innerID, state) {
    const outer = document.getElementById(outerID);
    const inner = document.getElementById(innerID);

    outer.classList.add("active");
    inner.classList.add("active");

    setTimeout(() => {
        outer.style.opacity = "1";
        inner.style.marginBottom = "0";
    }, 10);

    setTimeout(() => {}, 600);

    const standard = inner.querySelector(".standard");
    const error = inner.querySelector(".error");
    const loading = inner.querySelector(".loading-modal");

    if (state === "standard") {
        standard.classList.add("active");
        error.classList.remove("active");
        loading.classList.remove("active");
    } else if (state === "error") {
        error.classList.add("active");
        standard.classList.remove("active");
        loading.classList.remove("active");
    } else if (state === "loading") {
        loading.classList.add("active");
        standard.classList.remove("active");
        error.classList.remove("active");
    }
}

function closeLowModal(outerID, innerID) {
    const outer = document.getElementById(outerID);
    const inner = document.getElementById(innerID);

    inner.style.marginBottom = "-100vh";
    outer.style.opacity = "0";

    setTimeout(() => {
        outer.classList.remove("active");
        inner.classList.remove("active");
    }, 300);
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
        nextQuestion.querySelectorAll(".radio-input").forEach((input) => {
            input.removeAttribute("disabled", '');
        });
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

    if (
        cookies.getConfigurationStatus().designDone &&
        cookies.getConfigurationStatus().currentPhase === 4
    ) {
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

    quizCloseButton.style.zIndex = "500";


    if (
        cookies.getConfigurationStatus().currentPhase === 4 &&
        cookies.getConfigurationStatus().sizeDone
    ) {
        addToCartHTML
            .querySelector(".w-commerce-commercecartwrapper")
            .setAttribute("data-cart-open", "");
        const cartWrapper = document.getElementById("cart-wrapper");
        cartWrapper.classList.add("dominate");
        quizCloseButton.style.zIndex = "2000";
        fitDoneLoadingScreen.classList.add("active");
    }

    updateActiveProductState();
}

function scrollToActiveQuestion() {
    console.log("scrollToActiveQuestion");
    // Find the phase1 div
    var phase1Div = document.getElementById("phase1");

    // Find the active child element within phase1
    var activeChild = phase1Div.querySelector(
        ".radio-question.phase-step.active"
    );

    if (activeChild) {
        // Get the bounding rectangle of the active child and phase1 div
        var questionRect = activeChild.getBoundingClientRect();
        var containerRect = phase1Div.getBoundingClientRect();

        // Calculate the current scroll position
        var scrollTop =
            phase1Div.scrollTop ||
            phase1Div.pageYOffset ||
            document.documentElement.scrollTop;

        // Calculate the target position to center the active child
        var targetPosition =
            questionRect.top +
            scrollTop -
            containerRect.top -
            (containerRect.height - questionRect.height) / 2;

        // Scroll the phase1 div to the target positionJuhi
        phase1Div.scrollTo({
            top: targetPosition,
            behavior: "instant",
        });
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
            console.log(question.querySelector(".radio-input", "input"));
            question.querySelectorAll(".radio-input").forEach((input) => {
                input.setAttribute("disabled", "");
            });

        if (
            questionIndex - totalprogress === parentPhaseStatus.progress &&
            !parentPhaseStatus.completed
        ) {
            question.classList.add("active");
            question.querySelectorAll(".radio-input").forEach((input) => {
                input.removeAttribute("disabled", '');
            });
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
            updateActiveProductState();
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

async function reserveDesign(token) {
    openLowModal(
        "low-modal-reserve-design",
        "low-modal-inner-reserve-design",
        "loading"
    );
    try {
        const responseData = await api.reserveDesign(token);
        console.log(responseData);
        closeLowModal(
            "low-modal-reserve-design",
            "low-modal-inner-reserve-design"
        );
        cookies.updateDesignDone();
        move("forward");
        updateActiveProductState();
    } catch (error) {
        console.log(error);
        openLowModal(
            "low-modal-reserve-design",
            "low-modal-inner-reserve-design",
            "error"
        );
    }
}

const updatePersonality = () => {
    const order = cookies.getOrder();
    const personality = order.personalities[cookies.getCurrentPersonality()];
    const personalityData = personality.personality;
    personaliType.innerHTML = personalityData.personalityRole;
    extrovesionText.innerHTML =
        Math.round(personalityData.extroversionScore * 100) + "%";
    extroversionBar.style.width = `${Math.round(
        personalityData.extroversionScore * 100
    )}%`;
    sensingText.innerHTML =
        Math.round(personalityData.sensingScore * 100) + "%";
    sensingBar.style.width = `${Math.round(
        personalityData.sensingScore * 100
    )}%`;
    feelingText.innerHTML =
        Math.round(personalityData.feelingScore * 100) + "%";
    feelingBar.style.width = `${Math.round(
        personalityData.feelingScore * 100
    )}%`;
    prospectingText.innerHTML =
        Math.round(personalityData.prospectingScore * 100) + "%";
    prospectingBar.style.width = `${Math.round(
        personalityData.prospectingScore * 100
    )}%`;
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
                cookies.updateSelectedDesign(designs[index]);
                selectDesignButton.classList.remove("disabled");
                const allButtons = document.querySelectorAll(".design-button");
                allButtons.forEach((button) => {
                    button.classList.remove("selected");
                    button.innerHTML = "SELECT";
                    const nearestDesignContainer =
                        button.closest(".design-container");
                    nearestDesignContainer.classList.remove("selected");
                });
                buttonElement.classList.add("selected");
                buttonElement.innerHTML = "SELECTED";
                const nearestDesignContainer =
                    buttonElement.closest(".design-container");
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
    if (selectedDesign.token) {
        allDesignButtons.forEach((button) => {
            if (button.value === selectedDesign.token) {
                button.classList.add("selected");
                button.innerHTML = "SELECTED";
                const nearestDesignContainer =
                    button.closest(".design-container");
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
        scrollToActiveQuestion();
        if (!cookies.getConfigurationStatus().nameDone) {
            move("forward");
        } else {
            move("forward-skip");
        }
    });
    updateConfiguration("forward");
    updateQuestionButtons();
    scrollToActiveQuestion();
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
        openLowModal(
            "low-modal-reserve-design",
            "low-modal-inner-reserve-design",
            "standard"
        );
    });

    confirmDesignButton.addEventListener("click", () => {
        const selectedDesign = cookies.getSelectedDesign();
        reserveDesign(selectedDesign.token);
    });

    confirmDesignButtonError.addEventListener("click", () => {
        reserveDesign(selectedDesign.token);
    });

    editDesignButton.addEventListener("click", () => {
        closeLowModal(
            "low-modal-reserve-design",
            "low-modal-inner-reserve-design"
        );
    });

    editDesignButtonError.addEventListener("click", () => {
        closeLowModal(
            "low-modal-reserve-design",
            "low-modal-inner-reserve-design"
        );
    });

    selectSizeBackButton.addEventListener("click", () => {
        move("backward");
    });

    selectSizeButton.addEventListener("click", () => {
        addToCartButton.click();
        cookies.handleAddToCart(true);
        fitDoneLoadingScreen.classList.add("active");
        quizCloseButton.style.zIndex = "2000";
    });

    currentProductButton.addEventListener("click", () => {
        const highModal = document.getElementById("high-modal-active-product");
        const statusText = document.getElementById("status-text");
        const productArrow = document.getElementById("product-arrow");

        if (highModal.classList.contains("active")) {
            statusText.innerHTML = "Personalized T-Shirt";
            productArrow.classList.remove("open");
            closeHighModal(
                "high-modal-active-product",
                "high-modal-inner-active-product"
            );
        } else {
            statusText.innerHTML = "In-progress";
            productArrow.classList.add("open");
            openHighModal(
                "high-modal-active-product",
                "high-modal-inner-active-product",
                "standard"
            );
        }
    });

    const designCarousel = document.querySelector(".carousel-container");
    const dots = document.querySelectorAll(".dot");

    designCarousel.addEventListener("scroll", function () {
        // Calculate the width of a single scroll item
        const itemWidth = designCarousel.scrollWidth / 5; // Assuming 5 items

        // Calculate the index of the currently visible item
        const visibleIndex = Math.round(designCarousel.scrollLeft / itemWidth);

        // Update the selected dot
        dots.forEach((dot) => dot.classList.remove("visible"));
        dots[visibleIndex].classList.add("visible");
    });

    document
        .getElementById("close-active-product")
        .addEventListener("click", function () {
            const statusText = document.getElementById("status-text");
            const productArrow = document.getElementById("product-arrow");
            statusText.innerHTML = "Personalized T-Shirt";
            productArrow.classList.remove("open");
            closeHighModal(
                "high-modal-active-product",
                "high-modal-inner-active-product"
            );
        });

    sizeSelect.addEventListener("change", function () {
        const value = sizeSelect.options[sizeSelect.selectedIndex].innerHTML;

        cookies.updateSelectedSize(value);
        updateAddToCartState();
    });

    const targetElement = document.querySelector(
        ".w-commerce-commercecartlist"
    );

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
                if (targetElement.hasChildNodes()) {
                    const cartWrapper = document.getElementById("cart-wrapper");
                    cartWrapper.classList.add("dominate");
                } else {
                    console.log("cart empty");
                    cookies.updateSelectedSize("Select Size");
                    cookies.handleAddToCart(false);
                    addToCartHTML
                        .querySelector(".w-commerce-commercecartwrapper")
                        .removeAttribute("data-cart-open", "");
                    const cartWrapper = document.getElementById("cart-wrapper");
                    cartWrapper.classList.remove("dominate");
                    quizCloseButton.style.zIndex = "500";
                    fitDoneLoadingScreen.classList.remove("active");
                }
            }
        });
    });

    observer.observe(targetElement, { childList: true });

    console.log("sizeSelect", sizeSelect);

    document.getElementById("phase1").addEventListener("scroll", () => {});

    // Save the scroll position of the phase1 div when it's scrolled
    document.getElementById("phase1").addEventListener("scroll", function () {
        localStorage.setItem("phase1ScrollPosition", this.scrollTop);
    });
});

window.addEventListener("unload", function () {});

// When the page loads (e.g., in the load event)
window.addEventListener("load", function () {});

//Debug
