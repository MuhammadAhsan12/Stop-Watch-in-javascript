
var min = 0;
var sec = 0;
var milisec = 0;

var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var miliSecHeading = document.getElementById('m-sec');

var Interval;

function timer() {
    milisec++;
    miliSecHeading.innerHTML = "0" + milisec;

    if (milisec >= 10) {
        miliSecHeading.innerHTML = milisec;
    }

    if (milisec >= 100) {
        miliSecHeading.innerHTML = milisec;
        sec++;
        secHeading.innerHTML = "0" + sec;

        if (sec >= 10) {
            secHeading.innerHTML = sec;
        }
        
        milisec = "0" + 0;

        if (sec >= 60) {
            min++;
            minHeading.innerHTML = "0" + min;
            if (min >= 10) {
                minHeading.innerHTML = min;
            }
            sec = "0" + 0;
        }
    }
}

document.getElementById("stopbutn").disabled = true;
document.getElementById("resetbutn").disabled = true;

function Start() {
    Interval = setInterval(timer, 10);
    document.getElementById("startbutn").disabled = true;
    document.getElementById("stopbutn").disabled = false;
    document.getElementById("resetbutn").disabled = false;


    // Startbtn.addEventListener('click', () => {
    //     if (minHeading.innerHTML === 0 && secHeading.innerHTML === 0 && miliSecHeading.innerHTML === 0) {
    //         Startbtn.removeAttribute('disabled');
    //     }
    // });
}

function Stop() {
    clearInterval(Interval);
    document.getElementById("startbutn").disabled = false;
    document.getElementById("stopbutn").disabled = true;
    document.getElementById("resetbutn").disabled = false;
}

function Reset() {
    min = 0;
    sec = 0;
    milisec = 0;
    minHeading.innerHTML = "0" + min;
    secHeading.innerHTML = "0" + sec;
    miliSecHeading.innerHTML = "0" + milisec;
    Stop()
    document.getElementById("startbutn").disabled = false;
    document.getElementById("stopbutn").disabled = false;
    document.getElementById("resetbutn").disabled = false;
}