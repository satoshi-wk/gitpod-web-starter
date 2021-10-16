let omikujiButton = document.getElementById("omikuji-button");
let result = document.getElementById("result");

function omikuji() {
  // result.textContent = "結果";
  let r = Math.random();
  if (r < 0.2) {
    // 20%の確率で実行される
    result.textContent = "大吉";
    result.style.color = "red";
  } else if (r < 0.7) {
    // 50%の確率で実行される
    result.textContent = "吉";
    result.style.color = "black";
  } else {
    // 30%の確率で実行される
    result.textContent = "凶";
    result.style.color = "blue";
  }
}

omikujiButton.onclick = omikuji;

/*
let age = 26;
if (age < 18) {
  document.write("選挙権はありません");
} else if (age < 25) {
  document.write("投票に行けます");
} else {
  document.write("衆議院議員に立候補できます");
}
*/

let time = 0;
let timerId;
let timer = document.getElementById("timer");
function tick() {
  time = time + 1;
  timer.textContent = time;
  if (time % 3 == 0 || String(time).match(/3/)) {
    timer.style.color = "red";
  } else {
    timer.style.color = "black";
  }
}
function start() {
  timerId = setInterval(tick, 1000);
}
function stop() {
  clearInterval(timerId);
}
function reset() {
  time = 0;
  timer.textContent = time;
  timer.style.color = "black";
}

let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");
startButton.onclick = start;
stopButton.onclick = stop;
resetButton.onclick = reset;
