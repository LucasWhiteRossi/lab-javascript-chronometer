  const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minUniElement.innerText = minutes[1];
  minDecElement.innerText = minutes[0];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secUniElement.innerText = seconds[1];
  secDecElement.innerText = seconds[0];
}

function printMilliseconds() {
  const miliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())
  milUniElement.innerText = miliseconds[1];
  milDecElement.innerText = miliseconds[0];
}

function printSplit(split) {
  const li = document.createElement("li");
  li.innerText = split;
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.classList.toggle("stop");
  btnLeftElement.classList.toggle("start");
  btnLeftElement.innerText = "START";
  btnRightElement.classList.toggle("reset");
  btnRightElement.classList.toggle("split");
  btnRightElement.innerText = "RESET";
}

function setSplitBtn() {
  printSplit(chronometer.split());
}

function setStartBtn() {
  chronometer.start(printTime);
  btnLeftElement.classList.toggle("stop");
  btnLeftElement.classList.toggle("start");
  btnLeftElement.innerText = "STOP";
  btnRightElement.classList.toggle("reset");
  btnRightElement.classList.toggle("split");
  btnRightElement.innerText = "SPLIT";
}

function setResetBtn() {
  chronometer.reset();
  minUniElement.innerText = 0;
  minDecElement.innerText = 0;
  secUniElement.innerText = 0;
  secDecElement.innerText = 0;
  milUniElement.innerText = 0;
  milDecElement.innerText = 0;
}

btnLeftElement.addEventListener("click", () => {
  if (btnLeftElement.innerText === "START") {
    setStartBtn();
  } else {
    setStopBtn();
  }
});


btnRightElement.addEventListener("click", () => {
  
  if (btnLeftElement.innerText === "START") {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});