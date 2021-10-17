const theOneFunc = (n) => {
    console.log('Hello after ' + n + ' seconds');
};

setTimeout(theOneFunc, 4 * 1000, 4);
setTimeout(theOneFunc, 8 * 1000, 8);