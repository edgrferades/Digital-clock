let intervalId; 

const twentyFourHour = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    // hour = hour == 0? 12:hour; // dont nned this on a 24 hour clock

    hour = hour >= 9? hour : '0'+hour;
    min = min >= 9? min : '0'+min;
    sec = sec >= 9? sec : '0'+sec;

    let time = hour +' : '+ min +' : '+ sec;
    let clockE = document.getElementById('clock');
    clockE.innerHTML = time;

  }, 1000);
}

const twelveHour = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {

    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let amPM = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour == 0? 12:hour;
    
    // To append ZEROS in front of the number if it's less than 10
    hour = hour >= 9? hour : '0'+hour;
    min = min >= 9? min : '0'+min;
    sec = sec >= 9? sec : '0'+sec;

    let time = hour +' : '+ min +' : '+ sec + ' : ' + amPM;
    let clockE = document.getElementById('clock');
    clockE.innerHTML = time;

  }, 1000);
}

const reset = () => {
  if (intervalId) {
    clearInterval(intervalId);
    let clockE = document.getElementById('clock');
    clockE.innerHTML = 'Click either button to start the clock';
  }
  else {
    let clockE = document.getElementById('clock');
    clockE.innerHTML = 'Whoops! you haven\'t started the clock yet :)';
  }
}