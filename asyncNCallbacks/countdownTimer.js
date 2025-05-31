const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter countdown in seconds: ", (input) => {
    let remaining = parseInt(input, 10);
    if (isNaN(remaining) || remaining <= 0) {
        console.log("Please enter a positive number.");
        rl.close();
        return;
    }
    console.log(`Countdown started for ${remaining}s – press "s" to stop early.`);

    const intervalId = setInterval(() => {
        remaining--;
        console.log(`Remaining: ${remaining}s`);
        if (remaining === 0) {
            clearInterval(intervalId);
            console.log("Countdown Complete!");
            process.stdin.setRawMode(false);
            process.stdin.pause();
            rl.close();
        }
    }, 1000);

    setTimeout(() => {
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.on("data", (key) => {
            if (key.toString().toLowerCase() === "s") {
                clearInterval(intervalId);
                console.log("Countdown stopped by user.");
                process.stdin.setRawMode(false);
                process.stdin.pause();
                rl.close();
            }
        });
    }, 0);
});