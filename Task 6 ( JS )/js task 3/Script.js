let array = [10, 20, 30, 40, 50];

    // Scenario 1: Find Next Number in Array
    function findNextInArray() {
        let num = parseFloat(document.getElementById('numberInputArray').value);
        let index = array.indexOf(num);

        if (index !== -1 && index < array.length - 1) {
            document.getElementById('resultArray').innerText = "Next number in array is: " + array[index + 1];
        } else {
            document.getElementById('resultArray').innerText = "Number not found or no next number available.";
        }
    }

    // Scenario 2: Find Next Number from User Input
    function findNextNumber() {
        let input = parseFloat(document.getElementById('numberInputSingle').value);

        if (!isNaN(input)) {
            document.getElementById('resultSingle').innerText = "Next number is: " + (input + 1);
        } else {
            document.getElementById('resultSingle').innerText = "Invalid input. Please enter a number.";
        }
    }