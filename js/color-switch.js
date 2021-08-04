const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body')
}

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

let intervalId = null;

function onStartClick(evt) {
  intervalId = setInterval(bgcBody, 1000)
  refs.start.disabled = true;
}

function onStopClick(evt) {
  refs.body.style.backgroundColor="";
  clearInterval(intervalId)
  refs.start.disabled = false;
}

function bgcBody() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
}