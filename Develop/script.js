const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
const date = d.getDate();
const year = d.getFullYear();
let day = days[d.getDay()];
let month = months[d.getMonth()];
let hour = d.getHours();
let minute = d.getMinutes();
let timeTwelve = hour % 12;
let aheadTime = hour +1;
// ALL ABOVE IS VARIABLE FOR THE DATE AND TIME USING BUILT IN JS FUNCTIONS.

let behindTime = hour - 1;


if(minute < 10){
    minute = "0" + minute;
}

if (hour == hour && hour <= 17 && hour >= 9){ //Checks if it is the current time withing the 8 hour time frame and make current event red.
    document.getElementById(`${hour}Save`).style.background = `red` 
    document.getElementById(`${hour}Event`).style.background = `red`
}


if (hour > 17) { //This if statement checks if it is past 5PM, if it is then it greys out everything
    for (let i = 17; i > 8; i--) {
        document.getElementById(`${(behindTime = i)}Save`).style.background = `grey` 
        document.getElementById(`${(behindTime = i)}Event`).style.background = `grey`
        
    } 
} else{ // If it is not past 5pm, then go through each item and grey them out individually
    for (let i = hour-1; i > 8; i--) {
        document.getElementById(`${(behindTime = i)}Save`).style.background = `grey` 
        document.getElementById(`${(behindTime = i)}Event`).style.background = `grey`
        
    }
}


document.getElementById("currentDay").innerHTML = `${day}, ${month} ${date}. ${year}`

if(hour == 12){ // checks if time is at noon and to now change it to PM, if it before 12 then it is AM, if it is after it is PM
    document.getElementById("timeHour").innerHTML = `It is currently ${hour}:${minute} PM`
} else if (hour > 12) {
    document.getElementById("timeHour").innerHTML = `It is currently ${timeTwelve}:${minute} PM`
} else {
    document.getElementById("timeHour").innerHTML = `It is currently ${hour}:${minute} AM`
}

//Above is all of the script for the dates to display on the page, using integrated Javascript functions for each variable of the current time.
//---------------------------------------------------------------------------------------------------------------------------------------------
//BELOW IS FUNCTIONS AND HTML VALUES.

for (let i = 9; i < 17; i++) {

    let updater = localStorage.getItem(`${i}plannerEvents`)
    document.getElementById(`${i}Event`).value = updater
}



function saveBtn(time) { // Function to change the html to update classes to change to blue once completed and to collect the input in the text box for that time.
    document.getElementById(`${time}Save`).addEventListener('click', event =>{

        if(document.getElementById(`${time}Event`).value == ''){
            console.log("ERROR: Nothing To Save.");

        } else {
            document.getElementById(`${time}Save`).innerHTML = '<li id=`${time}Save` class="btn-outline-info">Save</li>'
            console.log(document.getElementById(`${time}Event`).value);
            
            localStorage.setItem(`${time}plannerEvents`, document.getElementById(`${time}Event`).value)
            console.log(localStorage);
            





        }



    })

}

    

// BELOW IS CALLING THE FUNCTION AND INSERTING IT INTO EACH DOCUMENT ID WITH PARAMATERS OF EACH MILITARY TIME.
saveBtn(`9`);
saveBtn(`10`);
saveBtn(`11`);
saveBtn(`12`);
saveBtn(`13`);
saveBtn(`14`);
saveBtn(`15`);
saveBtn(`16`);
saveBtn(`17`);

