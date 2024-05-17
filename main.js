let result = document.getElementById("result");
let numbers = document.querySelectorAll("button");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (numbers[i].innerHTML == "=") {
      result.value = result.value.replace(/÷/g, '/').replace(/×/g, '*');
      try {
        result.value = eval(result.value);
      } catch (e) {
        result.value = "Error";
      }
    } else {
      if (numbers[i].innerHTML == "C") {
        result.value = '';
      } else if (numbers[i].innerHTML == "←") {
        result.value = result.value.slice(0, -1);
      } else {
        result.value += numbers[i].innerHTML;
      }
    }
  });
}
