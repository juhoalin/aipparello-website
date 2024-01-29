
function getDesigns(quizData) {
    const data = {
        answers: quizData,
    };

    console.log('Data:', data);

    fetch('https://evhmif8p8c.execute-api.ap-southeast-1.amazonaws.com/prod/designs/get-options', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(responseData => {
        console.log('Response Data:', responseData);
        // Process the response data here
        return responseData;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}


module.exports = {
    getDesigns,
};

