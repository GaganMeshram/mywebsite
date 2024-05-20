let value = "0123456789ABCDEF";
let hex = value.split("");

// generate #f1f1f1 value from the loop
let btn = document.getElementById("btn");
const color = document.querySelector(".color");

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber()];
    }
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
});

