// Emit an exit event
setTimeout(process.exit, 4 * 1000);

// Respond to the exit event
process.on('exit', () => {
    console.log("Goodbye!");
});

console.log('Hello!')
// Timers start here