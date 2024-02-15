require("./api.js");
const api = require("./api.js");

console.log("hello from checkout js file!");

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
    const cartPersonality = document.getElementById("checkout-personality");
    const cartDesignSelected = document.getElementById("checkout-design-image");
    const designDesc = document.getElementById("checkout-design-text");


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

const emailInput = document.getElementById('wf-ecom-email');

// Add an event listener for the 'input' event
emailInput.addEventListener('input', function(event) {
    const order = getCookie('order');
    // Get the inputted email value
    const emailValue = event.target.value;

    order.orderEmail = emailValue;
    
    // Call a function to update the inputted email text to your backend
    saveOrderToCookie(order);
});

document.addEventListener("DOMContentLoaded", function () {

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

   
});

window.addEventListener('DOMContentLoaded', () => {

})
