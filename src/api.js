const cookies = require("./cookies.js");

async function getDesigns(quizData) {
    const data = {
        answers: quizData,
    };


    try {
        const response = await fetch(
            // "https://example.com/invalid-url",
            "https://ovw1bhw4bf.execute-api.ap-southeast-1.amazonaws.com/prod/designs/get-options",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        
        // Process the response data here
        return responseData;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
}

async function reserveDesign(token) {
    const data = {
        token: token,
    };

    

    try {
        const response = await fetch(
            // "https://example.com/invalid-url",
            "https://ovw1bhw4bf.execute-api.ap-southeast-1.amazonaws.com/prod/designs/reserve-design",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
       
        // Process the response data here
        return responseData;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
}

async function confirmDesign(email, orderId, token) {
    const data = {
        email: email,
        orderId: orderId,
        tokens: [token]
    };

   

    try {
        const response = await fetch(
            // "https://example.com/invalid-url",
            "https://ovw1bhw4bf.execute-api.ap-southeast-1.amazonaws.com/prod/designs/confirm-design",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
       
        // Process the response data here
        return responseData;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
}

async function viewProfile(id) {
    try {
        const response = await fetch(
            `https://ovw1bhw4bf.execute-api.ap-southeast-1.amazonaws.com/prod/profile/view?id=${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
    
        // Process the response data here
        return responseData;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
}

module.exports = {
    getDesigns,
    reserveDesign,
    confirmDesign,
    viewProfile,
};
