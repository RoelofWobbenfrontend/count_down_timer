const seconds_top = document.querySelector('.seconds').querySelector('.top');
const seconds_bottom = document.querySelector('.seconds').querySelector('.bottom')

const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const days = document.querySelector('.days'); 

const test = document.querySelector('.test');
console.log(test); 

stopDate = new Date("2023-01-21"); 

//  a click event zodat ik de animatie kan testen 

test.addEventListener('click', () => {
    
})


/*  for testing maar commented omdat ik animatie wil testen
let countdown = setInterval( () => {
    //currentTime
    const today = new Date();
    // Difference between the current time and the stopTime 
    const duration = Math.floor(stopDate - today);
    
    // stop the counter if the stopdate is reached
    if (duration <= 1000){
        clearInterval(countdown); 
    }

    // convert the difference in seconds
    const seconds = Math.floor(duration % (1000 * 60)/1000)
    // convert the difference in minutes
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
    // convert the difference in hours 
    const hours = Math.floor(duration % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    //convert the difference in days
    const days = Math.floor(duration / (1000 * 60 * 60 * 24))
    // Change the seconds on the screen 
    seconds_top.textContent = seconds.toString().padStart(2,"0");
    seconds_bottom.textContent = seconds.toString().padStart(2,"0");
    // Change the minutes on the screen 
    minutes_top.textContent = minutes.toString().padStart(2,"0");
    minutes_bottom.textContent = minutes.toString().padStart(2,"0");
    // Change the hours on the screen 
    hours_top.textContent = hours.toString().padStart(2,"0");
    hours_bottom.textContent = hours.toString().padStart(2,"0");
     // Change the days on the screen 
     days_top.textContent = days.toString().padStart(2,"0");
     days_bottom.textContent = days.toString().padStart(2,"0")
}, 1000
)
*/



// Todo

//  calculate the days and change the screen 
// calculate the hours and change the screen 
// calculate the minutess and change the screen 
// Stop the counter if duration is zero and change the message 

// animation 

//let distance  = christmas - now.value
//  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
//  hours.value = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
//  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
//  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
