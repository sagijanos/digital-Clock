function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var real = document.querySelector("#real");
    minute = checkTime(minute);
    second = checkTime(second);
    hours = checkTime(hours);

    if (hours > 6 && hours <= 12) {

        real.textContent = hours + ":" + minute + ":" + second;
        real.style.color = "#decc02";
    } else if (hours > 12 && hours <= 24) {
        real.textContent = hours + ":" + minute + ":" + second;
        real.style.color = "#457869";
        today.style.color = "#457869";

    } else {
        real.textContent = hours + ":" + minute + ":" + second;
        real.style.color = "#fff";
        today.style.color = "#fff";
    }
}
setInterval(clock, 1000);

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}




var thurs = document.querySelector("#thurstday");
var fri = document.querySelector("#friday");
var mon = document.querySelector("#monday");
var tues = document.querySelector("#tuesday");
var wednes = document.querySelector("#wednesday");
var satur = document.querySelector("#saturday");
var sun = document.querySelector("#sunday");

var days;

switch (new Date().getDay()) {
    case 0:
        days = "Sunday"
        sun.style.display = "block";
        break;
        
    case 1:
        days = "Monday";
        mon.style.display = "block";
        break;
        
    case 2:
        days = "Tuesday";
         tues.style.display = "block";
        break;
    case 3:
        days = "Wednesday";
         wednes.style.display = "block";
        break;
    case 4:
        days= "Thursday";
        thurs.style.display = "block";
        break;
    case 5:
        days = "Friday";
        fri.style.display = "block";
      
        break;
    case 6:
        days = "Saturday";
        satur.style.display = "block";
}


var months = ['Januar', 'Februar', 'Marcius', 'Aprilis', 'Majus', 'Junius', 'Julius', 'Augustus', 'September', 'Oktober', 'November', 'December']


setInterval(function () {
    var today = document.querySelector("#today");

    


    today.textContent = days + ', ' + new Date().getDate() + '.' + ' ' + months[new Date().getMonth()] + ', ' + new Date().getFullYear();

}, 1000);


function thursDay(){
            if(days === "Thursday"){
                mon.style.display = "block";
                } else{
                   mon.style.display = "none"; 
                }
        }

function friDay(){
            if(days === "Friday"){
                fri.style.display = "block";
                } else{
                   fri.style.display = "none"; 
                }
        }

function monDay(){
            if(days === "Monday"){
                mon.style.display = "block";
                } else{
                   mon.style.display = "none"; 
                }
        }

