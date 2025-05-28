function outer() {
    let message = "Hello from closure!";

    return function inner() {
        console.log(message);
    };
}

const store = outer();
store();
