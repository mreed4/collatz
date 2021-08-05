const collatz = () => {
    // Function goes here
    let n = Math.floor(Math.random() * 10);
    console.log(`Initial number: ${n}`);

    while (n != 1 && n > 0) {
        if (n % 2 === 0) {
            n = n / 2;
            console.log(n);
        } else {
            n = (n * 3) + 1;
            console.log(n);
        }
    }
}