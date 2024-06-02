let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let millisec = document.querySelector(".millisec");

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let vmsec = 0;
let vsec = 0;
let vmin = 0;
let interval;

function timeUpdate() {
    interval = setInterval(() => {
        vmsec++;
        if (vmsec == 100) {
            vsec++;
            vmsec = 0;
        }
        if (vsec == 60) {
            vmin++;
            vsec = 0;
        }
        
        millisec.innerText = vmsec < 10 ? "0" + vmsec : vmsec;
        sec.innerText = vsec < 10 ? "0" + vsec : vsec;
        min.innerText = vmin < 10 ? "0" + vmin : vmin;
    
    }, 10);
}

start.addEventListener("click", () => {
    if (!interval) {
        timeUpdate();
    }
});

stop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    vmsec = 0;
    vsec = 0;
    vmin = 0;
    millisec.innerText = "00";
    sec.innerText = "00";
    min.innerText = "00";
});