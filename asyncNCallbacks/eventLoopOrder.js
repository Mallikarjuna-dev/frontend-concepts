
console.log("Begin");

setTimeout(() => {
    console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Task");
});

console.log("End");

// Begin
// End
// Promise Task
// Timeout Task

// JavaScript uses event loop to handle asynchronous code.
// Call Stack — runs all synchronous code.
// The two main queues involved are:
// Microtask Queue — handles things like Promise.then(),(API calls) and runs after the stack is clear, before any setTimeout.
// Macrotask Queue — handles things like setTimeout, setInterval