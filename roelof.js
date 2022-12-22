const seconds_top = document.querySelector('.seconds').querySelector('.top');
const seconds_bottom = document.querySelector('.seconds').querySelector('.bottom') 

console.log(seconds_top); 

// Stop Date

stopDate = new Date("2022-12-25"); 

setInterval( () => {
    //currentTime
    const today = new Date(); 
    // Difference between the current time and the stopTime 
    const duration = stopDate - today; 
    // convert the difference in seconds
    const seconds = Math.floor(duration % (1000 * 60)/1000)
    // Change the seconds on the screen 
    seconds_top.textContent = seconds.toString().padStart(2,"0");
    seconds_bottom.textContent = seconds.toString().padStart(2,"0");
}, 1000
)

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
