let multiplier = 1.0;
let crashed = false;
let cashedOut = false;
let crashPoint = Math.random() * 10 + 1.2;

setInterval(() => {
  if (crashed || cashedOut) return;

  multiplier += multiplier * 0.02;
  document.getElementById("multiplier").innerText =
    multiplier.toFixed(2) + "x";

  if (multiplier >= crashPoint) {
    crashed = true;
    document.getElementById("result").innerText = "CRASH 💥";
  }
}, 100);

function cashOut() {
  if (crashed) return;
  cashedOut = true;
  document.getElementById("result").innerText =
    "CASHED OUT AT " + multiplier.toFixed(2) + "x";
}
