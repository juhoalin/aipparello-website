const cookies = require("./cookies.js");

async function getDesigns(quizData) {
    const data = {
        answers: quizData,
    };

    console.log("Data:", data);

    try {
        const response = await fetch(
            "https://evhmif8p8c.execute-api.ap-southeast-1.amazonaws.com/prod/designs/get-options",
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
        console.log("Response Data:", responseData);
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

    console.log("Data:", data);

    try {
        const response = await fetch(
            "https://evhmif8p8c.execute-api.ap-southeast-1.amazonaws.com/prod/designs/reserve-design",
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
        console.log("Response Data:", responseData);
        // Process the response data here
        return responseData;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
}

module.exports = {
    getDesigns,
    reserveDesign
};
