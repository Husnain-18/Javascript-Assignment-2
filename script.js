const outputBox = document.getElementById('outputBox');
        const inputField = document.getElementById('inputValue');
        
        // Initial Array based on the design
        let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Peshawar", "Sarghoda", "Gojra"];

        // Helper: Prints to Output Box
        function printOutput(htmlStr) {
            outputBox.innerHTML = htmlStr;
        }

        // Helper: Clears Output
        function clearOutput() {
            outputBox.innerHTML = "";
        }

        // Helper: Clears Input
        function clearInput() {
            inputField.value = "";
        }

        // 1. Simple Alert
        function simpleAlert() {
            alert("Alert!");
            printOutput("<em>An alert box was displayed.</em>");
        }

        // 2. Print My Name
        function printMyName() {
            let name = inputField.value.trim();
            if (!name) {
                name = prompt("Please enter your name:").trim(); 
            }
            printOutput(`My name is <strong>${name}</strong>.`);
        }

        // 3. Print All Cities
        function printAllCities() {
            let listHtml = "<strong>List of Cities:</strong><br><br>";
            
            // Using a for loop as per the chapter topic
            for (let i = 0; i < cities.length; i++) {
                listHtml += `${i + 1}) ${cities[i]} <br>`;
            }
            
            printOutput(listHtml);
        }

        // 4. Add Your City In List
        function addCity() {
            let newCity = inputField.value.trim();
            
            if (!newCity) {
                printOutput("<span class='text-danger'>Please type a city name in the Input box to add it.</span>");
                return;
            }
            
            // Format city name nicely (e.g., "new york" -> "New York")
            newCity = newCity.charAt(0).toUpperCase() + newCity.slice(1).toLowerCase();
            
            // Add to array
            cities.push(newCity);
            
            printOutput(`<strong>${newCity}</strong> has been successfully added to the array! <br><br>Click "Print All Cities" to see the updated list.`);
            clearInput(); // Clear the input field after successful addition
        }

     // 5. Generate Table of Cities
function generateTable() {
    // Check if the array is empty just in case
    if (cities.length === 0) {
        printOutput("<span class='text-danger'>The city list is empty. Add some cities first!</span>");
        return;
    }

    // Start building an HTML table using Bootstrap classes for styling
    let tableHtml = `
        <table class="table table-sm table-bordered table-striped mt-3 bg-white text-start">
            <thead class="table-dark">
                <tr>
                    <th style="width: 30%;">Array Index</th>
                    <th>City Name</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // Use a for loop to go through the cities array
    for (let i = 0; i < cities.length; i++) {
        tableHtml += `
            <tr>
                <td>${i}</td>
                <td>${cities[i]}</td>
            </tr>
        `;
    }
    
    // Close the table tags
    tableHtml += `
            </tbody>
        </table>
    `;
    
    // Print the final table to the output box
    printOutput(`<strong>City Index Table:</strong>${tableHtml}`);
    clearInput();
}
