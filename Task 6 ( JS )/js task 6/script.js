function getRandomArray() {
        const arrayLength = Math.floor(Math.random() * 10) + 5; // Array length between 5 and 15
        const randomArray = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 100)); // Random numbers between 0-99
        return randomArray;
    }

    function pickElements() {
        const array = getRandomArray();
        document.getElementById("generated-array").textContent = `Generated Array: [${array.join(", ")}]`;

        const firstElement = array[0];
        const lastElement = array[array.length - 1];

        document.getElementById("first-element").textContent = firstElement;
        document.getElementById("last-element").textContent = lastElement;
    }