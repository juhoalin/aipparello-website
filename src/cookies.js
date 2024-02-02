//Saved cookies structure

const quizLength = 16;

// Now always zero – used in the future to handle multiple personalities during the same session
let currentPersonality = 0;

// Order object structure
let order = {
    personalities: [
        {
            name: "",
            quiz: [],
            personality: {
                personalityType: "",
                personalityRole: "",
                extroversionScore: 0,
                sensingScore: 0,
                feelingScore: 0,
                prospectingScore: 0,
            },
            products: [
                {
                    product: "",
                    collection: "",
                    options: [],
                    selectedDesign: "",
                },
            ],
        },
    ],
    orderEmail: "",
    orderID: "",
};
// Configuration status object structure
let configurationStatus = {
    currentPhase: 0,
    phases: [],
    totalProgress: 0,
    nameDone: false,
    quizDone: false,
    designDone: false,
    sizeDone: false,
};

const updateGetDesigns = (data) => {
    const options = data.options;
    const personality = data.personality;

    order.personalities[currentPersonality].personality.personalityType =
        personality.personalityType;
    order.personalities[currentPersonality].personality.personalityRole =
        personality.personalityRole;
    order.personalities[currentPersonality].personality.extroversionScore =
        personality.extroversionScore;
    order.personalities[currentPersonality].personality.sensingScore =
        personality.sensingScore;
    order.personalities[currentPersonality].personality.feelingScore =
        personality.feelingScore;
    order.personalities[currentPersonality].personality.prospectingScore =
        personality.prospectingScore;

    options.forEach((option) => {
        order.personalities[currentPersonality].products[0].options.push(
            option
        );
    });

    saveOrderToCookie(order);
};

// check if the designs have been fetched
const designsFetched = () => {
    const designs =
        getCookie("order").personalities[currentPersonality].products[0]
            .options;
    if (designs.length > 0) {
        return true;
    } else {
        return false;
    }
};

//check if the designs have been selected
const designsSelected = () => {
    const selectedDesign =
        order.personalities[currentPersonality].products[0].selectedDesign;
    return selectedDesign !== "";
};

// Check if the current phase is done
const phaseDone = () => {
    const data = configurationStatus.phases[configurationStatus.currentPhase];
    return data.progress === data.length;
};

//check if user is in the llast step of the current phase
const lastStep = () => {
    const data = configurationStatus.phases[configurationStatus.currentPhase];
    return data.progress === data.length - 1;
};

// New phase status object. Used to create the initial phase status array from the DOM
const newPhasteStatus = (length, progress, questions, completed) => {
    return {
        length: length,
        progress: progress,
        questions: questions,
        completed: completed,
    };
};

// retrieve the order object
const getOrder = () => {
    return order;
};

//rerteive the configuration status object
const getConfigurationStatus = () => {
    return configurationStatus;
};

//retrieve the current personality
const getCurrentPersonality = () => {
    return currentPersonality;
};

// Update the quiz array of the specified personality
function updateQuiz(personalityIndex, questionNumber, answerValue) {
    // Update the quiz array of the specified personality
    order.personalities[personalityIndex].quiz[questionNumber] = answerValue;

    // Save the updated order object to cookies
    saveOrderToCookie(order);
}

// Update the name of the specified personality
function updateName(name) {
    // Update the quiz array of the specified personality
    order.personalities[currentPersonality].name = name;

    // Save the updated order object to cookies
    saveOrderToCookie(order);
}

// Update the current phase manually
function updateCurrentPhase(currentPhase) {
    configurationStatus.currentPhase = currentPhase;
    saveconfigurationStatusToCookie(configurationStatus);
}

// Update the phase progress manually
function updatePhase(progress) {
    configurationStatus.phases[configurationStatus.currentPhase].progress =
        progress;
    saveconfigurationStatusToCookie(configurationStatus);
}

// Create the phases array from the DOM
function createPhases(phases) {
    if (configurationStatus.phases.length === 0) {
        phases.forEach((phase, index) => {
            const children = phase.querySelectorAll(".phase-step");
            const getQuestions = phase.querySelectorAll(".radio-question");
            const questions = getQuestions ? getQuestions.length : 0;
            configurationStatus.phases.push(
                newPhasteStatus(children.length, 0, questions, false)
            );
        });
    }
}

// Move to the next phase. If the current phase is the last one, the progress will be updated instead
function moveForward() {
    const currentPhase = configurationStatus.currentPhase;
    const phaseData = configurationStatus.phases[currentPhase];
    // If the phase is not completed, move to the next step
    if (
        configurationStatus.phases[currentPhase].progress <=
        configurationStatus.phases[currentPhase].length - 1
    ) {
        configurationStatus.phases[currentPhase].progress++;
        // If the phase is completed, move to the next phase
    } else if (
        configurationStatus.currentPhase <
        configurationStatus.phases.length - 1
    ) {
        configurationStatus.phases[
            configurationStatus.currentPhase
        ].completed = true;
        configurationStatus.currentPhase++;
        // If the phase is the last one, update the progress
    } else if (
        configurationStatus.currentPhase ===
        configurationStatus.phases.length - 1
    ) {
        configurationStatus.phases[configurationStatus.currentPhase].progress++;
        configurationStatus.phases[
            configurationStatus.currentPhase
        ].completed = true;
    }
    saveconfigurationStatusToCookie(configurationStatus);
}

