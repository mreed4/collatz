const collatz = () => {

    let n = Math.floor(Math.random() * 10000000); // Random number
    // n = parseInt(prompt(`Input any number`)); // User input

    const m = n; // Save number before it mutates

    console.log(`Initial number: ${m}`);

    let arr = [n]; // Initialize array

    while (n != 1 && n > 0) { // Ensures no infinite loop

        if (n % 2 === 0) {
            n = n / 2;
            arr.push(n);
        } else {
            n = (n * 3) + 1;
            arr.push(n);
        }

    }

    // Returns new array of the last digits in each number in arr 
    let arr2 = arr.map(int => {
        int = int.toString();
        return parseInt(int[int.length - 1]);
    });

    console.log(arr2.reverse());
    console.log(`${m} took ${arr.length} steps to resolve to 1`)
}