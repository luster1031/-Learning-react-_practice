// 매 초 시간을 로그에 남김
setInterval(logClockTime, 1000);

function logClockTime() {

    var time = getClockTime();

    console.clear();    //  콜솔 지우기
    console.log(time);
}

function getClockTime() {
    
    var date = new Date();  //  현재시간

    var time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    }

    if (time.hours == 12) {
        time.ampm = "PM";
    } else if (time.hours > 12) {
        time.ampm = "PM";
        time.hours -= 12;
    }

    if (time.hours < 10) {
        time.hours = "0" + time.hours;
    }

    if (time.minutes < 10) {
        time.minutes = "0" + time.minutes;
    }

    if (time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }

    return time.hours + ":"
        + time.minutes + ":"
        + time.seconds + " "
        + time.ampm;

}