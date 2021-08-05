const collatz = () => {

    let n = Math.floor(Math.random() * 100);
    n = parseInt(prompt(`Input any number`));

    let m = n;
    console.log(n);

    let arr = [n];

    while (n != 1 && n > 0) {

        if (n % 2 === 0) {
            n = n / 2;
            arr.push(n);
        } else {
            n = (n * 3) + 1;
            arr.push(n);
        }

    }

    console.log(arr);
    console.log(`${m} took ${arr.length} steps to resolve to 1`)
}