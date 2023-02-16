console.log("Hello World!");

const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "ac") {
      display.value = " ";
      console.log("AC");
    } else if (button.id == "=") {
      display.value = eval(display.value);
      console.log("=");
    } else if (button.id == "de") {
      display.value = display.value.slice(0, -1);
      console.log("de");
    } else {
      display.value += button.id;
      console.log(display.value);
    }
  });
});
