const collatz = () => {

    let n = Math.floor(Math.random() * 10);

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
}