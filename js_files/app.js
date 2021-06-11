setInterval(setClock, 1000);
/* calls setClock func after every 1000 milliseconds */

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

/* Grabbed Each hand by its data attribute above */

function setClock() {
  const currentDate = new Date();

  const hr = currentDate.getHours();
  const min = currentDate.getMinutes();
  const sec = currentDate.getSeconds();

  // for every sec second-hand rotate by 6deg
  // tot rotation of sec-hand = 6*sec;

  // for every 60sec min-hand rot by 6deg(extra)
  //  -   -     1sec   -  -    -  -   0.1deg
  // tot rotation of min-hand = 6*min + sec*0.1;

  // for every 60min hr-hand rot by 30deg
  //  -   -     1min   -  -    -  - 30/60= 0.5deg
  // tot rotation of hr-hand = 30*hr + min*0.5;

  setRotation(secondHand, sec * 6);
  setRotation(minuteHand, min * 6 + 0.1 * sec);
  setRotation(hourHand, 30 * hr + min * 0.5);
}

function setRotation(element, rotation) {
  element.style.setProperty("--rotation", rotation);
}

// setClock();
