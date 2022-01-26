// Example Fetch API
let requestUrl = "./index.html";
fetch(requestUrl)
    .then(function(response) { // response is an HTTP response that needs to be converted into JSON
        if (response.status !== 200) {  // if you get a status code of not 200 (status OK)
            document.location.replace('./404.html'); // then replace with 404 page
        } else {
            return response.json; // returns JSON
        }})
    .then(function(data) {
        let sampleArray = data.response.docs;
        for (let i = 0; i < sampleArray.length; i++) {
            let listItem = document.createElement("li"); // make new line item for every record in dataset
            listItem.textContent = sampleArray[i].description; // assign the content by selecting reach record through the index of each respective record
            // can also call the name of data using _dataName
            // listItem.textContent = sampleArray[i]._sampleDataName
            listEl.appendChild(listItem);
        }
    }).catch(function (error) {
        console.log(error);
});