// Move to the previous phase
function moveBackward() {
    configurationStatus.currentPhase--;

    saveconfigurationStatusToCookie(configurationStatus);
}
// Used to move to next phase without affecting the progress of the current phase
function skipPhases() {
    configurationStatus.currentPhase++;
    saveconfigurationStatusToCookie(configurationStatus);
}

// Update the total progress. This is actually only used in the quiz phase
function updateTotalProgress() {
    const phasesWithQuestions = configurationStatus.phases.filter((phase) => {
        return phase.questions > 0;
    });

    let total = 0;
    phasesWithQuestions.forEach((phase) => {
        total += phase.progress;
    });
    let theoreticalTotal = 0;

    phasesWithQuestions.forEach((phase) => {
        theoreticalTotal += phase.questions;
    });

    configurationStatus.totalProgress = Math.round(
        (total / theoreticalTotal) * 100
    );
    saveconfigurationStatusToCookie(configurationStatus);
}

// Update the nameDone status
function updateNameDone() {
    if (order.personalities[currentPersonality].name === "") {
        configurationStatus.nameDone = false;
    } else {
        configurationStatus.phases[0].completed = true;
        configurationStatus.phases[0].progress = 1;
        configurationStatus.nameDone = true;
    }

    saveconfigurationStatusToCookie(configurationStatus);
}

// Update the quizDone status
function updateQuizDone() {
    if (order.personalities[currentPersonality].quiz.length < quizLength) {
        configurationStatus.quizDone = false;
    } else {
        configurationStatus.quizDone = true;
    }
    saveconfigurationStatusToCookie(configurationStatus);
}

//saves / updates / creates current personality
// Saves / updates / creates current personality to cookies
function saveCurrentPersonalityToCookie(currentPersonality) {
    const cookieName = "currentPersonality";
    const cookieValue = JSON.stringify(currentPersonality);
    localStorage.setItem(cookieName, cookieValue);
}

// Function to save the order object to cookies
function saveOrderToCookie(order) {
    // Convert the order object to a JSON string
    const orderJSON = JSON.stringify(order);

    // Save the JSON string to localStorage
    localStorage.setItem("order", orderJSON);
}

// Function to save configurationStatus object to cookies
function saveconfigurationStatusToCookie(configurationStatus) {
    // Convert the configurationStatus object to a JSON string
    const configurationStatusJSON = JSON.stringify(configurationStatus);

    // Save the JSON string to localStorage
    localStorage.setItem("configurationStatus", configurationStatusJSON);
}

// Function to retrieve a specific cookie by name
function getCookie(cookieName) {
    const cookieValue = localStorage.getItem(cookieName);

    // If cookieValue is not null, parse the JSON string and return it
    if (cookieValue !== null) {
        return JSON.parse(cookieValue);
    } else {
        return null; // Return null if cookie not found
    }
}


// Update the phase status on window load based on cookies / if no cookies are found, create new ones
async function initialCookiesSetup(phases) {
    // Check if there is an order cookie
    const orderCookie = getCookie("order");
    if (!orderCookie) {
        // No order cookie found, create a new one
        saveOrderToCookie(order);
    } else {
        order = orderCookie;
        console.log("Order cookie found:", orderCookie);
    }

    // Check if there is a configurationStatus cookie
    const configurationStatusCookie = getCookie("configurationStatus");
    if (!configurationStatusCookie) {
        // No configurationStatus cookie found, create a new one;
        createPhases(phases);
        saveconfigurationStatusToCookie(configurationStatus);
    } else {
        configurationStatus = configurationStatusCookie;
        console.log("Quiz Status cookie found:", configurationStatus);
    }

    // Check if there is a currentPersonality cookie
    const currentPersonalityCookie = getCookie("currentPersonality");
    if (!currentPersonalityCookie) {
        // No currentPersonality cookie found, create a new one
        saveCurrentPersonalityToCookie(currentPersonality);
    } else {
        currentPersonality = currentPersonalityCookie;
        console.log("Current Personality cookie found:", currentPersonality);
    }
}

module.exports = {
    initialCookiesSetup,
    updateQuiz,
    updateName,
    updateCurrentPhase,
    updatePhase,
    createPhases,
    moveForward,
    moveBackward,
    updateTotalProgress,
    updateNameDone,
    updateQuizDone,
    getOrder,
    getConfigurationStatus,
    getCurrentPersonality,
    phaseDone,
    skipPhases,
    designsFetched,
    designsSelected,
    lastStep,
    updateGetDesigns,
    getCookie,
};
