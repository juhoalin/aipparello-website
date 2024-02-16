require("./api.js");
require("./configuration.css");
require("./cookies.js");

const cookies = require("./cookies.js");
const api = require("./api.js");

// Get the element with id "quiz-content"
const profileContent = document.getElementById("profile-section");

// Require the quiz.html file
const profileHTML = require("./profile.html");

profileContent.innerHTML = profileHTML.default;

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

const profileImg = document.getElementById("profile-img");
const profileImgDesc = document.getElementById("profile-img-desc");
const profileImgId = document.getElementById("profile-img-id");

const loadingScreen = document.getElementById("loading-screen-profile");

const updatePersonality = (data) => {
    const personalityTypes = [
        {
            type: "Provider",
            desc: "Cornerstones of support, ensuring everyone's needs are met with care and compassion. Providers foster security and warmth in every interaction.",
        },
        {
            type: "Protector",
            desc: "Shielding loved ones, demonstrating empathy to others, and having a strong work ethic. Protectors remain steadfast guardians like sturdy shields against life's adversities.",
        },
        {
            type: "Supervisor",
            desc: "Skilled leaders who help teams work efficiently, maintaining order to ensure harmony and success. Supervisors are methodical, practical, and direct.",
        },
        {
            type: "Inspector",
            desc: "Meticulous craftsmen who refine their works to perfection. Although Inspectors are reserved and calm, they are also detail-oriented, responsible, and organised.",
        },
        {
            type: "Performer",
            desc: "Charismatic entertainers who captivate crowds and spread joy. Performers are outgoing, adaptable, and enjoy working with others.",
        },
        {
            type: "Composer",
            desc: "Artistic creators, weaving melodies, evoking emotions, like painters splashing vibrant colours onto the canvas of sound. Despite being introverted, composers are spontaneous, sensitive, and warm.",
        },
        {
            type: "Promoter",
            desc: "Enthusiastic advocates, championing causes and inspiring change. Promoters are logical thinkers who always seek out new opportunities with passion and diligence.",
        },
        {
            type: "Crafter",
            desc: "Skilled artisans who love to dig deep and understand the core of practical problems. Crafters are rational and logical, but can be spontaneous and enthusiastic.",
        },
        {
            type: "Champion",
            desc: "Fearless warriors, fighting for justice, defending the weak, and inspiring hope. Champions enjoy being around others, and are highly perceptive.",
        },
        {
            type: "Healer",
            desc: "Compassionate caregivers who can soothe souls, heal wounds, and offer comfort. Healers are creative and quick to see possibilities. They seek to understand others and help them fulfil their potential.",
        },
        {
            type: "Teacher",
            desc: "Knowledge sharers who inspire and guide others. Teachers are warm, empathetic and responsive. They are highly attuned to the needs of others, and are natural leaders.",
        },
        {
            type: "Counselor",
            desc: "Understanding listeners, offering wisdom and lending support. Counselors have a profound way of looking at the world. They are creative, empathetic, and insightful.",
        },
        {
            type: "Inventor",
            desc: "Creative thinkers, sparking innovation, and exploring possibilities. Inventors are quick, ingenious, and outspoken. They are resourceful in solving new and challenging problems.",
        },
        {
            type: "Architect",
            desc: "Analytical visionaries who shape solutions with clear visions. Architects are quick to notice patterns. They are logical, creative, and insightful.",
        },
        {
            type: "Fieldmarshal",
            desc: "Strategic leaders, charting courses, commanding respect, skilled navigators steering ships through treacherous waters. Fieldmarshals are natural leaders who make rational decisions and set clear goals.",
        },
        {
            type: "Mastermind",
            desc: "Strategic geniuses who excel at planning and strategizing. Recognising connections and patterns comes naturally to Masterminds, making them natural problem solvers.",
        },
    ];

    const personalityData = data.profile.personality;
    const currentDescription = personalityTypes.find((personalityType) => {
        if (
            personalityType.type.toLowerCase() ===
            personalityData.personalityRole.toLowerCase()
        ) {
            return personalityType;
        } else {
            return "";
        }
    });
    personaliType.innerHTML = personalityData.personalityRole;
    const personalityDescriptionElement = document.getElementById(
        "personality-description"
    );
    personalityDescriptionElement.innerHTML = currentDescription.desc;
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

    profileImg.src = data.url;
    profileImgDesc.innerHTML = data.profile.prompt;
    profileImgId.innerHTML = data.profile.id;
    profileImg.style.opacity = 1;
};

function extractIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id;
}

async function getProfile() {
    const id = extractIdFromUrl();
    if (!id) {
        console.error("No profile id found in the URL");
        window.location.href = "https://aipparello.com";
        return;
    }
    try {
        const data = await api.viewProfile(id);
        console.log("Profile Data:", data);
        updatePersonality(data);
        loadingScreen.style.display = "none";
    } catch (error) {
        window.location.href = "https://aipparello.com";
        console.error("There was a problem with the fetch operation:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello from proile.js!");

    getProfile();
});
