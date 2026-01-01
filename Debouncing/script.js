//Debouncing is a technique in JavaScript that delays running a function until the user stops triggering an event for a certain amount of time.
//Throttling is a technique in JavaScript that limits a function to run at most once every fixed time interval, even if the event happens many times.
let input = document.querySelector("input")

function Debounce(fnc , delay){
    let timer ;
    return function(...dets){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fnc(...dets)
        },delay)
    }
}

function throttling(fnc,delay){
    let lastRun = 0 ;
    return function (...dets){
        let now = Date.now();
        console.log(`
            now : ${now} , lastRun : ${lastRun} , now - lastRun : ${now - lastRun}
        `)
        if(now - lastRun >= delay){
            fnc(...dets);
            lastRun = now
        }
    }
}

function getData(e){
    console.log(e)
}

input.addEventListener("input", throttling( getData , 1000 ) );

