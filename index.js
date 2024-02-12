let count = 0;
let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEL.textContent = count;
}

function save() {
  let mySaveCount = count + " - ";
  saveEl.textContent += mySaveCount;
  count = 0;
  countEL.textContent = count;
}
