const captcha = document.getElementById("captcha");
const inptRes = document.getElementById("res");
const btn = document.getElementById("btn");
const chars = [
  "a",
  "A",
  "b",
  "B",
  "c",
  "C",
  "d",
  "D",
  "e",
  "E",
  "f",
  "F",
  "g",
  "G",
  "h",
  "H",
  "i",
  "I",
  "j",
  "J",
  "k",
  "K",
  "l",
  "L",
  "m",
  "M",
  "n",
  "N",
  "o",
  "O",
  "p",
  "P",
  "q",
  "Q",
  "r",
  "R",
  "s",
  "S",
  "t",
  "T",
  "u",
  "U",
  "v",
  "V",
  "w",
  "W",
  "x",
  "X",
  "y",
  "Y",
  "z",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function generateCaptchaText() {
  let string = "";
  let randNum = 0;

  for (let i = 0; i < 7; i++) {
    randNum = Math.floor(Math.random() * 62);
    let numString = randNum;
    // console.log(numString);
    string = string.concat(chars[numString]);
  }
  //   console.log(string);
  captcha.textContent = string;
}

function verifyCaptcha() {
  let val = inptRes.value;
  let captchaVal = captcha.textContent;
  console.log(val);
  if (val === captchaVal) {
    alert("Correcto");
    clearInput();
    generateCaptchaText();
  } else {
    alert("incorrecto");
    clearInput();
    generateCaptchaText();
  }
}

function enableBtn() {
  btn.disabled = false;
}

function disableBtn() {
  btn.disabled = true;
}

function clearInput() {
  inptRes.value = "";
}

inptRes.addEventListener("keyup", () => {
  //   console.log(inptRes.value);
  if (inptRes.value !== "") {
    inptRes.classList.add("inputFilled");
    enableBtn();
  } else {
    inptRes.classList.remove("inputFilled");
    disableBtn();
  }
});
