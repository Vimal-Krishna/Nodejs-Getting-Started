function doMaint() {
    console.log('Maintenance');    
}

setInterval(
    () => {
        console.log('Hello every 3 seconds');
        doMaint();
    },
    3000
);