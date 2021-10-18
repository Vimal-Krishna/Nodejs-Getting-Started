// node.exe -p "process" | grep std
//   stdout: [Getter],
//   stdin: [Getter],
//   stderr: [Getter],

// Using events to handle input:
// register an event handler

// process.stdin.on('readable', () => {
//     const chunk = process.stdin.read();
//     if (chunk !== null) {
//         process.stdout.write(chunk);
//     }
// });

// Using the builtin pipe method:
process.stdin.pipe(process.stdout);