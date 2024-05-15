const colors = [
  "Black",
  "Silver",
  "Gray",
  "White",
  "Maroon",
  "Red",
  "Purple",
  "Fuchsia",
  "Green",
  "Lime",
  "Olive",
  "Yellow",
  "Navy",
  "Blue",
  "Teal",
  "Aqua",
];
let btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // get randaom number from 0 to lenght of array
  // to show colors[randomNumber]
  let randomNumber = getRandomNumber();
  //   console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  let number = Math.floor(Math.random() * colors.length);
  return number;
}
