const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")

const myBirthday = "21 jan 2025";
const dynamicText = document.getElementById("dynamicText");
const initialText = "Setu";
const textToType = "Gorgeous Rahman";
let index = 0;
function typeText() {
  if (index < textToType.length) {
    dynamicText.textContent += textToType[index];
    index++;
  } else {
    clearInterval(typingInterval);
    setTimeout(() => {
      dynamicText.textContent = initialText;
      setTimeout(() => {
        index = 0;
        dynamicText.textContent = "";
        typingInterval = setInterval(typeText, 200); // Adjust typing speed here (milliseconds)
      }, 1000);
    }, 1000);
  }
}
dynamicText.textContent = initialText;
setTimeout(() => {
  dynamicText.textContent = "";
  typingInterval = setInterval(typeText, 500); // Adjust typing speed here (milliseconds)
}, 1000);

function countdown(){
    const myBithdayDate= new Date(myBirthday)
    const currentDate=new Date();

    const totalSeconds = ( myBithdayDate - currentDate) / 1000;


    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML =formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML =formatTime(seconds);

    console.log(days,hours,mins,seconds);

} 

function formatTime(time){
    return time<10 ? (`0${time}`):time
}
function showLove() {
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];
  
    modal.style.display = "block";
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }


//initial call
countdown()
setInterval(countdown,1000)
