let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

input1.addEventListener("input", function () {
  let f = parseFloat(input1.value);

  if (isNaN(f)) {
    result1.innerText = "";
    return;
  }

  let c = ((f - 32) * 5) / 9;
  let extraF = "";
  if (f === 32) {
    extraF = " - Freezing Point";
  }
  if (f === 212) {
    extraF = " - Boiling Point"
  }
  result1.innerHTML = c.toFixed(2) + "°C" + extraF;
});

input2.addEventListener("input", function () {
  let c = parseFloat(input2.value);

  if (isNaN(c)) {
    result2.innerText = "";
    return;
  }

  let f = (c * 9) / 5 + 32;
  let extraC = "";
  if (c === 0) {
    extraC = " - Freezing Point"
  }
  if (c === 100) {
    extraC = " - Boiling Point"
  }
  result2.innerHTML = f.toFixed(2) + "°F" + extraC;
});
