console.log('confirmation.js');

require("./api.js");
const api = require("./api.js");
const confirmationHTML = require("./conf-loading.html");

console.log("hello from checkout js file!");

const loadingContainer = document.getElementById("loading-container");

let orderEmail = "";
let orderID = "";
let token = "";

loadingContainer.innerHTML = confirmationHTML.default;

function getCookie(cookieName) {
    const cookieValue = localStorage.getItem(cookieName);

    // If cookieValue is not null, parse the JSON string and return it
    if (cookieValue !== null) {
        return JSON.parse(cookieValue);
    } else {
        return null; // Return null if cookie not found
    }
}

function getCookie(cookieName) {
    const cookieValue = localStorage.getItem(cookieName);

    // If cookieValue is not null, parse the JSON string and return it
    if (cookieValue !== null) {
        return JSON.parse(cookieValue);
    } else {
        return null; // Return null if cookie not found
    }
}

function saveOrderToCookie(order) {
    // Convert the order object to a JSON string
    
    const orderJSON = JSON.stringify(order);

    // Save the JSON string to localStorage
    localStorage.setItem("order", orderJSON);
}


const updateReadyCheckoutProduct = () => {
    // Get the current page URL

    const cookies = getCookie('order')

    const currentPersonality = cookies.personalities[0];
    const currentProduct = currentPersonality.products[0];

    const name = currentPersonality.name;
    const personality = currentPersonality.personality.personalityRole;
    const imgDesc = currentProduct.selectedDesign.prompt;
    const img = currentProduct.selectedDesign.url;

    console.log(cookies);
    // Perform actions specific to the checkout page
    const cartPersonality = document.getElementById("confirmation-personality");
    const cartDesignSelected = document.getElementById("confirmation-design-image");
    const designDesc = document.getElementById("confirmation-design-text");


    if (img !== "") {
        if (cartDesignSelected && cartPersonality && designDesc) {
            cartDesignSelected.src = img;
            designDesc.innerHTML = imgDesc;
            if (name === "anonymous") {
                cartPersonality.innerHTML = personality;
            } else {
                cartPersonality.innerHTML =
                    name + " / " + personality;
            }
        }
    }
};

function getOrderIdFromURL(url) {
    // Split the URL by '?' to separate the base URL from the query parameters
    const queryString = url.split('?')[1];
    if (queryString) {
        // Split the query parameters by '&' to separate individual key-value pairs
        const queryParams = queryString.split('&');
        // Iterate through each key-value pair to find the 'orderId' parameter
        for (const param of queryParams) {
            const [key, value] = param.split('=');
            // If the key is 'orderId', return its value
            if (key === 'orderId') {
                return value;
            }
        }
    }
    // If the 'orderId' parameter is not found, return null
    return null;
}

function saveResetProcessToCookies(resetProcess) {
    const resetJSON = JSON.stringify(resetProcess);

    // Save the JSON string to localStorage
    localStorage.setItem("resetProcess", resetJSON);
}

async function confirmDesign(email, orderId, token) {
    console.log(email, orderId, token);

    try {
        const response = await api.confirmDesign(email, orderId, token);
        console.log(response);
        loadingContainer.style.display = "none";
        console.log('design confirmed');
        saveResetProcessToCookies(true);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        saveResetProcessToCookies(true);
        loadingContainer.style.display = "none";
        
    }
}

// Example usage:
// const url = 'https://aipparello.webflow.io/order-confirmation?orderId=ebc-6b7&token=522a1d4410695ed6b70e8dfc76b64255c6d7f18a89c7b0cf7640b1e3f7b59757';
// const orderId = getOrderIdFromURL(url);
// console.log(orderId); // Output: ebc-6b7


document.addEventListener("DOMContentLoaded", function () {



    const cookie = getCookie('order');
    orderEmail = cookie.orderEmail;
    orderID = getOrderIdFromURL(window.location.href);
    token = cookie.personalities[0].products[0].selectedDesign.token;

    cookie.orderID = orderID;
    saveOrderToCookie(cookie);


    confirmDesign(orderEmail, orderID, token);

    loadingContainer.style.display = "initial";


    const targetElement = document.querySelector(
        ".w-commerce-commercecheckoutorderitemslist"
    );

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
                if (targetElement.hasChildNodes()) {
                    console.log('checkout has items')
                    updateReadyCheckoutProduct();
                } else {
                    console.log('checkout no items')
                }
            }
        });
    });

    observer.observe(targetElement, { childList: true });

    const resetProcess = getCookie('resetProcess');

    if (resetProcess) {
        // console.log('reset process');
        // localStorage.clear();
        // window.redirect('https://aipparello.webflow.io/');
    }

   
});

window.addEventListener('DOMContentLoaded', () => {

})