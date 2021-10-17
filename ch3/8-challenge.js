// const timerId = setInterval(
//     () => console.log('Hello World'),
//     1000
// );

// setTimeout(
//     () => {
//         clearInterval(timerId);
//         console.log('Done');
//     },
//     6000
// );

let counter = 0;
const intervalId = setInterval(
    () => {
        console.log('Hello World');
        counter += 1;

        if (counter == 5) {
            console.log('Done');
            clearInterval(intervalId);
        }
    },
    1000
);