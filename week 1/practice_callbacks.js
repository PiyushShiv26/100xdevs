//Create a counter in Javascript (counts down from 30 to 0)
function countDown(){
    let counter = 30;
    let interval = setInterval(() => {
        console.log(counter);
        counter--;
        if(counter < 0){
            clearInterval(interval);
        }
    }, 1000);
}

//Calculate the time it takes between a setTimeout call and the inner function actually running
function timeDifference(){
    let start = new Date();
    setTimeout(() => {
        let end = new Date();
        console.log(end - start);
    }, 2000);
}

//Create a terminal clock (HH:MM:SS)
function terminalClock(){
    setInterval(() => {
        let date = new Date();
        console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }, 1000);
}
