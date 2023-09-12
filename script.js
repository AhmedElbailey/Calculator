const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string).toString();
    } else if (e.target.innerHTML == "AC") {
      string = "";
    } else if (e.target.innerHTML == "DEL") {
      console.log(string, typeof string);
      string = string.substring(0, string.length - 1);
    } else {
      string += e.target.innerHTML;
    }

    display.value = string;
  });
});
