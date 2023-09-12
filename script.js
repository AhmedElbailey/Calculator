const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.innerHTML == "=") {
      string = eval(string).toString();
    } else if (e.target.innerHTML == "AC") {
      string = "";
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
    } else {
      string += e.target.innerHTML;
    }

    display.value = string;
  });
});

window.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key == "=" || key == "Enter") {
    string = eval(string).toString();
  } else if (key == "Delete") {
    string = "";
  } else if (key == "Backspace") {
    string = string.substring(0, string.length - 1);
  } else if (
    Number.isInteger(+key) ||
    key == "+" ||
    key == "-" ||
    key == "*" ||
    key == "/" ||
    key == "%" ||
    key == "."
  ) {
    string += key;
  }

  display.value = string;
});
