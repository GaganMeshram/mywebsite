// seetitng count initial value to 0

let count = 0;

// selecting value and all the button that has .btn class

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

// applying query selector to all btn at once

function setColor(c, v) {
  if (c < 0) {
    v.style.color = "red";
  }
  if (c > 0) {
    v.style.color = "green";
  }
  if (c === 0) {
    v.style.color = "black";
  }
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    setColor(count, value);
    value.textContent = count;
  });
});
