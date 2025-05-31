function timer(duration, onComplete) {
    setTimeout(() => {
        let message = `Timer of ${duration}ms finished`;
        onComplete(message);
    }, duration);
};

timer(2000,(message) => {
    console.log(message);
});